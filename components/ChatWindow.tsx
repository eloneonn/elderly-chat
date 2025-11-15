"use client";

import { Message } from "@/types/profile";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  selectedProfile: { name: string; avatar: string } | null;
}

export default function ChatWindow({
  messages,
  onSendMessage,
  isLoading,
  selectedProfile,
}: ChatWindowProps) {
  return (
    <div className="chat-window flex h-full flex-col rounded-[inherit]">
      {selectedProfile && (
        <div className="chat-window__header px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{selectedProfile.avatar}</div>
            <div>
              <h3 className="font-semibold text-foreground">
                Chatting as {selectedProfile.name}
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className="chat-scroll-area flex-1 min-h-0 overflow-y-auto p-5">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-base font-medium text-muted">
              {selectedProfile
                ? "Start a conversation..."
                : "Please select a profile to begin chatting"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="typing-indicator px-4 py-3">
                  <div className="flex gap-1">
                    <div className="typing-indicator__dot animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="typing-indicator__dot animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="typing-indicator__dot animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {selectedProfile && (
        <ChatInput onSendMessage={onSendMessage} disabled={isLoading} />
      )}
    </div>
  );
}
