# Comprehensive GitHub upload script for Portfolio-Tiangao
# Run this from the project root: C:\Users\Admin\Documents\Portfolio1

param(
  [switch]$Force
)

$ErrorActionPreference = "Continue"
$repo = "https://github.com/JohnLester0/Portfolio-Tiangao.git"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "GitHub Upload Helper" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Check if git is installed
try {
  $gitVersion = git --version
  Write-Host "[1/6] Git found: $gitVersion" -ForegroundColor Green
} catch {
  Write-Host "[ERROR] Git is not installed." -ForegroundColor Red
  Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
  exit 1
}

# Check git configuration
$gitUser = git config --global user.name 2>$null
$gitEmail = git config --global user.email 2>$null

if ([string]::IsNullOrWhiteSpace($gitUser) -or [string]::IsNullOrWhiteSpace($gitEmail)) {
  Write-Host "[WARNING] Git not fully configured" -ForegroundColor Yellow
  Write-Host "Run these commands:" -ForegroundColor Yellow
  Write-Host "  git config --global user.name `"Your Name`"" -ForegroundColor Gray
  Write-Host "  git config --global user.email `"your@email.com`"" -ForegroundColor Gray
  exit 1
}

Write-Host "[2/6] Git configuration valid" -ForegroundColor Green
Write-Host "  User: $gitUser <$gitEmail>" -ForegroundColor Gray

# Initialize repo if needed
Write-Host "[3/6] Checking repository..." -ForegroundColor Cyan
if (-not (Test-Path .git)) {
  git init
  Write-Host "  Repository initialized." -ForegroundColor Green
} else {
  Write-Host "  Repository already exists." -ForegroundColor Gray
}

# Add files
Write-Host "[4/6] Adding files..." -ForegroundColor Cyan
git add .
if ($LASTEXITCODE -ne 0) {
  Write-Host "  [ERROR] Failed to add files" -ForegroundColor Red
  exit 1
}

# Check for changes
$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
  Write-Host "  No changes to commit (working tree clean)" -ForegroundColor Gray
} else {
  Write-Host "  Found changes. Committing..." -ForegroundColor Green
  $commitMsg = "Portfolio update - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
  git commit -m "$commitMsg"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "  [ERROR] Failed to commit" -ForegroundColor Red
    exit 1
  }
}

# Setup remote
Write-Host "[5/6] Setting up remote..." -ForegroundColor Cyan
git branch -M main 2>$null
git remote remove origin 2>$null
git remote add origin $repo
Write-Host "  Remote set to: $repo" -ForegroundColor Gray

# Push to GitHub
Write-Host "[6/6] Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -ne 0) {
  Write-Host "`n[ERROR] Push failed!" -ForegroundColor Red
  Write-Host "`nPossible solutions:" -ForegroundColor Yellow
  Write-Host "  1. Check your network connection" -ForegroundColor Gray
  Write-Host "  2. Verify the repo exists: https://github.com/JohnLester0/Portfolio-Tiangao" -ForegroundColor Gray
  Write-Host "  3. Ensure you have push access" -ForegroundColor Gray
  Write-Host "  4. Try: git config --global credential.helper wincred" -ForegroundColor Gray
  exit 1
}

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "SUCCESS! Portfolio uploaded to GitHub" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "Repository: https://github.com/JohnLester0/Portfolio-Tiangao`n" -ForegroundColor Cyan
