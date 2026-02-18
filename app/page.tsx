'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bookmark, Sparkles, Shield, Zap } from 'lucide-react'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-slate-950 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass p-12 md:p-20 rounded-[40px] shadow-2xl max-w-4xl w-full border-white/5 relative"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-500/20"
                >
                    <Bookmark className="w-10 h-10 text-white" />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-indigo-500 tracking-tight leading-tight">
                    Smart Bookmark App
                </h1>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    The next-generation link manager. Experience real-time syncing, seamless Google Auth, and a crystal-clear interface.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
                    <Link href="/login">
                        <button className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95">
                            Get Started Free
                        </button>
                    </Link>
                    <a
                        href="#features"
                        className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 border-white/10"
                    >
                        Explore Features
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/5 pt-16">
                    <div className="space-y-3">
                        <Zap className="w-6 h-6 text-blue-400" />
                        <h3 className="font-bold text-white text-lg">Real-time Sync</h3>
                        <p className="text-sm text-slate-500">Your bookmarks updated instantly across all your devices and tabs.</p>
                    </div>
                    <div className="space-y-3">
                        <Shield className="w-6 h-6 text-indigo-400" />
                        <h3 className="font-bold text-white text-lg">Google Security</h3>
                        <p className="text-sm text-slate-500">Fast and secure login using Google OAuth. No passwords to remember.</p>
                    </div>
                    <div className="space-y-3">
                        <Sparkles className="w-6 h-6 text-purple-400" />
                        <h3 className="font-bold text-white text-lg">Premium UI</h3>
                        <p className="text-sm text-slate-500">Beautiful glassmorphism design that feels right at home on any OS.</p>
                    </div>
                </div>
            </motion.div>

            <div className="mt-12 text-slate-600 text-sm font-medium">
                Built with Next.js, Supabase, and Tailwind CSS.
            </div>
        </main>
    )
}
