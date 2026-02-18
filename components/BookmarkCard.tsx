'use client'

import { createClient } from '@/lib/supabase'
import { Trash2, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Bookmark {
    id: string
    url: string
    title: string
    created_at: string
}

export default function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const supabase = createClient()

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this bookmark?')) return

        setIsDeleting(true)
        const { error } = await supabase.from('bookmarks').delete().eq('id', bookmark.id)
        if (error) {
            alert(error.message)
            setIsDeleting(false)
        }
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`glass p-6 rounded-2xl transition-all hover:border-white/20 group relative ${isDeleting ? 'opacity-50 grayscale' : ''} shadow-xl hover:shadow-indigo-500/10`}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl truncate pr-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    {bookmark.title}
                </h3>
                <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="text-slate-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-500/10"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
            <p className="text-slate-500 text-sm truncate mb-8 font-mono">{bookmark.url}</p>

            <div className="flex items-center justify-between">
                <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold text-sm uppercase tracking-widest transition-colors"
                >
                    Visit <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-[10px] text-slate-600 font-medium">
                    {new Date(bookmark.created_at).toLocaleDateString()}
                </span>
            </div>

            {/* Decorative gradient blur */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-5 transition duration-500 -z-10"></div>
        </motion.div>
    )
}
