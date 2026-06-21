# Installe le portfolio hors OneDrive (evite les erreurs npm)
$source = "C:\Users\oki\OneDrive\Desktop\Portfolio"
$dest   = "C:\dev\Portfolio"

Write-Host ">> Copie du projet vers $dest ..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $dest | Out-Null

robocopy $source $dest /E /XD node_modules .next /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null

Set-Location $dest

if (Test-Path node_modules) {
    Write-Host ">> Suppression de node_modules corrompu ..." -ForegroundColor Yellow
    cmd /c "rmdir /s /q node_modules"
}

Write-Host ">> Installation des dependances (peut prendre 2-3 min) ..." -ForegroundColor Cyan
npm install --no-audit --no-fund --cache "C:\Temp\npm-cache-portfolio"

if (Test-Path ".\node_modules\.bin\next.cmd") {
    Write-Host ""
    Write-Host "OK - Installation reussie !" -ForegroundColor Green
    Write-Host "Lance le serveur avec :" -ForegroundColor Green
    Write-Host "  cd C:\dev\Portfolio" -ForegroundColor White
    Write-Host "  npm run dev" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "Echec - verifie que OneDrive est en pause et relance ce script." -ForegroundColor Red
}
