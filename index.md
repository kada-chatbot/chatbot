<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SAPA — Asisten Digital Komdigi</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --merah: #C8102E;
      --merah-muda: #F5001D;
      --biru-komdigi: #003580;
      --biru-muda: #0057B8;
      --biru-terang: #1A8FE3;
      --emas: #F5A623;
      --putih: #FFFFFF;
      --abu-terang: #F4F6FA;
      --abu-border: #DDE3EE;
      --abu-teks: #6B7280;
      --teks-gelap: #0D1B3E;
      --bg-chat: #EEF2FA;
      --shadow-soft: 0 4px 24px rgba(0,53,128,0.10);
      --shadow-card: 0 2px 12px rgba(0,53,128,0.08);
      --radius: 16px;
      --radius-sm: 10px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: var(--abu-terang);
      color: var(--teks-gelap);
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ─── HEADER (slim) ──────────────────────── */
    header {
      background: white;
      padding: 0 20px 0 16px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--abu-border);
      box-shadow: 0 1px 6px rgba(0,53,128,0.07);
      position: relative;
      z-index: 10;
      flex-shrink: 0;
    }

    header::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--biru-komdigi) 0%, var(--biru-terang) 50%, var(--merah) 100%);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .logo-box {
      width: 28px; height: 28px;
      background: var(--biru-komdigi);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .logo-box svg { width: 18px; height: 18px; }

    .brand-text { display: flex; flex-direction: column; }
    .brand-title {
      font-size: 13.5px; font-weight: 700;
      color: var(--biru-komdigi); letter-spacing: 0.2px;
      line-height: 1.1;
    }
    .brand-subtitle {
      font-size: 9.5px; font-weight: 500;
      color: var(--abu-teks);
      letter-spacing: 0.8px;
    }

    .header-status {
      display: flex; align-items: center; gap: 6px;
    }
    .status-dot {
      width: 7px; height: 7px;
      background: #22C55E;
      border-radius: 50%;
      animation: pulse-dot 2s infinite;
    }
    @keyframes pulse-dot {
      0%,100%{opacity:1;transform:scale(1);}
      50%{opacity:0.6;transform:scale(1.4);}
    }
    .status-text { font-size: 11px; font-weight: 600; color: var(--abu-teks); }

    /* ─── LAYOUT ─────────────────────────────── */
    .app-wrapper {
      flex: 1;
      display: flex;
      overflow: hidden;
    }

    /* ─── SIDEBAR ────────────────────────────── */
    .sidebar {
      width: 260px;
      min-width: 260px;
      background: #f9fafb;
      border-right: 1px solid var(--abu-border);
      display: flex; flex-direction: column;
      overflow: hidden;
      transition: width 0.26s cubic-bezier(.4,0,.2,1), min-width 0.26s cubic-bezier(.4,0,.2,1);
      flex-shrink: 0;
    }
    .sidebar.collapsed { width: 52px; min-width: 52px; }

    /* Top bar — always fully visible in both states */
    .sidebar-top {
      display: flex; align-items: center;
      padding: 10px 10px 8px;
      border-bottom: 1px solid var(--abu-border);
      flex-shrink: 0; gap: 6px;
      min-height: 52px;
      overflow: hidden;
    }

    .icon-btn {
      width: 32px; height: 32px; min-width: 32px;
      border: none; background: none; border-radius: 8px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: #4B5563;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0; position: relative;
    }
    .icon-btn:hover { background: #e5e7eb; color: var(--biru-komdigi); }
    .icon-btn svg { width: 17px; height: 17px; }

    /* Bell badge */
    .bell-badge {
      position: absolute; top: 4px; right: 4px;
      width: 7px; height: 7px;
      background: var(--merah);
      border-radius: 50%;
      border: 1.5px solid #f9fafb;
      display: none;
    }
    .bell-badge.show { display: block; }

    /* New chat button */
    .new-chat-btn {
      flex: 1;
      display: flex; align-items: center; gap: 8px;
      background: white;
      border: 1px solid var(--abu-border); border-radius: 9px;
      padding: 7px 11px;
      font-family: inherit; font-size: 12.5px; font-weight: 600;
      color: var(--teks-gelap); cursor: pointer;
      transition: all 0.15s; overflow: hidden; white-space: nowrap;
      min-width: 0;
    }
    .new-chat-btn:hover { background: var(--abu-terang); border-color: var(--biru-muda); color: var(--biru-muda); }
    .new-chat-btn svg { flex-shrink: 0; width: 15px; height: 15px; }
    .new-chat-btn .btn-label {
      overflow: hidden; opacity: 1;
      transition: max-width 0.24s, opacity 0.2s, padding 0.2s;
      max-width: 160px; white-space: nowrap;
    }

    /* Collapsed: new-chat becomes icon-only square, label hidden */
    .sidebar.collapsed .new-chat-btn {
      flex: none; width: 32px; height: 32px; min-width: 32px;
      padding: 0; justify-content: center;
      border-color: transparent; background: none; border-radius: 8px;
    }
    .sidebar.collapsed .new-chat-btn .btn-label { max-width: 0; opacity: 0; }
    .sidebar.collapsed .new-chat-btn:hover { background: #e5e7eb; border-color: transparent; color: var(--biru-komdigi); }

    /* Sidebar history content fades out when collapsed */
    .sidebar-content {
      flex: 1; display: flex; flex-direction: column;
      overflow: hidden; opacity: 1;
      transition: opacity 0.18s;
    }
    .sidebar.collapsed .sidebar-content { opacity: 0; pointer-events: none; }

    .chat-history { flex:1; overflow-y:auto; padding: 8px; }
    .history-group-label {
      font-size: 10px; font-weight: 700; color: #9CA3AF;
      letter-spacing: 1px; text-transform: uppercase;
      padding: 10px 8px 4px;
    }
    .history-item {
      display: flex; align-items: center; gap: 9px;
      padding: 8px 10px; border-radius: 8px;
      cursor: pointer; transition: background 0.13s; margin-bottom: 1px;
    }
    .history-item:hover { background: #e9ecf3; }
    .history-item.active { background: #E0EAFA; }
    .history-icon { font-size: 13px; opacity: 0.5; flex-shrink:0; }
    .history-title {
      font-size: 12.5px; font-weight: 500; color: #374151;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;
    }
    .history-item.active .history-title { color: var(--biru-muda); font-weight: 600; }

    .sidebar-footer {
      padding: 10px 10px 12px;
      border-top: 1px solid var(--abu-border);
    }
    .version-badge {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px; color: #9CA3AF;
      display: flex; align-items: center; gap: 6px;
      padding: 0 2px; white-space: nowrap; overflow: hidden;
    }

    /* ─── MAIN CHAT ───────────────────────────── */
    .chat-main {
      flex: 1;
      display: flex; flex-direction: column;
      background: var(--bg-chat);
      overflow: hidden;
    }

    /* Topic bar */
    .topic-bar {
      background: white;
      border-bottom: 1px solid var(--abu-border);
      padding: 10px 24px;
      display: flex; align-items: center; gap: 10px;
    }
    .topic-chip {
      font-size: 11px; font-weight: 600;
      color: var(--biru-muda);
      background: #EBF2FF;
      padding: 4px 12px;
      border-radius: 20px;
      cursor: pointer;
      border: 1px solid #C5D9F5;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .topic-chip:hover { background: var(--biru-muda); color: white; border-color: var(--biru-muda); }
    .topic-chip.active { background: var(--biru-komdigi); color: white; border-color: var(--biru-komdigi); }

    /* Messages area */
    .messages-area {
      flex: 1;
      overflow-y: auto;
      padding: 28px 32px;
      scroll-behavior: smooth;
    }

    /* Welcome screen */
    .welcome-screen {
      display: flex; flex-direction: column;
      align-items: center;
      padding: 40px 20px;
      text-align: center;
      animation: fadeUp 0.5s ease;
    }
    @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }

    .welcome-icon {
      width: 80px; height: 80px;
      background: linear-gradient(135deg, var(--biru-komdigi), var(--biru-terang));
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 36px;
      margin-bottom: 20px;
      box-shadow: 0 8px 32px rgba(0,53,128,0.25);
    }
    .welcome-title {
      font-size: 26px; font-weight: 800;
      color: var(--biru-komdigi);
      margin-bottom: 8px;
    }
    .welcome-subtitle {
      font-size: 14px; color: var(--abu-teks);
      max-width: 500px;
      line-height: 1.6;
      margin-bottom: 32px;
    }

    .suggestion-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      width: 100%; max-width: 600px;
    }
    .suggestion-card {
      background: white;
      border: 1.5px solid var(--abu-border);
      border-radius: var(--radius);
      padding: 16px;
      cursor: pointer;
      text-align: left;
      transition: all 0.2s;
      display: flex; flex-direction: column; gap: 6px;
    }
    .suggestion-card:hover {
      border-color: var(--biru-muda);
      box-shadow: var(--shadow-soft);
      transform: translateY(-2px);
    }
    .suggestion-card-icon { font-size: 22px; }
    .suggestion-card-title { font-size: 13px; font-weight: 700; color: var(--teks-gelap); }
    .suggestion-card-desc { font-size: 11.5px; color: var(--abu-teks); line-height: 1.4; }

    /* Messages */
    .message-row {
      display: flex;
      margin-bottom: 20px;
      animation: msgIn 0.3s ease;
    }
    @keyframes msgIn { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }

    .message-row.user { justify-content: flex-end; }
    .message-row.bot { justify-content: flex-start; }

    .msg-avatar {
      width: 36px; height: 36px;
      border-radius: 50%;
      display: flex; align-items:center; justify-content:center;
      font-size: 16px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .bot .msg-avatar {
      background: linear-gradient(135deg, var(--biru-komdigi), var(--biru-terang));
      box-shadow: 0 2px 8px rgba(0,53,128,0.25);
      margin-right: 10px;
    }
    .user .msg-avatar {
      background: linear-gradient(135deg, #374151, #6B7280);
      margin-left: 10px;
      order: 2;
    }

    .msg-content-wrap { display: flex; flex-direction: column; max-width: 72%; }
    .user .msg-content-wrap { align-items: flex-end; }

    .msg-sender {
      font-size: 10.5px; font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
      color: var(--abu-teks);
    }
    .bot .msg-sender { color: var(--biru-muda); }

    .msg-bubble {
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 13.5px;
      line-height: 1.65;
      position: relative;
    }
    .bot .msg-bubble {
      background: white;
      color: var(--teks-gelap);
      border-top-left-radius: 4px;
      box-shadow: var(--shadow-card);
    }
    .user .msg-bubble {
      background: linear-gradient(135deg, var(--biru-komdigi), var(--biru-muda));
      color: white;
      border-top-right-radius: 4px;
    }

    .msg-bubble p { margin-bottom: 6px; }
    .msg-bubble p:last-child { margin-bottom: 0; }
    .msg-bubble strong { font-weight: 700; }
    .msg-bubble ul { margin: 6px 0 6px 16px; }
    .msg-bubble li { margin-bottom: 3px; }

    .msg-time {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px; color: var(--abu-teks);
      margin-top: 4px;
    }

    /* Typing indicator */
    .typing-bubble {
      background: white;
      border-radius: 16px; border-top-left-radius: 4px;
      padding: 14px 18px;
      display: flex; gap: 5px; align-items: center;
      box-shadow: var(--shadow-card);
    }
    .typing-dot {
      width: 7px; height: 7px;
      background: var(--biru-muda);
      border-radius: 50%;
      animation: bounce 1.2s infinite;
    }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes bounce { 0%,80%,100%{transform:translateY(0);} 40%{transform:translateY(-6px);} }

    /* Feedback buttons */
    .msg-feedback {
      display: flex; gap: 6px; margin-top: 6px;
    }
    .feedback-btn {
      background: none; border: 1px solid var(--abu-border);
      border-radius: 6px; padding: 3px 8px;
      font-size: 12px; cursor: pointer;
      color: var(--abu-teks);
      transition: all 0.15s;
    }
    .feedback-btn:hover { background: var(--abu-terang); border-color: var(--biru-muda); color: var(--biru-muda); }
    .feedback-btn.active { background: #EBF2FF; border-color: var(--biru-muda); color: var(--biru-muda); }

    /* ─── INPUT BAR ───────────────────────────── */
    .input-section {
      background: white;
      border-top: 1px solid var(--abu-border);
      padding: 16px 24px 20px;
    }

    .input-box {
      display: flex; align-items: flex-end;
      background: var(--abu-terang);
      border: 2px solid var(--abu-border);
      border-radius: var(--radius);
      padding: 10px 12px;
      gap: 10px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .input-box:focus-within {
      border-color: var(--biru-muda);
      box-shadow: 0 0 0 3px rgba(0,87,184,0.10);
    }

    #chat-input {
      flex: 1;
      border: none; background: transparent;
      font-family: inherit; font-size: 13.5px; color: var(--teks-gelap);
      resize: none;
      outline: none;
      max-height: 140px;
      min-height: 24px;
      line-height: 1.5;
    }
    #chat-input::placeholder { color: #9CA3AF; }

    .input-actions { display: flex; align-items: center; gap: 6px; flex-shrink:0; }

    .attach-btn {
      width: 34px; height: 34px;
      border-radius: 8px; border: none;
      background: none;
      color: var(--abu-teks);
      font-size: 16px; cursor: pointer;
      transition: all 0.15s;
      display: flex; align-items:center; justify-content:center;
    }
    .attach-btn:hover { background: var(--abu-terang); color: var(--biru-muda); }

    .send-btn {
      width: 38px; height: 38px;
      border-radius: 10px; border: none;
      background: linear-gradient(135deg, var(--biru-komdigi), var(--biru-muda));
      color: white;
      font-size: 16px; cursor: pointer;
      display: flex; align-items:center; justify-content:center;
      transition: all 0.2s;
      box-shadow: 0 2px 8px rgba(0,53,128,0.3);
    }
    .send-btn:hover { transform: scale(1.05); box-shadow: 0 4px 16px rgba(0,53,128,0.4); }
    .send-btn:active { transform: scale(0.97); }
    .send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    .input-footer {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 8px;
      padding: 0 2px;
    }
    .input-hint { font-size: 11px; color: #9CA3AF; }
    .char-counter {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px; color: #9CA3AF;
    }

    /* ─── INFO PANEL ──────────────────────────── */
    .info-panel {
      width: 240px;
      min-width: 240px;
      background: white;
      border-left: 1px solid var(--abu-border);
      display: flex; flex-direction: column;
      overflow-y: auto;
      transition: width 0.26s cubic-bezier(.4,0,.2,1), min-width 0.26s cubic-bezier(.4,0,.2,1), opacity 0.2s;
    }
    .info-panel.hidden {
      width: 0; min-width: 0;
      opacity: 0; pointer-events: none; overflow: hidden;
    }

    .panel-section { padding: 18px 16px; border-bottom: 1px solid var(--abu-border); }
    .panel-title {
      font-size: 10px; font-weight: 700;
      letter-spacing: 1.2px; text-transform: uppercase;
      color: var(--biru-muda);
      margin-bottom: 12px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .panel-close-btn {
      width: 20px; height: 20px;
      border: none; background: none;
      border-radius: 5px; cursor: pointer;
      color: #9CA3AF; font-size: 14px;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.13s, color 0.13s;
      line-height: 1;
    }
    .panel-close-btn:hover { background: #f3f4f6; color: #374151; }

    .quick-link {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
      text-decoration: none;
    }
    .quick-link:hover { background: var(--abu-terang); }
    .quick-link-icon { font-size: 18px; flex-shrink:0; }
    .quick-link-label { font-size: 12.5px; font-weight: 500; color: var(--teks-gelap); }

    .stat-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .stat-label { font-size: 12px; color: var(--abu-teks); }
    .stat-value { font-size: 12px; font-weight: 700; color: var(--teks-gelap); font-family: 'IBM Plex Mono', monospace; }

    .alert-card {
      background: #FFF8E6;
      border: 1px solid #FCDFA0;
      border-radius: 10px;
      padding: 10px 12px;
      margin-bottom: 8px;
    }
    .alert-badge {
      font-size: 10px; font-weight: 700;
      color: #B45309;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 4px;
    }
    .alert-text { font-size: 11.5px; color: #78350F; line-height: 1.4; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--abu-border); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }

    /* Responsive */
    @media(max-width:900px){
      .sidebar { display:none; }
      .info-panel { display:none; }
      .messages-area { padding: 20px 16px; }
      .input-section { padding: 12px 16px 16px; }
    }
  </style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="header-left">
    <div class="header-brand">
      <div class="logo-box">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 22 Q14 12 20 20 Q26 28 32 18" stroke="#F5A623" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <circle cx="20" cy="20" r="4" fill="white"/>
          <circle cx="8" cy="22" r="2.5" fill="#C8102E"/>
          <circle cx="32" cy="18" r="2.5" fill="#C8102E"/>
        </svg>
      </div>
      <div class="brand-text">
        <span class="brand-title">SAPA · Komdigi</span>
        <span class="brand-subtitle">Asisten Digital Resmi</span>
      </div>
    </div>
  </div>
  <div class="header-status">
    <div class="status-dot"></div>
    <span class="status-text">Aktif</span>
  </div>
</header>

<!-- APP WRAPPER -->
<div class="app-wrapper">

  <!-- SIDEBAR -->
  <aside class="sidebar" id="sidebar">

    <!-- Single top bar — always visible in both states -->
    <div class="sidebar-top">
      <!-- Collapse/expand toggle -->
      <button class="icon-btn" onclick="toggleSidebar()" title="Sembunyikan/Tampilkan Sidebar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
        </svg>
      </button>
      <!-- New chat — shows label when expanded, icon-only when collapsed -->
      <button class="new-chat-btn" onclick="startNewChat()" title="Percakapan Baru">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <span class="btn-label">Percakapan Baru</span>
      </button>
      <!-- Bell — always visible -->
      <button class="icon-btn bell-icon-btn" id="bell-btn" onclick="toggleInfoPanel()" title="Pengumuman">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span class="bell-badge show" id="bell-badge"></span>
      </button>
    </div>

    <!-- History + footer (fades when collapsed) -->
    <div class="sidebar-content">
      <div class="chat-history">
        <div class="history-group-label">Hari Ini</div>
        <div class="history-item active">
          <span class="history-icon">💬</span>
          <span class="history-title">Informasi PSE & PSTE</span>
        </div>
        <div class="history-item">
          <span class="history-icon">💬</span>
          <span class="history-title">Regulasi Perlindungan Data</span>
        </div>
        <div class="history-group-label">Kemarin</div>
        <div class="history-item">
          <span class="history-icon">💬</span>
          <span class="history-title">Pendaftaran Izin Frekuensi</span>
        </div>
        <div class="history-item">
          <span class="history-icon">💬</span>
          <span class="history-title">UU ITE Terbaru 2024</span>
        </div>
        <div class="history-item">
          <span class="history-icon">💬</span>
          <span class="history-title">Program Internet Desa</span>
        </div>
        <div class="history-group-label">7 Hari Lalu</div>
        <div class="history-item">
          <span class="history-icon">💬</span>
          <span class="history-title">Konten Digital Ilegal</span>
        </div>
      </div>
      <div class="sidebar-footer">
        <div class="version-badge"><span>⚡</span> SAPA v2.1 · Komdigi AI</div>
      </div>
    </div>
  </aside>

  <!-- CHAT MAIN -->
  <div class="chat-main">

    <!-- Topic bar -->
    <div class="topic-bar">
      <span style="font-size:11px;font-weight:700;color:var(--abu-teks);margin-right:4px;">Topik:</span>
      <div style="display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;">
        <span class="topic-chip active" onclick="setTopic(this,'Umum')">🌐 Umum</span>
        <span class="topic-chip" onclick="setTopic(this,'PSE')">🏢 PSE</span>
        <span class="topic-chip" onclick="setTopic(this,'Regulasi')">📋 Regulasi</span>
        <span class="topic-chip" onclick="setTopic(this,'Perizinan')">📄 Perizinan</span>
        <span class="topic-chip" onclick="setTopic(this,'Internet')">📡 Internet</span>
        <span class="topic-chip" onclick="setTopic(this,'Siber')">🔒 Siber</span>
      </div>
    </div>

    <!-- Messages area -->
    <div class="messages-area" id="messages-area">
      <!-- Welcome screen -->
      <div class="welcome-screen" id="welcome-screen">
        <div class="welcome-icon">🤖</div>
        <div class="welcome-title">Halo! Saya SAPA</div>
        <div class="welcome-subtitle">
          Asisten Digital resmi Kementerian Komunikasi dan Digital Republik Indonesia.<br/>
          Saya siap membantu Anda dengan informasi layanan, regulasi, dan kebijakan digital nasional.
        </div>
        <div class="suggestion-grid">
          <div class="suggestion-card" onclick="sendSuggestion('Apa itu PSE dan bagaimana cara mendaftarkannya?')">
            <div class="suggestion-card-icon">🏢</div>
            <div class="suggestion-card-title">Daftar PSE</div>
            <div class="suggestion-card-desc">Pelajari cara mendaftarkan Penyelenggara Sistem Elektronik</div>
          </div>
          <div class="suggestion-card" onclick="sendSuggestion('Jelaskan tentang UU Pelindungan Data Pribadi')">
            <div class="suggestion-card-icon">🛡️</div>
            <div class="suggestion-card-title">UU PDP</div>
            <div class="suggestion-card-desc">Informasi Undang-Undang Pelindungan Data Pribadi</div>
          </div>
          <div class="suggestion-card" onclick="sendSuggestion('Bagaimana cara melaporkan konten negatif di internet?')">
            <div class="suggestion-card-icon">🚨</div>
            <div class="suggestion-card-title">Lapor Konten</div>
            <div class="suggestion-card-desc">Tata cara pelaporan konten ilegal & negatif</div>
          </div>
          <div class="suggestion-card" onclick="sendSuggestion('Apa program Komdigi untuk internet di daerah terpencil?')">
            <div class="suggestion-card-icon">📡</div>
            <div class="suggestion-card-title">Akses Digital</div>
            <div class="suggestion-card-desc">Program perluasan akses internet nasional</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input section -->
    <div class="input-section">
      <div class="input-box">
        <textarea id="chat-input" placeholder="Ketik pertanyaan Anda tentang layanan Komdigi..." rows="1"
          oninput="autoResize(this);updateCounter(this)"
          onkeydown="handleKey(event)"></textarea>
        <div class="input-actions">
          <button class="attach-btn" title="Lampiran">📎</button>
          <button class="send-btn" id="send-btn" onclick="sendMessage()" title="Kirim">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="input-footer">
        <span class="input-hint">⌨️ Tekan Enter untuk kirim · Shift+Enter untuk baris baru</span>
        <span class="char-counter" id="char-counter">0/500</span>
      </div>
    </div>

  </div><!-- end chat-main -->

  <!-- INFO PANEL -->
  <aside class="info-panel" id="info-panel">

    <div class="panel-section">
      <div class="panel-title">
        <span>🔔 Pengumuman</span>
        <button class="panel-close-btn" onclick="toggleInfoPanel()" title="Tutup panel">✕</button>
      </div>
      <div class="alert-card">
        <div class="alert-badge">🔴 Terbaru</div>
        <div class="alert-text">Pembaruan regulasi PSE asing berlaku mulai 1 April 2025.</div>
      </div>
      <div class="alert-card">
        <div class="alert-badge">🟡 Jadwal</div>
        <div class="alert-text">Sosialisasi UU PDP: 15 Maret 2025 pukul 09.00 WIB via Zoom.</div>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-title"><span>📊 Statistik Layanan</span></div>
      <div class="stat-row">
        <span class="stat-label">PSE Terdaftar</span>
        <span class="stat-value">6.184</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Aduan Diproses</span>
        <span class="stat-value">42.318</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Konten Ditangani</span>
        <span class="stat-value">1.2 Jt</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Respons Rata-rata</span>
        <span class="stat-value">&lt; 3 Jam</span>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-title"><span>🔗 Tautan Cepat</span></div>
      <a class="quick-link" href="#" onclick="return false;">
        <span class="quick-link-icon">🌐</span>
        <span class="quick-link-label">Portal Komdigi</span>
      </a>
      <a class="quick-link" href="#" onclick="return false;">
        <span class="quick-link-icon">📋</span>
        <span class="quick-link-label">Daftar PSE Online</span>
      </a>
      <a class="quick-link" href="#" onclick="return false;">
        <span class="quick-link-icon">📞</span>
        <span class="quick-link-label">Call Center 159</span>
      </a>
      <a class="quick-link" href="#" onclick="return false;">
        <span class="quick-link-icon">📧</span>
        <span class="quick-link-label">Kirim Aduan</span>
      </a>
      <a class="quick-link" href="#" onclick="return false;">
        <span class="quick-link-icon">📰</span>
        <span class="quick-link-label">Siaran Pers</span>
      </a>
    </div>

  </aside>

</div><!-- end app-wrapper -->

<script>
  // ─── DUMMY DATA ─────────────────────────────────────────────────
  const dummyResponses = {
    "pse": {
      keywords: ["pse","penyelenggara sistem elektronik","daftar pse","pendaftaran pse","sistem elektronik"],
      response: `<p><strong>Penyelenggara Sistem Elektronik (PSE)</strong> adalah setiap orang, penyelenggara negara, badan usaha, dan masyarakat yang menyediakan, mengelola, dan/atau mengoperasikan sistem elektronik.</p>
<p><strong>Cara Pendaftaran PSE:</strong></p>
<ul>
  <li>Kunjungi portal <strong>pse.kominfo.go.id</strong></li>
  <li>Buat akun dan lengkapi profil perusahaan</li>
  <li>Isi formulir pendaftaran secara online</li>
  <li>Lampirkan dokumen yang dipersyaratkan (NIB, akta perusahaan, dll)</li>
  <li>Tunggu verifikasi dari tim Komdigi (maksimal 14 hari kerja)</li>
</ul>
<p>PSE yang belum mendaftar dapat dikenai sanksi berupa pemblokiran akses. Untuk bantuan lebih lanjut, hubungi <strong>Call Center 159</strong>.</p>`
    },
    "pdp": {
      keywords: ["pdp","data pribadi","perlindungan data","uu pdp","undang-undang perlindungan"],
      response: `<p><strong>Undang-Undang Pelindungan Data Pribadi (UU PDP)</strong> — UU No. 27 Tahun 2022 — adalah regulasi yang mengatur pengumpulan, pemrosesan, dan perlindungan data pribadi warga negara Indonesia.</p>
<p><strong>Pokok-pokok UU PDP:</strong></p>
<ul>
  <li>Hak pemilik data: akses, koreksi, dan penghapusan data</li>
  <li>Kewajiban pengendali data untuk mendapatkan persetujuan</li>
  <li>Pelaporan kebocoran data dalam 14 jam</li>
  <li>Sanksi pidana hingga 6 tahun & denda Rp 60 miliar</li>
</ul>
<p>Masa transisi UU PDP berlaku 2 tahun sejak disahkan. Perusahaan diwajibkan segera menyesuaikan praktik pengelolaan data.</p>`
    },
    "konten": {
      keywords: ["lapor konten","konten negatif","konten ilegal","blokir","hoaks","pornografi"],
      response: `<p>Untuk <strong>melaporkan konten negatif atau ilegal</strong> di internet, Komdigi menyediakan beberapa saluran resmi:</p>
<ul>
  <li>🌐 <strong>aduankonten.id</strong> — portal pengaduan konten online</li>
  <li>📧 <strong>aduankonten@komdigi.go.id</strong></li>
  <li>📱 <strong>WhatsApp:</strong> 08119224545</li>
  <li>📞 <strong>Call Center:</strong> 159</li>
</ul>
<p>Kategori konten yang dapat dilaporkan meliputi: pornografi anak, perjudian online, terorisme, hoaks berbahaya, penipuan digital, dan pelanggaran hak cipta.</p>
<p>Rata-rata penanganan aduan: <strong>kurang dari 3 jam</strong> untuk konten prioritas.</p>`
    },
    "internet": {
      keywords: ["internet desa","internet terpencil","akses internet","program internet","3t","daerah terpencil","bakti"],
      response: `<p>Komdigi melalui <strong>BAKTI (Badan Aksesibilitas Telekomunikasi dan Informasi)</strong> menjalankan berbagai program perluasan akses internet nasional:</p>
<ul>
  <li>📡 <strong>Palapa Ring</strong> — jaringan tulang punggung serat optik 35 provinsi</li>
  <li>🏘️ <strong>Internet Desa</strong> — koneksi broadband untuk 83.000+ desa</li>
  <li>🏫 <strong>Sekolah & Puskesmas</strong> — konektivitas lembaga layanan publik di daerah 3T</li>
  <li>🛰️ <strong>SATRIA-1</strong> — satelit multifungsi untuk daerah terpencil</li>
</ul>
<p>Untuk mengajukan permohonan konektivitas daerah 3T, kunjungi <strong>bakti.komdigi.go.id</strong> atau hubungi Dinas Kominfo setempat.</p>`
    },
    "uu ite": {
      keywords: ["uu ite","undang-undang ite","pasal ite","revisi ite","hukum digital"],
      response: `<p><strong>UU ITE (Undang-Undang Informasi dan Transaksi Elektronik)</strong> — UU No. 1 Tahun 2024 (revisi kedua) mengatur transaksi elektronik, kejahatan siber, dan informasi digital di Indonesia.</p>
<p><strong>Pembaruan UU ITE 2024:</strong></p>
<ul>
  <li>Penguatan pasal perlindungan korban pencemaran nama baik</li>
  <li>Penambahan ketentuan <em>right to be forgotten</em></li>
  <li>Penegasan sanksi penyebaran hoaks dengan ancaman pidana</li>
  <li>Klausul perlindungan jurnalis dan pelapor pelanggaran</li>
</ul>
<p>Untuk konsultasi hukum terkait UU ITE, Komdigi bekerja sama dengan BPHN menyediakan layanan konsultasi gratis.</p>`
    },
    "frekuensi": {
      keywords: ["frekuensi","izin frekuensi","radio","spektrum","perizinan frekuensi"],
      response: `<p>Pengajuan <strong>Izin Penggunaan Spektrum Frekuensi Radio</strong> dilakukan secara online melalui sistem OSS (Online Single Submission) Komdigi.</p>
<p><strong>Jenis izin frekuensi:</strong></p>
<ul>
  <li>ISR (Izin Stasiun Radio) — untuk stasiun komunikasi radio</li>
  <li>IPFR (Izin Penggunaan Frekuensi Radio) — untuk jaringan telekomunikasi</li>
  <li>Izin Amatir Radio & KRAP</li>
</ul>
<p><strong>Proses pengajuan:</strong> Login di <strong>sdppi.komdigi.go.id</strong> → Pilih jenis izin → Isi data teknis → Upload dokumen → Bayar BHP Frekuensi → Tunggu penerbitan izin (7–30 hari kerja).</p>`
    },
    "siber": {
      keywords: ["siber","cyber","keamanan siber","serangan siber","ransomware","bssn","hack"],
      response: `<p>Untuk insiden <strong>keamanan siber</strong>, Komdigi berkoordinasi dengan <strong>BSSN (Badan Siber dan Sandi Negara)</strong> sebagai lembaga teknis utama.</p>
<p><strong>Jika terjadi insiden siber:</strong></p>
<ul>
  <li>Laporkan ke BSSN melalui <strong>cert@bssn.go.id</strong></li>
  <li>Hubungi <strong>ID-SIRTII/CC</strong> untuk insiden jaringan internet</li>
  <li>Kontak darurat: <strong>(021) 3192-5551</strong></li>
</ul>
<p>Komdigi juga menyediakan program <strong>CyberShield Indonesia</strong> untuk pelatihan dan sertifikasi keamanan digital bagi instansi pemerintah dan UMKM.</p>`
    },
    "default": {
      response: `<p>Terima kasih atas pertanyaan Anda. Saya adalah <strong>SAPA</strong>, Asisten Digital Kementerian Komunikasi dan Digital Republik Indonesia.</p>
<p>Saya dapat membantu Anda dengan informasi terkait:</p>
<ul>
  <li>🏢 Pendaftaran PSE (Penyelenggara Sistem Elektronik)</li>
  <li>🛡️ Regulasi perlindungan data (UU PDP)</li>
  <li>🚨 Pelaporan konten negatif & hoaks</li>
  <li>📡 Program akses internet daerah 3T</li>
  <li>⚖️ UU ITE dan regulasi digital</li>
  <li>📻 Perizinan frekuensi radio</li>
  <li>🔒 Keamanan siber dan aduan kejahatan digital</li>
</ul>
<p>Silakan ajukan pertanyaan lebih spesifik, atau hubungi <strong>Call Center Komdigi di 159</strong> untuk bantuan langsung dari petugas kami.</p>`
    }
  };

  // ─── STATE ───────────────────────────────────────────────────────
  let messages = [];
  let isTyping = false;
  let currentTopic = "Umum";
  let welcomeVisible = true;

  // ─── HELPERS ────────────────────────────────────────────────────
  function getNow() {
    return new Date().toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
  }

  function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 140) + 'px';
  }

  function updateCounter(el) {
    const len = el.value.length;
    document.getElementById('char-counter').textContent = len + '/500';
    document.getElementById('char-counter').style.color = len > 450 ? '#EF4444' : '#9CA3AF';
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function setTopic(el, topic) {
    document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentTopic = topic;
  }

  function hideWelcome() {
    if (welcomeVisible) {
      const ws = document.getElementById('welcome-screen');
      if (ws) {
        ws.style.transition = 'opacity 0.3s, transform 0.3s';
        ws.style.opacity = '0';
        ws.style.transform = 'translateY(-10px)';
        setTimeout(() => { if (ws) ws.remove(); }, 300);
      }
      welcomeVisible = false;
    }
  }

  function scrollBottom() {
    const area = document.getElementById('messages-area');
    setTimeout(() => { area.scrollTop = area.scrollHeight; }, 60);
  }

  // ─── RENDER MESSAGE ──────────────────────────────────────────────
  function renderMessage(role, html, time, id) {
    const area = document.getElementById('messages-area');
    const row = document.createElement('div');
    row.className = `message-row ${role}`;
    row.id = id ? `msg-${id}` : '';

    if (role === 'bot') {
      row.innerHTML = `
        <div class="msg-avatar">🤖</div>
        <div class="msg-content-wrap">
          <div class="msg-sender">SAPA · Komdigi AI</div>
          <div class="msg-bubble">${html}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div class="msg-time">${time}</div>
            <div class="msg-feedback">
              <button class="feedback-btn" onclick="feedbackClick(this,'👍')">👍</button>
              <button class="feedback-btn" onclick="feedbackClick(this,'👎')">👎</button>
              <button class="feedback-btn" onclick="copyMsg(this)" title="Salin">📋</button>
            </div>
          </div>
        </div>`;
    } else {
      row.innerHTML = `
        <div class="msg-content-wrap">
          <div class="msg-sender" style="text-align:right;">Anda</div>
          <div class="msg-bubble">${html}</div>
          <div class="msg-time" style="text-align:right;">${time}</div>
        </div>
        <div class="msg-avatar">👤</div>`;
    }
    area.appendChild(row);
    scrollBottom();
    return row;
  }

  // ─── TYPING INDICATOR ────────────────────────────────────────────
  function showTyping() {
    const area = document.getElementById('messages-area');
    const row = document.createElement('div');
    row.className = 'message-row bot';
    row.id = 'typing-row';
    row.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-content-wrap">
        <div class="msg-sender">SAPA · sedang mengetik...</div>
        <div class="typing-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>`;
    area.appendChild(row);
    scrollBottom();
  }

  function hideTyping() {
    const t = document.getElementById('typing-row');
    if (t) t.remove();
  }

  // ─── FIND RESPONSE ───────────────────────────────────────────────
  function findResponse(text) {
    const lower = text.toLowerCase();
    for (const key in dummyResponses) {
      if (key === 'default') continue;
      const item = dummyResponses[key];
      if (item.keywords && item.keywords.some(kw => lower.includes(kw))) {
        return item.response;
      }
    }
    return dummyResponses.default.response;
  }

  // ─── SEND MESSAGE ────────────────────────────────────────────────
  function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || isTyping) return;

    hideWelcome();

    // Render user message
    renderMessage('user', escapeHtml(text).replace(/\n/g,'<br>'), getNow());
    messages.push({ role: 'user', text });

    // Clear input
    input.value = '';
    input.style.height = 'auto';
    document.getElementById('char-counter').textContent = '0/500';

    // Disable send
    isTyping = true;
    document.getElementById('send-btn').disabled = true;

    // Simulate response
    const delay = 800 + Math.random() * 1000;
    showTyping();
    setTimeout(() => {
      hideTyping();
      const response = findResponse(text);
      renderMessage('bot', response, getNow());
      messages.push({ role: 'bot', text: response });
      isTyping = false;
      document.getElementById('send-btn').disabled = false;
      input.focus();
    }, delay);
  }

  function sendSuggestion(text) {
    document.getElementById('chat-input').value = text;
    sendMessage();
  }

  // ─── FEEDBACK & COPY ─────────────────────────────────────────────
  function feedbackClick(btn, emoji) {
    const parent = btn.closest('.msg-feedback');
    parent.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.textContent = emoji === '👍' ? '👍 Terima kasih!' : '👎 Maaf atas ketidaknyamanan ini';
    setTimeout(() => {
      btn.textContent = emoji;
    }, 2000);
  }

  function copyMsg(btn) {
    const bubble = btn.closest('.msg-content-wrap').querySelector('.msg-bubble');
    const text = bubble.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✅';
      setTimeout(() => { btn.textContent = '📋'; }, 1500);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ─── SIDEBAR TOGGLE ──────────────────────────────────────────────
  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
  }

  // ─── INFO PANEL (pengumuman) TOGGLE ──────────────────────────────
  function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    const badge = document.getElementById('bell-badge');
    panel.classList.toggle('hidden');
    // Hide red dot once panel is opened
    if (!panel.classList.contains('hidden') && badge) {
      badge.classList.remove('show');
    }
  }
  function startNewChat() {
    messages = [];
    welcomeVisible = true;
    const area = document.getElementById('messages-area');
    area.innerHTML = `
      <div class="welcome-screen" id="welcome-screen">
        <div class="welcome-icon">🤖</div>
        <div class="welcome-title">Halo! Saya SAPA</div>
        <div class="welcome-subtitle">
          Asisten Digital resmi Kementerian Komunikasi dan Digital Republik Indonesia.<br/>
          Saya siap membantu Anda dengan informasi layanan, regulasi, dan kebijakan digital nasional.
        </div>
        <div class="suggestion-grid">
          <div class="suggestion-card" onclick="sendSuggestion('Apa itu PSE dan bagaimana cara mendaftarkannya?')">
            <div class="suggestion-card-icon">🏢</div>
            <div class="suggestion-card-title">Daftar PSE</div>
            <div class="suggestion-card-desc">Pelajari cara mendaftarkan Penyelenggara Sistem Elektronik</div>
          </div>
          <div class="suggestion-card" onclick="sendSuggestion('Jelaskan tentang UU Pelindungan Data Pribadi')">
            <div class="suggestion-card-icon">🛡️</div>
            <div class="suggestion-card-title">UU PDP</div>
            <div class="suggestion-card-desc">Informasi Undang-Undang Pelindungan Data Pribadi</div>
          </div>
          <div class="suggestion-card" onclick="sendSuggestion('Bagaimana cara melaporkan konten negatif di internet?')">
            <div class="suggestion-card-icon">🚨</div>
            <div class="suggestion-card-title">Lapor Konten</div>
            <div class="suggestion-card-desc">Tata cara pelaporan konten ilegal & negatif</div>
          </div>
          <div class="suggestion-card" onclick="sendSuggestion('Apa program Komdigi untuk internet di daerah terpencil?')">
            <div class="suggestion-card-icon">📡</div>
            <div class="suggestion-card-title">Akses Digital</div>
            <div class="suggestion-card-desc">Program perluasan akses internet nasional</div>
          </div>
        </div>
      </div>`;
  }
</script>

</body>
</html>