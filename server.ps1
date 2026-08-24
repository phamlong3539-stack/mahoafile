$port = 8080
$prefix = "http://localhost:$port/"
$folder = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "CipherVault Pro Server running robustly at $prefix"

$mimeMap = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".zip"  = "application/zip"
    ".enc"  = "application/octet-stream"
    ".key"  = "application/octet-stream"
    ".pem"  = "application/x-pem-file"
}

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $path = $request.Url.LocalPath
            if ($path -eq "/" -or [string]::IsNullOrWhiteSpace($path)) {
                $path = "/index.html"
            }

            $localFilePath = Join-Path $folder $path.TrimStart('/').Replace('/', '\')

            if (Test-Path $localFilePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localFilePath).ToLower()
                $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }
                
                $bytes = [System.IO.File]::ReadAllBytes($localFilePath)
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                
                try {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                    $response.StatusCode = 200
                } catch {
                    # Client disconnected before write completed - ignore
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                try {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                } catch {}
            }
            try {
                $response.Close()
            } catch {}
        } catch {
            # Catch transient listener errors and keep server running
        }
    }
} finally {
    try { $listener.Stop() } catch {}
}
