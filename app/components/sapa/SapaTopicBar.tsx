import { topics } from "./data";

type Props = {
  currentTopic: string;
  onSelectTopic: (topic: string) => void;
};

export default function SapaTopicBar({ currentTopic, onSelectTopic }: Props) {
  return (
    <div className="topic-bar">
      <span className="topic-label">Topik:</span>
      <div className="topic-chip-row">
        {topics.map((topic) => (
          <button
            key={topic.id}
            type="button"
            className={`topic-chip${currentTopic === topic.id ? " active" : ""}`}
            onClick={() => onSelectTopic(topic.id)}
          >
            {topic.icon} {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}
