export default function SapaHeader() {
  return (
    <header className="sapa-header">
      <div className="header-left">
        <div className="header-brand">
          <div className="logo-box" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 22 Q14 12 20 20 Q26 28 32 18" stroke="#F5A623" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="20" r="4" fill="white" />
              <circle cx="8" cy="22" r="2.5" fill="#C8102E" />
              <circle cx="32" cy="18" r="2.5" fill="#C8102E" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">SAPA · Komdigi</span>
            <span className="brand-subtitle">Asisten Digital Resmi</span>
          </div>
        </div>
      </div>
      <div className="header-status">
        <div className="status-dot" />
        <span className="status-text">Aktif</span>
      </div>
    </header>
  );
}
