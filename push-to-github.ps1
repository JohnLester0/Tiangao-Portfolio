# Run this from the project root: C:\Users\Admin\Documents\Portfolio1
# It initializes git, adds files, commits, sets the remote, and pushes to GitHub.

cd $PSScriptRoot

if (-not (Test-Path .git)) {
  git init
}

git add .

$changes = git status --porcelain
if (-not [string]::IsNullOrWhiteSpace($changes)) {
  git commit -m "Initial portfolio commit"
} else {
  Write-Host "No changes to commit."
}

git branch -M main

git remote remove origin 2>$null

git remote add origin https://github.com/JohnLester0/Tiangao---Portfolio.git

try {
  git push -u origin main
} catch {
  Write-Host "Push failed. Please check your network and repository permissions."
  exit 1
}
