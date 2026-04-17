@echo off
chcp 65001 > nul
echo ========================================
echo   PDF转JSON转换脚本
echo ========================================
echo.

echo [1/2] 正在安装依赖...
npm install pdf-parse --save

if %errorlevel% neq 0 (
    echo.
    echo 安装失败，请检查npm是否正常工作
    pause
    exit /b 1
)

echo.
echo [2/2] 正在转换PDF到JSON...
node scripts/convertPdfToJson.js

if %errorlevel% neq 0 (
    echo.
    echo 转换失败，请检查PDF文件是否存在
    pause
    exit /b 1
)

echo.
echo ========================================
echo   转换完成！
echo ========================================
echo.
echo 接下来请运行以下命令更新题库：
echo   npm run build
echo.
pause