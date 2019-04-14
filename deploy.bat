@echo off
call npm run build
xcopy /s dist\* ..\kispi.github.io /Y
cd c:\dev\kispi.github.io
git add .
git commit -m "update"
git push
cd c:\dev\kispi