export interface Profile {
  id: string;
  name: string;
  age: number;
  interests: string[];
  activityLevel: "low" | "medium" | "high";
  description: string;
  avatar: string;
  location: {
    lat: number;
    lon: number;
  };
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
