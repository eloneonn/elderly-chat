'use client';

import { Profile } from '@/types/profile';

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
    <div className="w-full">
      <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
        Select a Profile
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelectProfile(profile)}
            className={`rounded-lg border-2 p-4 text-left transition-all hover:shadow-md ${
              selectedProfile?.id === profile.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl">{profile.avatar}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Age {profile.age}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {profile.interests.slice(0, 3).map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      profile.activityLevel === 'high'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : profile.activityLevel === 'medium'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
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
  );
}
