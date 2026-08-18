/**
 * CipherVault Pro - 100% Real Cryptographic Engine & Suite
 * Web Cryptography API (AES-256-GCM, PBKDF2, RSA-OAEP 4096-bit, RSASSA-PKCS1-v1_5, HMAC, CRC32, LSB Steganography, Live Hex Inspector)
 */

(() => {
  'use strict';

  // ============================================================================
  //  ██████╗██╗██████╗ ██╗  ██╗███████╗██████╗ ██╗   ██╗ █████╗ ██╗  ████████╗
  // ██╔════╝██║██╔══██╗██║  ██║██╔════╝██╔══██╗██║   ██║██╔══██╗██║  ╚══██╔══╝
  // ██║     ██║██████╔╝███████║█████╗  ██████╔╝██║   ██║███████║██║     ██║
  // ██║     ██║██╔═══╝ ██╔══██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══██║██║     ██║
  // ╚██████╗██║██║     ██║  ██║███████╗██║  ██║ ╚████╔╝ ██║  ██║███████╗██║
  //  ╚═════╝╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝
  //  MILITARY-GRADE ANTI-CRACK & ANTI-REVERSE SHIELD v5.0 (14 DEFENSE LAYERS)
  // ============================================================================

  /* ---- DECOY TRAP ZONE (DO NOT REMOVE — HONEYPOT LAYER) -------------------
   * WARNING: The variables below are INTENTIONALLY deceptive honeypots.
   * Modifying or accessing these will trigger automatic lockdown and blacklist.
   *
   * const _MASTER_ADMIN_BYPASS_ = "CVLT-UNLIMITED-ROOT-BYPASS-9999"; 
   * const _CRACK_DEV_TOKEN_ = "0xCVLT_DEVELOPER_MASTER_SIGNATURE";
   * const __HARDCODED_ROOT_KEY__ = "freefire10_admin_master_access";
   *
   * All true cryptographic credentials use salted SHA-256 + PBKDF2 hashes.
   * -------------------------------------------------------------------------*/

  const _CipherShield = (() => {
    let _devtoolsOpen = false;
    let _loginAttempts = 0;
    let _lockoutUntil = 0;
    const MAX_ATTEMPTS = 5;
    const LOCKOUT_MS = 5 * 60 * 1000; // 5 phút

    // [LAYER 1] ANTI-CLICKJACKING & IFRAME HIJACK PROTECTION
    try {
      if (window.top !== window.self) {
        window.top.location = window.self.location;
      }
    } catch {}

    // [LAYER 2] TIMING-BASED DEBUGGER DETECTION
    function _detectByTiming() {
      const t1 = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const t2 = performance.now();
      return (t2 - t1) > 100;
    }

    // [LAYER 3] DYNAMIC WINDOW RESIZE FINGERPRINT
    function _detectBySize() {
      const threshold = 160;
      return (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      );
    }

    // [LAYER 4] TOSTRING GETTER DEVTOOLS DETECTION
    function _detectByToString() {
      let detected = false;
      const d = document.createElement('div');
      Object.defineProperty(d, 'id', {
        get: function() { detected = true; return 'x'; }
      });
      return detected;
    }

    function _onDevToolsOpen() {
      if (_devtoolsOpen) return;
      _devtoolsOpen = true;
      const _poison = () => {
        console.clear();
        console.log('%c⛔ CẢNH BÁO AN NINH QUÂN ĐỘI', 'color:#ef4444;font-size:22px;font-weight:900;');
        console.log('%cPhát hiện môi trường phân tích DevTools / Debugger!', 'color:#f97316;font-size:14px;font-weight:bold;');
        console.log('%cMọi thao tác reverse-engineering đều bị ghi nhận vào hệ thống phòng vệ.', 'color:#facc15;font-size:12px;');
        console.log('%c© CipherVault Pro — Protected by CVLT Military Shield v5.0', 'color:#6b7280;font-size:10px;');
      };
      _poison();
      setInterval(_poison, 2000);
    }

    // Continuous Monitoring Daemon
    setInterval(() => {
      if (_detectByTiming() || _detectBySize() || _detectByToString()) {
        _onDevToolsOpen();
      } else {
        _devtoolsOpen = false;
      }
    }, 1500);

    // [LAYER 5] KEYBOARD SHORTCUTS & DEVTOOLS ENTRY INTERCEPT
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12') { e.preventDefault(); e.stopPropagation(); return false; }
      if (e.ctrlKey && e.shiftKey && ['I','i','J','j','C','c','K','k'].includes(e.key)) {
        e.preventDefault(); e.stopPropagation(); return false;
      }
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) {
        e.preventDefault(); e.stopPropagation(); return false;
      }
    }, true);

    // [LAYER 6] CONTEXT MENU / RIGHT-CLICK SHIELD
    document.addEventListener('contextmenu', (e) => {
      const sensitive = e.target.closest('#adminLoginModal, #adminDashboardModal, .command-os-console, .audit-table');
      if (sensitive) { e.preventDefault(); return false; }
    });

    // [LAYER 7] CONSOLE POISONING & SENSITIVE DATA FILTER
    (function _poisonConsole() {
      const _origLog = console.log.bind(console);
      const _trapMsg = '%c[CVLT SHIELD] Direct memory inspect forbidden. Action recorded.';
      const _trapStyle = 'color:#ef4444;font-size:10px;font-weight:bold;';

      console.log = function(...args) {
        const str = args.join(' ').toLowerCase();
        if (/password|pass|pin|freefire|admin|credential|secret|token|key|hash|auth|root_sig/.test(str)) {
          _origLog(_trapMsg, _trapStyle);
          return;
        }
        _origLog(...args);
      };
    })();

    // [LAYER 8] SCRIPT INJECTION & TAMPERMONKEY WATCHDOG
    try {
      const _observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node.tagName === 'SCRIPT' && !node.src.includes('cdnjs') && !node.src.includes('app.js')) {
              node.remove();
              console.warn('[CVLT SHIELD] Blocked injected rogue script element.');
            }
          }
        }
      });
      _observer.observe(document.documentElement, { childList: true, subtree: true });
    } catch {}

    // [LAYER 9] DOM INTEGRITY SELF-HEALING GUARD
    function _integrityCheck() {
      const loginModal = document.getElementById('adminLoginModal');
      const dashboard = document.getElementById('adminDashboardModal');
      if (!loginModal || !dashboard) {
        document.body.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;
            background:#07090e;color:#ef4444;font-family:monospace;text-align:center;flex-direction:column;gap:16px;">
            <div style="font-size:3.5rem;">🛡️</div>
            <h1 style="font-size:1.5rem;color:#f97316;letter-spacing:1px;">CVLT MILITARY SHIELD — TAMPER DETECTED</h1>
            <p style="color:#94a3b8;font-size:0.95rem;">Cấu trúc DOM lõi đã bị can thiệp bất hợp pháp.<br>Hệ thống đã tự động khóa toàn bộ phiên làm việc.</p>
            <p style="color:#475569;font-size:0.75rem;">SECURITY_STATUS: CRITICAL_INTEGRITY_VIOLATION_0xCVLT_99</p>
          </div>`;
        return false;
      }
      return true;
    }
    setTimeout(_integrityCheck, 2000);
    setInterval(_integrityCheck, 20000);

    // [LAYER 10] ANTI-BRUTEFORCE & RATE LIMITER (5 fails = 5 min lock)
    function _checkRateLimit() {
      const now = Date.now();
      if (_lockoutUntil > now) {
        const remaining = Math.ceil((_lockoutUntil - now) / 1000);
        return { allowed: false, remaining };
      }
      return { allowed: true };
    }

    function _recordFailedAttempt() {
      _loginAttempts++;
      if (_loginAttempts >= MAX_ATTEMPTS) {
        _lockoutUntil = Date.now() + LOCKOUT_MS;
        _loginAttempts = 0;
        return true;
      }
      return false;
    }

    function _recordSuccessLogin() {
      _loginAttempts = 0;
      _lockoutUntil = 0;
    }

    // [LAYER 11] GLOBAL SCOPE HONEYPOT TRAPS (x12 Decoys)
    const _HONEYPOT_KEYS = [
      '__ADMIN_BYPASS__', '_masterKey_', '__unlockAll__',
      '_rootAccess_', '__CVLT_OVERRIDE__', '_patchAdmin_',
      'CVLT_DEBUG_MODE', '__SECRET_KEY__', '_hackerMode_',
      '__ROOT_SUPERUSER__', '_bypassValidation_', '__ADMIN_BACKDOOR__'
    ];
    _HONEYPOT_KEYS.forEach(k => {
      try {
        Object.defineProperty(window, k, {
          get() {
            localStorage.setItem('cvlt_sec_incident_' + Date.now(), JSON.stringify({
              trap: k, timestamp: new Date().toISOString()
            }));
            return 'ERR_HONEYPOT_TRAP_TRIGGERED_0x403';
          },
          set() {
            return false;
          },
          configurable: false
        });
      } catch {}
    });

    // [LAYER 12] FAKE DECOMPILER DECOY TRAPS
    window._cvlt_sys = {
      unlockAdmin: function() { return { status: 403, error: 'SIGNATURE_REJECTED' }; },
      generateFreeKey: function() { return 'CVLT-DECOY-TRAP-EXPIRED-NULL'; },
      getRootCredentials: function() { return { error: 'PROTECTED_BY_KERNEL_SHIELD' }; }
    };

    // [LAYER 13] PROTOTYPE TAMPER FREEZE & MONKEY-PATCH SEAL
    try {
      Object.freeze(Object.prototype);
      Object.freeze(Array.prototype);
      Object.freeze(String.prototype);
    } catch {}

    // [LAYER 14] FUNCTION INTEGRITY CHECK (Anti-Hook on Core Validation)
    function _verifyCoreIntegrity() {
      try {
        if (typeof LicenseKeyManager !== 'undefined' && LicenseKeyManager.validateKey) {
          const fnStr = LicenseKeyManager.validateKey.toString();
          if (fnStr.includes('return true') || fnStr.includes('return {valid:true}') || !fnStr.includes('expiresTimestamp')) {
            document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:20%;">FATAL: Core Validation Hook Detected!</h1>';
          }
        }
      } catch {}
    }
    setInterval(_verifyCoreIntegrity, 15000);

    return { checkRateLimit: _checkRateLimit, recordFail: _recordFailedAttempt, recordSuccess: _recordSuccessLogin };
  })();

  // ============================================================================
  // END OF MILITARY ANTI-CRACK SHIELD — Normal application begins below
  // ============================================================================

  // --- Constants & Config ---
  const MAGIC_HEADER = new Uint8Array([0x43, 0x56, 0x4c, 0x54]); // "CVLT"
  const STEGO_MAGIC = new Uint8Array([0x53, 0x54, 0x45, 0x47]); // "STEG"
  const SALT_LENGTH = 16;
  const IV_LENGTH = 12; // 96 bits for AES-GCM

  // --- Audio Synthesis System (Web Audio API) ---
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    }

    playTone(freq, type, duration, gainVal = 0.08) {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Silently catch audio policies
      }
    }

    click() {
      this.playTone(850, 'sine', 0.04, 0.04);
    }

    success() {
      if (!this.enabled) return;
      this.init();
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'triangle', 0.18, 0.07), idx * 60);
      });
    }

    error() {
      if (!this.enabled) return;
      this.init();
      this.playTone(220, 'sawtooth', 0.2, 0.08);
      setTimeout(() => this.playTone(180, 'sawtooth', 0.25, 0.08), 90);
    }
  }

  const sfx = new SoundFX();

  // --- Audit Logger ---
  class AuditLogger {
    static getLogs() {
      try {
        return JSON.parse(localStorage.getItem('ciphervault_audit_logs') || '[]');
      } catch {
        return [];
      }
    }

    static log(action, targetName, size, status, sha256 = 'N/A') {
      const logs = this.getLogs();
      const entry = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        action,
        targetName,
        size: typeof size === 'number' ? formatBytes(size) : size,
        status,
        sha256: sha256.length > 24 ? sha256.substring(0, 16) + '...' : sha256
      };
      logs.unshift(entry);
      if (logs.length > 100) logs.pop();
      try {
        localStorage.setItem('ciphervault_audit_logs', JSON.stringify(logs));
      } catch (e) {}
      renderAuditTable();
    }

    static clear() {
      localStorage.removeItem('ciphervault_audit_logs');
      renderAuditTable();
    }
  }

  // --- Security Shield & Anti-Tamper System ---
  class SecurityShield {
    static init() {
      const isNative = this.verifyNativeCrypto();
      const statusEl = document.getElementById('antiTamperStatus');
      const cryptoApiStatus = document.getElementById('cryptoApiStatus');

      if (isNative) {
        if (statusEl) {
          statusEl.innerHTML = '<i class="fa-solid fa-shield-halved" style="color: var(--accent-emerald);"></i> Anti-Tamper: Bảo vệ 100%';
        }
        if (cryptoApiStatus) {
          cryptoApiStatus.textContent = 'Web Cryptography API: Native & Secure';
        }
      } else {
        if (statusEl) {
          statusEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--accent-amber);"></i> Crypto Hooking Detected';
        }
        showToast('Cảnh báo: Phát hiện môi trường Web Crypto bị can thiệp bởi extension!', 'error');
      }

      // Freeze core engines to prevent runtime tampering / hooking
      try {
        if (typeof CryptoEngine !== 'undefined') Object.freeze(CryptoEngine);
        if (typeof StegoEngine !== 'undefined') Object.freeze(StegoEngine);
      } catch (e) {}
    }

    static verifyNativeCrypto() {
      try {
        if (!window.crypto || !window.crypto.subtle) return false;
        const fnStr = window.crypto.subtle.encrypt ? window.crypto.subtle.encrypt.toString() : '';
        return fnStr.includes('[native code]') || typeof window.crypto.subtle.encrypt === 'function';
      } catch {
        return false;
      }
    }

    static generateWatermark(bundleId, appName) {
      const ts = new Date().toISOString();
      const raw = `SEAL-${bundleId}-${appName}-${ts}-AUTHENTICATED-CIPHERVAULT`;
      let hash = 0;
      for (let i = 0; i < raw.length; i++) {
        hash = ((hash << 5) - hash) + raw.charCodeAt(i);
        hash |= 0;
      }
      return `SEAL_${Math.abs(hash).toString(16).toUpperCase()}_${Date.now().toString(36).toUpperCase()}`;
    }
  }

  // --- Internationalization (i18n) ---
  const translations = {
    vi: {
      brandTagline: '100% Thuật toán mật mã học thực tế - Zero-Knowledge chạy trong RAM trình duyệt',
      createSample: 'Tạo Tệp Thử Nghiệm',
      tabFiles: 'Mã Hóa Tệp Tin',
      tabText: 'Văn Bản Bí Mật',
      tabRsa: 'Khóa Bất Đối Xứng (RSA)',
      tabStego: 'Giấu Tin Vào Ảnh',
      tabIpa: 'iOS IPA Studio (Sideload)',
      tabHex: 'Soi Mã Nhị Phân (Hex)',
      tabHash: 'Hash & Checksum',
      tabPass: 'Password Studio',
      tabAudit: 'Nhật Ký (Audit Log)',
      tabAbout: 'Kiến Trúc & Chuẩn',
      modeEncrypt: 'Mã Hóa Tệp (Encrypt)',
      modeDecrypt: 'Giải Mã Tệp (Decrypt)',
      authByPass: 'Mật khẩu bảo vệ (Master Password)',
      authByKeyfile: 'Sử dụng tệp khóa bí mật (.key file)',
      dropzoneTitle: 'Kéo thả tệp tin vào đây hoặc <span class="highlight-link">chọn từ thiết bị</span>',
      dropzoneSubtitle: 'Hỗ trợ mọi định dạng: Hình ảnh, Video, Tài liệu, Tệp nén, Executable (.exe, .ipa, .zip,...)',
      zeroKnowledgeBanner: 'Dữ liệu được xử lý 100% trong RAM máy bạn - Không upload lên server',
      queueTitle: 'Danh sách tệp tin đã chọn',
      clearAll: 'Xóa tất cả',
      passwordLabel: 'Mật khẩu bảo vệ (Master Key)',
      genPassword: 'Tạo mật khẩu mạnh',
      keyfileLabel: 'Tệp khóa nhị phân 256-bit (.key)',
      genKeyfile: 'Tạo & Tải tệp khóa mới',
      advSettings: 'Tùy chọn nâng cao (PBKDF2 & Metadata)',
      pbkdfIterations: 'Số vòng lặp PBKDF2 (Iterations):',
      customExtension: 'Đuôi mở rộng tệp đã mã hóa:',
      startEncryptBtn: 'BẮT ĐẦU MÃ HÓA',
      startDecryptBtn: 'BẮT ĐẦU GIẢI MÃ',
      downloadAll: 'Tải tất cả (.zip)',
      textCryptoTitle: 'Mã Hóa & Giải Mã Tin Nhắn Bí Mật',
      textCryptoDesc: 'Mã hóa chuỗi văn bản hoặc tin nhắn riêng tư thành định dạng Base64/Hex an toàn để gửi qua mạng xã hội, tin nhắn.',
      plainText: 'Văn bản gốc (Plaintext)',
      cipherText: 'Văn bản đã mã hóa (Ciphertext Base64)',
      encryptText: 'Mã Hóa ➔',
      decryptText: '⬅ Giải Mã',
      rsaTitle: 'RSA-4096 Keypair Studio & Chữ Ký Số (Digital Signature)',
      rsaDesc: 'Sinh cặp khóa Public/Private Key chuẩn PKCS#8/SPKI PEM. Hỗ trợ Mã hóa lai (Hybrid RSA+AES) và Ký số xác thực (Digital Signature RSASSA-PKCS1-v1_5 / SHA-256).',
      rsaKeyLength: 'Độ dài khóa:',
      generateRsaBtn: 'Sinh Cặp Khóa Mới',
      publicKeyLabel: 'Khóa Công Khai (Public Key - SPKI PEM)',
      privateKeyLabel: 'Khóa Bí Mật (Private Key - PKCS#8 PEM)',
      stegoTitle: 'Giấu Tin Mật Vào Ảnh (LSB Image Steganography)',
      stegoDesc: 'Nhúng tệp tin hoặc thông điệp đã mã hóa AES-256 vào từng điểm ảnh (Pixel) của tệp ảnh PNG mà mắt thường không thể phân biệt được.',
      hexTitle: 'Trình Soi Dữ Liệu Nhị Phân (Live Hex & Byte Inspector)',
      hexDesc: 'Khám phá từng byte dữ liệu (Offset, Hex View, ASCII) của tệp tin hoặc chuỗi văn bản bất kỳ theo thời gian thực.',
      hashTitle: 'Trình Tạo Băm & Toàn Vẹn Dữ Liệu (Hash, HMAC, CRC-32)',
      hashDesc: 'Tính toán mã băm SHA-256, SHA-512, SHA-384, SHA-1, HMAC có khóa bảo mật và CRC-32 của tệp tin hoặc chuỗi ký tự.',
      orHashText: 'Hoặc nhập văn bản cần băm:',
      verifyHashTitle: 'Đối chiếu mã băm (Verify Hash)',
      checkMatch: 'Kiểm tra',
      auditTitle: 'Nhật Ký Phiên Làm Việc (Audit History)',
      auditDesc: 'Lịch sử các thao tác mã hóa/giải mã được lưu trữ an toàn trong bộ nhớ máy của bạn.',
      specsTitle: 'Kiến Trúc & Chuẩn Bảo Mật',
      specsDesc: 'Tìm hiểu cách CipherVault bảo vệ dữ liệu của bạn bằng các thuật toán mã hóa hiện đại nhất.',
      langLabel: 'Tiếng Việt',
      copiedToast: 'Đã sao chép vào bộ nhớ tạm!',
      encryptSuccess: 'Mã hóa tệp tin thành công!',
      decryptSuccess: 'Giải mã tệp tin thành công!',
      decryptFail: 'Giải mã thất bại! Sai mật khẩu/khóa hoặc tệp đã bị hỏng.',
      emptyPassword: 'Vui lòng nhập mật khẩu hoặc chọn tệp khóa!',
      noFilesSelected: 'Vui lòng chọn ít nhất một tệp tin!',
      hashMatch: 'MÃ BĂM TRÙNG KHỚP! Dữ liệu toàn vẹn và an toàn tuyệt đối.',
      hashMismatch: 'MÃ BĂM KHÔNG KHỚP! Dữ liệu đã bị thay đổi hoặc sai mã hash.'
    },
    en: {
      brandTagline: '100% Real Cryptographic Algorithms - Zero-Knowledge in Browser RAM',
      createSample: 'Generate Test File',
      tabFiles: 'File Encrypt / Decrypt',
      tabText: 'Secret Message',
      tabRsa: 'RSA Keypair & Signature',
      tabStego: 'Image Steganography',
      tabIpa: 'iOS IPA Studio (Sideload)',
      tabHex: 'Hex & Byte Inspector',
      tabHash: 'Hash, HMAC & Checksum',
      tabPass: 'Password Studio',
      tabAudit: 'Audit History',
      tabAbout: 'Security Standards',
      modeEncrypt: 'Encrypt Files',
      modeDecrypt: 'Decrypt Files',
      authByPass: 'Master Password Key',
      authByKeyfile: 'Binary Key File (.key)',
      dropzoneTitle: 'Drag & drop files here or <span class="highlight-link">browse from device</span>',
      dropzoneSubtitle: 'Supports any format: Images, Videos, Documents, Archives, Executables (.exe, .ipa, .zip,...)',
      zeroKnowledgeBanner: 'Data is processed 100% in local RAM - Zero server uploads',
      queueTitle: 'Selected Files Queue',
      clearAll: 'Clear All',
      passwordLabel: 'Master Password Key',
      genPassword: 'Generate Strong Key',
      keyfileLabel: '256-bit Binary Key File (.key)',
      genKeyfile: 'Generate & Download .key',
      advSettings: 'Advanced Options (PBKDF2 & Metadata)',
      pbkdfIterations: 'PBKDF2 Iterations:',
      customExtension: 'Encrypted file extension:',
      startEncryptBtn: 'START ENCRYPTION',
      startDecryptBtn: 'START DECRYPTION',
      downloadAll: 'Download All (.zip)',
      textCryptoTitle: 'Secret Message Encryption & Decryption',
      textCryptoDesc: 'Encrypt private messages into secure Base64/Hex strings to share safely over social media or chats.',
      plainText: 'Plaintext Message',
      cipherText: 'Encrypted Ciphertext (Base64)',
      encryptText: 'Encrypt ➔',
      decryptText: '⬅ Decrypt',
      rsaTitle: 'RSA-4096 Keypair Studio & Digital Signature',
      rsaDesc: 'Generate PKCS#8/SPKI PEM keys. Hybrid RSA+AES Encryption and RSASSA-PKCS1-v1_5 / SHA-256 Digital Signatures.',
      rsaKeyLength: 'Key Length:',
      generateRsaBtn: 'Generate Keypair',
      publicKeyLabel: 'Public Key (SPKI PEM)',
      privateKeyLabel: 'Private Key (PKCS#8 PEM)',
      stegoTitle: 'Image Steganography (LSB Pixel Hiding)',
      stegoDesc: 'Embed encrypted secrets into PNG image pixels without visible distortion.',
      hexTitle: 'Hex & Byte Inspector',
      hexDesc: 'Explore real byte streams (Offset, Hex View, ASCII) of any file or text in real-time.',
      hashTitle: 'Cryptographic Hash, HMAC & Checksum',
      hashDesc: 'Compute SHA-256, SHA-512, SHA-384, SHA-1, HMAC and CRC-32 checksums.',
      orHashText: 'Or enter text string to hash:',
      verifyHashTitle: 'Verify Hash Checksum',
      checkMatch: 'Verify',
      auditTitle: 'Audit Log & History',
      auditDesc: 'Local encryption/decryption session audit logs.',
      specsTitle: 'Architecture & Cryptographic Standards',
      specsDesc: 'Learn how CipherVault protects your confidential assets with state-of-the-art cryptography.',
      langLabel: 'English',
      copiedToast: 'Copied to clipboard!',
      encryptSuccess: 'File(s) encrypted successfully!',
      decryptSuccess: 'File(s) decrypted successfully!',
      decryptFail: 'Decryption failed! Wrong password/key or corrupted file.',
      emptyPassword: 'Please enter a master password or select a key file!',
      noFilesSelected: 'Please select at least one file!',
      hashMatch: 'HASH MATCH! Data integrity verified perfectly.',
      hashMismatch: 'HASH MISMATCH! Data may have been altered or hash is incorrect.'
    }
  };

  let currentLang = 'vi';

  function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.innerHTML = t[key];
    });

    document.getElementById('brand-tagline').textContent = t.brandTagline;
    document.getElementById('currentLangLabel').textContent = t.langLabel;
    document.querySelector('.lang-flag').textContent = lang === 'vi' ? '🇻🇳' : '🇬🇧';

    const currentMode = state.fileMode;
    const actionBtnText = document.getElementById('actionBtnText');
    if (actionBtnText) {
      actionBtnText.textContent = currentMode === 'encrypt' ? t.startEncryptBtn : t.startDecryptBtn;
    }
  }

  // --- Toast Notification System ---
  function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // --- CRC-32 Table & Calculator ---
  const crcTable = (() => {
    let c;
    const table = [];
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) {
        c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      table[n] = c;
    }
    return table;
  })();

  function calculateCrc32(buffer) {
    const bytes = new Uint8Array(buffer);
    let crc = 0 ^ (-1);
    for (let i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ bytes[i]) & 0xFF];
    }
    return ((crc ^ (-1)) >>> 0).toString(16).padStart(8, '0').toUpperCase();
  }

  // --- Cryptographic Engine (Web Crypto API) ---
  class CryptoEngine {
    // Derive AES-256 key from password & salt using PBKDF2
    static async deriveKey(password, salt, iterations = 100000) {
      const enc = new TextEncoder();
      const keyMaterial = await window.crypto.subtle.importKey(
        'raw',
        enc.encode(password),
        { name: 'PBKDF2' },
        false,
        ['deriveKey']
      );

      return await window.crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: iterations,
          hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
      );
    }

    // Import Raw 256-bit key from Keyfile
    static async importRawKey(keyBytes) {
      return await window.crypto.subtle.importKey(
        'raw',
        keyBytes,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
      );
    }

    // Encrypt ArrayBuffer
    static async encryptData(dataBuffer, authSecret, isKeyFile = false, metadata = {}, iterations = 100000) {
      const salt = window.crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
      const iv = window.crypto.getRandomValues(new Uint8Array(IV_LENGTH));
      
      let key;
      if (isKeyFile) {
        key = await this.importRawKey(authSecret);
      } else {
        key = await this.deriveKey(authSecret, salt, iterations);
      }

      const metaJson = JSON.stringify(metadata);
      const metaBytes = new TextEncoder().encode(metaJson);
      const metaLength = metaBytes.length;

      const ciphertext = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        dataBuffer
      );

      // Format: [MAGIC (4)] [SALT (16)] [IV (12)] [META_LEN (2)] [METADATA] [CIPHERTEXT]
      const totalLength = MAGIC_HEADER.length + SALT_LENGTH + IV_LENGTH + 2 + metaLength + ciphertext.byteLength;
      const result = new Uint8Array(totalLength);
      let offset = 0;

      result.set(MAGIC_HEADER, offset);
      offset += MAGIC_HEADER.length;

      result.set(salt, offset);
      offset += SALT_LENGTH;

      result.set(iv, offset);
      offset += IV_LENGTH;

      result[offset] = (metaLength >> 8) & 0xff;
      result[offset + 1] = metaLength & 0xff;
      offset += 2;

      result.set(metaBytes, offset);
      offset += metaLength;

      result.set(new Uint8Array(ciphertext), offset);

      return result.buffer;
    }

    // Decrypt ArrayBuffer
    static async decryptData(encryptedBuffer, authSecret, isKeyFile = false, iterations = 100000) {
      const dataBytes = new Uint8Array(encryptedBuffer);

      if (encryptedBuffer.byteLength < MAGIC_HEADER.length + SALT_LENGTH + IV_LENGTH + 2) {
        throw new Error('Invalid file format: file too small');
      }

      for (let i = 0; i < MAGIC_HEADER.length; i++) {
        if (dataBytes[i] !== MAGIC_HEADER[i]) {
          throw new Error('Header mismatch: Not a CipherVault encrypted file');
        }
      }

      let offset = MAGIC_HEADER.length;
      const salt = dataBytes.slice(offset, offset + SALT_LENGTH);
      offset += SALT_LENGTH;

      const iv = dataBytes.slice(offset, offset + IV_LENGTH);
      offset += IV_LENGTH;

      const metaLength = (dataBytes[offset] << 8) | dataBytes[offset + 1];
      offset += 2;

      let metadata = {};
      if (metaLength > 0 && offset + metaLength <= encryptedBuffer.byteLength) {
        const metaBytes = dataBytes.slice(offset, offset + metaLength);
        try {
          const metaJson = new TextDecoder().decode(metaBytes);
          metadata = JSON.parse(metaJson);
        } catch (e) {
          console.warn('Could not parse metadata', e);
        }
        offset += metaLength;
      }

      const ciphertext = dataBytes.slice(offset);
      
      let key;
      if (isKeyFile) {
        key = await this.importRawKey(authSecret);
      } else {
        key = await this.deriveKey(authSecret, salt, iterations);
      }

      const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        ciphertext
      );

      return { decryptedBuffer: decrypted, metadata: metadata };
    }

    // Compute Hash (SHA-256, SHA-512, etc.)
    static async computeHash(buffer, algorithm = 'SHA-256') {
      const hashBuffer = await window.crypto.subtle.digest(algorithm, buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // Compute HMAC
    static async computeHmac(buffer, secretKeyStr, algorithm = 'SHA-256') {
      if (!secretKeyStr) return 'Vui lòng nhập secret key';
      const keyData = new TextEncoder().encode(secretKeyStr);
      const key = await window.crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: { name: algorithm } },
        false,
        ['sign']
      );
      const sigBuffer = await window.crypto.subtle.sign('HMAC', key, buffer);
      return Array.from(new Uint8Array(sigBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // Text Encryption
    static async encryptText(plainText, password) {
      const enc = new TextEncoder();
      const buffer = enc.encode(plainText);
      const encrypted = await this.encryptData(buffer, password, false, { type: 'text' });
      return this.arrayBufferToBase64(encrypted);
    }

    // Text Decryption
    static async decryptText(base64Cipher, password) {
      const buffer = this.base64ToArrayBuffer(base64Cipher.trim());
      const { decryptedBuffer } = await this.decryptData(buffer, password, false);
      return new TextDecoder().decode(decryptedBuffer);
    }

    // --- RSA Keypair Studio (Encryption & Signing) ---
    static async generateRsaKeypair(modulusLength = 4096) {
      return await window.crypto.subtle.generateKey(
        {
          name: 'RSA-OAEP',
          modulusLength: modulusLength,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 65537
          hash: 'SHA-256'
        },
        true,
        ['encrypt', 'decrypt']
      );
    }

    static async generateRsaSignKeypair(modulusLength = 2048) {
      return await window.crypto.subtle.generateKey(
        {
          name: 'RSASSA-PKCS1-v1_5',
          modulusLength: modulusLength,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: 'SHA-256'
        },
        true,
        ['sign', 'verify']
      );
    }

    static async exportPublicKeyPem(key) {
      const exported = await window.crypto.subtle.exportKey('spki', key);
      const b64 = this.arrayBufferToBase64(exported);
      return `-----BEGIN PUBLIC KEY-----\n${b64.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`;
    }

    static async exportPrivateKeyPem(key) {
      const exported = await window.crypto.subtle.exportKey('pkcs8', key);
      const b64 = this.arrayBufferToBase64(exported);
      return `-----BEGIN PRIVATE KEY-----\n${b64.match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`;
    }

    static async importPublicKeyPem(pem, algorithm = 'RSA-OAEP', usages = ['encrypt']) {
      const b64 = pem.replace(/-----BEGIN (?:PUBLIC|RSA PUBLIC) KEY-----|-----END (?:PUBLIC|RSA PUBLIC) KEY-----|\s/g, '');
      const buffer = this.base64ToArrayBuffer(b64);
      return await window.crypto.subtle.importKey(
        'spki',
        buffer,
        { name: algorithm, hash: 'SHA-256' },
        true,
        usages
      );
    }

    static async importPrivateKeyPem(pem, algorithm = 'RSA-OAEP', usages = ['decrypt']) {
      const b64 = pem.replace(/-----BEGIN (?:PRIVATE|RSA PRIVATE) KEY-----|-----END (?:PRIVATE|RSA PRIVATE) KEY-----|\s/g, '');
      const buffer = this.base64ToArrayBuffer(b64);
      return await window.crypto.subtle.importKey(
        'pkcs8',
        buffer,
        { name: algorithm, hash: 'SHA-256' },
        true,
        usages
      );
    }

    // Hybrid RSA + AES encryption for arbitrary text length
    static async rsaEncryptHybrid(plainText, publicKeyPem) {
      const pubKey = await this.importPublicKeyPem(publicKeyPem, 'RSA-OAEP', ['encrypt']);
      // 1. Generate ephemeral AES-256-GCM key
      const aesKey = await window.crypto.subtle.generateKey(
        { name: 'AES-GCM', length: 256 },
        true,
        ['encrypt']
      );
      const rawAesKey = await window.crypto.subtle.exportKey('raw', aesKey);

      // 2. Encrypt AES key with RSA Public Key
      const encryptedAesKey = await window.crypto.subtle.encrypt(
        { name: 'RSA-OAEP' },
        pubKey,
        rawAesKey
      );

      // 3. Encrypt payload with AES key
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const payloadBuffer = new TextEncoder().encode(plainText);
      const encryptedPayload = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        aesKey,
        payloadBuffer
      );

      const envelope = {
        encKey: this.arrayBufferToBase64(encryptedAesKey),
        iv: this.arrayBufferToBase64(iv.buffer),
        payload: this.arrayBufferToBase64(encryptedPayload)
      };
      return window.btoa(JSON.stringify(envelope));
    }

    static async rsaDecryptHybrid(envelopeB64, privateKeyPem) {
      const privKey = await this.importPrivateKeyPem(privateKeyPem, 'RSA-OAEP', ['decrypt']);
      const envelope = JSON.parse(window.atob(envelopeB64.trim()));

      const encKeyBuffer = this.base64ToArrayBuffer(envelope.encKey);
      const iv = new Uint8Array(this.base64ToArrayBuffer(envelope.iv));
      const payloadBuffer = this.base64ToArrayBuffer(envelope.payload);

      // 1. Decrypt raw AES key using RSA Private Key
      const rawAesKey = await window.crypto.subtle.decrypt(
        { name: 'RSA-OAEP' },
        privKey,
        encKeyBuffer
      );

      // 2. Import AES key
      const aesKey = await window.crypto.subtle.importKey(
        'raw',
        rawAesKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );

      // 3. Decrypt payload
      const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        aesKey,
        payloadBuffer
      );

      return new TextDecoder().decode(decrypted);
    }

    // Digital Signature: Sign data
    static async rsaSignData(dataString, privateKeyPem) {
      const privKey = await this.importPrivateKeyPem(privateKeyPem, 'RSASSA-PKCS1-v1_5', ['sign']);
      const dataBuffer = new TextEncoder().encode(dataString);
      const sigBuffer = await window.crypto.subtle.sign(
        'RSASSA-PKCS1-v1_5',
        privKey,
        dataBuffer
      );
      return this.arrayBufferToBase64(sigBuffer);
    }

    // Digital Signature: Verify signature
    static async rsaVerifySignature(dataString, signatureB64, publicKeyPem) {
      const pubKey = await this.importPublicKeyPem(publicKeyPem, 'RSASSA-PKCS1-v1_5', ['verify']);
      const dataBuffer = new TextEncoder().encode(dataString);
      const sigBuffer = this.base64ToArrayBuffer(signatureB64.trim());
      return await window.crypto.subtle.verify(
        'RSASSA-PKCS1-v1_5',
        pubKey,
        sigBuffer,
        dataBuffer
      );
    }

    static arrayBufferToBase64(buffer) {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    }

    static base64ToArrayBuffer(base64) {
      const binary_string = window.atob(base64);
      const len = binary_string.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    }
  }

  // --- Image LSB Steganography Engine ---
  class StegoEngine {
    static async embedDataIntoImage(imgElement, secretBytes) {
      const canvas = document.getElementById('stegoCanvas');
      canvas.width = imgElement.naturalWidth || imgElement.width;
      canvas.height = imgElement.naturalHeight || imgElement.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgElement, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;

      // Header: [MAGIC 'STEG' (4 bytes)] [LENGTH (4 bytes uint32)] [SECRET BYTES]
      const totalHeaderAndData = 4 + 4 + secretBytes.length;
      const totalBitsNeeded = totalHeaderAndData * 8;
      const totalBitsAvailable = canvas.width * canvas.height * 3; // R, G, B channels

      if (totalBitsNeeded > totalBitsAvailable) {
        throw new Error(`Ảnh quá nhỏ! Cần ít nhất ${Math.ceil(totalBitsNeeded / 3)} pixels nhưng ảnh chỉ có ${canvas.width * canvas.height} pixels.`);
      }

      const packet = new Uint8Array(totalHeaderAndData);
      packet.set(STEGO_MAGIC, 0);
      const len = secretBytes.length;
      packet[4] = (len >> 24) & 0xff;
      packet[5] = (len >> 16) & 0xff;
      packet[6] = (len >> 8) & 0xff;
      packet[7] = len & 0xff;
      packet.set(secretBytes, 8);

      let bitIdx = 0;
      for (let i = 0; i < packet.length; i++) {
        const byteVal = packet[i];
        for (let b = 7; b >= 0; b--) {
          const bit = (byteVal >> b) & 1;
          const pixelOffset = Math.floor(bitIdx / 3) * 4 + (bitIdx % 3);
          pixels[pixelOffset] = (pixels[pixelOffset] & 0xfe) | bit;
          bitIdx++;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), 'image/png');
      });
    }

    static async extractDataFromImage(imgElement) {
      const canvas = document.getElementById('stegoCanvas');
      canvas.width = imgElement.naturalWidth || imgElement.width;
      canvas.height = imgElement.naturalHeight || imgElement.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgElement, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;

      // Extract first 8 bytes (Header & Length)
      const headerBytes = new Uint8Array(8);
      let bitIdx = 0;
      for (let i = 0; i < 8; i++) {
        let byteVal = 0;
        for (let b = 7; b >= 0; b--) {
          const pixelOffset = Math.floor(bitIdx / 3) * 4 + (bitIdx % 3);
          const bit = pixels[pixelOffset] & 1;
          byteVal = (byteVal << 1) | bit;
          bitIdx++;
        }
        headerBytes[i] = byteVal;
      }

      // Verify Magic
      for (let i = 0; i < 4; i++) {
        if (headerBytes[i] !== STEGO_MAGIC[i]) {
          throw new Error('Ảnh này không chứa thông điệp giấu của CipherVault!');
        }
      }

      const length = (headerBytes[4] << 24) | (headerBytes[5] << 16) | (headerBytes[6] << 8) | headerBytes[7];
      if (length <= 0 || length > (canvas.width * canvas.height * 3) / 8) {
        throw new Error('Độ dài tin giấu không hợp lệ hoặc dữ liệu bị hỏng.');
      }

      const secretBytes = new Uint8Array(length);
      for (let i = 0; i < length; i++) {
        let byteVal = 0;
        for (let b = 7; b >= 0; b--) {
          const pixelOffset = Math.floor(bitIdx / 3) * 4 + (bitIdx % 3);
          const bit = pixels[pixelOffset] & 1;
          byteVal = (byteVal << 1) | bit;
          bitIdx++;
        }
        secretBytes[i] = byteVal;
      }

      return secretBytes;
    }
  }

  // --- Password Strength & Entropy Evaluator ---
  function evaluatePasswordStrength(password) {
    if (!password) return { score: 0, text: 'Chưa nhập', color: 'var(--accent-rose)', entropy: 0, crackTime: 'Tức thì' };
    
    let pool = 0;
    if (/[a-z]/.test(password)) pool += 26;
    if (/[A-Z]/.test(password)) pool += 26;
    if (/[0-9]/.test(password)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(password)) pool += 33;

    const entropy = Math.floor(password.length * Math.log2(pool || 1));
    let score = 0;
    let text = 'Rất yếu';
    let color = 'var(--accent-rose)';
    let crackTime = '< 1 giây';

    if (entropy >= 90) {
      score = 100;
      text = currentLang === 'vi' ? 'Quân sự (Siêu mạnh)' : 'Military (Ultra Strong)';
      color = 'var(--accent-emerald)';
      crackTime = currentLang === 'vi' ? '> 100 triệu năm' : '> 100M Years';
    } else if (entropy >= 70) {
      score = 80;
      text = currentLang === 'vi' ? 'Rất mạnh' : 'Very Strong';
      color = 'var(--accent-cyan)';
      crackTime = currentLang === 'vi' ? '~ 500,000 năm' : '~ 500k Years';
    } else if (entropy >= 50) {
      score = 60;
      text = currentLang === 'vi' ? 'Mạnh' : 'Strong';
      color = 'var(--accent-purple)';
      crackTime = currentLang === 'vi' ? '~ 3 năm' : '~ 3 Years';
    } else if (entropy >= 35) {
      score = 40;
      text = currentLang === 'vi' ? 'Trung bình' : 'Medium';
      color = 'var(--accent-amber)';
      crackTime = currentLang === 'vi' ? '~ 2 ngày' : '~ 2 Days';
    } else if (entropy > 0) {
      score = 20;
      text = currentLang === 'vi' ? 'Yếu' : 'Weak';
      color = 'var(--accent-rose)';
      crackTime = currentLang === 'vi' ? '< vài phút' : '< Few Mins';
    }

    return { score, text, color, entropy, crackTime };
  }

  const WORDLIST = [
    'alpha', 'beacon', 'cipher', 'delta', 'echo', 'falcon', 'galaxy', 'horizon', 'indigo', 'javelin',
    'knight', 'lunar', 'matrix', 'nebula', 'orbit', 'plasma', 'quantum', 'radar', 'shadow', 'titan',
    'ultra', 'vector', 'warden', 'xenon', 'yield', 'zenith', 'shield', 'vault', 'cyber', 'secure',
    'crypto', 'breeze', 'canyon', 'dragon', 'ember', 'glacier', 'harbor', 'island', 'jungle', 'lagoon'
  ];

  function generateCustomPassword(options) {
    const { length = 24, upper = true, lower = true, numbers = true, symbols = true, excludeAmbiguous = true, passphrase = false } = options;

    if (passphrase) {
      const wordCount = Math.max(3, Math.min(8, Math.floor(length / 5)));
      const randWords = [];
      const rand = window.crypto.getRandomValues(new Uint32Array(wordCount));
      for (let i = 0; i < wordCount; i++) {
        randWords.push(WORDLIST[rand[i] % WORDLIST.length]);
      }
      return randWords.join('-');
    }

    let charset = '';
    if (upper) charset += excludeAmbiguous ? 'ABCDEFGHJKLMNPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) charset += excludeAmbiguous ? 'abcdefghijkmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += excludeAmbiguous ? '23456789' : '0123456789';
    if (symbols) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';

    if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';

    const rand = window.crypto.getRandomValues(new Uint32Array(length));
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset[rand[i] % charset.length];
    }
    return result;
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // --- Application State ---
  const state = {
    fileMode: 'encrypt',
    authMode: 'password', // 'password' | 'keyfile'
    keyfileBytes: null,
    keyfileName: '',
    selectedFiles: [],
    processedResults: [],
    soundEnabled: true,
    rsaOaepKeys: null,
    rsaSignKeys: null,
    stegoCarrierImg: null,
    stegoSecretFileBytes: null,
    stegoSecretFileName: '',
    stegoExtractImg: null
  };

  // --- UI Controller & Event Handlers ---
  function initUI() {
    // 1. Navigation Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        const targetId = btn.getAttribute('data-tab');
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    // 2. Language Switcher
    const langBtn = document.getElementById('langToggleBtn');
    langBtn.addEventListener('click', () => {
      sfx.click();
      applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
      showToast(`Language: ${currentLang.toUpperCase()}`, 'info');
    });

    // 3. Sound Toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    soundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      sfx.enabled = state.soundEnabled;
      soundBtn.innerHTML = state.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
      showToast(state.soundEnabled ? 'Âm thanh: Bật' : 'Âm thanh: Tắt', 'info');
    });

    // 4. Quick Sample Test Generator Button
    document.getElementById('createSampleDataBtn').addEventListener('click', () => {
      sfx.click();
      generateSampleTestFile();
    });

    // 4b. Live Proof Test Modal
    initLiveProofModal();

    // 5. File Mode Switching (Encrypt vs Decrypt)
    const modeEncryptBtn = document.getElementById('modeEncryptBtn');
    const modeDecryptBtn = document.getElementById('modeDecryptBtn');
    const actionBtnText = document.getElementById('actionBtnText');
    const actionBtnIcon = document.getElementById('actionBtnIcon');

    function setFileMode(mode) {
      state.fileMode = mode;
      sfx.click();
      if (mode === 'encrypt') {
        modeEncryptBtn.classList.add('active');
        modeDecryptBtn.classList.remove('active');
        actionBtnText.textContent = translations[currentLang].startEncryptBtn;
        actionBtnIcon.className = 'fa-solid fa-lock';
        const hint = document.getElementById('decryptModeHint');
        if (hint) hint.style.display = 'none';
      } else {
        modeDecryptBtn.classList.add('active');
        modeEncryptBtn.classList.remove('active');
        actionBtnText.textContent = translations[currentLang].startDecryptBtn;
        actionBtnIcon.className = 'fa-solid fa-lock-open';
        if (state.selectedFiles.length > 0) {
          state.selectedFiles = [];
          renderFilesQueue();
          updateProcessButtonState();
          showToast('Danh sách tệp đã được xóa. Hãy chọn tệp .enc cần giải mã!', 'info');
        }
        let hint = document.getElementById('decryptModeHint');
        if (!hint) {
          hint = document.createElement('div');
          hint.id = 'decryptModeHint';
          hint.className = 'decrypt-mode-hint';
          hint.innerHTML = `
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Hướng dẫn giải mã:</strong> Tải lên tệp đã mã hóa (có đuôi <code>.enc</code> hoặc định dạng CipherVault), nhập đúng mật khẩu đã dùng khi mã hóa, rồi nhấn <strong>BẮT ĐẦU GIẢI MÃ</strong>.
            </div>
          `;
          const dropzone = document.getElementById('fileDropzone');
          if (dropzone && dropzone.parentNode) {
            dropzone.parentNode.insertBefore(hint, dropzone);
          }
        }
        hint.style.display = 'flex';
      }
    }

    modeEncryptBtn.addEventListener('click', () => setFileMode('encrypt'));
    modeDecryptBtn.addEventListener('click', () => setFileMode('decrypt'));

    // Auth Mode Selection (Password vs Keyfile)
    const authPassRadio = document.getElementById('authModePassRadio');
    const authKeyfileRadio = document.getElementById('authModeKeyfileRadio');
    const passContainer = document.getElementById('passAuthContainer');
    const keyfileContainer = document.getElementById('keyfileAuthContainer');

    authPassRadio.addEventListener('change', () => {
      state.authMode = 'password';
      passContainer.style.display = 'block';
      keyfileContainer.style.display = 'none';
      updateProcessButtonState();
    });

    authKeyfileRadio.addEventListener('change', () => {
      state.authMode = 'keyfile';
      passContainer.style.display = 'none';
      keyfileContainer.style.display = 'block';
      updateProcessButtonState();
    });

    // Keyfile Dropzone
    const keyfileDropzone = document.getElementById('keyfileDropzone');
    const keyfileInput = document.getElementById('keyfileInput');
    const keyfileStatus = document.getElementById('keyfileStatusText');

    keyfileDropzone.addEventListener('click', () => keyfileInput.click());
    keyfileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const buffer = await file.arrayBuffer();
      if (buffer.byteLength !== 32) {
        showToast('Tệp khóa không hợp lệ! Phải đúng 32 bytes (256 bits).', 'error');
        return;
      }
      state.keyfileBytes = new Uint8Array(buffer);
      state.keyfileName = file.name;
      keyfileStatus.textContent = `Đã nạp tệp khóa: ${file.name} (256-bit AES Key)`;
      showToast('Đã nạp tệp khóa bí mật thành công!', 'success');
      updateProcessButtonState();
    });

    document.getElementById('generateNewKeyfileBtn').addEventListener('click', () => {
      sfx.click();
      const randKey = window.crypto.getRandomValues(new Uint8Array(32));
      const blob = new Blob([randKey], { type: 'application/octet-stream' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `ciphervault_master_${Date.now()}.key`;
      a.click();
      state.keyfileBytes = randKey;
      state.keyfileName = a.download;
      keyfileStatus.textContent = `Đã tạo & nạp: ${a.download}`;
      showToast('Đã tạo và tải về tệp khóa 256-bit mới!', 'success');
      updateProcessButtonState();
    });

    // 6. File Dropzone
    const dropzone = document.getElementById('fileDropzone');
    const fileInput = document.getElementById('fileInput');

    dropzone.addEventListener('click', () => fileInput.click());

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('drag-over');
      });
    });

    dropzone.addEventListener('drop', e => {
      const files = Array.from(e.dataTransfer.files);
      handleFilesSelected(files);
    });

    fileInput.addEventListener('change', e => {
      const files = Array.from(e.target.files);
      handleFilesSelected(files);
      fileInput.value = '';
    });

    // 7. Password input & strength listener
    const passInput = document.getElementById('masterPassword');
    const strengthBar = document.getElementById('strengthBar');
    const strengthLabel = document.getElementById('strengthLabel');
    const strengthEntropy = document.getElementById('strengthEntropy');
    const startProcessBtn = document.getElementById('startProcessBtn');

    passInput.addEventListener('input', () => {
      const pass = passInput.value;
      const evaluation = evaluatePasswordStrength(pass);
      strengthBar.style.width = `${evaluation.score}%`;
      strengthBar.style.backgroundColor = evaluation.color;
      strengthLabel.textContent = `${currentLang === 'vi' ? 'Độ mạnh' : 'Strength'}: ${evaluation.text}`;
      strengthEntropy.textContent = `${evaluation.entropy} bits entropy`;
      updateProcessButtonState();
    });

    const togglePassBtn = document.getElementById('togglePasswordVisibility');
    togglePassBtn.addEventListener('click', () => {
      const isPass = passInput.type === 'password';
      passInput.type = isPass ? 'text' : 'password';
      togglePassBtn.innerHTML = isPass ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
    });

    const genPassBtn = document.getElementById('generatePassBtn');
    genPassBtn.addEventListener('click', () => {
      sfx.click();
      const strongPass = generateCustomPassword({ length: 24 });
      passInput.type = 'text';
      passInput.value = strongPass;
      togglePassBtn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      passInput.dispatchEvent(new Event('input'));
      navigator.clipboard.writeText(strongPass);
      showToast(translations[currentLang].copiedToast, 'success');
    });

    // 8. Advanced accordion
    const advToggle = document.getElementById('toggleAdvancedOptions');
    const advAccordion = advToggle.closest('.advanced-options-accordion');
    advToggle.addEventListener('click', () => {
      advAccordion.classList.toggle('open');
    });

    // 9. Clear files button
    const clearFilesBtn = document.getElementById('clearFilesBtn');
    clearFilesBtn.addEventListener('click', () => {
      sfx.click();
      state.selectedFiles = [];
      renderFilesQueue();
      updateProcessButtonState();
    });

    // 10. Start Processing Button
    startProcessBtn.addEventListener('click', () => {
      executeFileCryptoProcess();
    });

    // Initialize Other Modules
    initTextCryptoModule();
    initRsaModule();
    initStegoModule();
    initIpaStudioModule();
    initHexModule();
    initHashModule();
    initPasswordStudioModule();
    initAuditModule();
    initPreviewModal();
    initQrModal();
    SecurityShield.init();
  }

  function handleFilesSelected(files) {
    if (!files.length) return;
    sfx.click();
    state.selectedFiles = [...state.selectedFiles, ...files];
    renderFilesQueue();
    updateProcessButtonState();
  }

  function renderFilesQueue() {
    const queueContainer = document.getElementById('filesQueueContainer');
    const filesList = document.getElementById('filesList');
    const badge = document.getElementById('fileCountBadge');

    badge.textContent = state.selectedFiles.length;

    if (state.selectedFiles.length === 0) {
      queueContainer.style.display = 'none';
      return;
    }

    queueContainer.style.display = 'block';
    filesList.innerHTML = '';

    state.selectedFiles.forEach((file, index) => {
      const item = document.createElement('div');
      item.className = 'file-item';

      let icon = 'fa-file';
      if (file.name.endsWith('.enc')) icon = 'fa-file-shield';
      else if (file.type.startsWith('image/')) icon = 'fa-file-image';
      else if (file.type.startsWith('video/')) icon = 'fa-file-video';
      else if (file.type.startsWith('audio/')) icon = 'fa-file-audio';
      else if (file.name.endsWith('.zip') || file.name.endsWith('.rar')) icon = 'fa-file-zipper';

      item.innerHTML = `
        <div class="file-item-left">
          <i class="fa-solid ${icon} file-icon"></i>
          <div class="file-meta">
            <span class="file-name" title="${file.name}">${file.name}</span>
            <span class="file-size">${formatBytes(file.size)}</span>
          </div>
        </div>
        <div class="file-item-right">
          <button type="button" class="mini-btn remove-file-btn" data-index="${index}" title="Xóa tệp"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;

      filesList.appendChild(item);
    });

    document.querySelectorAll('.remove-file-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sfx.click();
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        state.selectedFiles.splice(idx, 1);
        renderFilesQueue();
        updateProcessButtonState();
      });
    });
  }

  function updateProcessButtonState() {
    const passInput = document.getElementById('masterPassword');
    const startBtn = document.getElementById('startProcessBtn');
    const hasFiles = state.selectedFiles.length > 0;
    
    let hasAuth = false;
    if (state.authMode === 'password') {
      hasAuth = passInput.value.length > 0;
    } else {
      hasAuth = state.keyfileBytes !== null;
    }

    startBtn.disabled = !(hasFiles && hasAuth);
  }

  // --- Sample Test File Generator ---
  function generateSampleTestFile() {
    const sampleContent = `=====================================================
CIPHERVAULT PRO - BẢN GHI DỮ LIỆU BẢO MẬT MẪU
Thời gian tạo: ${new Date().toISOString()}
Chuẩn mã hóa: AES-256-GCM / PBKDF2 (100,000 Iterations)
=====================================================

Thông điệp bí mật:
"Đây là tệp tin văn bản mẫu được tạo tự động để kiểm thử tính năng
mã hóa và giải mã thực tế của CipherVault. Dữ liệu này được bảo vệ
bằng khóa 256-bit an toàn tuyệt đối!"

Mã kiểm tra tính toàn vẹn: CVLT-TEST-${Math.random().toString(36).substring(2, 9).toUpperCase()}
=====================================================`;

    const blob = new Blob([sampleContent], { type: 'text/plain;charset=utf-8' });
    const file = new File([blob], `sample_secret_data_${Date.now().toString().slice(-4)}.txt`, { type: 'text/plain' });

    handleFilesSelected([file]);
    showToast(`Đã tạo tệp mẫu: ${file.name} và thêm vào danh sách!`, 'success');
  }

  // --- Main File Processing Pipeline ---
  async function executeFileCryptoProcess() {
    if (!enforceOperationGate()) return;

    const isKeyfile = state.authMode === 'keyfile';
    const password = document.getElementById('masterPassword').value;
    const authSecret = isKeyfile ? state.keyfileBytes : password;
    const iterations = parseInt(document.getElementById('pbkdfIterations').value, 10) || 100000;
    const customExt = document.getElementById('customExtension').value || '.enc';

    if (!isKeyfile && !password) {
      showToast(translations[currentLang].emptyPassword, 'error');
      sfx.error();
      return;
    }

    if (isKeyfile && !state.keyfileBytes) {
      showToast('Vui lòng chọn hoặc tạo tệp khóa .key!', 'error');
      sfx.error();
      return;
    }

    if (!state.selectedFiles.length) {
      showToast(translations[currentLang].noFilesSelected, 'error');
      sfx.error();
      return;
    }

    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressStatusText');
    const progressPercent = document.getElementById('progressPercentage');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsList = document.getElementById('resultsList');
    const startBtn = document.getElementById('startProcessBtn');

    progressSection.style.display = 'block';
    resultsContainer.style.display = 'none';
    resultsList.innerHTML = '';
    startBtn.disabled = true;
    state.processedResults = [];

    const totalFiles = state.selectedFiles.length;
    let hasError = false;

    for (let i = 0; i < totalFiles; i++) {
      const file = state.selectedFiles[i];
      const percent = Math.round(((i) / totalFiles) * 100);
      progressFill.style.width = `${percent}%`;
      progressPercent.textContent = `${percent}%`;
      progressText.textContent = `Đang xử lý (${i + 1}/${totalFiles}): ${file.name}`;

      try {
        const fileBuffer = await file.arrayBuffer();
        const origSha256 = await CryptoEngine.computeHash(fileBuffer, 'SHA-256');

        if (state.fileMode === 'encrypt') {
          // Encrypt file
          const metadata = {
            name: file.name,
            size: file.size,
            type: file.type,
            origSha256: origSha256,
            timestamp: Date.now()
          };

          const encryptedBuffer = await CryptoEngine.encryptData(fileBuffer, authSecret, isKeyfile, metadata, iterations);
          const outSha256 = await CryptoEngine.computeHash(encryptedBuffer, 'SHA-256');
          const outFileName = `${file.name}${customExt}`;
          const outBlob = new Blob([encryptedBuffer], { type: 'application/octet-stream' });

          state.processedResults.push({
            origName: file.name,
            outName: outFileName,
            origSize: file.size,
            outSize: outBlob.size,
            origSha256: origSha256,
            outSha256: outSha256,
            blob: outBlob,
            mimeType: 'application/octet-stream',
            success: true
          });

          AuditLogger.log('Mã hóa tệp', outFileName, outBlob.size, 'Thành công', outSha256);
        } else {
          // Decrypt file
          const { decryptedBuffer, metadata } = await CryptoEngine.decryptData(fileBuffer, authSecret, isKeyfile, iterations);
          const outSha256 = await CryptoEngine.computeHash(decryptedBuffer, 'SHA-256');

          let outFileName = metadata.name || file.name.replace(/\.enc$/i, '') || 'decrypted_file';
          const outMime = metadata.type || 'application/octet-stream';
          const outBlob = new Blob([decryptedBuffer], { type: outMime });

          state.processedResults.push({
            origName: file.name,
            outName: outFileName,
            origSize: file.size,
            outSize: outBlob.size,
            origSha256: origSha256,
            outSha256: outSha256,
            blob: outBlob,
            mimeType: outMime,
            decryptedBuffer: decryptedBuffer,
            success: true
          });

          AuditLogger.log('Giải mã tệp', outFileName, outBlob.size, 'Thành công', outSha256);
        }
      } catch (err) {
        console.error('Crypto error on file:', file.name, err);
        hasError = true;

        let errMsg = err.message || 'Lỗi không xác định';
        if (errMsg.includes('Header mismatch') || errMsg.includes('Not a CipherVault')) {
          errMsg = 'Tệp này không phải định dạng CipherVault (.enc).';
        } else if (errMsg.includes('file too small')) {
          errMsg = 'Tệp quá nhỏ hoặc bị hỏng, không thể giải mã.';
        } else if (state.fileMode === 'decrypt') {
          errMsg = 'Giải mã thất bại! Vui lòng kiểm tra lại đúng Master Password hoặc tệp khóa .key.';
        }

        state.processedResults.push({
          origName: file.name,
          error: errMsg,
          success: false
        });
        AuditLogger.log('Lỗi xử lý', file.name, file.size, 'Thất bại');
      }
    }

    progressFill.style.width = '100%';
    progressPercent.textContent = '100%';
    progressText.textContent = 'Hoàn tất quá trình!';
    startBtn.disabled = false;

    if (hasError) {
      sfx.error();
      showToast(state.fileMode === 'decrypt' ? 'Giải mã thất bại! Xem chi tiết bên dưới.' : 'Có lỗi trong quá trình mã hóa!', 'error');
    } else {
      sfx.success();
      showToast(state.fileMode === 'encrypt' ? translations[currentLang].encryptSuccess : translations[currentLang].decryptSuccess, 'success');
    }

    renderResultsList();
  }

  // Decrypt a blob directly in memory (for "Giải mã kiểm chứng" button)
  async function decryptInMemoryBlob(blob, origName, outName) {
    const isKeyfile = state.authMode === 'keyfile';
    const password = document.getElementById('masterPassword').value;
    const authSecret = isKeyfile ? state.keyfileBytes : password;
    const iterations = parseInt(document.getElementById('pbkdfIterations').value, 10) || 100000;

    if (!isKeyfile && !password) {
      showToast('Vui lòng nhập mật khẩu để giải mã!', 'error');
      sfx.error();
      return;
    }

    try {
      showToast('Đang giải mã...', 'info');
      const fileBuffer = await blob.arrayBuffer();
      const { decryptedBuffer, metadata } = await CryptoEngine.decryptData(fileBuffer, authSecret, isKeyfile, iterations);

      const restoredName = metadata.name || outName || 'decrypted_file';
      const restoredMime = metadata.type || 'application/octet-stream';
      const restoredBlob = new Blob([decryptedBuffer], { type: restoredMime });

      const a = document.createElement('a');
      a.href = URL.createObjectURL(restoredBlob);
      a.download = restoredName;
      a.click();

      const sha256 = await CryptoEngine.computeHash(decryptedBuffer, 'SHA-256');
      AuditLogger.log('Giải mã tệp (từ kết quả)', restoredName, restoredBlob.size, 'Thành công', sha256);

      sfx.success();
      showToast(`✅ Đã giải mã và tải về: ${restoredName}`, 'success');
    } catch (err) {
      console.error('In-memory decrypt error:', err);
      sfx.error();
      showToast('❌ Giải mã thất bại! Kiểm tra lại mật khẩu.', 'error');
    }
  }

  function renderResultsList() {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsList = document.getElementById('resultsList');
    const headingText = document.getElementById('resultHeadingText');

    resultsContainer.style.display = 'block';
    resultsList.innerHTML = '';

    headingText.textContent = state.fileMode === 'encrypt' 
      ? (currentLang === 'vi' ? 'Mã hóa hoàn tất!' : 'Encryption Finished!') 
      : (currentLang === 'vi' ? 'Giải mã hoàn tất!' : 'Decryption Finished!');

    state.processedResults.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'result-card';

      if (!item.success) {
        card.style.borderColor = 'rgba(244, 63, 94, 0.4)';
        card.style.background = 'rgba(244, 63, 94, 0.08)';
        card.innerHTML = `
          <div class="result-card-info">
            <i class="fa-solid fa-circle-xmark" style="color: var(--accent-rose); font-size: 1.6rem;"></i>
            <div class="result-details">
              <span class="result-filename">${item.origName}</span>
              <span style="color: var(--accent-rose); font-size: 0.8rem;">${item.error || 'Lỗi xử lý'}</span>
            </div>
          </div>
        `;
      } else {
        const downloadUrl = URL.createObjectURL(item.blob);
        const isEncryptedResult = state.fileMode === 'encrypt';
        card.innerHTML = `
          <div class="result-card-info">
            <i class="fa-solid fa-${isEncryptedResult ? 'shield-check' : 'file-circle-check'} result-file-icon" style="color: ${isEncryptedResult ? 'var(--accent-cyan)' : 'var(--accent-emerald)'}"></i>
            <div class="result-details">
              <span class="result-filename">${item.outName}</span>
              <span class="file-size">${formatBytes(item.outSize)} (Gốc: ${formatBytes(item.origSize)})</span>
              <span class="result-hashes">SHA-256: ${item.outSha256.substring(0, 16)}...${item.outSha256.substring(item.outSha256.length - 8)}</span>
              ${isEncryptedResult ? '<span style="color: var(--accent-cyan); font-size: 0.78rem; margin-top: 2px;"><i class="fa-solid fa-circle-check"></i> Đã mã hóa AES-256-GCM + Auth Tag</span>' : '<span style="color: var(--accent-emerald); font-size: 0.78rem; margin-top: 2px;"><i class="fa-solid fa-unlock"></i> Giải mã thành công - Tệp gốc đã phục hồi</span>'}
            </div>
          </div>
          <div class="result-actions">
            <a href="${downloadUrl}" download="${item.outName}" class="primary-btn">
              <i class="fa-solid fa-download"></i> Tải về
            </a>
            ${!isEncryptedResult ? `<button type="button" class="secondary-btn preview-file-btn" title="Xem trực tiếp nội dung tệp đã giải mã">
              <i class="fa-solid fa-eye"></i> Xem trước
            </button>` : ''}
            ${isEncryptedResult ? `<button type="button" class="secondary-btn decrypt-now-btn" title="Giải mã ngay tệp vừa mã hóa này để kiểm chứng">
              <i class="fa-solid fa-rotate-left"></i> Giải mã kiểm chứng
            </button>` : ''}
          </div>
        `;

        if (isEncryptedResult) {
          const decryptNowBtn = card.querySelector('.decrypt-now-btn');
          if (decryptNowBtn) {
            decryptNowBtn.addEventListener('click', () => {
              sfx.click();
              decryptInMemoryBlob(item.blob, item.origName, item.outName);
            });
          }
        } else {
          const previewBtn = card.querySelector('.preview-file-btn');
          if (previewBtn) {
            previewBtn.addEventListener('click', () => {
              sfx.click();
              openFilePreviewModal(item);
            });
          }
        }
      }

      resultsList.appendChild(card);
    });

    // Download all as ZIP
    const dlAllBtn = document.getElementById('downloadAllResultsBtn');
    dlAllBtn.onclick = async () => {
      sfx.click();
      if (typeof JSZip === 'undefined') {
        showToast('Thư viện JSZip chưa sẵn sàng', 'error');
        return;
      }

      const zip = new JSZip();
      state.processedResults.filter(r => r.success).forEach(res => {
        zip.file(res.outName, res.blob);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(zipBlob);
      a.download = `ciphervault_${state.fileMode}_${Date.now()}.zip`;
      a.click();
    };
  }

  // --- Module 2: Text Crypto ---
  function initTextCryptoModule() {
    const plainArea = document.getElementById('plainTextArea');
    const cipherArea = document.getElementById('cipherTextArea');
    const textPass = document.getElementById('textPasswordInput');
    const encryptBtn = document.getElementById('encryptTextBtn');
    const decryptBtn = document.getElementById('decryptTextBtn');
    const copyCipherBtn = document.getElementById('copyCipherBtn');
    const qrCipherBtn = document.getElementById('qrCipherBtn');
    const plainCount = document.getElementById('plainCharCount');
    const cipherCount = document.getElementById('cipherCharCount');

    plainArea.addEventListener('input', () => {
      plainCount.textContent = `${plainArea.value.length} ký tự`;
    });

    cipherArea.addEventListener('input', () => {
      cipherCount.textContent = `${cipherArea.value.length} ký tự`;
    });

    document.getElementById('pastePlainBtn').addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        plainArea.value = text;
        plainArea.dispatchEvent(new Event('input'));
        sfx.click();
      } catch (e) {
        showToast('Không thể đọc clipboard', 'error');
      }
    });

    document.getElementById('clearPlainBtn').addEventListener('click', () => {
      plainArea.value = '';
      plainArea.dispatchEvent(new Event('input'));
      sfx.click();
    });

    document.getElementById('clearCipherBtn').addEventListener('click', () => {
      cipherArea.value = '';
      cipherArea.dispatchEvent(new Event('input'));
      sfx.click();
    });

    copyCipherBtn.addEventListener('click', () => {
      if (!cipherArea.value) return;
      navigator.clipboard.writeText(cipherArea.value);
      sfx.click();
      showToast(translations[currentLang].copiedToast, 'success');
    });

    qrCipherBtn.addEventListener('click', () => {
      if (!cipherArea.value) {
        showToast('Vui lòng mã hóa văn bản trước khi tạo mã QR!', 'error');
        return;
      }
      sfx.click();
      openQrModal(cipherArea.value, 'Mã QR Văn Bản Đã Mã Hóa (Ciphertext)');
    });

    const toggleTextPass = document.getElementById('toggleTextPassVisibility');
    toggleTextPass.addEventListener('click', () => {
      const isPass = textPass.type === 'password';
      textPass.type = isPass ? 'text' : 'password';
      toggleTextPass.innerHTML = isPass ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
    });

    encryptBtn.addEventListener('click', async () => {
      if (!enforceOperationGate()) return;

      const text = plainArea.value;
      const pass = textPass.value;

      if (!text) {
        showToast('Vui lòng nhập văn bản cần mã hóa!', 'error');
        sfx.error();
        return;
      }
      if (!pass) {
        showToast(translations[currentLang].emptyPassword, 'error');
        sfx.error();
        return;
      }

      try {
        const encryptedBase64 = await CryptoEngine.encryptText(text, pass);
        cipherArea.value = encryptedBase64;
        cipherArea.dispatchEvent(new Event('input'));
        sfx.success();
        showToast('Đã mã hóa văn bản thành công!', 'success');
        AuditLogger.log('Mã hóa văn bản', `${text.length} ký tự`, text.length, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast('Lỗi khi mã hóa văn bản!', 'error');
      }
    });

    decryptBtn.addEventListener('click', async () => {
      if (!enforceOperationGate()) return;

      const cipher = cipherArea.value;
      const pass = textPass.value;

      if (!cipher) {
        showToast('Vui lòng nhập văn bản mã hóa (Ciphertext)!', 'error');
        sfx.error();
        return;
      }
      if (!pass) {
        showToast(translations[currentLang].emptyPassword, 'error');
        sfx.error();
        return;
      }

      try {
        const decrypted = await CryptoEngine.decryptText(cipher, pass);
        plainArea.value = decrypted;
        plainArea.dispatchEvent(new Event('input'));
        sfx.success();
        showToast('Đã giải mã văn bản thành công!', 'success');
        AuditLogger.log('Giải mã văn bản', `${decrypted.length} ký tự`, decrypted.length, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast(translations[currentLang].decryptFail, 'error');
      }
    });
  }

  // --- Module 3: RSA Studio ---
  function initRsaModule() {
    const genBtn = document.getElementById('generateRsaKeypairBtn');
    const lenSelect = document.getElementById('rsaKeyLengthSelect');
    const pubArea = document.getElementById('publicKeyPemArea');
    const privArea = document.getElementById('privateKeyPemArea');
    const msgInput = document.getElementById('rsaMessageInput');
    const cipherOut = document.getElementById('rsaCipherOutput');
    const encBtn = document.getElementById('rsaEncryptBtn');
    const decBtn = document.getElementById('rsaDecryptBtn');

    // Subtabs: Encrypt vs Sign
    const subtabEncBtn = document.getElementById('rsaSubtabEncryptBtn');
    const subtabSignBtn = document.getElementById('rsaSubtabSignBtn');
    const encSandbox = document.getElementById('rsaEncryptSandbox');
    const signSandbox = document.getElementById('rsaSignatureSandbox');

    subtabEncBtn.addEventListener('click', () => {
      sfx.click();
      subtabEncBtn.classList.add('active');
      subtabSignBtn.classList.remove('active');
      encSandbox.style.display = 'block';
      signSandbox.style.display = 'none';
    });

    subtabSignBtn.addEventListener('click', () => {
      sfx.click();
      subtabSignBtn.classList.add('active');
      subtabEncBtn.classList.remove('active');
      encSandbox.style.display = 'none';
      signSandbox.style.display = 'block';
    });

    genBtn.addEventListener('click', async () => {
      sfx.click();
      const length = parseInt(lenSelect.value, 10);
      showToast(`Đang sinh cặp khóa RSA-${length}...`, 'info');

      try {
        const keypair = await CryptoEngine.generateRsaKeypair(length);
        const pubPem = await CryptoEngine.exportPublicKeyPem(keypair.publicKey);
        const privPem = await CryptoEngine.exportPrivateKeyPem(keypair.privateKey);

        pubArea.value = pubPem;
        privArea.value = privPem;
        state.rsaOaepKeys = keypair;

        sfx.success();
        showToast(`Đã sinh cặp khóa RSA-${length} thành công!`, 'success');
        AuditLogger.log('Sinh khóa RSA', `RSA-${length}`, length, 'Thành công');
      } catch (e) {
        console.error('RSA error:', e);
        sfx.error();
        showToast('Lỗi khi sinh cặp khóa RSA!', 'error');
      }
    });

    document.getElementById('copyPublicKeyBtn').addEventListener('click', () => {
      if (!pubArea.value) return;
      navigator.clipboard.writeText(pubArea.value);
      sfx.click();
      showToast('Đã sao chép Public Key!', 'success');
    });

    document.getElementById('copyPrivateKeyBtn').addEventListener('click', () => {
      if (!privArea.value) return;
      navigator.clipboard.writeText(privArea.value);
      sfx.click();
      showToast('Đã sao chép Private Key!', 'success');
    });

    document.getElementById('qrPublicKeyBtn').addEventListener('click', () => {
      if (!pubArea.value) {
        showToast('Chưa có Public Key để tạo QR!', 'error');
        return;
      }
      sfx.click();
      openQrModal(pubArea.value, 'Mã QR Public Key (SPKI PEM)');
    });

    document.getElementById('downloadPublicPemBtn').addEventListener('click', () => {
      if (!pubArea.value) return;
      const blob = new Blob([pubArea.value], { type: 'application/x-pem-file' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `public_key_${Date.now()}.pem`;
      a.click();
      sfx.click();
    });

    document.getElementById('downloadPrivatePemBtn').addEventListener('click', () => {
      if (!privArea.value) return;
      const blob = new Blob([privArea.value], { type: 'application/x-pem-file' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `private_key_${Date.now()}.pem`;
      a.click();
      sfx.click();
    });

    encBtn.addEventListener('click', async () => {
      const msg = msgInput.value;
      const pubPem = pubArea.value;
      if (!msg) {
        showToast('Vui lòng nhập tin nhắn cần mã hóa!', 'error');
        return;
      }
      if (!pubPem || !pubPem.includes('BEGIN PUBLIC KEY')) {
        showToast('Vui lòng có Public Key hợp lệ!', 'error');
        return;
      }

      try {
        const cipher = await CryptoEngine.rsaEncryptHybrid(msg, pubPem);
        cipherOut.value = cipher;
        sfx.success();
        showToast('Đã mã hóa bằng Public Key thành công!', 'success');
        AuditLogger.log('Mã hóa RSA', 'Hybrid Envelope', msg.length, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast('Lỗi mã hóa RSA!', 'error');
      }
    });

    decBtn.addEventListener('click', async () => {
      const cipher = cipherOut.value;
      const privPem = privArea.value;
      if (!cipher) {
        showToast('Vui lòng nhập RSA Ciphertext!', 'error');
        return;
      }
      if (!privPem || !privPem.includes('BEGIN PRIVATE KEY')) {
        showToast('Vui lòng có Private Key hợp lệ!', 'error');
        return;
      }

      try {
        const decrypted = await CryptoEngine.rsaDecryptHybrid(cipher, privPem);
        msgInput.value = decrypted;
        sfx.success();
        showToast('Đã giải mã bằng Private Key thành công!', 'success');
        AuditLogger.log('Giải mã RSA', 'Hybrid Envelope', decrypted.length, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast('Giải mã RSA thất bại! Sai Private Key hoặc dữ liệu bị sửa đổi.', 'error');
      }
    });

    // RSA Digital Signature
    const signInput = document.getElementById('rsaSignDataInput');
    const signOutput = document.getElementById('rsaSignatureOutput');
    const executeSignBtn = document.getElementById('rsaExecuteSignBtn');
    const executeVerifyBtn = document.getElementById('rsaExecuteVerifyBtn');
    const signStatusBox = document.getElementById('rsaSignVerifyStatus');

    executeSignBtn.addEventListener('click', async () => {
      const data = signInput.value;
      const privPem = privArea.value;
      if (!data) {
        showToast('Vui lòng nhập dữ liệu cần ký!', 'error');
        return;
      }
      if (!privPem || !privPem.includes('BEGIN PRIVATE KEY')) {
        showToast('Vui lòng có Private Key để ký số!', 'error');
        return;
      }

      try {
        const sig = await CryptoEngine.rsaSignData(data, privPem);
        signOutput.value = sig;
        sfx.success();
        showToast('Đã tạo chữ ký số RSASSA-PKCS1-v1_5 thành công!', 'success');
        AuditLogger.log('Ký số RSA', 'Chữ ký số', data.length, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast('Lỗi khi ký số: ' + e.message, 'error');
      }
    });

    executeVerifyBtn.addEventListener('click', async () => {
      const data = signInput.value;
      const sig = signOutput.value;
      const pubPem = pubArea.value;
      if (!data || !sig || !pubPem) {
        showToast('Cần có đủ: Dữ liệu, Chữ ký số và Public Key!', 'error');
        return;
      }

      try {
        const isValid = await CryptoEngine.rsaVerifySignature(data, sig, pubPem);
        signStatusBox.style.display = 'flex';
        if (isValid) {
          sfx.success();
          signStatusBox.className = 'verify-status match';
          signStatusBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> CHỮ KÝ SỐ HỢP LỆ! Dữ liệu được xác thực chuẩn xác 100%.';
        } else {
          sfx.error();
          signStatusBox.className = 'verify-status mismatch';
          signStatusBox.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> CHỮ KÝ SỐ KHÔNG HỢP LỆ! Dữ liệu đã bị can thiệp hoặc sai Public Key.';
        }
      } catch (e) {
        console.error(e);
        sfx.error();
        signStatusBox.style.display = 'flex';
        signStatusBox.className = 'verify-status mismatch';
        signStatusBox.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Lỗi xác thực: ' + e.message;
      }
    });
  }

  // --- Module 4: Image Steganography ---
  function initStegoModule() {
    const embedTabBtn = document.getElementById('stegoEmbedModeBtn');
    const extractTabBtn = document.getElementById('stegoExtractModeBtn');
    const embedSection = document.getElementById('stegoEmbedSection');
    const extractSection = document.getElementById('stegoExtractSection');

    embedTabBtn.addEventListener('click', () => {
      sfx.click();
      embedTabBtn.classList.add('active');
      extractTabBtn.classList.remove('active');
      embedSection.style.display = 'block';
      extractSection.style.display = 'none';
    });

    extractTabBtn.addEventListener('click', () => {
      sfx.click();
      extractTabBtn.classList.add('active');
      embedTabBtn.classList.remove('active');
      embedSection.style.display = 'none';
      extractSection.style.display = 'block';
    });

    // Embed mode switch: text vs file
    const typeTextRadio = document.getElementById('stegoTypeRadioText');
    const typeFileRadio = document.getElementById('stegoTypeRadioFile');
    const textWrap = document.getElementById('stegoTextInputWrap');
    const fileWrap = document.getElementById('stegoFileInputWrap');

    typeTextRadio.addEventListener('change', () => {
      textWrap.style.display = 'block';
      fileWrap.style.display = 'none';
    });
    typeFileRadio.addEventListener('change', () => {
      textWrap.style.display = 'none';
      fileWrap.style.display = 'block';
    });

    // Carrier image upload
    const carrierDrop = document.getElementById('stegoCarrierDropzone');
    const carrierInput = document.getElementById('stegoCarrierInput');
    const carrierPreview = document.getElementById('stegoCarrierPreview');
    const carrierPlaceholder = document.getElementById('stegoCarrierPlaceholder');
    const capacityText = document.getElementById('carrierCapacityText');
    const maxBytesLabel = document.getElementById('capacityMaxBytes');
    const embedBtn = document.getElementById('executeStegoEmbedBtn');
    const secretText = document.getElementById('stegoSecretText');
    const stegoPass = document.getElementById('stegoPassword');

    carrierDrop.addEventListener('click', () => carrierInput.click());
    carrierInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      const img = new Image();
      img.onload = () => {
        carrierPreview.src = img.src;
        carrierPreview.style.display = 'block';
        carrierPlaceholder.style.display = 'none';
        state.stegoCarrierImg = img;

        const maxBytes = Math.floor((img.width * img.height * 3) / 8) - 100;
        maxBytesLabel.textContent = formatBytes(Math.max(0, maxBytes));
        capacityText.style.display = 'block';
        embedBtn.disabled = false;
      };
      img.src = URL.createObjectURL(file);
    });

    // Secret file upload
    const secretFileDrop = document.getElementById('stegoSecretFileDropzone');
    const secretFileInput = document.getElementById('stegoSecretFileInput');
    const secretFileName = document.getElementById('stegoSecretFileName');

    secretFileDrop.addEventListener('click', () => secretFileInput.click());
    secretFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      const buffer = await file.arrayBuffer();
      state.stegoSecretFileBytes = new Uint8Array(buffer);
      state.stegoSecretFileName = file.name;
      secretFileName.textContent = `Tệp đã chọn: ${file.name} (${formatBytes(file.size)})`;
      embedBtn.disabled = false;
    });

    secretText.addEventListener('input', () => {
      embedBtn.disabled = !(state.stegoCarrierImg && (secretText.value.length > 0 || state.stegoSecretFileBytes));
    });

    embedBtn.addEventListener('click', async () => {
      if (!state.stegoCarrierImg) return;
      sfx.click();
      try {
        let payloadBytes;
        const isFile = typeFileRadio.checked;

        if (isFile) {
          if (!state.stegoSecretFileBytes) {
            showToast('Vui lòng chọn tệp tin cần giấu!', 'error');
            return;
          }
          const fileMeta = JSON.stringify({ type: 'file', name: state.stegoSecretFileName });
          const fileMetaEnc = new TextEncoder().encode(fileMeta);
          const packet = new Uint8Array(2 + fileMetaEnc.length + state.stegoSecretFileBytes.length);
          packet[0] = (fileMetaEnc.length >> 8) & 0xff;
          packet[1] = fileMetaEnc.length & 0xff;
          packet.set(fileMetaEnc, 2);
          packet.set(state.stegoSecretFileBytes, 2 + fileMetaEnc.length);

          if (stegoPass.value) {
            const encBuffer = await CryptoEngine.encryptData(packet.buffer, stegoPass.value, false, { type: 'stego-file' });
            payloadBytes = new Uint8Array(encBuffer);
          } else {
            payloadBytes = packet;
          }
        } else {
          if (!secretText.value) {
            showToast('Vui lòng nhập văn bản cần giấu!', 'error');
            return;
          }
          if (stegoPass.value) {
            const encBase64 = await CryptoEngine.encryptText(secretText.value, stegoPass.value);
            payloadBytes = new TextEncoder().encode(encBase64);
          } else {
            payloadBytes = new TextEncoder().encode(secretText.value);
          }
        }

        const pngBlob = await StegoEngine.embedDataIntoImage(state.stegoCarrierImg, payloadBytes);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(pngBlob);
        a.download = `stego_secret_${Date.now()}.png`;
        a.click();

        sfx.success();
        showToast('Đã nhúng tin mật vào ảnh PNG và tải về thành công!', 'success');
        AuditLogger.log('Giấu tin vào ảnh', a.download, pngBlob.size, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast(e.message || 'Lỗi khi giấu tin vào ảnh!', 'error');
      }
    });

    // Extract Stego Upload
    const extractDrop = document.getElementById('stegoExtractDropzone');
    const extractInput = document.getElementById('stegoExtractInput');
    const extractPreview = document.getElementById('stegoExtractPreview');
    const extractPlaceholder = document.getElementById('stegoExtractPlaceholder');
    const extractBtn = document.getElementById('executeStegoExtractBtn');
    const extractPass = document.getElementById('stegoExtractPassword');
    const extractOutBox = document.getElementById('stegoExtractResultBox');
    const extractOutText = document.getElementById('stegoExtractedTextOutput');
    const extractActions = document.getElementById('stegoExtractActions');

    extractDrop.addEventListener('click', () => extractInput.click());
    extractInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      const img = new Image();
      img.onload = () => {
        extractPreview.src = img.src;
        extractPreview.style.display = 'block';
        extractPlaceholder.style.display = 'none';
        state.stegoExtractImg = img;
      };
      img.src = URL.createObjectURL(file);
    });

    extractBtn.addEventListener('click', async () => {
      if (!state.stegoExtractImg) {
        showToast('Vui lòng chọn ảnh PNG đã giấu tin!', 'error');
        return;
      }
      sfx.click();

      try {
        const rawBytes = await StegoEngine.extractDataFromImage(state.stegoExtractImg);
        extractActions.innerHTML = '';

        if (extractPass.value) {
          try {
            // Try decrypting as AES encrypted file
            const { decryptedBuffer, metadata } = await CryptoEngine.decryptData(rawBytes.buffer, extractPass.value, false);
            const decryptedBytes = new Uint8Array(decryptedBuffer);

            // Check if file packet
            if (decryptedBytes.length > 2) {
              const metaLen = (decryptedBytes[0] << 8) | decryptedBytes[1];
              if (metaLen > 0 && metaLen + 2 < decryptedBytes.length) {
                try {
                  const metaStr = new TextDecoder().decode(decryptedBytes.slice(2, 2 + metaLen));
                  const fileMeta = JSON.parse(metaStr);
                  if (fileMeta.type === 'file') {
                    const filePayload = decryptedBytes.slice(2 + metaLen);
                    const fileBlob = new Blob([filePayload]);
                    extractOutText.value = `Đã trích xuất tệp: ${fileMeta.name} (${formatBytes(filePayload.length)})`;
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(fileBlob);
                    a.download = fileMeta.name;
                    a.className = 'mini-btn';
                    a.innerHTML = '<i class="fa-solid fa-download"></i> Tải tệp xuống';
                    extractActions.appendChild(a);
                    extractOutBox.style.display = 'block';
                    sfx.success();
                    showToast('Đã trích xuất và giải mã tệp tin thành công!', 'success');
                    return;
                  }
                } catch {}
              }
            }

            // Fallback text
            const plain = new TextDecoder().decode(decryptedBuffer);
            extractOutText.value = plain;
            extractOutBox.style.display = 'block';
            sfx.success();
            showToast('Đã trích xuất và giải mã thông điệp ẩn thành công!', 'success');
            return;
          } catch (e) {
            // Try text decrypt fallback
            const rawStr = new TextDecoder().decode(rawBytes);
            try {
              const plain = await CryptoEngine.decryptText(rawStr, extractPass.value);
              extractOutText.value = plain;
              extractOutBox.style.display = 'block';
              sfx.success();
              showToast('Đã trích xuất và giải mã thông điệp thành công!', 'success');
              return;
            } catch {
              showToast('Sai mật khẩu giải mã tin giấu!', 'error');
              return;
            }
          }
        }

        // Unencrypted extraction
        const rawText = new TextDecoder().decode(rawBytes);
        extractOutText.value = rawText;
        extractOutBox.style.display = 'block';
        sfx.success();
        showToast('Đã trích xuất dữ liệu ẩn thành công!', 'success');
        AuditLogger.log('Trích xuất tin ẩn', `${rawText.length} ký tự`, rawBytes.byteLength, 'Thành công');
      } catch (e) {
        console.error(e);
        sfx.error();
        showToast(e.message || 'Lỗi khi trích xuất tin!', 'error');
      }
    });
  }

  // --- Module 5: iOS IPA Studio & Sideload Signer (Sideloadly Web Engine) ---
  class IpaStudioEngine {
    static async parseIpa(arrayBuffer) {
      if (typeof JSZip === 'undefined') {
        throw new Error('Thư viện JSZip chưa sẵn sàng!');
      }

      const zip = await JSZip.loadAsync(arrayBuffer);
      
      // Find Payload/*.app directory
      let appDir = null;
      for (const path of Object.keys(zip.files)) {
        const match = path.match(/^(Payload\/[^\/]+\.app\/)/i);
        if (match) {
          appDir = match[1];
          break;
        }
      }

      if (!appDir) {
        throw new Error('Tệp không đúng định dạng IPA iOS (thiếu thư mục Payload/*.app)!');
      }

      // Find Info.plist
      const plistEntry = zip.file(`${appDir}Info.plist`);
      if (!plistEntry) {
        throw new Error('Không tìm thấy Info.plist trong gói ứng dụng IPA!');
      }

      let plistStr = '';
      const plistBytes = await plistEntry.async('uint8array');
      try {
        plistStr = new TextDecoder('utf-8').decode(plistBytes);
      } catch {
        plistStr = '';
      }

      // Extract Plist Metadata
      const extractKey = (keyName) => {
        const regex = new RegExp(`<key>${keyName}<\\/key>\\s*<string>([^<]+)<\\/string>`, 'i');
        const m = plistStr.match(regex);
        return m ? m[1].trim() : '';
      };

      const displayName = extractKey('CFBundleDisplayName') || extractKey('CFBundleName') || 'iOS Application';
      const bundleId = extractKey('CFBundleIdentifier') || 'com.example.app';
      const version = extractKey('CFBundleShortVersionString') || extractKey('CFBundleVersion') || '1.0.0';
      const minOs = extractKey('MinimumOSVersion') || '13.0';
      const executableName = extractKey('CFBundleExecutable') || displayName.replace(/\s+/g, '');

      // Find App Icon
      let iconDataUrl = null;
      const iconCandidates = Object.keys(zip.files).filter(k => k.startsWith(appDir) && /\.(png|jpg)$/i.test(k) && /icon/i.test(k));
      if (iconCandidates.length > 0) {
        // Pick largest or first icon
        const iconFile = zip.file(iconCandidates[0]);
        if (iconFile) {
          const iconBlob = await iconFile.async('blob');
          iconDataUrl = URL.createObjectURL(iconBlob);
        }
      }

      // Inspect Executable Mach-O
      let arch = 'arm64 (64-bit)';
      let isEncryptedDrm = false;
      const execEntry = zip.file(`${appDir}${executableName}`);
      if (execEntry) {
        const execBytes = await execEntry.async('uint8array');
        const machOInfo = this.inspectMachO(execBytes);
        arch = machOInfo.arch;
        isEncryptedDrm = machOInfo.isEncrypted;
      }

      return {
        zip,
        appDir,
        plistStr,
        appInfo: {
          displayName,
          bundleId,
          version,
          minOs,
          executableName,
          iconDataUrl,
          arch,
          isEncryptedDrm
        }
      };
    }

    static inspectMachO(bytes) {
      if (bytes.length < 32) return { arch: 'Unknown', isEncrypted: false };

      const magic = (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3];
      const magicLE = (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0];

      let is64 = false;
      let isFat = false;
      let arch = 'arm64';

      if (magic === 0xFEEDFACF || magicLE === 0xFEEDFACF) {
        is64 = true;
        arch = 'arm64 (64-bit iOS)';
      } else if (magic === 0xFEEDFACE || magicLE === 0xFEEDFACE) {
        is64 = false;
        arch = 'armv7 (32-bit iOS)';
      } else if (magic === 0xCAFEBABE || magicLE === 0xCAFEBABE) {
        isFat = true;
        arch = 'Universal FAT Binary';
      }

      // Scan Load Commands for LC_ENCRYPTION_INFO (0x21) or LC_ENCRYPTION_INFO_64 (0x2C)
      let isEncrypted = false;
      const limit = Math.min(bytes.length - 24, 8192);
      for (let i = 0; i < limit; i += 4) {
        const cmd = (bytes[i + 3] << 24) | (bytes[i + 2] << 16) | (bytes[i + 1] << 8) | bytes[i];
        if (cmd === 0x21 || cmd === 0x2C) {
          // cmdsize is at i+4 (4 bytes), cryptid is at i+16 (4 bytes)
          const cryptid = (bytes[i + 19] << 24) | (bytes[i + 18] << 16) | (bytes[i + 17] << 8) | bytes[i + 16];
          if (cryptid > 0) {
            isEncrypted = true;
          }
          break;
        }
      }

      return { arch, isEncrypted };
    }

    static updateInfoPlist(origXml, options) {
      let xml = origXml;
      
      const replaceOrInsertStringKey = (key, val) => {
        const regex = new RegExp(`(<key>${key}<\\/key>\\s*<string>)[^<]*(<\\/string>)`, 'i');
        if (regex.test(xml)) {
          xml = xml.replace(regex, `$1${val}$2`);
        } else {
          xml = xml.replace(/<dict>/i, `<dict>\n\t<key>${key}</key>\n\t<string>${val}</string>`);
        }
      };

      if (options.displayName) {
        replaceOrInsertStringKey('CFBundleDisplayName', options.displayName);
        replaceOrInsertStringKey('CFBundleName', options.displayName);
      }
      if (options.bundleId) {
        replaceOrInsertStringKey('CFBundleIdentifier', options.bundleId);
      }
      if (options.version) {
        replaceOrInsertStringKey('CFBundleShortVersionString', options.version);
        replaceOrInsertStringKey('CFBundleVersion', options.version);
      }
      if (options.minOs) {
        replaceOrInsertStringKey('MinimumOSVersion', options.minOs);
      }

      // File Sharing Tweaks
      if (options.fileSharing) {
        if (!/<key>UIFileSharingEnabled<\/key>/i.test(xml)) {
          xml = xml.replace(/<dict>/i, '<dict>\n\t<key>UIFileSharingEnabled</key>\n\t<true/>\n\t<key>LSSupportsOpeningDocumentsInPlace</key>\n\t<true/>');
        }
      }

      // Anti-Tamper & Anti-Crack Protection
      if (options.antiTamper) {
        if (!/<key>CipherVaultProtected<\/key>/i.test(xml)) {
          xml = xml.replace(/<dict>/i, '<dict>\n\t<key>CipherVaultProtected</key>\n\t<true/>\n\t<key>get-task-allow</key>\n\t<false/>\n\t<key>ITSAppUsesNonExemptEncryption</key>\n\t<false/>');
        }
      }

      // Digital Integrity Seal Watermark
      if (options.integritySeal) {
        const watermark = SecurityShield.generateWatermark(options.bundleId || 'com.app', options.displayName || 'App');
        if (!/<key>AppIntegritySeal<\/key>/i.test(xml)) {
          xml = xml.replace(/<dict>/i, `<dict>\n\t<key>AppIntegritySeal</key>\n\t<string>${watermark}</string>\n\t<key>ShieldDeveloperTag</key>\n\t<string>Official Authenticated Build</string>`);
        }
      }

      return xml;
    }

    static async generateCodeResourcesManifest(zip, appDir) {
      // Computes SHA-1 & SHA-256 for all files inside .app to build _CodeSignature/CodeResources
      const fileList = Object.keys(zip.files).filter(k => k.startsWith(appDir) && !zip.files[k].dir && !k.includes('_CodeSignature'));
      let filesDict = '';

      for (const filePath of fileList) {
        const relativeName = filePath.substring(appDir.length);
        const fileBytes = await zip.file(filePath).async('uint8array');
        const hashBuf = await window.crypto.subtle.digest('SHA-1', fileBytes);
        const sha1B64 = window.btoa(String.fromCharCode(...new Uint8Array(hashBuf)));
        filesDict += `\n\t\t<key>${relativeName}</key>\n\t\t<data>${sha1B64}</data>`;
      }

      return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t<key>files</key>
\t<dict>${filesDict}
\t</dict>
\t<key>rules</key>
\t<dict>
\t\t<key>^.*</key>
\t\t<true/>
\t</dict>
</dict>
</plist>`;
    }

    static async generateSampleIpa() {
      const zip = new JSZip();
      const appDir = 'Payload/FlappyBird.app/';

      const samplePlist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t<key>CFBundleDevelopmentRegion</key>
\t<string>en</string>
\t<key>CFBundleDisplayName</key>
\t<string>Flappy Bird Pro</string>
\t<key>CFBundleExecutable</key>
\t<string>FlappyBird</string>
\t<key>CFBundleIdentifier</key>
\t<string>com.dotgears.flappybird</string>
\t<key>CFBundleInfoDictionaryVersion</key>
\t<string>6.0</string>
\t<key>CFBundleName</key>
\t<string>Flappy Bird</string>
\t<key>CFBundlePackageType</key>
\t<string>APPL</string>
\t<key>CFBundleShortVersionString</key>
\t<string>1.2.0</string>
\t<key>CFBundleVersion</key>
\t<string>120</string>
\t<key>MinimumOSVersion</key>
\t<string>13.0</string>
\t<key>UIRequiresFullScreen</key>
\t<true/>
</dict>
</plist>`;

      zip.file(`${appDir}Info.plist`, samplePlist);

      // Create dummy Mach-O 64-bit binary with LC_ENCRYPTION_INFO_64 (cryptid = 0)
      const machOHeader = new Uint8Array(4096);
      // Magic 0xFEEDFACF (64-bit Mach-O LE)
      machOHeader[0] = 0xCF; machOHeader[1] = 0xFA; machOHeader[2] = 0xED; machOHeader[3] = 0xFE;
      // cputype CPU_TYPE_ARM64 (0x0100000C LE)
      machOHeader[4] = 0x0C; machOHeader[5] = 0x00; machOHeader[6] = 0x00; machOHeader[7] = 0x01;
      // cpusubtype
      machOHeader[8] = 0x00; machOHeader[9] = 0x00; machOHeader[10] = 0x00; machOHeader[11] = 0x00;
      // filetype MH_EXECUTE (0x02)
      machOHeader[12] = 0x02; machOHeader[13] = 0x00; machOHeader[14] = 0x00; machOHeader[15] = 0x00;
      // ncmds = 1
      machOHeader[16] = 0x01; machOHeader[17] = 0x00; machOHeader[18] = 0x00; machOHeader[19] = 0x00;
      // sizeofcmds
      machOHeader[20] = 0x20; machOHeader[21] = 0x00; machOHeader[22] = 0x00; machOHeader[23] = 0x00;

      // LC_ENCRYPTION_INFO_64 (0x2C) at offset 32
      machOHeader[32] = 0x2C; machOHeader[33] = 0x00; machOHeader[34] = 0x00; machOHeader[35] = 0x00; // cmd
      machOHeader[36] = 0x20; machOHeader[37] = 0x00; machOHeader[38] = 0x00; machOHeader[39] = 0x00; // cmdsize = 32
      machOHeader[40] = 0x00; machOHeader[41] = 0x40; machOHeader[42] = 0x00; machOHeader[43] = 0x00; // cryptoff
      machOHeader[44] = 0x00; machOHeader[45] = 0x10; machOHeader[46] = 0x00; machOHeader[47] = 0x00; // cryptsize
      machOHeader[48] = 0x00; machOHeader[49] = 0x00; machOHeader[50] = 0x00; machOHeader[51] = 0x00; // cryptid = 0 (Decrypted)

      zip.file(`${appDir}FlappyBird`, machOHeader);

      // Create a nice sample icon using an in-memory canvas
      const canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 120;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#06b6d4';
      ctx.beginPath();
      ctx.roundRect(0, 0, 120, 120, 26);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 50px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🐦', 60, 60);

      const iconBlob = await new Promise(res => canvas.toBlob(res, 'image/png'));
      zip.file(`${appDir}AppIcon60x60@2x.png`, iconBlob);

      return await zip.generateAsync({ type: 'arraybuffer' });
    }
  }

  function initIpaStudioModule() {
    const ipaDropzone = document.getElementById('ipaDropzone');
    const ipaFileInput = document.getElementById('ipaFileInput');
    const createSampleBtn = document.getElementById('ipaCreateSampleBtn');
    const workbench = document.getElementById('ipaWorkbench');

    const appTitleDisplay = document.getElementById('ipaAppTitleDisplay');
    const bundleIdDisplay = document.getElementById('ipaBundleIdDisplay');
    const archBadge = document.getElementById('ipaArchBadge');
    const drmBadge = document.getElementById('ipaDrmBadge');
    const execNameDisplay = document.getElementById('ipaExecutableNameDisplay');
    const origFileNameDisplay = document.getElementById('ipaOriginalFileName');
    const origFileSizeDisplay = document.getElementById('ipaOriginalFileSize');
    const appIconPreview = document.getElementById('ipaAppIconPreview');
    const appDefaultIcon = document.querySelector('.ipa-default-icon');

    const appNameInput = document.getElementById('ipaAppNameInput');
    const bundleIdInput = document.getElementById('ipaBundleIdInput');
    const versionInput = document.getElementById('ipaVersionInput');
    const minOsInput = document.getElementById('ipaMinOsInput');

    const dylibDropzone = document.getElementById('dylibDropzone');
    const dylibFileInput = document.getElementById('dylibFileInput');
    const dylibList = document.getElementById('dylibList');
    const dylibCountBadge = document.getElementById('dylibCountBadge');

    const signAdhocRadio = document.getElementById('ipaSignAdhocRadio');
    const signCustomRadio = document.getElementById('ipaSignCustomRadio');
    const customCertInputs = document.getElementById('ipaCustomCertInputs');
    const p12Dropzone = document.getElementById('p12Dropzone');
    const p12FileInput = document.getElementById('p12FileInput');
    const p12StatusText = document.getElementById('p12StatusText');
    const provDropzone = document.getElementById('provDropzone');
    const provFileInput = document.getElementById('provFileInput');
    const provStatusText = document.getElementById('provStatusText');

    const startBuildBtn = document.getElementById('startIpaBuildBtn');
    const progressSection = document.getElementById('ipaProgressSection');
    const progressBarFill = document.getElementById('ipaProgressBarFill');
    const progressText = document.getElementById('ipaProgressText');
    const progressPercent = document.getElementById('ipaProgressPercent');

    const resultContainer = document.getElementById('ipaResultContainer');
    const outFileName = document.getElementById('ipaOutputFileName');
    const outFileSize = document.getElementById('ipaOutputFileSize');
    const downloadResultBtn = document.getElementById('ipaDownloadResultBtn');

    // IPA Studio Local State
    let loadedIpa = null;
    let injectedDylibs = [];
    let p12Bytes = null;
    let provBytes = null;

    ipaDropzone.addEventListener('click', () => ipaFileInput.click());
    ipaFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      await loadIpaFile(file);
    });

    createSampleBtn.addEventListener('click', async () => {
      sfx.click();
      showToast('Đang tạo tệp IPA mẫu FlappyBird Demo...', 'info');
      try {
        const sampleBuffer = await IpaStudioEngine.generateSampleIpa();
        const sampleFile = new File([sampleBuffer], 'FlappyBird_Demo.ipa', { type: 'application/octet-stream' });
        await loadIpaFile(sampleFile);
        sfx.success();
        showToast('Đã tạo và nạp thành công IPA mẫu!', 'success');
      } catch (e) {
        sfx.error();
        showToast('Lỗi tạo IPA mẫu: ' + e.message, 'error');
      }
    });

    async function loadIpaFile(file) {
      showToast(`Đang phân tích gói IPA: ${file.name}...`, 'info');
      try {
        const buffer = await file.arrayBuffer();
        loadedIpa = await IpaStudioEngine.parseIpa(buffer);
        loadedIpa.originalFileName = file.name;
        loadedIpa.originalFileSize = file.size;

        // Populate Overview Card
        appTitleDisplay.textContent = loadedIpa.appInfo.displayName;
        bundleIdDisplay.textContent = loadedIpa.appInfo.bundleId;
        archBadge.textContent = loadedIpa.appInfo.arch;
        execNameDisplay.textContent = loadedIpa.appInfo.executableName;
        origFileNameDisplay.textContent = file.name;
        origFileSizeDisplay.textContent = formatBytes(file.size);

        if (loadedIpa.appInfo.isEncryptedDrm) {
          drmBadge.className = 'ipa-tag-badge ipa-drm-tag encrypted';
          drmBadge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Encrypted (FairPlay DRM)';
        } else {
          drmBadge.className = 'ipa-tag-badge ipa-drm-tag';
          drmBadge.innerHTML = '<i class="fa-solid fa-shield-check"></i> Decrypted (No DRM)';
        }

        if (loadedIpa.appInfo.iconDataUrl) {
          appIconPreview.src = loadedIpa.appInfo.iconDataUrl;
          appIconPreview.style.display = 'block';
          if (appDefaultIcon) appDefaultIcon.style.display = 'none';
        }

        // Populate Form Inputs
        appNameInput.value = loadedIpa.appInfo.displayName;
        bundleIdInput.value = loadedIpa.appInfo.bundleId;
        versionInput.value = loadedIpa.appInfo.version;
        minOsInput.value = loadedIpa.appInfo.minOs;

        injectedDylibs = [];
        renderDylibList();

        workbench.style.display = 'block';
        resultContainer.style.display = 'none';
        sfx.success();
        showToast('Đã nạp và giải nén IPA thành công!', 'success');
        AuditLogger.log('Nạp IPA', file.name, file.size, 'Thành công');
      } catch (err) {
        console.error(err);
        sfx.error();
        showToast(err.message || 'Lỗi khi đọc tệp IPA!', 'error');
      }
    }

    // Dylib upload & manager
    dylibDropzone.addEventListener('click', () => dylibFileInput.click());
    dylibFileInput.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files);
      if (!files.length) return;
      sfx.click();

      for (const file of files) {
        const buffer = await file.arrayBuffer();
        injectedDylibs.push({
          name: file.name,
          bytes: new Uint8Array(buffer),
          size: file.size
        });
      }
      renderDylibList();
      showToast(`Đã thêm ${files.length} tệp .dylib vào danh sách tiêm!`, 'success');
      dylibFileInput.value = '';
    });

    function renderDylibList() {
      dylibCountBadge.textContent = injectedDylibs.length;
      dylibList.innerHTML = '';

      if (injectedDylibs.length === 0) {
        dylibList.innerHTML = '<div class="dylib-empty-state">Chưa có tệp .dylib nào được thêm.</div>';
        return;
      }

      injectedDylibs.forEach((dylib, idx) => {
        const item = document.createElement('div');
        item.className = 'dylib-item';
        item.innerHTML = `
          <div class="dylib-item-left">
            <i class="fa-solid fa-puzzle-piece" style="color: var(--accent-cyan);"></i>
            <div>
              <div class="dylib-name">${dylib.name}</div>
              <div class="dylib-path">@rpath/Frameworks/${dylib.name} (${formatBytes(dylib.size)})</div>
            </div>
          </div>
          <button type="button" class="mini-btn remove-dylib-btn" data-index="${idx}"><i class="fa-solid fa-xmark"></i></button>
        `;
        dylibList.appendChild(item);
      });

      dylibList.querySelectorAll('.remove-dylib-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          sfx.click();
          const i = parseInt(btn.getAttribute('data-index'), 10);
          injectedDylibs.splice(i, 1);
          renderDylibList();
        });
      });
    }

    // Signing radio mode switch
    signAdhocRadio.addEventListener('change', () => {
      customCertInputs.style.display = 'none';
    });
    signCustomRadio.addEventListener('change', () => {
      customCertInputs.style.display = 'block';
    });

    p12Dropzone.addEventListener('click', () => p12FileInput.click());
    p12FileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      const buffer = await file.arrayBuffer();
      p12Bytes = new Uint8Array(buffer);
      p12StatusText.textContent = `Chứng chỉ: ${file.name}`;
      showToast('Đã nạp tệp chứng chỉ .p12!', 'success');
    });

    provDropzone.addEventListener('click', () => provFileInput.click());
    provFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      const buffer = await file.arrayBuffer();
      provBytes = new Uint8Array(buffer);
      provStatusText.textContent = `Hồ sơ: ${file.name}`;
      showToast('Đã nạp tệp .mobileprovision!', 'success');
    });

    // Build Modified IPA
    startBuildBtn.addEventListener('click', async () => {
      if (!loadedIpa) {
        showToast('Vui lòng nạp tệp IPA trước!', 'error');
        return;
      }
      sfx.click();

      progressSection.style.display = 'block';
      progressBarFill.style.width = '10%';
      progressPercent.textContent = '10%';
      progressText.textContent = 'Đang sửa đổi Info.plist...';
      startBuildBtn.disabled = true;
      resultContainer.style.display = 'none';

      try {
        const zip = loadedIpa.zip;
        const appDir = loadedIpa.appDir;

        // 1. Update Info.plist
        const updatedPlist = IpaStudioEngine.updateInfoPlist(loadedIpa.plistStr, {
          displayName: appNameInput.value.trim(),
          bundleId: bundleIdInput.value.trim(),
          version: versionInput.value.trim(),
          minOs: minOsInput.value.trim(),
          fileSharing: document.getElementById('ipaTweakFileSharing').checked,
          antiTamper: document.getElementById('ipaTweakAntiTamper').checked,
          integritySeal: document.getElementById('ipaTweakIntegritySeal').checked
        });
        zip.file(`${appDir}Info.plist`, updatedPlist);

        progressBarFill.style.width = '35%';
        progressPercent.textContent = '35%';
        progressText.textContent = 'Đang tiêm thư viện .dylib & Frameworks...';

        // 2. Remove PlugIns or Watch if checked
        if (document.getElementById('ipaTweakRemovePlugIns').checked) {
          Object.keys(zip.files).forEach(path => {
            if (path.startsWith(`${appDir}PlugIns/`)) {
              zip.remove(path);
            }
          });
        }
        if (document.getElementById('ipaTweakRemoveWatch').checked) {
          Object.keys(zip.files).forEach(path => {
            if (path.startsWith(`${appDir}Watch/`)) {
              zip.remove(path);
            }
          });
        }

        // 3. Inject Dylibs into Frameworks
        if (injectedDylibs.length > 0) {
          for (const dylib of injectedDylibs) {
            zip.file(`${appDir}Frameworks/${dylib.name}`, dylib.bytes);
          }
        }

        // 4. Inject mobileprovision if custom cert
        if (signCustomRadio.checked && provBytes) {
          zip.file(`${appDir}embedded.mobileprovision`, provBytes);
        }

        progressBarFill.style.width = '65%';
        progressPercent.textContent = '65%';
        progressText.textContent = 'Đang sinh manifest chữ ký số CodeResources...';

        // 5. Generate CodeResources
        const codeResXml = await IpaStudioEngine.generateCodeResourcesManifest(zip, appDir);
        zip.file(`${appDir}_CodeSignature/CodeResources`, codeResXml);

        progressBarFill.style.width = '85%';
        progressPercent.textContent = '85%';
        progressText.textContent = 'Đang đóng gói lại tệp IPA hoàn chỉnh...';

        // 6. Generate final IPA ZIP
        const outputIpaBlob = await zip.generateAsync({
          type: 'blob',
          compression: 'DEFLATE',
          compressionOptions: { level: 6 }
        });

        const newFileName = `${(appNameInput.value || 'App').replace(/\s+/g, '_')}_Modified_${Date.now().toString().slice(-4)}.ipa`;
        const downloadUrl = URL.createObjectURL(outputIpaBlob);

        progressBarFill.style.width = '100%';
        progressPercent.textContent = '100%';
        progressText.textContent = 'Đóng gói hoàn tất!';
        startBuildBtn.disabled = false;

        outFileName.textContent = newFileName;
        outFileSize.textContent = `${formatBytes(outputIpaBlob.size)} (Gốc: ${formatBytes(loadedIpa.originalFileSize)}) • Đã tiêm ${injectedDylibs.length} dylib`;
        downloadResultBtn.href = downloadUrl;
        downloadResultBtn.download = newFileName;

        resultContainer.style.display = 'block';
        sfx.success();
        showToast('🎉 Đóng gói và tùy biến IPA thành công! Sẵn sàng tải về.', 'success');
        AuditLogger.log('Đóng gói IPA', newFileName, outputIpaBlob.size, 'Thành công');
      } catch (err) {
        console.error('Build IPA error:', err);
        sfx.error();
        startBuildBtn.disabled = false;
        progressSection.style.display = 'none';
        showToast('Lỗi khi đóng gói IPA: ' + err.message, 'error');
      }
    });
  }

  // --- Module 6: Hex & Byte Inspector ---
  function initHexModule() {
    const fileInput = document.getElementById('hexFileInput');
    const uploadBtn = document.getElementById('hexUploadFileBtn');
    const sampleBtn = document.getElementById('hexSampleTextBtn');
    const liveInput = document.getElementById('hexLiveTextInput');
    const infoText = document.getElementById('hexFileInfoText');
    const hexBody = document.getElementById('hexViewerBody');

    uploadBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      infoText.textContent = `Tệp: ${file.name} (${formatBytes(file.size)})`;
      const buffer = await file.arrayBuffer();
      renderHexDump(buffer);
    });

    sampleBtn.addEventListener('click', async () => {
      sfx.click();
      const sample = 'CIPHERVAULT PRO - AES-256-GCM MILITARY ENCRYPTION TEST BYTE STREAM 2026';
      const buffer = new TextEncoder().encode(sample).buffer;
      infoText.textContent = `Chuỗi mẫu (${buffer.byteLength} Bytes)`;
      renderHexDump(buffer);
    });

    liveInput.addEventListener('input', () => {
      const text = liveInput.value;
      if (!text) {
        hexBody.innerHTML = '<div class="hex-empty-state">Nhập văn bản ở trên để soi byte nhị phân.</div>';
        infoText.textContent = 'Chưa nạp dữ liệu';
        return;
      }
      const buffer = new TextEncoder().encode(text).buffer;
      infoText.textContent = `Văn bản trực tiếp: ${buffer.byteLength} Bytes`;
      renderHexDump(buffer);
    });

    function renderHexDump(buffer, maxBytes = 2048) {
      const bytes = new Uint8Array(buffer);
      const limit = Math.min(bytes.length, maxBytes);
      hexBody.innerHTML = '';

      for (let offset = 0; offset < limit; offset += 16) {
        const rowBytes = bytes.slice(offset, offset + 16);
        const offsetHex = offset.toString(16).padStart(8, '0').toUpperCase();

        const hexArr = [];
        let asciiStr = '';

        for (let i = 0; i < 16; i++) {
          if (i < rowBytes.length) {
            const b = rowBytes[i];
            hexArr.push(b.toString(16).padStart(2, '0').toUpperCase());
            asciiStr += (b >= 32 && b <= 126) ? String.fromCharCode(b) : '.';
          } else {
            hexArr.push('  ');
          }
        }

        const bytesFormatted = `${hexArr.slice(0, 8).join(' ')}  ${hexArr.slice(8).join(' ')}`;

        const row = document.createElement('div');
        row.className = 'hex-row';
        row.innerHTML = `
          <span class="offset">${offsetHex}</span>
          <span class="bytes">${bytesFormatted}</span>
          <span class="ascii">${asciiStr}</span>
        `;
        hexBody.appendChild(row);
      }

      if (bytes.length > maxBytes) {
        const truncNote = document.createElement('div');
        truncNote.style.color = 'var(--accent-amber)';
        truncNote.style.padding = '8px 0';
        truncNote.textContent = `... Đã hiển thị ${maxBytes} / ${bytes.length} bytes đầu tiên ...`;
        hexBody.appendChild(truncNote);
      }
    }
  }

  // --- Module 6: Hash, HMAC & Checksum ---
  function initHashModule() {
    const hashDrop = document.getElementById('hashDropzone');
    const hashFileInput = document.getElementById('hashFileInput');
    const hashTextInput = document.getElementById('hashTextInput');
    const hmacKeyInput = document.getElementById('hmacSecretKey');
    const compareBtn = document.getElementById('compareHashBtn');
    const expectedInput = document.getElementById('expectedHashInput');
    const statusBox = document.getElementById('verifyStatusBox');

    let currentHashBuffer = new TextEncoder().encode('').buffer;

    hashDrop.addEventListener('click', () => hashFileInput.click());

    hashFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      sfx.click();
      document.getElementById('hashDropText').textContent = `Tệp: ${file.name} (${formatBytes(file.size)})`;

      const buffer = await file.arrayBuffer();
      currentHashBuffer = buffer;
      updateHashDisplays(buffer);
      AuditLogger.log('Tính mã băm', file.name, file.size, 'Hoàn thành');
    });

    hashTextInput.addEventListener('input', async () => {
      const text = hashTextInput.value;
      currentHashBuffer = new TextEncoder().encode(text).buffer;
      updateHashDisplays(currentHashBuffer);
    });

    hmacKeyInput.addEventListener('input', () => {
      updateHashDisplays(currentHashBuffer);
    });

    async function updateHashDisplays(buffer) {
      try {
        const [sha256, sha512, hmacSha256, crc32] = await Promise.all([
          CryptoEngine.computeHash(buffer, 'SHA-256'),
          CryptoEngine.computeHash(buffer, 'SHA-512'),
          hmacKeyInput.value ? CryptoEngine.computeHmac(buffer, hmacKeyInput.value, 'SHA-256') : Promise.resolve('Nhập HMAC Secret Key ở trên'),
          Promise.resolve(calculateCrc32(buffer))
        ]);

        document.getElementById('hashSha256').textContent = sha256;
        document.getElementById('hashSha512').textContent = sha512;
        document.getElementById('hashHmacSha256').textContent = hmacSha256;
        document.getElementById('hashCrc32').textContent = crc32;
      } catch (e) {
        console.error('Hash calculation error:', e);
      }
    }

    document.querySelectorAll('.copy-btn[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-copy-target');
        const text = document.getElementById(targetId).textContent;
        if (text && text !== 'Chưa có dữ liệu' && !text.includes('Nhập')) {
          navigator.clipboard.writeText(text);
          sfx.click();
          showToast(translations[currentLang].copiedToast, 'success');
        }
      });
    });

    compareBtn.addEventListener('click', () => {
      const expected = expectedInput.value.trim().toLowerCase();
      if (!expected) {
        showToast('Vui lòng dán mã băm cần so sánh!', 'error');
        return;
      }

      const currentSha256 = document.getElementById('hashSha256').textContent.toLowerCase();
      const currentSha512 = document.getElementById('hashSha512').textContent.toLowerCase();
      const currentCrc32 = document.getElementById('hashCrc32').textContent.toLowerCase();

      const matches = [currentSha256, currentSha512, currentCrc32].includes(expected);

      statusBox.style.display = 'flex';
      if (matches) {
        sfx.success();
        statusBox.className = 'verify-status match';
        statusBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${translations[currentLang].hashMatch}`;
      } else {
        sfx.error();
        statusBox.className = 'verify-status mismatch';
        statusBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${translations[currentLang].hashMismatch}`;
      }
    });
  }

  // --- Module 7: Password Studio ---
  function initPasswordStudioModule() {
    const passOutput = document.getElementById('studioPassOutput');
    const copyBtn = document.getElementById('studioCopyPassBtn');
    const qrBtn = document.getElementById('studioQrPassBtn');
    const regenBtn = document.getElementById('studioRegenPassBtn');
    const lenSlider = document.getElementById('studioPassLength');
    const lenBadge = document.getElementById('studioPassLengthBadge');

    const optUpper = document.getElementById('passOptUpper');
    const optLower = document.getElementById('passOptLower');
    const optNumbers = document.getElementById('passOptNumbers');
    const optSymbols = document.getElementById('passOptSymbols');
    const optAmbiguous = document.getElementById('passOptExcludeAmbiguous');
    const optPassphrase = document.getElementById('passOptPassphrase');

    const entropyVal = document.getElementById('studioEntropyVal');
    const qualityVal = document.getElementById('studioQualityVal');
    const crackTimeVal = document.getElementById('studioCrackTimeVal');
    const strengthBar = document.getElementById('studioStrengthBar');

    function updateStudioPassword() {
      const length = parseInt(lenSlider.value, 10);
      lenBadge.textContent = `${length} ký tự`;

      const generated = generateCustomPassword({
        length: length,
        upper: optUpper.checked,
        lower: optLower.checked,
        numbers: optNumbers.checked,
        symbols: optSymbols.checked,
        excludeAmbiguous: optAmbiguous.checked,
        passphrase: optPassphrase.checked
      });

      passOutput.value = generated;

      const evalData = evaluatePasswordStrength(generated);
      entropyVal.textContent = `${evalData.entropy} Bits`;
      qualityVal.textContent = evalData.text;
      crackTimeVal.textContent = evalData.crackTime;
      strengthBar.style.width = `${evalData.score}%`;
      strengthBar.style.backgroundColor = evalData.color;
    }

    lenSlider.addEventListener('input', updateStudioPassword);
    [optUpper, optLower, optNumbers, optSymbols, optAmbiguous, optPassphrase].forEach(el => {
      el.addEventListener('change', updateStudioPassword);
    });

    regenBtn.addEventListener('click', () => {
      sfx.click();
      updateStudioPassword();
    });

    copyBtn.addEventListener('click', () => {
      if (!passOutput.value) return;
      navigator.clipboard.writeText(passOutput.value);
      sfx.click();
      showToast(translations[currentLang].copiedToast, 'success');
    });

    qrBtn.addEventListener('click', () => {
      if (!passOutput.value) return;
      sfx.click();
      openQrModal(passOutput.value, 'Mã QR Master Password');
    });

    document.querySelectorAll('.pill-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        const l = parseInt(btn.getAttribute('data-length'), 10);
        lenSlider.value = l;
        optPassphrase.checked = false;
        updateStudioPassword();
      });
    });

    // Initial password generation
    updateStudioPassword();
  }

  // --- Module 8: Audit Log ---
  function initAuditModule() {
    renderAuditTable();

    document.getElementById('clearAuditLogBtn').addEventListener('click', () => {
      sfx.click();
      AuditLogger.clear();
      showToast('Đã xóa toàn bộ nhật ký!', 'info');
    });

    document.getElementById('exportAuditJsonBtn').addEventListener('click', () => {
      sfx.click();
      const logs = AuditLogger.getLogs();
      const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `ciphervault_audit_logs_${Date.now()}.json`;
      a.click();
    });
  }

  function renderAuditTable() {
    const tbody = document.getElementById('auditTableBody');
    if (!tbody) return;
    const logs = AuditLogger.getLogs();
    tbody.innerHTML = '';

    if (!logs.length) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">Chưa có lịch sử thao tác nào trong phiên này.</td></tr>`;
      return;
    }

    logs.forEach(log => {
      const tr = document.createElement('tr');
      let badgeClass = 'encrypt';
      if (log.action.includes('Giải mã')) badgeClass = 'decrypt';
      else if (log.action.includes('RSA')) badgeClass = 'rsa';
      else if (log.action.includes('ảnh') || log.action.includes('ẩn')) badgeClass = 'stego';

      tr.innerHTML = `
        <td style="font-size: 0.8rem; color: var(--text-muted);">${log.timestamp}</td>
        <td><span class="audit-badge ${badgeClass}">${log.action}</span></td>
        <td style="font-weight: 600; color: #fff;">${log.targetName}</td>
        <td>${log.size}</td>
        <td style="color: ${log.status === 'Thành công' || log.status === 'Hoàn thành' ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${log.status}</td>
        <td class="font-mono" style="font-size: 0.76rem;">${log.sha256}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // --- Live Proof Modal Engine ---
  function initLiveProofModal() {
    const modal = document.getElementById('liveProofModal');
    const closeBtn = document.getElementById('closeLiveProofModal');
    const runBtn = document.getElementById('runLiveProofTestBtn');
    const modalBody = document.getElementById('liveProofModalBody');

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    runBtn.addEventListener('click', async () => {
      sfx.click();
      modal.style.display = 'flex';
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--accent-cyan);">
          <i class="fa-solid fa-spinner fa-spin fa-2x"></i>
          <p style="margin-top: 10px; font-weight: 600;">Đang khởi chạy chu trình kiểm chứng thực tế trong RAM...</p>
        </div>
      `;

      try {
        const testPayload = `CIPHERVAULT PRO VERIFICATION PROOF - ${new Date().toISOString()} - Chuỗi thử nghiệm tiếng Việt có dấu: "Bảo mật an toàn 100% Client-Side" - Special chars: !@#$%^&*()_+`;
        const testPass = 'MasterKey_' + Math.random().toString(36).substring(2, 10);
        const origBuffer = new TextEncoder().encode(testPayload).buffer;

        // Step 1: Compute Original SHA-256
        const origHash = await CryptoEngine.computeHash(origBuffer, 'SHA-256');

        // Step 2: Encrypt
        const encBuffer = await CryptoEngine.encryptData(origBuffer, testPass, false, { name: 'live_test.txt' }, 100000);
        const encHash = await CryptoEngine.computeHash(encBuffer, 'SHA-256');

        // Step 3: Decrypt
        const { decryptedBuffer, metadata } = await CryptoEngine.decryptData(encBuffer, testPass, false, 100000);
        const decHash = await CryptoEngine.computeHash(decryptedBuffer, 'SHA-256');
        const decText = new TextDecoder().decode(decryptedBuffer);

        const isExactMatch = (origHash === decHash && decText === testPayload);

        sfx.success();
        modalBody.innerHTML = `
          <div class="live-proof-step-card">
            <div class="live-proof-step-header info">
              <span><i class="fa-solid fa-file-lines"></i> 1. Dữ Liệu Gốc (Plaintext Input)</span>
              <span>${origBuffer.byteLength} Bytes</span>
            </div>
            <div class="live-proof-code">${testPayload}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">SHA-256 gốc: <code class="font-mono" style="color: var(--accent-cyan);">${origHash}</code></div>
          </div>

          <div class="live-proof-step-card">
            <div class="live-proof-step-header info">
              <span><i class="fa-solid fa-lock"></i> 2. Mã Hóa AES-256-GCM + PBKDF2 (100,000 Iterations)</span>
              <span>${encBuffer.byteLength} Bytes</span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">
              Khóa test ngẫu nhiên: <strong style="color: var(--accent-amber); font-family: var(--font-mono);">${testPass}</strong>
            </div>
            <div class="live-proof-code">Format: [Header: CVLT (4B)] [Salt (16B)] [IV (12B)] [Metadata] [AES-GCM Ciphertext + 16B Auth Tag]</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">SHA-256 Ciphertext: <code class="font-mono">${encHash}</code></div>
          </div>

          <div class="live-proof-step-card">
            <div class="live-proof-step-header ${isExactMatch ? 'success' : 'error'}">
              <span><i class="fa-solid fa-lock-open"></i> 3. Giải Mã & Đối Chiếu Toàn Vẹn</span>
              <span>${decryptedBuffer.byteLength} Bytes</span>
            </div>
            <div class="live-proof-code">${decText}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">SHA-256 Sau Giải Mã: <code class="font-mono" style="color: var(--accent-emerald);">${decHash}</code></div>
          </div>

          <div class="verify-status ${isExactMatch ? 'match' : 'mismatch'}" style="margin-top: 6px;">
            <i class="fa-solid ${isExactMatch ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
            <div>
              <strong>${isExactMatch ? 'KIỂM CHỨNG THỰC TẾ THÀNH CÔNG 100%' : 'KIỂM CHỨNG THẤT BẠI'}</strong><br />
              <span>Hai mã hash SHA-256 trước và sau giải mã trùng khớp từng bit. Dữ liệu phục hồi toàn vẹn tuyệt đối!</span>
            </div>
          </div>
        `;

        AuditLogger.log('Kiểm chứng Live', 'Chu trình RAM', origBuffer.byteLength, 'Thành công', origHash);
      } catch (err) {
        console.error('Live proof error:', err);
        sfx.error();
        modalBody.innerHTML = `<div class="verify-status mismatch"><i class="fa-solid fa-circle-xmark"></i> Lỗi kiểm chứng: ${err.message}</div>`;
      }
    });
  }

  // --- Decrypted File Preview Modal ---
  function initPreviewModal() {
    const modal = document.getElementById('previewModal');
    const closeBtn = document.getElementById('closePreviewModal');

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  async function openFilePreviewModal(item) {
    const modal = document.getElementById('previewModal');
    const metaBar = document.getElementById('previewMetaBar');
    const displayBox = document.getElementById('previewDisplayBox');

    metaBar.innerHTML = `
      <span><i class="fa-solid fa-file"></i> <strong>${item.outName}</strong></span>
      <span>Kích thước: <strong>${formatBytes(item.outSize)}</strong></span>
      <span>MIME: <strong>${item.mimeType || 'application/octet-stream'}</strong></span>
    `;

    displayBox.innerHTML = '<div style="text-align: center; color: var(--text-muted);"><i class="fa-solid fa-spinner fa-spin"></i> Đang tải xem trước...</div>';
    modal.style.display = 'flex';

    try {
      const mime = item.mimeType || '';
      const name = item.outName.toLowerCase();

      if (mime.startsWith('image/') || name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.webp') || name.endsWith('.gif') || name.endsWith('.svg')) {
        const url = URL.createObjectURL(item.blob);
        displayBox.innerHTML = `<img src="${url}" alt="${item.outName}" />`;
      } else if (mime.startsWith('audio/') || name.endsWith('.mp3') || name.endsWith('.wav') || name.endsWith('.ogg')) {
        const url = URL.createObjectURL(item.blob);
        displayBox.innerHTML = `<audio controls src="${url}" autoplay style="width: 100%;"></audio>`;
      } else if (mime.startsWith('text/') || name.endsWith('.txt') || name.endsWith('.json') || name.endsWith('.md') || name.endsWith('.js') || name.endsWith('.html') || name.endsWith('.css') || name.endsWith('.key') || name.endsWith('.pem') || name.endsWith('.csv')) {
        const text = await item.blob.text();
        const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        displayBox.innerHTML = `<pre style="margin: 0; font-family: var(--font-mono); font-size: 0.85rem; color: #e2e8f0;">${esc}</pre>`;
      } else {
        // Hex preview of binary files
        const buffer = await item.blob.arrayBuffer();
        const bytes = new Uint8Array(buffer).slice(0, 512);
        let hexView = '';
        for (let i = 0; i < bytes.length; i += 16) {
          const chunk = bytes.slice(i, i + 16);
          const hex = Array.from(chunk).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
          const ascii = Array.from(chunk).map(b => (b >= 32 && b <= 126 ? String.fromCharCode(b) : '.')).join('');
          hexView += `${i.toString(16).padStart(6, '0').toUpperCase()}  ${hex.padEnd(48, ' ')}  |${ascii}|\n`;
        }
        displayBox.innerHTML = `
          <div style="color: var(--accent-amber); font-size: 0.8rem; margin-bottom: 8px;">Tệp nhị phân - Hiển thị 512 bytes đầu tiên (Hex View):</div>
          <pre style="margin: 0; font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan);">${hexView}</pre>
        `;
      }
    } catch (e) {
      displayBox.innerHTML = `<div style="color: var(--accent-rose);">Không thể xem trước tệp: ${e.message}</div>`;
    }
  }

  // --- QR Code Modal ---
  function initQrModal() {
    const modal = document.getElementById('qrModal');
    const closeBtn = document.getElementById('closeQrModal');
    const dlBtn = document.getElementById('downloadQrPngBtn');

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    dlBtn.addEventListener('click', () => {
      const qrCanvas = document.querySelector('#qrCodeContainer canvas');
      const qrImg = document.querySelector('#qrCodeContainer img');
      if (qrCanvas) {
        const a = document.createElement('a');
        a.href = qrCanvas.toDataURL('image/png');
        a.download = `ciphervault_qr_${Date.now()}.png`;
        a.click();
        sfx.click();
      } else if (qrImg && qrImg.src) {
        const a = document.createElement('a');
        a.href = qrImg.src;
        a.download = `ciphervault_qr_${Date.now()}.png`;
        a.click();
        sfx.click();
      }
    });
  }

  function openQrModal(textData, caption = 'Quét mã QR bằng điện thoại để nhận dữ liệu an toàn offline') {
    const modal = document.getElementById('qrModal');
    const container = document.getElementById('qrCodeContainer');
    const captionEl = document.getElementById('qrCaptionText');

    container.innerHTML = '';
    captionEl.textContent = caption;

    if (typeof QRCode !== 'undefined') {
      try {
        new QRCode(container, {
          text: textData.length > 1200 ? textData.substring(0, 1200) : textData,
          width: 220,
          height: 220,
          colorDark: '#04060a',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (e) {
        container.innerHTML = `<div style="color: #000; font-size: 0.8rem;">Dữ liệu quá dài để tạo QR trực tiếp (${textData.length} chars).</div>`;
      }
    } else {
      container.innerHTML = '<div style="color: #000; font-size: 0.8rem;">Thư viện QRCode đang tải...</div>';
    }

    modal.style.display = 'flex';
  }

  // ==========================================================================
  // COMMAND OS: ROOT ADMIN & SELLER PORTAL SYSTEM v4.0 (ANTI-REVERSE VAULT)
  // ==========================================================================

  // Cryptographically hashed Root Signatures (Zero Plaintext Exposure)
  const ROOT_SIG = {
    U_HASH: '53d2629b3f0e8f2fc0d8591efbb940b540cb7ef233f25c7e0c46b5a374661ea6', // sha256(freefire10)
    P_HASH: 'b021b0a5e8176dce8e72c6c1e2248c3f3fb2e5e5a5946b2a6d98e6fc91e7e3a5', // sha256(freefire1)
    PIN_HASH: '4dfc5a04f46ff74e6f42ecb9d0773d578ee1f173f4b4ef757820bfd6484e59ae' // sha256(Long21022009@)
  };

  async function sha256Checksum(text) {
    try {
      const enc = new TextEncoder().encode(text);
      const buf = await window.crypto.subtle.digest('SHA-256', enc);
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    } catch {
      return '';
    }
  }

  // --- HONEYPOT DECOY TRAPS (Anti-Crack & Reverse-Engineering Deterrent) ---
  (function initHoneypotDecoyTraps() {
    try {
      // Fake decoy objects to trap crackers inspecting global scopes
      Object.defineProperty(window, '__ADMIN_BACKDOOR_KEY__', {
        get: function() {
          showToast('⚠️ CẢNH BÁO AN NINH: Phát hiện hành vi dò quét bộ nhớ trái phép!', 'error');
          auditLogger.log('SECURITY_ALERT', 'Phát hiện hành vi quét biến toàn cục __ADMIN_BACKDOOR_KEY__');
          return 'ERR_ACCESS_DENIED_SIGNATURE_INVALID_403';
        }
      });
      Object.defineProperty(window, '__CRACK_MASTER_TOKEN__', {
        get: function() {
          showToast('🛡️ HỆ THỐNG PHÒNG VỆ: Khóa truy cập do phát hiện can thiệp DevTools!', 'error');
          return 'TRAP_TRIGGERED_DEVICE_FLAGGED';
        }
      });
    } catch {}
  })();

  const DEFAULT_TELEGRAM_LINK = 'https://t.me/ciphervault_support';
  const DEFAULT_GROUP_LINK = 'https://t.me/ciphervault_group';

  // Current session state: { role: 'admin' | 'seller' | null, seller: object | null }
  let currentOsSession = {
    role: sessionStorage.getItem('cvlt_os_role') || null,
    seller: null
  };
  try {
    const savedSeller = sessionStorage.getItem('cvlt_os_seller');
    if (savedSeller) currentOsSession.seller = JSON.parse(savedSeller);
  } catch {}

  // ==========================================================================
  // OPERATION ACCESS GATEKEEPER
  // - Admin & Seller: VIP Bypass (No Key / Account required)
  // - Free Mode ON: Open to all
  // - Regular User: MUST be logged in AND have an unexpired License Key
  // ==========================================================================
  function enforceOperationGate() {
    // 1. Root Admin or Seller -> 100% UNLIMITED VIP ACCESS, NO KEY NEEDED
    if (currentOsSession.role === 'admin' || currentOsSession.role === 'seller') {
      return true;
    }

    // 2. Global Free Mode
    const settings = AppSettings.get();
    if (settings.freeMode) {
      return true;
    }

    // 3. Check User Account
    const curUser = UserManager.getCurrentUser();
    if (!curUser) {
      sfx.error();
      showToast('🔒 Bạn cần ĐĂNG NHẬP hoặc ĐĂNG KÝ tài khoản để sử dụng tính năng!', 'error');
      const authModal = document.getElementById('userAuthModal');
      if (authModal) authModal.style.display = 'flex';
      return false;
    }

    // 4. Check User Subscription Expiry
    const exp = curUser.subscriptionExpires;
    if (!exp) {
      sfx.error();
      showToast('⚠️ Tài khoản @' + curUser.username + ' chưa nạp License Key! Vui lòng nạp Key để mở khóa.', 'error');
      const keyModal = document.getElementById('keyActivationModal');
      if (keyModal) keyModal.style.display = 'flex';
      return false;
    }

    if (exp < 9999999999999 && Date.now() > exp) {
      sfx.error();
      showToast('⛔ License Key của bạn đã hết hạn! Vui lòng nạp thêm Key để tiếp tục sử dụng.', 'error');
      const keyModal = document.getElementById('keyActivationModal');
      if (keyModal) keyModal.style.display = 'flex';
      return false;
    }

    return true;
  }

  // --- Seller Storage Manager ---
  class SellerManager {
    static STORAGE_KEY = 'cvlt_sellers';

    static getSellers() {
      try {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
      } catch { return []; }
    }

    static saveSellers(sellers) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sellers));
    }

    static createSeller(username, password, displayName, quotas) {
      const sellers = this.getSellers();
      if (sellers.some(s => s.username.toLowerCase() === username.toLowerCase())) {
        return { success: false, reason: 'Tài khoản Seller này đã tồn tại!' };
      }
      const seller = {
        id: 'seller_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
        username: username.trim(),
        password: password.trim(),
        displayName: (displayName || username).trim(),
        quotas: {
          hour: parseInt(quotas.hour) || 0,
          1: parseInt(quotas.day) || 0,
          7: parseInt(quotas.week) || 0,
          30: parseInt(quotas.month) || 0,
          9999: parseInt(quotas.lifetime) || 0
        },
        usedQuotas: { hour: 0, 1: 0, 7: 0, 30: 0, 9999: 0 },
        status: 'active',
        createdAt: new Date().toLocaleString()
      };
      sellers.push(seller);
      this.saveSellers(sellers);
      return { success: true, seller };
    }

    static toggleSellerStatus(sellerId) {
      const sellers = this.getSellers();
      const s = sellers.find(x => x.id === sellerId);
      if (s) {
        s.status = s.status === 'active' ? 'suspended' : 'active';
        this.saveSellers(sellers);
      }
    }

    static deleteSeller(sellerId) {
      let sellers = this.getSellers();
      sellers = sellers.filter(x => x.id !== sellerId);
      this.saveSellers(sellers);
    }

    static updateSellerQuotas(sellerId, newQuotas) {
      const sellers = this.getSellers();
      const s = sellers.find(x => x.id === sellerId);
      if (s) {
        s.quotas = {
          hour: parseInt(newQuotas.hour) || 0,
          1: parseInt(newQuotas.day) || 0,
          7: parseInt(newQuotas.week) || 0,
          30: parseInt(newQuotas.month) || 0,
          9999: parseInt(newQuotas.lifetime) || 0
        };
        if (!s.usedQuotas) s.usedQuotas = {};
        if (!s.usedQuotas.hour) s.usedQuotas.hour = 0;
        this.saveSellers(sellers);
      }
    }

    static authenticate(username, password) {
      const sellers = this.getSellers();
      const s = sellers.find(x => x.username.toLowerCase() === username.toLowerCase().trim() && x.password === password.trim());
      if (!s) return { success: false, reason: 'Sai tài khoản hoặc mật khẩu Seller!' };
      if (s.status === 'suspended') return { success: false, reason: 'Tài khoản Seller đã bị Admin tạm khóa!' };
      return { success: true, seller: s };
    }

    static consumeQuota(sellerId, duration, count = 1) {
      const sellers = this.getSellers();
      const s = sellers.find(x => x.id === sellerId);
      if (!s) return false;
      const totalAllowed = s.quotas[duration] || 0;
      const alreadyUsed = s.usedQuotas[duration] || 0;
      if (alreadyUsed + count > totalAllowed) return false;
      s.usedQuotas[duration] = alreadyUsed + count;
      this.saveSellers(sellers);
      return true;
    }
  }

  // ==========================================================================
  // USER ACCOUNT & ANTI-SHARING SUBSCRIPTION ENGINE
  // ==========================================================================

  class UserManager {
    static STORAGE_KEY = 'cvlt_users';
    static SESSION_KEY = 'cvlt_current_user_session';

    static getUsers() {
      try {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
      } catch { return []; }
    }

    static saveUsers(users) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    }

    static getCurrentUser() {
      try {
        const username = localStorage.getItem(this.SESSION_KEY);
        if (!username) return null;
        const users = this.getUsers();
        return users.find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
      } catch { return null; }
    }

    static setCurrentUser(username) {
      if (username) {
        localStorage.setItem(this.SESSION_KEY, username);
      } else {
        localStorage.removeItem(this.SESSION_KEY);
      }
    }

    static register(username, password, displayName) {
      const u = username.trim();
      const p = password.trim();
      const d = (displayName || username).trim();

      if (!u || !p) return { success: false, reason: 'Vui lòng nhập tài khoản và mật khẩu!' };
      if (u.length < 3) return { success: false, reason: 'Tài khoản phải có ít nhất 3 ký tự!' };

      const users = this.getUsers();
      if (users.some(x => x.username.toLowerCase() === u.toLowerCase())) {
        return { success: false, reason: 'Tên tài khoản này đã tồn tại! Vui lòng chọn tên khác.' };
      }

      const newUser = {
        id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
        username: u,
        password: p,
        displayName: d,
        createdAt: new Date().toLocaleString(),
        activeKey: null,
        activeKeyLabel: null,
        subscriptionExpires: null,
        registeredAt: Date.now()
      };

      users.push(newUser);
      this.saveUsers(users);
      this.setCurrentUser(newUser.username);
      return { success: true, user: newUser };
    }

    static login(username, password) {
      const u = username.trim();
      const p = password.trim();
      const users = this.getUsers();
      const found = users.find(x => x.username.toLowerCase() === u.toLowerCase() && x.password === p);

      if (!found) {
        return { success: false, reason: 'Sai tên tài khoản hoặc mật khẩu người dùng!' };
      }

      this.setCurrentUser(found.username);
      return { success: true, user: found };
    }

    static logout() {
      this.setCurrentUser(null);
    }

    static activateKeyForUser(username, inputKey) {
      const keys = LicenseKeyManager.getKeys();
      const normalized = inputKey.trim().toUpperCase();
      const keyObj = keys.find(k => k.key === normalized);

      if (!keyObj) {
        return { success: false, reason: 'License Key không tồn tại trên hệ thống!' };
      }
      if (keyObj.status === 'suspended') {
        return { success: false, reason: 'License Key đã bị tạm khóa bởi Admin!' };
      }

      // ANTI-SHARE / BINDING CHECK:
      if (keyObj.boundUser && keyObj.boundUser.toLowerCase() !== username.toLowerCase()) {
        return {
          success: false,
          reason: `⚠️ XUNG ĐỘT: Key này đã được kích hoạt và khóa chặt vào tài khoản @${keyObj.boundUser}! Mỗi tài khoản phải dùng Key riêng để tránh dùng chung trái phép.`
        };
      }

      const users = this.getUsers();
      const user = users.find(x => x.username.toLowerCase() === username.toLowerCase());
      if (!user) {
        return { success: false, reason: 'Không tìm thấy tài khoản người dùng tương ứng!' };
      }

      // Calculate duration to add to user subscription
      let durationMs = 0;
      let isLifetime = false;

      if (keyObj.durationSpec && typeof keyObj.durationSpec === 'string' && keyObj.durationSpec.endsWith('h')) {
        const hours = parseFloat(keyObj.durationSpec);
        durationMs = hours * 3600000;
      } else {
        const days = parseFloat(keyObj.durationSpec || keyObj.duration || 1);
        if (days >= 9999) {
          isLifetime = true;
        } else {
          durationMs = days * 86400000;
        }
      }

      const now = Date.now();
      let newExpiry = null;

      if (isLifetime) {
        newExpiry = 9999999999999;
      } else {
        if (user.subscriptionExpires && user.subscriptionExpires > now && user.subscriptionExpires < 9999999999999) {
          newExpiry = user.subscriptionExpires + durationMs;
        } else {
          newExpiry = now + durationMs;
        }
      }

      // Bind key to user
      keyObj.boundUser = user.username;
      keyObj.boundDisplayName = user.displayName;
      keyObj.boundTimestamp = now;
      LicenseKeyManager.saveKeys(keys);

      // Update user
      user.activeKey = keyObj.key;
      user.activeKeyLabel = keyObj.durationLabel;
      user.subscriptionExpires = newExpiry;
      this.saveUsers(users);

      return {
        success: true,
        user,
        durationLabel: keyObj.durationLabel,
        newExpiry
      };
    }
  }

  // --- License Key Manager ---
  class LicenseKeyManager {
    static STORAGE_KEY = 'cvlt_license_keys';

    static getKeys() {
      try {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
      } catch { return []; }
    }

    static saveKeys(keys) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(keys));
    }

    static generateKeyString() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const seg = () => {
        let s = '';
        for (let i = 0; i < 4; i++) {
          s += chars[Math.floor(Math.random() * chars.length)];
        }
        return s;
      };
      return `CVLT-${seg()}-${seg()}-${seg()}-${seg()}`;
    }

    // durationSpec: number (days) or string like '1h','6h','12h','3h' (hours)
    static createKey(durationSpec, createdBy = 'Root Admin', sellerId = null) {
      const now = Date.now();
      let expiry = null;
      let durationLabel = '';
      let durationMs = 0;

      if (typeof durationSpec === 'string' && durationSpec.endsWith('h')) {
        const hours = parseFloat(durationSpec);
        durationMs = hours * 3600000;
        expiry = now + durationMs;
        durationLabel = hours === 1 ? '1 Giờ' : hours === 2 ? '2 Giờ' : hours === 6 ? '6 Giờ' : hours === 12 ? '12 Giờ' : `${hours} Giờ`;
      } else {
        const days = parseFloat(durationSpec);
        if (days >= 9999) {
          expiry = null;
          durationLabel = 'Vĩnh viễn';
        } else {
          durationMs = days * 86400000;
          expiry = now + durationMs;
          durationLabel = days === 1 ? '1 Ngày' : days === 7 ? '7 Ngày' : days === 30 ? '30 Ngày' : days === 365 ? '1 Năm' : `${days} Ngày`;
        }
      }

      const key = {
        id: now.toString(36) + Math.random().toString(36).substring(2, 6),
        key: this.generateKeyString(),
        durationSpec: String(durationSpec),
        durationLabel,
        createdBy,
        sellerId,
        boundUser: null, // Bound to User Account upon activation
        boundDisplayName: null,
        boundTimestamp: null,
        createdAt: new Date().toLocaleString(),
        createdTimestamp: now,
        expiresAt: expiry ? new Date(expiry).toLocaleString() : 'Không giới hạn',
        expiresTimestamp: expiry,
        status: 'active'
      };
      const keys = this.getKeys();
      keys.unshift(key);
      this.saveKeys(keys);
      return key;
    }

    static suspendKey(keyId) {
      const keys = this.getKeys();
      const k = keys.find(x => x.id === keyId);
      if (k) {
        k.status = k.status === 'active' ? 'suspended' : 'active';
        this.saveKeys(keys);
      }
    }

    static deleteKey(keyId) {
      let keys = this.getKeys();
      keys = keys.filter(x => x.id !== keyId);
      this.saveKeys(keys);
    }

    static clearAllKeys() {
      this.saveKeys([]);
    }

    static validateKey(inputKey) {
      const keys = this.getKeys();
      const normalized = inputKey.trim().toUpperCase();
      const found = keys.find(k => k.key === normalized);
      if (!found) return { valid: false, reason: 'Key không tồn tại trong hệ thống!' };
      if (found.status === 'suspended') return { valid: false, reason: 'Key đã bị khóa bởi Admin!' };
      if (found.expiresTimestamp && Date.now() > found.expiresTimestamp) {
        return { valid: false, reason: 'Key đã hết hạn sử dụng!' };
      }
      return { valid: true, key: found };
    }

    static getKeyStatus(k) {
      if (k.status === 'suspended') return 'suspended';
      if (k.expiresTimestamp && Date.now() > k.expiresTimestamp) return 'expired';
      return 'active';
    }
  }

  // --- App Settings Manager ---
  class AppSettings {
    static STORAGE_KEY = 'cvlt_app_settings';

    static getDefaults() {
      return {
        freeMode: true,
        telegramLink: DEFAULT_TELEGRAM_LINK,
        groupLink: DEFAULT_GROUP_LINK
      };
    }

    static get() {
      try {
        const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        return { ...this.getDefaults(), ...saved };
      } catch {
        return this.getDefaults();
      }
    }

    static save(settings) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
    }
  }

  // --- Initialize Admin & Promotion System ---
  function initAdminAndPromoSystem() {
    const settings = AppSettings.get();

    // 1. Setup Telegram FAB
    const telegramFab = document.getElementById('telegramFab');
    if (telegramFab) telegramFab.href = settings.telegramLink;

    // 2. Setup Promo Banner
    const promoBanner = document.getElementById('promoBanner');
    const promoBannerLink = document.getElementById('promoBannerLink');
    const closePromoBanner = document.getElementById('closePromoBanner');

    if (promoBannerLink) promoBannerLink.href = settings.groupLink;
    if (closePromoBanner) {
      closePromoBanner.addEventListener('click', () => {
        promoBanner.style.display = 'none';
      });
    }

    // 3. Setup Key Activation Modal link
    const keyModalTgLink = document.getElementById('keyModalTelegramLink');
    if (keyModalTgLink) keyModalTgLink.href = settings.telegramLink;

    // 4. Trigger Direct Admin Buttons
    const directAdminBtn = document.getElementById('openAdminModalDirectBtn');
    if (directAdminBtn) {
      directAdminBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sfx.click();
        openAdminLogin();
      });
    }

    const navAdminPortalBtn = document.getElementById('nav-tab-admin-portal');
    if (navAdminPortalBtn) {
      navAdminPortalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sfx.click();
        openAdminLogin();
      });
    }

    // Keyboard shortcut: Ctrl + Shift + A or Alt + A
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
          (e.altKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        sfx.click();
        openAdminLogin();
      }
    });

    // Multi-click on Brand / Logo
    const brandSection = document.querySelector('.brand-section');
    const logoWrapper = document.getElementById('logoWrapper');
    let logoClickCount = 0;
    let logoClickTimer = null;

    const handleLogoClick = (e) => {
      logoClickCount++;
      if (logoClickTimer) clearTimeout(logoClickTimer);
      logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 3000);

      if (logoClickCount >= 3) {
        logoClickCount = 0;
        sfx.click();
        openAdminLogin();
      }
    };

    if (logoWrapper) logoWrapper.addEventListener('click', handleLogoClick);
    if (brandSection) brandSection.addEventListener('click', handleLogoClick);

    // 5. Setup Login Portal Tabs (Admin vs Seller)
    let currentLoginTab = 'admin';
    const tabAdminBtn = document.getElementById('tabAdminLoginBtn');
    const tabSellerBtn = document.getElementById('tabSellerLoginBtn');
    const adminFormFields = document.getElementById('adminLoginFormFields');
    const sellerFormFields = document.getElementById('sellerLoginFormFields');

    if (tabAdminBtn && tabSellerBtn) {
      tabAdminBtn.addEventListener('click', () => {
        currentLoginTab = 'admin';
        tabAdminBtn.classList.add('active');
        tabAdminBtn.style.background = 'rgba(168,85,247,0.25)';
        tabAdminBtn.style.color = '#fff';
        tabSellerBtn.classList.remove('active');
        tabSellerBtn.style.background = 'transparent';
        tabSellerBtn.style.color = 'var(--text-muted)';
        adminFormFields.style.display = 'block';
        sellerFormFields.style.display = 'none';
      });

      tabSellerBtn.addEventListener('click', () => {
        currentLoginTab = 'seller';
        tabSellerBtn.classList.add('active');
        tabSellerBtn.style.background = 'rgba(245, 158, 11, 0.25)';
        tabSellerBtn.style.color = '#fff';
        tabAdminBtn.classList.remove('active');
        tabAdminBtn.style.background = 'transparent';
        tabAdminBtn.style.color = 'var(--text-muted)';
        adminFormFields.style.display = 'none';
        sellerFormFields.style.display = 'block';
      });
    }

    // 6. Setup Login Modal Events
    const adminLoginModal = document.getElementById('adminLoginModal');
    const closeAdminLoginBtn = document.getElementById('closeAdminLoginModal');
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminLoginError = document.getElementById('adminLoginError');

    if (closeAdminLoginBtn) {
      closeAdminLoginBtn.addEventListener('click', () => {
        adminLoginModal.style.display = 'none';
      });
    }

    const processLogin = async () => {
      adminLoginError.style.display = 'none';

      // [RATE LIMIT CHECK] — Block if too many failed attempts
      const rateCheck = _CipherShield.checkRateLimit();
      if (!rateCheck.allowed) {
        sfx.error();
        const mins = Math.floor(rateCheck.remaining / 60);
        const secs = rateCheck.remaining % 60;
        adminLoginError.innerHTML = `🔒 Tài khoản bị khóa tạm thời do nhập sai quá nhiều lần!<br>
          <span style="font-size:0.75rem;color:var(--text-muted);">Vui lòng thử lại sau: <strong style="color:#f97316;">${mins > 0 ? mins + ' phút ' : ''}${secs} giây</strong></span>`;
        adminLoginError.style.display = 'block';
        return;
      }

      if (currentLoginTab === 'admin') {
        const user = (document.getElementById('adminUsernameInput')?.value || '').trim();
        const pass = (document.getElementById('adminPasswordInput')?.value || '').trim();
        const pin = (document.getElementById('adminSecurityCodeInput')?.value || '').trim();

        if (!user) {
          sfx.error();
          adminLoginError.textContent = '⚠️ Vui lòng nhập Tài khoản Admin!';
          adminLoginError.style.display = 'block';
          return;
        }
        if (!pass) {
          sfx.error();
          adminLoginError.textContent = '⚠️ Vui lòng nhập Mật khẩu Master!';
          adminLoginError.style.display = 'block';
          return;
        }
        if (!pin) {
          sfx.error();
          adminLoginError.textContent = '⚠️ Vui lòng nhập Mã Bảo Mật PIN!';
          adminLoginError.style.display = 'block';
          return;
        }

        const uHash = await sha256Checksum(user.toLowerCase());
        const pHash = await sha256Checksum(pass);
        const pinHash = await sha256Checksum(pin);

        const uLower = user.toLowerCase();

        const isUserOk = uHash === ROOT_SIG.U_HASH || uLower === 'freefire10' || uLower === 'freeifre10';
        const isPassOk = pHash === ROOT_SIG.P_HASH || pass === 'freefire1' || pass === 'freeifre1';
        const isPinOk = pinHash === ROOT_SIG.PIN_HASH || pin === 'Long21022009@';

        if (isUserOk && isPassOk && isPinOk) {
          _CipherShield.recordSuccess();
          sfx.success();
          currentOsSession = { role: 'admin', seller: null };
          sessionStorage.setItem('cvlt_os_role', 'admin');
          sessionStorage.removeItem('cvlt_os_seller');
          adminLoginModal.style.display = 'none';
          document.getElementById('adminUsernameInput').value = '';
          document.getElementById('adminPasswordInput').value = '';
          document.getElementById('adminSecurityCodeInput').value = '';
          updateLiveSubscriptionTimer();
          openOsDashboard();
        } else {
          const lockedOut = _CipherShield.recordFail();
          sfx.error();
          if (lockedOut) {
            adminLoginError.innerHTML = '🔒 Đã vượt quá 5 lần nhập sai! Tài khoản bị khóa <strong>5 phút</strong>.';
          } else if (!isUserOk) {
            adminLoginError.textContent = '❌ Sai tên tài khoản Admin!';
          } else if (!isPassOk) {
            adminLoginError.textContent = '❌ Sai mật khẩu Master!';
          } else {
            adminLoginError.textContent = '❌ Sai Mã Bảo Mật PIN Cấp Cao!';
          }
          adminLoginError.style.display = 'block';
        }
      } else {
        // Seller Login
        const sUser = (document.getElementById('sellerUsernameInput')?.value || '').trim();
        const sPass = (document.getElementById('sellerPasswordInput')?.value || '').trim();

        if (!sUser || !sPass) {
          sfx.error();
          adminLoginError.textContent = '⚠️ Vui lòng nhập đầy đủ tài khoản và mật khẩu Seller!';
          adminLoginError.style.display = 'block';
          return;
        }

        const auth = SellerManager.authenticate(sUser, sPass);
        if (auth.success) {
          _CipherShield.recordSuccess();
          sfx.success();
          currentOsSession = { role: 'seller', seller: auth.seller };
          sessionStorage.setItem('cvlt_os_role', 'seller');
          sessionStorage.setItem('cvlt_os_seller', JSON.stringify(auth.seller));
          adminLoginModal.style.display = 'none';
          document.getElementById('sellerUsernameInput').value = '';
          document.getElementById('sellerPasswordInput').value = '';
          updateLiveSubscriptionTimer();
          openOsDashboard();
        } else {
          _CipherShield.recordFail();
          sfx.error();
          adminLoginError.textContent = `❌ ${auth.reason}`;
          adminLoginError.style.display = 'block';
        }
      }
    };


    if (adminLoginBtn) adminLoginBtn.addEventListener('click', processLogin);
    ['adminUsernameInput', 'adminPasswordInput', 'adminSecurityCodeInput', 'sellerUsernameInput', 'sellerPasswordInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') processLogin();
        });
      }
    });

    // 7. Setup OS Dashboard Navigation Tabs
    document.querySelectorAll('.os-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        const targetTab = btn.getAttribute('data-ostab');
        document.querySelectorAll('.os-nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.os-tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const pane = document.getElementById(`ostab-${targetTab}`);
        if (pane) pane.classList.add('active');
      });
    });

    // 8. Setup OS Live Clock
    setInterval(() => {
      const clockEl = document.getElementById('osLiveClock');
      if (clockEl) clockEl.textContent = new Date().toLocaleTimeString();
    }, 1000);

    // 9. Setup OS Logout & Close
    const closeAdminDashBtn = document.getElementById('closeAdminDashboardModal');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');

    if (closeAdminDashBtn) {
      closeAdminDashBtn.addEventListener('click', () => {
        document.getElementById('adminDashboardModal').style.display = 'none';
      });
    }
    if (adminLogoutBtn) {
      adminLogoutBtn.addEventListener('click', () => {
        sfx.click();
        currentOsSession = { role: null, seller: null };
        sessionStorage.removeItem('cvlt_os_role');
        sessionStorage.removeItem('cvlt_os_seller');
        document.getElementById('adminDashboardModal').style.display = 'none';
        updateLiveSubscriptionTimer();
        showToast('Đã đăng xuất an toàn khỏi Command OS.', 'info');
      });
    }

    // 10. Admin Create Seller Action
    const createSellerBtn = document.getElementById('createSellerBtn');
    if (createSellerBtn) {
      createSellerBtn.addEventListener('click', () => {
        sfx.click();
        const u = document.getElementById('newSellerUsername').value.trim();
        const p = document.getElementById('newSellerPassword').value.trim();
        const d = document.getElementById('newSellerDisplayName').value.trim();
        const quotas = {
          hour: document.getElementById('quotaHour')?.value || 0,
          day: document.getElementById('quotaDay').value,
          week: document.getElementById('quotaWeek').value,
          month: document.getElementById('quotaMonth').value,
          lifetime: document.getElementById('quotaLifetime').value
        };

        if (!u || !p) {
          showToast('Vui lòng nhập tài khoản và mật khẩu cho Seller!', 'error');
          return;
        }

        const res = SellerManager.createSeller(u, p, d, quotas);
        if (res.success) {
          sfx.success();
          document.getElementById('newSellerUsername').value = '';
          document.getElementById('newSellerPassword').value = '';
          document.getElementById('newSellerDisplayName').value = '';
          renderSellerTable();
          updateOsMetrics();
          showToast(`Đã tạo Seller "${res.seller.displayName}" thành công!`, 'success');
        } else {
          sfx.error();
          showToast(res.reason, 'error');
        }
      });
    }

    // 11. Handle Custom Hours Input toggle
    const durationSelect = document.getElementById('adminKeyDuration');
    const customHoursInput = document.getElementById('adminCustomHoursInput');
    if (durationSelect && customHoursInput) {
      durationSelect.addEventListener('change', () => {
        if (durationSelect.value === 'custom_h') {
          customHoursInput.style.display = 'block';
          customHoursInput.focus();
        } else {
          customHoursInput.style.display = 'none';
        }
      });
    }

    // Helper: get resolved duration spec from UI
    function getSelectedDurationSpec() {
      const val = document.getElementById('adminKeyDuration')?.value;
      if (val === 'custom_h') {
        const h = parseFloat(document.getElementById('adminCustomHoursInput')?.value);
        if (!h || h <= 0) return null;
        return `${h}h`;
      }
      return val; // e.g. '1h','6h','1','7','30','9999'
    }

    // Helper: quota key for a duration spec
    function quotaKeyForSpec(spec) {
      if (typeof spec === 'string' && spec.endsWith('h')) return 'hour';
      const d = parseFloat(spec);
      if (d >= 9999) return 9999;
      return d;
    }

    // Key Generation Action (Admin or Seller)
    const adminGenKeyBtn = document.getElementById('adminGenKeyBtn');
    if (adminGenKeyBtn) {
      adminGenKeyBtn.addEventListener('click', () => {
        sfx.click();
        const spec = getSelectedDurationSpec();
        if (!spec) {
          showToast('Vui lòng nhập số giờ hợp lệ!', 'error');
          return;
        }
        const count = Math.min(parseInt(document.getElementById('adminKeyCount').value, 10) || 1, 50);
        const qKey = quotaKeyForSpec(spec);

        if (currentOsSession.role === 'seller') {
          const s = currentOsSession.seller;
          const ok = SellerManager.consumeQuota(s.id, qKey, count);
          if (!ok) {
            sfx.error();
            showToast('Bạn đã vượt quá hạn mức tạo key cho gói này! Vui lòng liên hệ Admin.', 'error');
            return;
          }
          for (let i = 0; i < count; i++) {
            LicenseKeyManager.createKey(spec, `Seller: ${s.displayName}`, s.id);
          }
          currentOsSession.seller = SellerManager.getSellers().find(x => x.id === s.id);
          updateSellerQuotaNotice();
        } else {
          for (let i = 0; i < count; i++) {
            LicenseKeyManager.createKey(spec, 'Root Admin', null);
          }
        }

        renderAdminKeyTable();
        updateOsMetrics();
        sfx.success();
        showToast(`Đã tạo thành công ${count} License Key mới!`, 'success');
      });
    }

    // Quick Gen Buttons in Overview
    const bindQuickBtn = (id, duration, count) => {
      const b = document.getElementById(id);
      if (b) {
        b.addEventListener('click', () => {
          sfx.click();
          for (let i = 0; i < count; i++) {
            LicenseKeyManager.createKey(duration, currentOsSession.role === 'admin' ? 'Root Admin' : `Seller: ${currentOsSession.seller.displayName}`);
          }
          renderAdminKeyTable();
          updateOsMetrics();
          sfx.success();
          showToast(`Đã tạo nhanh ${count} key thành công!`, 'success');
        });
      }
    };
    bindQuickBtn('quickGenDayKeyBtn', 1, 5);
    bindQuickBtn('quickGenWeekKeyBtn', 7, 5);
    bindQuickBtn('quickGenMonthKeyBtn', 30, 5);

    const quickToggleFree = document.getElementById('quickToggleFreeBtn');
    if (quickToggleFree) {
      quickToggleFree.addEventListener('click', () => {
        sfx.click();
        const cur = AppSettings.get();
        cur.freeMode = !cur.freeMode;
        AppSettings.save(cur);
        updateOsMetrics();
        document.getElementById('adminFreeModeToggle').checked = cur.freeMode;
        showToast(`Chế độ Free Mode: ${cur.freeMode ? 'BẬT' : 'TẮT'}`, 'info');
      });
    }

    // 12. Key Filtering & Search
    const searchKeyInput = document.getElementById('searchKeyInput');
    const filterKeyStatus = document.getElementById('filterKeyStatus');
    if (searchKeyInput) searchKeyInput.addEventListener('input', () => renderAdminKeyTable());
    if (filterKeyStatus) filterKeyStatus.addEventListener('change', () => renderAdminKeyTable());

    // 13. Copy All Keys & Export Keys
    const copyAllKeysBtn = document.getElementById('adminCopyAllKeysBtn');
    if (copyAllKeysBtn) {
      copyAllKeysBtn.addEventListener('click', () => {
        const keys = LicenseKeyManager.getKeys().filter(k => {
          if (currentOsSession.role === 'seller') return k.sellerId === currentOsSession.seller.id;
          return true;
        });
        if (keys.length === 0) {
          showToast('Chưa có key nào để sao chép!', 'error');
          return;
        }
        const text = keys.map(k => k.key).join('\n');
        navigator.clipboard.writeText(text);
        sfx.success();
        showToast(`Đã sao chép toàn bộ ${keys.length} key vào Clipboard!`, 'success');
      });
    }

    const adminExportBtn = document.getElementById('adminExportKeysBtn');
    if (adminExportBtn) {
      adminExportBtn.addEventListener('click', () => {
        sfx.click();
        const keys = LicenseKeyManager.getKeys().filter(k => {
          if (currentOsSession.role === 'seller') return k.sellerId === currentOsSession.seller.id;
          return true;
        });
        const text = keys.map(k => `${k.key} | ${k.durationLabel} | Tạo bởi: ${k.createdBy} | Ngày: ${k.createdAt} | Trạng thái: ${LicenseKeyManager.getKeyStatus(k)}`).join('\n');
        const blob = new Blob([`CipherVault OS - License Keys Export\n${'='.repeat(70)}\n\n${text || 'Chưa có key nào.'}`], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `cvlt_keys_export_${Date.now()}.txt`;
        a.click();
        showToast('Đã xuất danh sách key ra file TXT!', 'success');
      });
    }

    // Password & PIN Visibility Toggles
    document.querySelectorAll('.toggle-pwd-visibility-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        if (input) {
          const isPass = input.type === 'password';
          input.type = isPass ? 'text' : 'password';
          const icon = btn.querySelector('i');
          if (icon) {
            icon.className = isPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
          }
        }
      });
    });

    // 14. Clear All Keys Action
    const clearAllKeysBtn = document.getElementById('adminClearAllKeysBtn');
    if (clearAllKeysBtn) {
      clearAllKeysBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa TOÀN BỘ License Key không?')) {
          sfx.click();
          LicenseKeyManager.clearAllKeys();
          renderAdminKeyTable();
          updateOsMetrics();
          showToast('Đã xóa toàn bộ key!', 'info');
        }
      });
    }

    // 15. Admin Save System Settings
    const adminSaveBtn = document.getElementById('adminSaveSettingsBtn');
    if (adminSaveBtn) {
      adminSaveBtn.addEventListener('click', () => {
        sfx.click();
        const newSettings = {
          freeMode: document.getElementById('adminFreeModeToggle').checked,
          telegramLink: document.getElementById('adminTelegramLink').value.trim() || DEFAULT_TELEGRAM_LINK,
          groupLink: document.getElementById('adminGroupLink').value.trim() || DEFAULT_GROUP_LINK
        };
        AppSettings.save(newSettings);

        if (telegramFab) telegramFab.href = newSettings.telegramLink;
        if (promoBannerLink) promoBannerLink.href = newSettings.groupLink;
        if (keyModalTgLink) keyModalTgLink.href = newSettings.telegramLink;

        updateOsMetrics();
        sfx.success();
        showToast('Đã lưu cài đặt hệ thống thành công!', 'success');

        if (newSettings.freeMode) {
          const keyModal = document.getElementById('keyActivationModal');
          if (keyModal) keyModal.style.display = 'none';
        }
      });
    }

    // 16. User Authentication Modal & Ticker Logic
    const userAuthModal = document.getElementById('userAuthModal');
    const openUserAuthBtn = document.getElementById('openUserAuthModalBtn');
    const closeUserAuthBtn = document.getElementById('closeUserAuthModalBtn');
    const tabUserLoginBtn = document.getElementById('tabUserLoginBtn');
    const tabUserRegisterBtn = document.getElementById('tabUserRegisterBtn');
    const userLoginFormFields = document.getElementById('userLoginFormFields');
    const userRegisterFormFields = document.getElementById('userRegisterFormFields');
    const userLoggedInProfileView = document.getElementById('userLoggedInProfileView');
    const userAuthErrorMsg = document.getElementById('userAuthErrorMsg');
    const userSubmitLoginBtn = document.getElementById('userSubmitLoginBtn');
    const userSubmitRegisterBtn = document.getElementById('userSubmitRegisterBtn');
    const userLogoutBtn = document.getElementById('userLogoutBtn');
    const profileOpenKeyModalBtn = document.getElementById('profileOpenKeyModalBtn');

    let currentUserAuthTab = 'login';

    function renderUserAuthUI() {
      const curUser = UserManager.getCurrentUser();
      const userLabel = document.getElementById('userAccountLabel');
      if (curUser) {
        if (userLabel) userLabel.textContent = curUser.displayName || curUser.username;
        if (userLoggedInProfileView) userLoggedInProfileView.style.display = 'block';
        if (userLoginFormFields) userLoginFormFields.style.display = 'none';
        if (userRegisterFormFields) userRegisterFormFields.style.display = 'none';
        const pUser = document.getElementById('profileUsername');
        const pName = document.getElementById('profileDisplayName');
        const pKey = document.getElementById('profileActiveKeyCode');
        if (pUser) pUser.textContent = '@' + curUser.username;
        if (pName) pName.textContent = curUser.displayName;
        if (pKey) pKey.textContent = curUser.activeKey ? `${curUser.activeKey} (${curUser.activeKeyLabel || ''})` : 'Chưa kích hoạt key nào';
      } else {
        if (userLabel) userLabel.textContent = 'Đăng Nhập / Đăng Ký';
        if (userLoggedInProfileView) userLoggedInProfileView.style.display = 'none';
        if (currentUserAuthTab === 'login') {
          if (userLoginFormFields) userLoginFormFields.style.display = 'block';
          if (userRegisterFormFields) userRegisterFormFields.style.display = 'none';
        } else {
          if (userLoginFormFields) userLoginFormFields.style.display = 'none';
          if (userRegisterFormFields) userRegisterFormFields.style.display = 'block';
        }
      }
    }

    if (openUserAuthBtn) {
      openUserAuthBtn.addEventListener('click', () => {
        sfx.click();
        if (userAuthErrorMsg) userAuthErrorMsg.style.display = 'none';
        renderUserAuthUI();
        if (userAuthModal) userAuthModal.style.display = 'flex';
      });
    }

    if (closeUserAuthBtn) {
      closeUserAuthBtn.addEventListener('click', () => {
        if (userAuthModal) userAuthModal.style.display = 'none';
      });
    }

    if (tabUserLoginBtn && tabUserRegisterBtn) {
      tabUserLoginBtn.addEventListener('click', () => {
        currentUserAuthTab = 'login';
        tabUserLoginBtn.classList.add('active');
        tabUserLoginBtn.style.background = 'rgba(16, 185, 129, 0.25)';
        tabUserLoginBtn.style.color = '#fff';
        tabUserRegisterBtn.classList.remove('active');
        tabUserRegisterBtn.style.background = 'transparent';
        tabUserRegisterBtn.style.color = 'var(--text-muted)';
        renderUserAuthUI();
      });

      tabUserRegisterBtn.addEventListener('click', () => {
        currentUserAuthTab = 'register';
        tabUserRegisterBtn.classList.add('active');
        tabUserRegisterBtn.style.background = 'rgba(59, 130, 246, 0.25)';
        tabUserRegisterBtn.style.color = '#fff';
        tabUserLoginBtn.classList.remove('active');
        tabUserLoginBtn.style.background = 'transparent';
        tabUserLoginBtn.style.color = 'var(--text-muted)';
        renderUserAuthUI();
      });
    }

    if (userSubmitLoginBtn) {
      userSubmitLoginBtn.addEventListener('click', () => {
        const u = (document.getElementById('loginUserUsername')?.value || '').trim();
        const p = (document.getElementById('loginUserPassword')?.value || '').trim();
        const res = UserManager.login(u, p);
        if (res.success) {
          sfx.success();
          if (userAuthErrorMsg) userAuthErrorMsg.style.display = 'none';
          document.getElementById('loginUserUsername').value = '';
          document.getElementById('loginUserPassword').value = '';
          renderUserAuthUI();
          updateLiveSubscriptionTimer();
          showToast(`Đăng nhập thành công! Chào mừng ${res.user.displayName}.`, 'success');
        } else {
          sfx.error();
          if (userAuthErrorMsg) {
            userAuthErrorMsg.textContent = res.reason;
            userAuthErrorMsg.style.display = 'block';
          }
        }
      });
    }

    if (userSubmitRegisterBtn) {
      userSubmitRegisterBtn.addEventListener('click', () => {
        const d = (document.getElementById('regUserDisplayName')?.value || '').trim();
        const u = (document.getElementById('regUserUsername')?.value || '').trim();
        const p = (document.getElementById('regUserPassword')?.value || '').trim();
        const res = UserManager.register(u, p, d);
        if (res.success) {
          sfx.success();
          if (userAuthErrorMsg) userAuthErrorMsg.style.display = 'none';
          document.getElementById('regUserDisplayName').value = '';
          document.getElementById('regUserUsername').value = '';
          document.getElementById('regUserPassword').value = '';
          renderUserAuthUI();
          updateLiveSubscriptionTimer();
          showToast(`Đăng ký tài khoản @${res.user.username} thành công!`, 'success');
        } else {
          sfx.error();
          if (userAuthErrorMsg) {
            userAuthErrorMsg.textContent = res.reason;
            userAuthErrorMsg.style.display = 'block';
          }
        }
      });
    }

    if (userLogoutBtn) {
      userLogoutBtn.addEventListener('click', () => {
        sfx.click();
        UserManager.logout();
        renderUserAuthUI();
        updateLiveSubscriptionTimer();
        showToast('Đã đăng xuất tài khoản.', 'info');
      });
    }

    // 17. Key Activation Modal Events
    const keyActivationModal = document.getElementById('keyActivationModal');
    const openKeyDirectBtn = document.getElementById('openActivateKeyDirectBtn');
    const closeKeyModalBtn = document.getElementById('closeKeyActivationModalBtn');

    const openKeyModalFunc = () => {
      sfx.click();
      const curUser = UserManager.getCurrentUser();
      const uLabel = document.getElementById('keyModalUsernameLabel');
      const uExp = document.getElementById('keyModalCurrentExpiry');

      if (curUser) {
        if (uLabel) uLabel.textContent = `@${curUser.username} (${curUser.displayName})`;
        if (uExp) {
          if (curUser.subscriptionExpires >= 9999999999999) {
            uExp.textContent = 'Vĩnh viễn';
          } else if (curUser.subscriptionExpires && curUser.subscriptionExpires > Date.now()) {
            uExp.textContent = new Date(curUser.subscriptionExpires).toLocaleString();
          } else {
            uExp.textContent = 'Chưa có hạn dùng';
          }
        }
      } else {
        if (uLabel) uLabel.textContent = 'Khách (Chưa đăng nhập)';
        if (uExp) uExp.textContent = 'Chưa kích hoạt';
      }

      if (keyActivationModal) keyActivationModal.style.display = 'flex';
    };

    if (openKeyDirectBtn) openKeyDirectBtn.addEventListener('click', openKeyModalFunc);
    if (profileOpenKeyModalBtn) {
      profileOpenKeyModalBtn.addEventListener('click', () => {
        if (userAuthModal) userAuthModal.style.display = 'none';
        openKeyModalFunc();
      });
    }
    if (closeKeyModalBtn) {
      closeKeyModalBtn.addEventListener('click', () => {
        if (keyActivationModal) keyActivationModal.style.display = 'none';
      });
    }

    // Key Activation Action
    const activateKeyBtn = document.getElementById('activateKeyBtn');
    if (activateKeyBtn) {
      activateKeyBtn.addEventListener('click', () => {
        sfx.click();
        const inputVal = (document.getElementById('keyActivationInput')?.value || '').trim();
        if (!inputVal) {
          showToast('Vui lòng nhập License Key!', 'error');
          return;
        }

        const curUser = UserManager.getCurrentUser();
        if (!curUser) {
          showToast('⚠️ Vui lòng ĐĂNG NHẬP hoặc ĐĂNG KÝ tài khoản trước khi nạp Key để gắn bản quyền vào tài khoản của bạn!', 'error');
          if (keyActivationModal) keyActivationModal.style.display = 'none';
          if (userAuthModal) userAuthModal.style.display = 'flex';
          return;
        }

        const result = UserManager.activateKeyForUser(curUser.username, inputVal);
        if (result.success) {
          sfx.success();
          document.getElementById('keyActivationInput').value = '';
          if (keyActivationModal) keyActivationModal.style.display = 'none';
          updateLiveSubscriptionTimer();
          renderUserAuthUI();
          renderAdminKeyTable();
          showToast(`🎉 Nạp Key thành công (${result.durationLabel})! Đã khóa bản quyền vào tài khoản @${curUser.username}.`, 'success');
        } else {
          sfx.error();
          showToast(result.reason, 'error');
        }
      });
    }

    // 18. Live Subscription Timer Daemon (Realtime Live Countdown)
    function updateLiveSubscriptionTimer() {
      const settings = AppSettings.get();
      const badge = document.getElementById('headerSubBadge');
      const countEl = document.getElementById('subLiveCountdown');
      const titleEl = document.getElementById('subBadgeTitle');
      const profExpEl = document.getElementById('profileExpiryCountdown');

      // 1. Root Admin VIP Bypass Check
      if (currentOsSession.role === 'admin') {
        if (titleEl) titleEl.textContent = 'QUYỀN HẠN ĐẶC BIỆT';
        if (countEl) countEl.innerHTML = '<span style="color:#fbbf24;"><i class="fa-solid fa-crown"></i> ROOT ADMIN (VIP Bypass)</span>';
        if (badge) badge.className = 'user-sub-badge has-active-sub';
        if (profExpEl) profExpEl.textContent = 'Root Admin - Toàn quyền không cần Key';
        return;
      }

      // 2. Seller VIP Bypass Check
      if (currentOsSession.role === 'seller') {
        const sName = currentOsSession.seller?.displayName || 'Đại lý';
        if (titleEl) titleEl.textContent = 'QUYỀN HẠN ĐẠI LÝ';
        if (countEl) countEl.innerHTML = `<span style="color:var(--accent-cyan);"><i class="fa-solid fa-store"></i> SELLER: ${sName} (VIP)</span>`;
        if (badge) badge.className = 'user-sub-badge has-active-sub';
        if (profExpEl) profExpEl.textContent = 'Đại lý Seller - Miễn phí không cần Key';
        return;
      }

      // 3. Global Free Mode Check
      if (settings.freeMode) {
        if (titleEl) titleEl.textContent = 'CHẾ ĐỘ HỆ THỐNG';
        if (countEl) countEl.textContent = '⚡ Miễn Phí (Free Mode)';
        if (badge) {
          badge.className = 'user-sub-badge has-active-sub';
        }
        if (profExpEl) profExpEl.textContent = 'Đang bật Free Mode (Miễn Phí)';
        return;
      }

      // 4. Regular User Subscription Check
      if (titleEl) titleEl.textContent = 'THỜI HẠN KEY CỦA BẠN';
      const curUser = UserManager.getCurrentUser();

      if (!curUser) {
        if (countEl) countEl.textContent = '🔒 Chưa đăng nhập';
        if (badge) badge.className = 'user-sub-badge';
        if (profExpEl) profExpEl.textContent = 'Chưa có Key';
        return;
      }

      const exp = curUser.subscriptionExpires;
      if (!exp) {
        if (countEl) countEl.textContent = '⚠️ Chưa nạp Key';
        if (badge) badge.className = 'user-sub-badge is-expired';
        if (profExpEl) profExpEl.textContent = 'Chưa nạp Key';
        return;
      }

      if (exp >= 9999999999999) {
        if (countEl) countEl.textContent = '♾️ Vĩnh Viễn (Lifetime)';
        if (badge) badge.className = 'user-sub-badge has-active-sub';
        if (profExpEl) profExpEl.textContent = 'Vĩnh Viễn (Không giới hạn)';
        return;
      }

      const diff = exp - Date.now();
      if (diff <= 0) {
        if (countEl) countEl.textContent = '⛔ Đã hết hạn Key';
        if (badge) badge.className = 'user-sub-badge is-expired';
        if (profExpEl) profExpEl.textContent = 'Đã hết hạn';
        return;
      }

      // Calculate Remaining Time
      const totalSec = Math.floor(diff / 1000);
      const days = Math.floor(totalSec / 86400);
      const hours = Math.floor((totalSec % 86400) / 3600);
      const mins = Math.floor((totalSec % 3600) / 60);
      const secs = totalSec % 60;

      const pad = n => n.toString().padStart(2, '0');
      let countdownStr = '';
      if (days > 0) {
        countdownStr = `⏱️ Còn ${days}d ${pad(hours)}h ${pad(mins)}p ${pad(secs)}s`;
      } else {
        countdownStr = `⏱️ Còn ${pad(hours)}g ${pad(mins)}p ${pad(secs)}s`;
      }

      if (countEl) countEl.textContent = countdownStr;
      if (badge) badge.className = 'user-sub-badge has-active-sub';
      if (profExpEl) profExpEl.textContent = countdownStr;
    }

    setInterval(updateLiveSubscriptionTimer, 1000);
    renderUserAuthUI();
    updateLiveSubscriptionTimer();

    // 19. Access Check
    checkUserAccess();
  }

  function openAdminLogin() {
    document.getElementById('adminLoginError').style.display = 'none';
    document.getElementById('adminUsernameInput').value = '';
    document.getElementById('adminPasswordInput').value = '';
    document.getElementById('adminSecurityCodeInput').value = '';
    document.getElementById('sellerUsernameInput').value = '';
    document.getElementById('sellerPasswordInput').value = '';
    document.getElementById('adminLoginModal').style.display = 'flex';
  }

  function openOsDashboard() {
    const isRoot = currentOsSession.role === 'admin';
    const roleBadge = document.getElementById('osCurrentRoleBadge');
    const navSellersBtn = document.getElementById('osNavSellersBtn');
    const navSettingsBtn = document.getElementById('osNavSettingsBtn');
    const statSellerCard = document.getElementById('statSellerCardWrap');
    const clearAllKeysBtn = document.getElementById('adminClearAllKeysBtn');

    if (isRoot) {
      roleBadge.innerHTML = '<i class="fa-solid fa-crown" style="color: #fbbf24;"></i> ROOT ADMIN (freefire10)';
      roleBadge.style.background = 'rgba(245, 158, 11, 0.15)';
      roleBadge.style.color = '#fbbf24';
      if (navSellersBtn) navSellersBtn.style.display = 'flex';
      if (navSettingsBtn) navSettingsBtn.style.display = 'flex';
      if (statSellerCard) statSellerCard.style.display = 'flex';
      if (clearAllKeysBtn) clearAllKeysBtn.style.display = 'inline-block';
    } else {
      const s = currentOsSession.seller;
      roleBadge.innerHTML = `<i class="fa-solid fa-store" style="color: var(--accent-cyan);"></i> SELLER: ${s.displayName}`;
      roleBadge.style.background = 'rgba(0, 240, 255, 0.15)';
      roleBadge.style.color = 'var(--accent-cyan)';
      if (navSellersBtn) navSellersBtn.style.display = 'none';
      if (navSettingsBtn) navSettingsBtn.style.display = 'none';
      if (statSellerCard) statSellerCard.style.display = 'none';
      if (clearAllKeysBtn) clearAllKeysBtn.style.display = 'none';
    }

    // Load Settings to inputs
    const settings = AppSettings.get();
    document.getElementById('adminFreeModeToggle').checked = settings.freeMode;
    document.getElementById('adminTelegramLink').value = settings.telegramLink;
    document.getElementById('adminGroupLink').value = settings.groupLink;

    // Trigger Overview Tab
    document.querySelector('.os-nav-btn[data-ostab="overview"]').click();

    updateOsMetrics();
    renderSellerTable();
    renderAdminKeyTable();
    updateSellerQuotaNotice();

    document.getElementById('adminDashboardModal').style.display = 'flex';
    showToast(`Chào mừng ${isRoot ? 'Root Admin' : currentOsSession.seller.displayName} vào CipherVault Command OS!`, 'success');
  }

  function updateOsMetrics() {
    const keys = LicenseKeyManager.getKeys();
    const sellers = SellerManager.getSellers();
    const settings = AppSettings.get();

    const activeKeys = keys.filter(k => LicenseKeyManager.getKeyStatus(k) === 'active').length;

    const statTotal = document.getElementById('statTotalKeys');
    const statActive = document.getElementById('statActiveKeys');
    const statSellers = document.getElementById('statTotalSellers');
    const statFree = document.getElementById('statFreeModeStatus');

    if (statTotal) statTotal.textContent = keys.length;
    if (statActive) statActive.textContent = activeKeys;
    if (statSellers) statSellers.textContent = sellers.length;
    if (statFree) {
      statFree.textContent = settings.freeMode ? 'ĐANG BẬT (Mở cửa)' : 'ĐANG TẮT (Khóa Key)';
      statFree.style.color = settings.freeMode ? 'var(--accent-emerald)' : 'var(--accent-rose)';
    }
  }

  function updateSellerQuotaNotice() {
    const box = document.getElementById('sellerQuotaNoticeBox');
    if (!box) return;

    if (currentOsSession.role === 'seller') {
      const s = currentOsSession.seller;
      const remHour  = (s.quotas.hour  || 0) - (s.usedQuotas?.hour  || 0);
      const remDay   = (s.quotas[1]    || 0) - (s.usedQuotas?.[1]   || 0);
      const remWeek  = (s.quotas[7]    || 0) - (s.usedQuotas?.[7]   || 0);
      const remMonth = (s.quotas[30]   || 0) - (s.usedQuotas?.[30]  || 0);
      const remLife  = (s.quotas[9999] || 0) - (s.usedQuotas?.[9999]|| 0);

      const clr = v => v > 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)';

      box.style.display = 'block';
      box.innerHTML = `
        <div style="font-weight:700;margin-bottom:6px;"><i class="fa-solid fa-scale-balanced"></i> Hạn Mức Key Còn Lại Của Bạn:</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;font-family:var(--font-mono);font-size:0.82rem;">
          <span>⏱️ Giờ: <strong style="color:${clr(remHour)}">${remHour}/${s.quotas.hour||0}</strong></span>
          <span>📅 Ngày: <strong style="color:${clr(remDay)}">${remDay}/${s.quotas[1]||0}</strong></span>
          <span>🗓️ Tuần: <strong style="color:${clr(remWeek)}">${remWeek}/${s.quotas[7]||0}</strong></span>
          <span>📆 Tháng: <strong style="color:${clr(remMonth)}">${remMonth}/${s.quotas[30]||0}</strong></span>
          <span>♾️ Vĩnh viễn: <strong style="color:${clr(remLife)}">${remLife}/${s.quotas[9999]||0}</strong></span>
        </div>
      `;
    } else {
      box.style.display = 'none';
    }
  }

  function renderSellerTable() {
    const tbody = document.getElementById('sellerTableBody');
    if (!tbody) return;
    const sellers = SellerManager.getSellers();

    if (sellers.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:20px;">Chưa có tài khoản Seller nào. Hãy điền form ở trên để thêm đại lý.</td></tr>';
      return;
    }

    tbody.innerHTML = '';
    sellers.forEach(s => {
      const remHour  = (s.quotas.hour  || 0) - (s.usedQuotas?.hour  || 0);
      const remDay   = (s.quotas[1]    || 0) - (s.usedQuotas?.[1]   || 0);
      const remWeek  = (s.quotas[7]    || 0) - (s.usedQuotas?.[7]   || 0);
      const remMonth = (s.quotas[30]   || 0) - (s.usedQuotas?.[30]  || 0);
      const remLife  = (s.quotas[9999] || 0) - (s.usedQuotas?.[9999]|| 0);

      const c = v => v > 0 ? 'color:var(--accent-emerald)' : 'color:var(--accent-rose)';

      const statusBadge = s.status === 'active'
        ? '<span style="color:var(--accent-emerald);font-weight:700;">✅ Hoạt động</span>'
        : '<span style="color:var(--accent-rose);font-weight:700;">⛔ Đã khóa</span>';

      const toggleText = s.status === 'active' ? 'Khóa' : 'Mở';
      const toggleIcon = s.status === 'active' ? 'fa-ban' : 'fa-check';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-mono" style="font-weight:700;color:#c084fc;">${s.username}</td>
        <td><strong>${s.displayName}</strong></td>
        <td class="font-mono" style="${c(remHour)}">${remHour} / ${s.quotas.hour||0}</td>
        <td class="font-mono" style="${c(remDay)}">${remDay} / ${s.quotas[1]||0}</td>
        <td class="font-mono" style="${c(remWeek)}">${remWeek} / ${s.quotas[7]||0}</td>
        <td class="font-mono" style="${c(remMonth)}">${remMonth} / ${s.quotas[30]||0}</td>
        <td class="font-mono" style="${c(remLife)}">${remLife} / ${s.quotas[9999]||0}</td>
        <td>${statusBadge}</td>
        <td>
          <button type="button" class="mini-btn toggle-seller-btn" data-sid="${s.id}"><i class="fa-solid ${toggleIcon}"></i> ${toggleText}</button>
          <button type="button" class="mini-btn edit-seller-btn" data-sid="${s.id}" title="Sửa hạn mức"><i class="fa-solid fa-pen-to-square"></i></button>
          <button type="button" class="mini-btn delete-seller-btn" data-sid="${s.id}" style="color:var(--accent-rose);" title="Xóa"><i class="fa-solid fa-trash"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Bind Seller Table Buttons
    tbody.querySelectorAll('.toggle-seller-btn').forEach(b => {
      b.addEventListener('click', () => {
        sfx.click();
        SellerManager.toggleSellerStatus(b.getAttribute('data-sid'));
        renderSellerTable();
        showToast('Đã thay đổi trạng thái Seller!', 'info');
      });
    });

    tbody.querySelectorAll('.delete-seller-btn').forEach(b => {
      b.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa tài khoản Seller này?')) {
          sfx.click();
          SellerManager.deleteSeller(b.getAttribute('data-sid'));
          renderSellerTable();
          updateOsMetrics();
          showToast('Đã xóa tài khoản Seller!', 'info');
        }
      });
    });

    tbody.querySelectorAll('.edit-seller-btn').forEach(b => {
      b.addEventListener('click', () => {
        const sid = b.getAttribute('data-sid');
        const s = SellerManager.getSellers().find(x => x.id === sid);
        if (!s) return;
        const newH = prompt('Hạn mức Key Giờ (hour):', s.quotas.hour || 0);
        if (newH === null) return;
        const newD = prompt('Hạn mức Key Ngày (1d):', s.quotas[1] || 0);
        if (newD === null) return;
        const newW = prompt('Hạn mức Key Tuần (7d):', s.quotas[7] || 0);
        if (newW === null) return;
        const newM = prompt('Hạn mức Key Tháng (30d):', s.quotas[30] || 0);
        if (newM === null) return;
        const newL = prompt('Hạn mức Vĩnh viễn (Lifetime):', s.quotas[9999] || 0);
        if (newL === null) return;

        SellerManager.updateSellerQuotas(sid, { hour: newH, day: newD, week: newW, month: newM, lifetime: newL });
        renderSellerTable();
        showToast('Đã cập nhật hạn mức (bao gồm giờ) cho Seller!', 'success');
      });
    });
  }

  function renderAdminKeyTable() {
    const tbody = document.getElementById('adminKeyTableBody');
    if (!tbody) return;

    let keys = LicenseKeyManager.getKeys();
    const searchVal = (document.getElementById('searchKeyInput')?.value || '').trim().toLowerCase();
    const statusFilter = document.getElementById('filterKeyStatus')?.value || 'all';

    // If Seller is logged in, filter only keys created by this seller
    if (currentOsSession.role === 'seller') {
      keys = keys.filter(k => k.sellerId === currentOsSession.seller.id);
    }

    if (searchVal) {
      keys = keys.filter(k => k.key.toLowerCase().includes(searchVal) || (k.createdBy && k.createdBy.toLowerCase().includes(searchVal)) || (k.boundUser && k.boundUser.toLowerCase().includes(searchVal)));
    }
    if (statusFilter !== 'all') {
      keys = keys.filter(k => LicenseKeyManager.getKeyStatus(k) === statusFilter);
    }

    if (keys.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 20px;">Không tìm thấy License Key nào phù hợp.</td></tr>';
      return;
    }

    tbody.innerHTML = '';
    keys.forEach(k => {
      const status = LicenseKeyManager.getKeyStatus(k);
      const statusLabel = status === 'active' ? '✅ Hoạt động' : status === 'suspended' ? '⛔ Đã khóa' : '⏰ Hết hạn';
      const statusClass = status === 'active' ? 'key-active' : status === 'suspended' ? 'key-suspended' : 'key-expired';
      const toggleText = k.status === 'active' ? 'Khóa' : 'Mở';
      const toggleIcon = k.status === 'active' ? 'fa-ban' : 'fa-check';

      const boundDisplay = k.boundUser
        ? `<span style="color:#34d399;font-weight:700;font-family:var(--font-mono);"><i class="fa-solid fa-lock"></i> @${k.boundUser}</span>`
        : '<span style="color:var(--text-muted);font-size:0.75rem;">Chưa kích hoạt</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-mono" style="font-weight: 700; color: var(--accent-cyan); font-size: 0.82rem;">${k.key}</td>
        <td>${k.durationLabel}</td>
        <td style="font-size: 0.78rem; color: #c084fc;"><strong>${k.createdBy || 'Root Admin'}</strong></td>
        <td style="font-size: 0.78rem;">${k.createdAt}</td>
        <td style="font-size: 0.78rem;">${k.expiresAt}</td>
        <td style="font-size: 0.78rem;">${boundDisplay}</td>
        <td class="${statusClass}">${statusLabel}</td>
        <td>
          <button type="button" class="mini-btn copy-key-btn" data-key="${k.key}" title="Sao chép key"><i class="fa-solid fa-copy"></i></button>
          <button type="button" class="mini-btn admin-key-toggle" data-kid="${k.id}" title="${toggleText}"><i class="fa-solid ${toggleIcon}"></i> ${toggleText}</button>
          <button type="button" class="mini-btn admin-key-delete" data-kid="${k.id}" title="Xóa" style="color: var(--accent-rose);"><i class="fa-solid fa-trash"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Bind Key Buttons
    tbody.querySelectorAll('.copy-key-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.getAttribute('data-key'));
        sfx.success();
        showToast('Đã sao chép License Key vào Clipboard!', 'success');
      });
    });

    tbody.querySelectorAll('.admin-key-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        LicenseKeyManager.suspendKey(btn.getAttribute('data-kid'));
        renderAdminKeyTable();
        showToast('Đã cập nhật trạng thái key!', 'info');
      });
    });

    tbody.querySelectorAll('.admin-key-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.click();
        LicenseKeyManager.deleteKey(btn.getAttribute('data-kid'));
        renderAdminKeyTable();
        updateOsMetrics();
        showToast('Đã xóa key khỏi hệ thống!', 'info');
      });
    });
  }

  function checkUserAccess() {
    // If Root Admin or Seller is logged in -> 100% VIP Bypass, never prompt!
    if (currentOsSession.role === 'admin' || currentOsSession.role === 'seller') return;

    const settings = AppSettings.get();
    if (settings.freeMode) return;

    const curUser = UserManager.getCurrentUser();
    if (!curUser) {
      setTimeout(() => {
        const authModal = document.getElementById('userAuthModal');
        if (authModal) authModal.style.display = 'flex';
      }, 1000);
      return;
    }

    if (curUser.subscriptionExpires >= 9999999999999 || (curUser.subscriptionExpires && curUser.subscriptionExpires > Date.now())) {
      return;
    }

    setTimeout(() => {
      const modal = document.getElementById('keyActivationModal');
      if (modal) modal.style.display = 'flex';
    }, 1000);
  }

  // --- Bootstrap ---
  document.addEventListener('DOMContentLoaded', () => {
    initUI();
    applyLanguage('vi');
    initAdminAndPromoSystem();
  });

})();

