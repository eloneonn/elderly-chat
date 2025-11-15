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
    <div className="flex h-full flex-col">
      {selectedProfile && (
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{selectedProfile.avatar}</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Chatting as {selectedProfile.name}
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
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
                <div className="rounded-2xl bg-gray-100 px-4 py-3 dark:bg-gray-700">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
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
