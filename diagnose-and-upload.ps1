#!/usr/bin/env pwsh
# Comprehensive Git Diagnostics and Upload Helper

param(
  [switch]$SkipDiagnostics,
  [switch]$Force
)

$repo = "https://github.com/JohnLester0/Portfolio-Tiangao.git"
$repoDisplay = "https://github.com/JohnLester0/Portfolio-Tiangao"

Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
Write-Host "Git Diagnostics & Upload Helper" -ForegroundColor Cyan
Write-Host ("=" * 50) -ForegroundColor Cyan

if (-not $SkipDiagnostics) {
  # Test 1: Git Installation
  Write-Host "`n[TEST 1] Checking Git Installation..." -ForegroundColor Yellow
  try {
    $gitVersion = & git --version 2>&1
    Write-Host "PASS: $gitVersion" -ForegroundColor Green
  } catch {
    Write-Host "ERROR: Git not found!" -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
  }

  # Test 2: Git Configuration
  Write-Host "`n[TEST 2] Checking Git Configuration..." -ForegroundColor Yellow
  $gitUser = & git config --global user.name 2>$null
  $gitEmail = & git config --global user.email 2>$null
  
  if ([string]::IsNullOrWhiteSpace($gitUser)) {
    Write-Host "WARNING: User name not configured" -ForegroundColor Red
    Write-Host "Run: git config --global user.name `"John Lester`"" -ForegroundColor Gray
  } else {
    Write-Host "User: $gitUser" -ForegroundColor Green
  }
  
  if ([string]::IsNullOrWhiteSpace($gitEmail)) {
    Write-Host "WARNING: User email not configured" -ForegroundColor Red
    Write-Host "Run: git config --global user.email `"johnlestertiangao@gmail.com`"" -ForegroundColor Gray
  } else {
    Write-Host "Email: $gitEmail" -ForegroundColor Green
  }

  # Test 3: Repository Status
  Write-Host "`n[TEST 3] Checking Repository..." -ForegroundColor Yellow
  if (-not (Test-Path .git)) {
    Write-Host "INFO: No git repository found. Initializing..." -ForegroundColor Yellow
    & git init
  } else {
    Write-Host "Repository exists" -ForegroundColor Green
  }
  & git status --short 2>$null | Select-Object -First 10

  # Test 4: Current Remote
  Write-Host "`n[TEST 4] Checking Remote Configuration..." -ForegroundColor Yellow
  $remotes = & git remote -v 2>$null
  if ([string]::IsNullOrWhiteSpace($remotes)) {
    Write-Host "No remote configured yet" -ForegroundColor Gray
  } else {
    Write-Host $remotes -ForegroundColor Gray
  }

  # Test 5: Credential Helper
  Write-Host "`n[TEST 5] Checking Credential Helper..." -ForegroundColor Yellow
  $credHelper = & git config --global credential.helper 2>$null
  if ([string]::IsNullOrWhiteSpace($credHelper)) {
    Write-Host "WARNING: No credential helper configured" -ForegroundColor Yellow
    Write-Host "Setting up Windows Credential Manager..." -ForegroundColor Gray
    & git config --global credential.helper wincred
    Write-Host "SUCCESS: Credential helper set to 'wincred'" -ForegroundColor Green
  } else {
    Write-Host "Credential helper: $credHelper" -ForegroundColor Green
  }
}

# Now attempt the upload
Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
Write-Host "UPLOAD PROCESS" -ForegroundColor Cyan
Write-Host ("=" * 50) -ForegroundColor Cyan

Write-Host "`n[STEP 1] Configuring remote..." -ForegroundColor Yellow
& git remote remove origin 2>$null
& git remote add origin $repo
Write-Host "Remote configured: $repoDisplay" -ForegroundColor Green

Write-Host "`n[STEP 2] Setting branch..." -ForegroundColor Yellow
& git branch -M main 2>$null
Write-Host "Branch: main" -ForegroundColor Green

Write-Host "`n[STEP 3] Adding files..." -ForegroundColor Yellow
& git add .
Write-Host "Files added" -ForegroundColor Green

Write-Host "`n[STEP 4] Checking for changes..." -ForegroundColor Yellow
$status = & git status --porcelain 2>$null
if ([string]::IsNullOrWhiteSpace($status)) {
  Write-Host "No changes to commit (working tree clean)" -ForegroundColor Gray
} else {
  Write-Host "Creating commit..." -ForegroundColor Yellow
  $msg = "Portfolio update - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
  & git commit -m $msg
  if ($LASTEXITCODE -eq 0) {
    Write-Host "Commit created successfully" -ForegroundColor Green
  } else {
    Write-Host "WARNING: Commit may have failed" -ForegroundColor Yellow
  }
}

Write-Host "`n[STEP 5] Fetching from GitHub..." -ForegroundColor Yellow
& git fetch origin 2>&1 | Select-Object -First 5

Write-Host "`n[STEP 6] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "This may prompt you for credentials..." -ForegroundColor Gray
Write-Host ""

& git push -u origin main

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host ("=" * 50) -ForegroundColor Green
  Write-Host "SUCCESS! Upload Complete" -ForegroundColor Green
  Write-Host ("=" * 50) -ForegroundColor Green
  Write-Host "Repository: $repoDisplay" -ForegroundColor Cyan
  Write-Host ""
} else {
  Write-Host ""
  Write-Host ("=" * 50) -ForegroundColor Red
  Write-Host "ERROR: Push Failed" -ForegroundColor Red
  Write-Host ("=" * 50) -ForegroundColor Red
  Write-Host ""
  
  Write-Host "TROUBLESHOOTING STEPS:" -ForegroundColor Yellow
  Write-Host ""
  Write-Host "1. VERIFY REPOSITORY ACCESS:" -ForegroundColor Cyan
  Write-Host "   - Open: $repoDisplay" -ForegroundColor Gray
  Write-Host "   - You should see the repository (not 404 error)" -ForegroundColor Gray
  Write-Host ""
  
  Write-Host "2. CLEAR OLD CREDENTIALS:" -ForegroundColor Cyan
  Write-Host "   - Open Windows: Settings > Accounts > Credential Manager" -ForegroundColor Gray
  Write-Host "   - Go to: Windows Credentials" -ForegroundColor Gray
  Write-Host "   - Find and remove any GitHub entries" -ForegroundColor Gray
  Write-Host "   - Try upload again (you'll be prompted for password)" -ForegroundColor Gray
  Write-Host ""
  
  Write-Host "3. VERIFY GIT CONFIG:" -ForegroundColor Cyan
  Write-Host "   Run in PowerShell:" -ForegroundColor Gray
  Write-Host "     git config --global user.name `"John Lester`"" -ForegroundColor Gray
  Write-Host "     git config --global user.email `"johnlestertiangao@gmail.com`"" -ForegroundColor Gray
  Write-Host ""
  
  Write-Host "4. USE PERSONAL ACCESS TOKEN:" -ForegroundColor Cyan
  Write-Host "   - Go to: https://github.com/settings/tokens" -ForegroundColor Gray
  Write-Host "   - Generate new token with 'repo' scope" -ForegroundColor Gray
  Write-Host "   - Use token as password when prompted" -ForegroundColor Gray
  Write-Host ""
  
  Write-Host "5. CHECK REMOTE URL:" -ForegroundColor Cyan
  Write-Host "   Run: git remote -v" -ForegroundColor Gray
  Write-Host "   Should show: $repo" -ForegroundColor Gray
  Write-Host ""
}

Write-Host ""
