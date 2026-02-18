'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { Plus, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AddBookmark({ userId }: { userId: string }) {
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const supabase = createClient()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!url || !title) return

        setLoading(true)
        const { error } = await supabase.from('bookmarks').insert([
            { url, title, user_id: userId },
        ])

        if (error) {
            alert(error.message)
        } else {
            setUrl('')
            setTitle('')
        }
        setLoading(false)
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass p-6 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 items-end shadow-[0_0_50px_rgba(0,0,0,0.3)] border-white/5"
        >
            <div className="flex-1 w-full space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Title</label>
                <input
                    type="text"
                    placeholder="My Favorite Site"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                    required
                />
            </div>
            <div className="flex-1 w-full space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">URL</label>
                <input
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center gap-2 h-[50px] shadow-lg shadow-indigo-500/20 active:scale-95"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                Add
            </button>
        </motion.form>
    )
}
