import type { RefObject } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
};

export default function SapaInput({ value, onChange, onSend, disabled, textareaRef }: Props) {
  return (
    <div className="input-section">
      <div className="input-box">
        <textarea
          ref={textareaRef}
          id="chat-input"
          value={value}
          placeholder="Ketik pertanyaan Anda tentang layanan Komdigi..."
          rows={1}
          maxLength={500}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              onSend();
            }
          }}
        />
        <div className="input-actions">
          <button className="attach-btn" title="Lampiran" type="button">
            📎
          </button>
          <button className="send-btn" id="send-btn" onClick={onSend} title="Kirim" type="button" disabled={disabled}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
      <div className="input-footer">
        <span className="input-hint">⌨️ Tekan Enter untuk kirim · Shift+Enter untuk baris baru</span>
        <span className="char-counter">{value.length}/500</span>
      </div>
    </div>
  );
}
