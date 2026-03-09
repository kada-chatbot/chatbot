type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SapaInfoPanel({ open, onClose }: Props) {
  return (
    <aside className={`info-panel${open ? "" : " hidden"}`}>
      <div className="panel-section">
        <div className="panel-title">
          <span>🔔 Pengumuman</span>
          <button className="panel-close-btn" onClick={onClose} title="Tutup panel" aria-label="Tutup panel">
            ✕
          </button>
        </div>
        <div className="alert-card">
          <div className="alert-badge">🔴 Terbaru</div>
          <div className="alert-text">Pembaruan regulasi PSE asing berlaku mulai 1 April 2025.</div>
        </div>
        <div className="alert-card">
          <div className="alert-badge">🟡 Jadwal</div>
          <div className="alert-text">Sosialisasi UU PDP: 15 Maret 2025 pukul 09.00 WIB via Zoom.</div>
        </div>
      </div>

      <div className="panel-section">
        <div className="panel-title">
          <span>📊 Statistik Layanan</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">PSE Terdaftar</span>
          <span className="stat-value">6.184</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Aduan Diproses</span>
          <span className="stat-value">42.318</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Konten Ditangani</span>
          <span className="stat-value">1.2 Jt</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Respons Rata-rata</span>
          <span className="stat-value">&lt; 3 Jam</span>
        </div>
      </div>

      <div className="panel-section">
        <div className="panel-title">
          <span>🔗 Tautan Cepat</span>
        </div>
        {[
          ["🌐", "Portal Komdigi"],
          ["📋", "Daftar PSE Online"],
          ["📞", "Call Center 159"],
          ["📧", "Kirim Aduan"],
          ["📰", "Siaran Pers"],
        ].map(([icon, label]) => (
          <a key={label} className="quick-link" href="#" onClick={(event) => event.preventDefault()}>
            <span className="quick-link-icon">{icon}</span>
            <span className="quick-link-label">{label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
