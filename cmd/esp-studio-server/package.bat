@echo off
"C:\\Program Files\\Go\\bin\\go.exe" build -ldflags "-s -w" -o ../../artifacts/esp-studio-server-windows/esp.exe .

if exist "%ProgramFiles(x86)%\WinRAR\WinRAR.exe" (
    echo "Using x86"
    
    "%ProgramFiles(x86)%\WinRAR\WinRAR.exe" a -IBCK -afzip -cfg- -ed -ep1 -k -m5 -r -tl ^
    "-sfx%ProgramFiles(x86)%\WinRAR\Zip.sfx" "-z.\winrar-config.txt" ^
    "..\..\artifacts\esp-studio-server-windows\esp-studio-server_latest_windows.exe" ^
    "..\..\artifacts\esp-studio-server-windows\esp.exe"
) else (
    if exist "%ProgramFiles%\WinRAR\WinRAR.exe" (
        echo "Using non x86"
        
        "%ProgramFiles%\WinRAR\WinRAR.exe" a -IBCK -afzip -cfg- -ed -ep1 -k -m5 -r -tl ^
        "-sfx%ProgramFiles%\WinRAR\Zip.sfx" "-z.\winrar-config.txt" ^
        "..\..\artifacts/esp-studio-server-windows/esp-studio-server_latest_windows.exe" ^
        "..\..\artifacts/esp-studio-server-windows/esp.exe" ^
    ) else (
        echo "Found nothing"
    )
)
