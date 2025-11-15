"use client";

import { useMemo, useState } from "react";
import { Profile, Message } from "@/types/profile";
import { profiles } from "@/data/profiles";
import ProfileSelector from "@/components/ProfileSelector";
import ChatWindow from "@/components/ChatWindow";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sessionId = useMemo(() => uuidv4(), []);

  const handleSelectProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setMessages([]);
  };

  const handleBackToProfiles = () => {
    setSelectedProfile(null);
    setMessages([]);
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedProfile) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          profile: selectedProfile,
          sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-shell flex min-h-screen flex-col items-center px-4 pb-12 pt-10">
      <main className="mt-6 flex w-full max-w-6xl flex-1 flex-col gap-6">
        {!selectedProfile ? (
          <ProfileSelector
            profiles={profiles}
            selectedProfile={selectedProfile}
            onSelectProfile={handleSelectProfile}
          />
        ) : (
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-4xl flex-col gap-4">
              <button
                onClick={handleBackToProfiles}
                className="self-start rounded-full bg-[rgba(246,166,178,0.12)] px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-[rgba(246,166,178,0.2)] hover:text-foreground cursor-pointer"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to profiles
                </span>
              </button>
              <div className="panel w-full lg:h-[calc(100vh-12rem)]">
                <ChatWindow
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  selectedProfile={
                    selectedProfile
                      ? {
                          name: selectedProfile.name,
                          avatar: selectedProfile.avatar,
                        }
                      : null
                  }
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
