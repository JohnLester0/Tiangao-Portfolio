@echo off
REM Comprehensive Git Diagnostics and Fix Script

echo.
echo ========================================
echo Git Diagnostics & Upload Helper
echo ========================================
echo.

REM Test 1: Git Installation
echo [TEST 1] Checking Git Installation...
git --version
if errorlevel 1 (
  echo ERROR: Git not found!
  pause
  exit /b 1
)
echo PASS: Git is installed
echo.

REM Test 2: Git Configuration
echo [TEST 2] Checking Git Configuration...
echo.
git config --global user.name
if errorlevel 1 (
  echo WARNING: User name not configured
  echo Run: git config --global user.name "John Lester"
)
git config --global user.email
if errorlevel 1 (
  echo WARNING: User email not configured
  echo Run: git config --global user.email "johnlestertiangao@gmail.com"
)
echo.

REM Test 3: Repository Status
echo [TEST 3] Checking Repository...
if not exist .git (
  echo INFO: No git repository found. Initializing...
  git init
)
git status
echo.

REM Test 4: Current Remote
echo [TEST 4] Checking Remote Configuration...
git remote -v
echo.

REM Test 5: Credential Helper
echo [TEST 5] Checking Credential Helper...
git config --global credential.helper
if errorlevel 1 (
  echo WARNING: No credential helper configured
  echo Setting up Windows Credential Manager...
  git config --global credential.helper wincred
  echo INFO: Set credential helper to: wincred
)
echo.

REM Now attempt the upload
echo [UPLOAD] Starting upload process...
echo.

REM Remove any existing remote
git remote remove origin 2>nul

REM Add the correct remote
git remote add origin https://github.com/JohnLester0/Portfolio-Tiangao.git
echo INFO: Remote added

REM Ensure we're on main branch
git branch -M main
echo INFO: Using main branch

REM Add all files
git add .
echo INFO: Files added

REM Check for changes
git status --porcelain >nul 2>&1
if errorlevel 1 goto skip_commit

setlocal enabledelayedexpansion
for /f %%i in ('git status --porcelain ^| find /c /v ""') do set count=%%i
if !count! gtr 0 (
  echo INFO: Found changes. Creating commit...
  git commit -m "Portfolio update from local machine"
  if errorlevel 1 (
    echo WARNING: Commit may have failed
  )
) else (
  echo INFO: No new changes to commit
)
endlocal

:skip_commit

REM Push with detailed output
echo.
echo [PUSH] Attempting to push to GitHub...
echo Repository: https://github.com/JohnLester0/Portfolio-Tiangao
echo.

REM First, fetch to ensure we have latest
echo INFO: Fetching latest from GitHub...
git fetch origin 2>&1
echo.

REM Now push
echo INFO: Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
  echo.
  echo ERROR: Push failed!
  echo.
  echo ========== TROUBLESHOOTING ==========
  echo.
  echo Try these solutions:
  echo.
  echo 1. Verify you have access:
  echo    - Go to https://github.com/JohnLester0/Portfolio-Tiangao
  echo    - Make sure you can see it (not 404)
  echo.
  echo 2. Check your credentials:
  echo    - Delete stored credentials: credential-manager-ui.exe
  echo    - Search for GitHub in Windows Credential Manager
  echo    - Remove any GitHub credentials
  echo    - Try push again (will prompt for password)
  echo.
  echo 3. Use Personal Access Token:
  echo    - Go to GitHub Settings ^> Developer Settings ^> Personal Access Tokens
  echo    - Create a new token with 'repo' scope
  echo    - Use token as password when prompted
  echo.
  echo 4. Check SSH setup (alternative):
  echo    - Run: ssh -T git@github.com
  echo    - If works, change remote to:
  echo    - git remote set-url origin git@github.com:JohnLester0/Portfolio-Tiangao.git
  echo.
  echo 5. Manual verification:
  echo    - Run: git remote -v
  echo    - Should show: origin  https://github.com/JohnLester0/Portfolio-Tiangao.git
  echo.
  pause
  exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Upload Complete
echo ========================================
echo Repository: https://github.com/JohnLester0/Portfolio-Tiangao
echo.
pause
