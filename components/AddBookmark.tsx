'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { Plus, Loader2 } from 'lucide-react'

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
        <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Title</label>
                <input
                    type="text"
                    placeholder="My Favorite Site"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                />
            </div>
            <div className="flex-1 w-full space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">URL</label>
                <input
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold rounded-xl transition-all flex items-center gap-2 h-[50px]"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                Add
            </button>
        </form>
    )
}
