"use client";

import { Profile } from "@/types/profile";

interface ProfileSelectorProps {
  profiles: Profile[];
  selectedProfile: Profile | null;
  onSelectProfile: (profile: Profile) => void;
}

export default function ProfileSelector({
  profiles,
  selectedProfile,
  onSelectProfile,
}: ProfileSelectorProps) {
  return (
    <>
      <header className="panel panel-strong w-full max-w-5xl px-8 py-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Life OS</h1>
          <p className="text-sm font-medium text-muted">
            A demo app to showcase the possibilities of tool-assisted
            conversational AI aimed at seniors. The goal is to create curated
            access to information and services in the internet.
          </p>
          <p className="text-sm font-medium text-muted">
            Try to ask about news, events or movies, and how to get to places
            using public transportation. The AI will answer with real data
            fetched from appropriate APIs, RSS feeds and other sources such as
            via web scraping.
          </p>
        </div>
      </header>
      <div className="panel w-full p-6 sm:p-8">
        <div className="w-full">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Select a Profile
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => onSelectProfile(profile)}
                type="button"
                className={`profile-card p-5 ${
                  selectedProfile?.id === profile.id ? "is-selected" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{profile.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {profile.name}
                    </h3>
                    <p className="text-sm font-medium text-muted">
                      Age {profile.age}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {profile.interests.slice(0, 3).map((interest) => (
                        <span
                          key={interest}
                          className="interest-chip px-2.5 py-0.5 text-xs font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2">
                      <span
                        className={`activity-tag px-2 py-0.5 text-xs font-medium ${
                          profile.activityLevel === "high"
                            ? "activity-tag--high"
                            : profile.activityLevel === "medium"
                            ? "activity-tag--medium"
                            : ""
                        }`}
                      >
                        {profile.activityLevel} activity
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
