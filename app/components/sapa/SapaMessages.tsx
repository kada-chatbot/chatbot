import type { ChatMessage } from "./types";
import { suggestions } from "./data";

type FeedbackType = "up" | "down";

type Props = {
  messages: ChatMessage[];
  isTyping: boolean;
  onSuggestion: (text: string) => void;
  onFeedback: (messageId: number, value: FeedbackType) => void;
  feedbackFlash: Record<number, FeedbackType | undefined>;
  onCopy: (messageId: number, text: string) => void;
  copiedMap: Record<number, boolean | undefined>;
};

export default function SapaMessages({
  messages,
  isTyping,
  onSuggestion,
  onFeedback,
  feedbackFlash,
  onCopy,
  copiedMap,
}: Props) {
  const showWelcome = messages.length === 0;

  return (
    <div className="messages-area" id="messages-area">
      {showWelcome ? (
        <div className="welcome-screen" id="welcome-screen">
          <div className="welcome-icon">🤖</div>
          <div className="welcome-title">Halo! Saya SAPA</div>
          <div className="welcome-subtitle">
            Asisten Digital resmi Kementerian Komunikasi dan Digital Republik Indonesia.
            <br />
            Saya siap membantu Anda dengan informasi layanan, regulasi, dan kebijakan digital nasional.
          </div>
          <div className="suggestion-grid">
            {suggestions.map((item) => (
              <button key={item.id} className="suggestion-card" onClick={() => onSuggestion(item.prompt)}>
                <div className="suggestion-card-icon">{item.icon}</div>
                <div className="suggestion-card-title">{item.title}</div>
                <div className="suggestion-card-desc">{item.description}</div>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {messages.map((message) => (
        <div key={message.id} className={`message-row ${message.role}`}>
          {message.role === "bot" ? (
            <>
              <div className="msg-avatar">🤖</div>
              <div className="msg-content-wrap">
                <div className="msg-sender">SAPA · Komdigi AI</div>
                <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: message.content }} />
                <div className="msg-meta-row">
                  <div className="msg-time">{message.timestamp}</div>
                  <div className="msg-feedback">
                    <button
                      className={`feedback-btn${feedbackFlash[message.id] === "up" ? " active" : ""}`}
                      onClick={() => onFeedback(message.id, "up")}
                    >
                      {feedbackFlash[message.id] === "up" ? "👍 Terima kasih!" : "👍"}
                    </button>
                    <button
                      className={`feedback-btn${feedbackFlash[message.id] === "down" ? " active" : ""}`}
                      onClick={() => onFeedback(message.id, "down")}
                    >
                      {feedbackFlash[message.id] === "down" ? "👎 Maaf atas ketidaknyamanan ini" : "👎"}
                    </button>
                    <button className="feedback-btn" title="Salin" onClick={() => onCopy(message.id, message.content)}>
                      {copiedMap[message.id] ? "✅" : "📋"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="msg-content-wrap">
                <div className="msg-sender user-sender">Anda</div>
                <div className="msg-bubble user-text">{message.content}</div>
                <div className="msg-time user-time">{message.timestamp}</div>
              </div>
              <div className="msg-avatar">👤</div>
            </>
          )}
        </div>
      ))}

      {isTyping ? (
        <div className="message-row bot" id="typing-row">
          <div className="msg-avatar">🤖</div>
          <div className="msg-content-wrap">
            <div className="msg-sender">SAPA · sedang mengetik...</div>
            <div className="typing-bubble">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
