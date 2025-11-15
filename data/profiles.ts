import { Profile } from "@/types/profile";

export const profiles: Profile[] = [
  {
    id: "aino",
    name: "Aino Laaksonen",
    age: 78,
    interests: [
      "wildflower gardening",
      "herbal tea blending",
      "knitting",
      "classical music",
      "letter writing",
      "nature photography",
    ],
    activityLevel: "low",
    description:
      "Aino tends the sheltered courtyard garden of her housing cooperative, experimenting with edible blossoms and seed-saving through every season. She keeps a travel postcard journal that inspires gentle storytelling sessions with her grandchildren over freshly brewed herbal teas.",
    avatar: "🌺",
    location: {
      // Kivenlahti, Finland
      lat: 60.15688488240377,
      lon: 24.630351438179957,
    },
  },
  {
    id: "arto",
    name: "Arto Virtanen",
    age: 82,
    interests: [
      "woodcraft design",
      "strategic board games",
      "local history walks",
      "black-and-white photography",
      "repair cafe mentoring",
      "vintage radio restoration",
    ],
    activityLevel: "medium",
    description:
      "Arto keeps a workshop full of reclaimed birch, sketching new furniture joints before breakfast and guiding the neighbourhood repair café in the afternoons. He relishes retelling Cold War-era Helsinki anecdotes over a fiercely contested chessboard and documenting the stories with his old film camera.",
    avatar: "🔨",
    location: {
      // Viherlaakso, Finland
      lat: 60.2289375,
      lon: 24.7354239,
    },
  },
  {
    id: "leena",
    name: "Leena Salmi",
    age: 75,
    interests: [
      "sunrise tai chi",
      "regional recipes",
      "watercolor sketching",
      "bird-friendly courtyard design",
      "Finnish poetry circles",
      "intergenerational language exchange",
    ],
    activityLevel: "medium",
    description:
      "Leena anchors the weekly tai chi meetups by the lakeshore before inviting neighbours to taste stews simmered from her handwritten recipe book. Afternoons are spent sketching migratory birds and coaching teenagers in Finnish idioms, bridging generations with calm patience and humour.",
    avatar: "🦋",
    location: {
      // Kivistö, Finland
      lat: 60.3147145,
      lon: 24.8473098,
    },
  },
  {
    id: "pekka",
    name: "Pekka Rantanen",
    age: 80,
    interests: [
      "coastal hiking",
      "golf",
      "nordic walking",
      "train travel planning",
      "bridge tournaments",
      "wine club hosting",
    ],
    activityLevel: "high",
    description:
      "Pekka maps out ambitious rail journeys for friends while keeping up a tri-weekly golf and Nordic walking routine. He channels his executive past into organising bridge leagues and themed wine tastings, always ready with a meticulously archived album of travel anecdotes.",
    avatar: "⛳",
    location: {
      // Kallio, Finland
      lat: 60.1839816,
      lon: 24.9524515,
    },
  },
  {
    id: "riitta",
    name: "Riitta Koskinen",
    age: 76,
    interests: [
      "volunteer coordination",
      "community theater",
      "book club facilitation",
      "gentle yoga",
      "wheel-thrown pottery",
      "digital photo archiving",
    ],
    activityLevel: "high",
    description:
      "Riitta orchestrates food bank schedules with practiced ease and spends evenings guiding a lively community theater troupe. She balances that energy with sunrise yoga, book club curation, and cataloguing decades of family photos to share at neighbourhood heritage events.",
    avatar: "📚",
    location: {
      // Mellunmäki, Finland
      lat: 60.2383947,
      lon: 25.1165017,
    },
  },
  {
    id: "veli",
    name: "Veli Niemi",
    age: 79,
    interests: [
      "lake fishing",
      "model railways",
      "jazz vinyl collecting",
      "cryptic crosswords",
      "sauna maintenance",
      "storytelling circles",
    ],
    activityLevel: "low",
    description:
      "Veli greets dawn with a thermos of coffee and a fishing pole before returning home to fine-tune the miniature landscapes surrounding his model railway. Evenings are spent curating rare jazz records, hosting relaxed sauna nights, and keeping his friends guessing with homemade crossword puzzles.",
    avatar: "🚂",
    location: {
      // Mellunmäki, Finland
      lat: 60.17664,
      lon: 24.8031685,
    },
  },
];
