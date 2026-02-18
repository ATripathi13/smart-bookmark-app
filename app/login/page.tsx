'use client'

import { createClient } from '@/lib/supabase'

export default function LoginPage() {
    const supabase = createClient()

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        })
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black">
            <div className="glass p-12 rounded-3xl shadow-2xl max-w-md w-full">
                <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Sign In
                </h1>
                <p className="text-slate-300 mb-10">
                    Join Smart Bookmark App to start managing your links.
                </p>
                <button
                    onClick={handleLogin}
                    className="w-full px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>
            </div>
        </main>
    )
}
