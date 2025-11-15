# Life OS Assistant

A demo app for Junction 2025.

A ChatGPT-like application that connects to an n8n backend, allowing you to chat with personalized lifestyle profiles featuring different interests and activity levels.

## Features

- **Profile Selection**: Choose from 6 curated lifestyle profiles, each with unique interests and activity levels
- **Chat Interface**: Modern, responsive chat UI similar to ChatGPT
- **n8n Integration**: Connects to your n8n webhook endpoint for backend processing
- **Real-time Messaging**: Send and receive messages through the n8n backend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An n8n instance with a webhook endpoint set up

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.local.example .env.local
```

3. Edit `.env.local` and add your n8n webhook URL:

```
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## n8n Webhook Setup

Your n8n webhook should accept POST requests with the following JSON structure:

```json
{
  "message": "User's message text",
  "profile": {
    "id": "profile-id",
    "name": "Profile Name",
    "interests": ["interest1", "interest2"],
    "activityLevel": "low|medium|high"
  }
}
```

The webhook should return a JSON response with a message field:

```json
{
  "message": "Response from n8n"
}
```

## Profiles

The app includes 6 pre-configured profiles:

1. **Marjorie Thompson** (78) - Low activity, gardening and reading enthusiast
2. **Arthur Mitchell** (82) - Medium activity, woodworking and chess lover
3. **Eleanor Chen** (75) - Medium activity, tai chi and calligraphy practitioner
4. **Robert Williams** (80) - High activity, golf and travel enthusiast
5. **Grace O'Malley** (76) - High activity, volunteer and book club member
6. **Harold Jenkins** (79) - Low activity, fishing and model trains hobbyist

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## Project Structure

```
life-os/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # API route for n8n integration
│   ├── page.tsx               # Main page component
│   └── layout.tsx             # Root layout
├── components/
│   ├── ChatInput.tsx          # Message input component
│   ├── ChatMessage.tsx        # Individual message component
│   ├── ChatWindow.tsx         # Chat container component
│   └── ProfileSelector.tsx    # Profile selection component
├── data/
│   └── profiles.ts            # Profile data
└── types/
    └── profile.ts             # TypeScript type definitions
```

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
