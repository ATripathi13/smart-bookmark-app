# Smart Bookmark App

A simple, real-time bookmark manager built with Next.js, Supabase, and Tailwind CSS.

## Features
- Google OAuth Login
- Real-time bookmark updates (add/delete across tabs)
- Private bookmarks (Row Level Security)
- Modern Glassmorphism UI

## Setup Instructions

### 1. Supabase Project
- Create a new project at [supabase.com](https://supabase.com).
- Go to **SQL Editor** and run the contents of `supabase_setup.sql`.
- Go to **Authentication > Providers** and enable **Google**. 
  - You will need to set up a Google Cloud Project to get the Client ID and Secret.
  - Set the Redirect URI in Google Cloud to `https://<your-project-id>.supabase.co/auth/v1/callback`.

### 2. Environment Variables
- Create a `.env.local` file in the root directory (you can use `.env.local` template already provided).
- Add your Supabase URL and Anon Key:
  ```
  NEXT_PUBLIC_SUPABASE_URL=your-project-url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
  ```

### 3. Installation
```bash
npm install
```

### 4. Run Locally
```bash
npm run dev
```

## Tech Stack
- **Next.js 15 (App Router)**
- **Supabase (Auth, Database, Realtime)**
- **Tailwind CSS**
- **Lucide React (Icons)**
- **Framer Motion (Animations coming soon)**
