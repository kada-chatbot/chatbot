export type ChatRole = "user" | "bot";

export type ChatMessage = {
  id: number;
  role: ChatRole;
  content: string;
  timestamp: string;
};

export type TopicItem = {
  id: string;
  label: string;
  icon: string;
};

export type SuggestionItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
  prompt: string;
};

export type HistorySection = {
  label: string;
  items: { title: string; active?: boolean }[];
};
