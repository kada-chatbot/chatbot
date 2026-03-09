"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { findResponse } from "./data";
import SapaHeader from "./SapaHeader";
import SapaInfoPanel from "./SapaInfoPanel";
import SapaInput from "./SapaInput";
import SapaMessages from "./SapaMessages";
import SapaSidebar from "./SapaSidebar";
import SapaTopicBar from "./SapaTopicBar";
import type { ChatMessage } from "./types";

type FeedbackType = "up" | "down";

function getNow(): string {
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function toPlainText(html: string): string {
  return html
    .replace(/<\/(p|li|ul|br)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

export default function SapaChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("Umum");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [infoPanelOpen, setInfoPanelOpen] = useState(true);
  const [bellBadgeVisible, setBellBadgeVisible] = useState(true);
  const [feedbackFlash, setFeedbackFlash] = useState<Record<number, FeedbackType | undefined>>({});
  const [copiedMap, setCopiedMap] = useState<Record<number, boolean | undefined>>({});

  const timeoutRef = useRef<number | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const nextMessageId = useMemo(() => {
    return messages.length ? Math.max(...messages.map((message) => message.id)) + 1 : 1;
  }, [messages]);

  useEffect(() => {
    const area = messagesRef.current;
    if (!area) {
      return;
    }

    area.scrollTop = area.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sendMessage = (rawText?: string) => {
    const sourceText = (rawText ?? inputValue).trim();
    if (!sourceText || isTyping) {
      return;
    }

    const userMessage: ChatMessage = {
      id: nextMessageId,
      role: "user",
      content: sourceText,
      timestamp: getNow(),
    };

    setMessages((current) => [...current, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const delay = 800 + Math.random() * 1000;
    timeoutRef.current = window.setTimeout(() => {
      const botMessage: ChatMessage = {
        id: userMessage.id + 1,
        role: "bot",
        content: findResponse(sourceText),
        timestamp: getNow(),
      };

      setMessages((current) => [...current, botMessage]);
      setIsTyping(false);
      textareaRef.current?.focus();
    }, delay);
  };

  const startNewChat = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setMessages([]);
    setInputValue("");
    setIsTyping(false);
    setFeedbackFlash({});
    setCopiedMap({});
    textareaRef.current?.focus();
  };

  const toggleInfoPanel = () => {
    setInfoPanelOpen((open) => {
      const nextState = !open;
      if (nextState) {
        setBellBadgeVisible(false);
      }
      return nextState;
    });
  };

  const onFeedback = (messageId: number, value: FeedbackType) => {
    setFeedbackFlash((current) => ({ ...current, [messageId]: value }));
    window.setTimeout(() => {
      setFeedbackFlash((current) => ({ ...current, [messageId]: undefined }));
    }, 2000);
  };

  const onCopy = async (messageId: number, html: string) => {
    try {
      await navigator.clipboard.writeText(toPlainText(html));
      setCopiedMap((current) => ({ ...current, [messageId]: true }));
      window.setTimeout(() => {
        setCopiedMap((current) => ({ ...current, [messageId]: false }));
      }, 1500);
    } catch {
      setCopiedMap((current) => ({ ...current, [messageId]: false }));
    }
  };

  return (
    <div className="sapa-root">
      <SapaHeader />

      <div className="app-wrapper">
        <SapaSidebar
          collapsed={sidebarCollapsed}
          bellBadgeVisible={bellBadgeVisible}
          onToggleSidebar={() => setSidebarCollapsed((value) => !value)}
          onNewChat={startNewChat}
          onToggleInfoPanel={toggleInfoPanel}
        />

        <div className="chat-main">
          <SapaTopicBar currentTopic={currentTopic} onSelectTopic={setCurrentTopic} />

          <div ref={messagesRef} className="messages-scroll-wrap">
            <SapaMessages
              messages={messages}
              isTyping={isTyping}
              onSuggestion={sendMessage}
              onFeedback={onFeedback}
              feedbackFlash={feedbackFlash}
              onCopy={onCopy}
              copiedMap={copiedMap}
            />
          </div>

          <SapaInput
            value={inputValue}
            onChange={setInputValue}
            onSend={() => sendMessage()}
            disabled={isTyping || inputValue.trim().length === 0}
            textareaRef={textareaRef}
          />
        </div>

        <SapaInfoPanel open={infoPanelOpen} onClose={toggleInfoPanel} />
      </div>
    </div>
  );
}
