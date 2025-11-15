"use client";

import { useState } from "react";
import { Profile, Message } from "@/types/profile";
import { profiles } from "@/data/profiles";
import ProfileSelector from "@/components/ProfileSelector";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        content:
          "Sorry, I encountered an error. Please check your n8n webhook URL configuration.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <header className="border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Life OS Assistant
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Connect with personalized lifestyle profiles via n8n backend
        </p>
      </header>

      <main className="flex flex-1 flex-col p-6">
        {!selectedProfile ? (
          <div className="mx-auto w-full max-w-6xl">
            <ProfileSelector
              profiles={profiles}
              selectedProfile={selectedProfile}
              onSelectProfile={handleSelectProfile}
            />
          </div>
        ) : (
          <div className="mx-auto w-full max-w-4xl">
            <div className="mb-4">
              <button
                onClick={handleBackToProfiles}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
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
              </button>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:h-[calc(100vh-12rem)]">
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
        )}
      </main>
    </div>
  );
}
