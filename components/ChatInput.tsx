"use client";

import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  presetMessages?: string[];
}

export default function ChatInput({
  onSendMessage,
  disabled,
  presetMessages,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePresetSend = (preset: string) => {
    if (!disabled) {
      onSendMessage(preset);
      setMessage("");
    }
  };

  return (
    <>
      {presetMessages && presetMessages.length > 0 && (
        <div className="chat-input__preset-row px-5">
          <div className="chat-input__preset-label">Quick questions</div>
          <div className="chat-input__preset-list">
            {presetMessages.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handlePresetSend(preset)}
                disabled={disabled}
                className="chat-input__preset-button disabled:cursor-not-allowed"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="chat-input p-5">
        <div className="flex gap-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled}
            rows={1}
            className="chat-input__textarea flex-1 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            className="chat-input__send disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
