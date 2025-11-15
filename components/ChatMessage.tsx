"use client";

import { Message } from "@/types/profile";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`chat-bubble ${
          isUser ? "chat-bubble--user" : "chat-bubble--assistant"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <span className="chat-bubble__meta">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
