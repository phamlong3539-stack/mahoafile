# 🛡️ CipherVault Pro - Cryptographic Web Suite (AES-256 & RSA-4096)

Ứng dụng web mật mã học chuyên nghiệp và bảo mật dữ liệu an toàn chạy 100% Client-Side trong RAM trình duyệt (Zero-Knowledge Architecture).

---

## ✨ Tính năng nổi bật

1. **📁 Mã Hóa & Giải Mã Tệp Tin (File Crypt)**:
   - Thuật toán chuẩn quân sự: **AES-256-GCM** kết hợp **PBKDF2-HMAC-SHA256** (100,000 iterations).
   - Xác thực đa tầng: Hỗ trợ Master Password hoặc Tệp Khóa nhị phân 256-bit (`.key`).
   - Tải về theo lô hoặc nén toàn bộ thành file `.zip`.

2. **💬 Văn Bản Bí Mật (Secret Text)**:
   - Mã hóa tin nhắn thành chuỗi Base64 / Hex an toàn.

3. **🔑 RSA-4096 Keypair Studio & Asymmetric Crypto**:
   - Sinh cặp khóa Public / Private Key chuẩn PKCS#8 & SPKI PEM.
   - Mã hóa lai (Hybrid RSA + AES).

4. **🖼️ Giấu Tin Vào Ảnh (LSB Image Steganography)**:
   - Nhúng dữ liệu / file mã hóa vào từng pixel ảnh PNG.

5. **🔍 Soi Mã Nhị Phân (Live Hex & Byte Inspector)**:
   - Trình soi byte trực tiếp (Offset, Hex View, ASCII).

6. **#️⃣ Hash & Checksum Verifier**:
   - Tính toán và so khớp SHA-256, SHA-512, SHA-384, SHA-1.

7. **📜 Nhật Ký Hoạt Động (Audit Log)**:
   - Lưu trữ lịch sử phiên làm việc cục bộ, xuất file JSON.

8. **📱 Chạy Offline 100% (PWA)**:
   - Tích hợp Service Worker và Web App Manifest.

---

## 🚀 Hướng dẫn khởi chạy

### Cách 1: Mở trực tiếp
Mở file `index.html` bằng bất kỳ trình duyệt web hiện đại nào (Chrome, Edge, Firefox, Safari).

### Cách 2: Chạy qua Local Server
Chạy lệnh PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Sau đó truy cập: `http://localhost:8080/index.html`

---
*Phát triển bởi phamlong3539-stack*
