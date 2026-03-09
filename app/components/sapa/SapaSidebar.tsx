import { historySections } from "./data";

type Props = {
  collapsed: boolean;
  bellBadgeVisible: boolean;
  onToggleSidebar: () => void;
  onNewChat: () => void;
  onToggleInfoPanel: () => void;
};

export default function SapaSidebar({
  collapsed,
  bellBadgeVisible,
  onToggleSidebar,
  onNewChat,
  onToggleInfoPanel,
}: Props) {
  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-top">
        <button className="icon-btn" onClick={onToggleSidebar} title="Sembunyikan/Tampilkan Sidebar" aria-label="Toggle sidebar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        </button>
        <button className="new-chat-btn" onClick={onNewChat} title="Percakapan Baru" aria-label="Percakapan baru">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span className="btn-label">Percakapan Baru</span>
        </button>
        <button className="icon-btn bell-icon-btn" onClick={onToggleInfoPanel} title="Pengumuman" aria-label="Pengumuman">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className={`bell-badge${bellBadgeVisible ? " show" : ""}`} />
        </button>
      </div>

      <div className="sidebar-content">
        <div className="chat-history">
          {historySections.map((section) => (
            <div key={section.label}>
              <div className="history-group-label">{section.label}</div>
              {section.items.map((item) => (
                <div key={`${section.label}-${item.title}`} className={`history-item${item.active ? " active" : ""}`}>
                  <span className="history-icon">💬</span>
                  <span className="history-title">{item.title}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="sidebar-footer">
          <div className="version-badge">
            <span>⚡</span>
            SAPA v2.1 · Komdigi AI
          </div>
        </div>
      </div>
    </aside>
  );
}
