@echo off
REM Comprehensive GitHub upload script for Portfolio-Tiangao
REM Run this from the project root directory

setlocal enabledelayedexpansion

echo.
echo ========================================
echo GitHub Upload Helper
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
  echo ERROR: Git is not installed or not in PATH
  echo Please install Git from: https://git-scm.com/download/win
  pause
  exit /b 1
)

echo [1/6] Git found. Checking configuration...
git config --global user.name >nul 2>&1
if errorlevel 1 (
  echo WARNING: Git user.name not configured
  echo Please run: git config --global user.name "Your Name"
  pause
  exit /b 1
)

git config --global user.email >nul 2>&1
if errorlevel 1 (
  echo WARNING: Git user.email not configured
  echo Please run: git config --global user.email "your@email.com"
  pause
  exit /b 1
)

echo [2/6] Initializing repository...
if not exist .git (
  git init
  echo Repository initialized.
) else (
  echo Repository already initialized.
)

echo [3/6] Adding all files...
git add .
if errorlevel 1 (
  echo ERROR: Failed to add files
  pause
  exit /b 1
)

echo [4/6] Checking for changes...
git status --porcelain >temp_status.txt
for /f %%A in ('find /c /v "" ^< temp_status.txt') do set lines=%%A
del temp_status.txt

if !lines! equ 0 (
  echo No changes to commit.
) else (
  echo Found !lines! changed files. Committing...
  git commit -m "Portfolio update - %date% %time%"
  if errorlevel 1 (
    echo ERROR: Failed to commit
    pause
    exit /b 1
  )
)

echo [5/6] Setting up GitHub remote...
git branch -M main 2>nul
git remote remove origin 2>nul
git remote add origin https://github.com/JohnLester0/Portfolio-Tiangao.git

echo [6/6] Pushing to GitHub...
git push -u origin main
if errorlevel 1 (
  echo.
  echo ERROR: Push failed!
  echo.
  echo Possible solutions:
  echo 1. Check your network connection
  echo 2. Verify repository exists: https://github.com/JohnLester0/Portfolio-Tiangao
  echo 3. Ensure you have push access to the repository
  echo 4. Try authenticating: git config --global credential.helper wincred
  echo.
  pause
  exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Portfolio uploaded to GitHub
echo ========================================
echo Repository: https://github.com/JohnLester0/Portfolio-Tiangao
echo.
pause
