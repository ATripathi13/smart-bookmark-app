'use client'

import { createClient } from '@/lib/supabase'
import { Trash2, ExternalLink } from 'lucide-react'
import { useState } from 'react'

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
        <div className={`glass p-6 rounded-2xl transition-all hover:scale-[1.02] group relative ${isDeleting ? 'opacity-50 grayscale' : ''}`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl truncate pr-8">{bookmark.title}</h3>
                <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="text-slate-500 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-500/10"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
            <p className="text-slate-400 text-sm truncate mb-6">{bookmark.url}</p>
            <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
                Visit Link <ExternalLink className="w-4 h-4" />
            </a>

            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Visual indicator of hover */}
            </div>
        </div>
    )
}
