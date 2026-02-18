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
- Go to **Authentication > Providers** and find **Google**.
  - Toggle **Enabled**.
  - **IMPORTANT:** Copy the **Callback URL** displayed here (it looks like `https://xyz.supabase.co/auth/v1/callback`).

### 2. Google Cloud Console Setup
- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project (or select an existing one).
- Go to **APIs & Services > OAuth consent screen**:
  - Select **External**.
  - Fill in the required app information (App name, User support email, Developer contact Info).
  - Add the `supabase.co` domain to **Authorized domains**.
  - Click **Save and Continue** until you reach the dashboard.
- Go to **APIs & Services > Credentials**:
  - Click **+ CREATE CREDENTIALS** > **OAuth client ID**.
  - Select **Web application** as the application type.
  - Under **Authorized redirect URIs**, click **ADD URI**.
  - Paste the **Callback URL** you copied from Supabase earlier.
  - Click **CREATE**.
- Copy the **Client ID** and **Client Secret** and paste them into the Google provider settings in your Supabase Dashboard.

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
