param(
    [string]$OutDir = "."
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   Antigravity Auto Accept (中文汉化版)   " -ForegroundColor Cyan
Write-Host "            自动编译打包脚本              " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$scriptRoot = (Resolve-Path "$PSScriptRoot\..").Path
Push-Location $scriptRoot

try {
    Write-Host "`n[1/3] 检查构建环境与工具链..." -ForegroundColor Yellow
    npm.cmd --version | Out-Null
    Write-Host "[OK] 检测到 npm 工具可用" -ForegroundColor Green

    Write-Host "`n[2/3] 执行 esbuild 打包编译..." -ForegroundColor Yellow
    npm.cmd run compile
    if ($LASTEXITCODE -ne 0) {
        throw "编译失败，请检查代码或依赖。"
    }
    Write-Host "[OK] 插件编译完成: dist/extension.js" -ForegroundColor Green

    Write-Host "`n[3/3] 打包生成 VSIX 插件扩展安装包..." -ForegroundColor Yellow
    npm.cmd run package
    if ($LASTEXITCODE -ne 0) {
        throw "打包失败，请检查 vsce 设置。"
    }

    $vsixFiles = Get-ChildItem -Path "." -Filter "*.vsix" | Sort-Object LastWriteTime -Descending
    if ($vsixFiles.Count -gt 0) {
        $latest = $vsixFiles[0]
        Write-Host "`n==========================================" -ForegroundColor Green
        Write-Host "[OK] 打包成功！" -ForegroundColor Green
        Write-Host "生成文件: $($latest.FullName)" -ForegroundColor White
        Write-Host "文件大小: $([math]::Round($latest.Length / 1KB, 2)) KB" -ForegroundColor White
        Write-Host "安装方法: 在 VS Code / Antigravity 插件面板中点击右上角 '...' 选择 '从 VSIX 安装 (Install from VSIX)'" -ForegroundColor Cyan
        Write-Host "==========================================" -ForegroundColor Green
    }
} finally {
    Pop-Location
}
