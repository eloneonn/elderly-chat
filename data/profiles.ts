import { Profile } from "@/types/profile";

export const profiles: Profile[] = [
  {
    id: "marjorie",
    name: "Marjorie Thompson",
    age: 78,
    interests: ["gardening", "knitting", "classical music", "reading"],
    activityLevel: "low",
    description:
      "A gentle soul who enjoys quiet afternoons in her garden and evenings with a good book. Loves sharing stories about her grandchildren and her collection of houseplants.",
    avatar: "🌺",
    location: {
      // Kivenlahti, Finland
      lat: 60.15688488240377,
      lon: 24.630351438179957,
    },
  },
  {
    id: "arthur",
    name: "Arthur Mitchell",
    age: 82,
    interests: ["woodworking", "chess", "history", "photography"],
    activityLevel: "medium",
    description:
      "A retired engineer who spends his days in his workshop crafting beautiful furniture pieces. Enjoys discussing historical events and playing chess at the local community center.",
    avatar: "🔨",
    location: {
      // Viherlaakso, Finland
      lat: 60.2289375,
      lon: 24.7354239,
    },
  },
  {
    id: "eleanor",
    name: "Eleanor Chen",
    age: 75,
    interests: ["tai chi", "cooking", "calligraphy", "bird watching"],
    activityLevel: "medium",
    description:
      "An active senior who starts each morning with tai chi in the park. Passionate about traditional Chinese cuisine and enjoys teaching calligraphy to younger generations.",
    avatar: "🦋",
    location: {
      // Kivistö, Finland
      lat: 60.3147145,
      lon: 24.8473098,
    },
  },
  {
    id: "robert",
    name: "Robert Williams",
    age: 80,
    interests: ["golf", "travel", "wine tasting", "bridge"],
    activityLevel: "high",
    description:
      "A former business executive who stays very active with golf three times a week and regular bridge tournaments. Loves sharing travel stories and has visited over 40 countries.",
    avatar: "⛳",
    location: {
      // Kallio, Finland
      lat: 60.1839816,
      lon: 24.9524515,
    },
  },
  {
    id: "grace",
    name: "Grace O'Malley",
    age: 76,
    interests: ["volunteering", "book club", "yoga", "pottery"],
    activityLevel: "high",
    description:
      "A community-minded volunteer who coordinates the local food bank. Enjoys her weekly book club meetings and finds peace in her pottery studio.",
    avatar: "📚",
    location: {
      // Mellunmäki, Finland
      lat: 60.2383947,
      lon: 25.1165017,
    },
  },
  {
    id: "harold",
    name: "Harold Jenkins",
    age: 79,
    interests: ["fishing", "model trains", "jazz music", "crossword puzzles"],
    activityLevel: "low",
    description:
      "A retired postal worker who loves spending quiet weekends fishing by the lake. Has an impressive model train collection and enjoys listening to jazz while solving crossword puzzles.",
    avatar: "🚂",
    location: {
      // Mellunmäki, Finland
      lat: 60.17664,
      lon: 24.8031685,
    },
  },
];
