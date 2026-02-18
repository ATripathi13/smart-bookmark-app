import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AddBookmark from '@/components/AddBookmark'
import BookmarkList from '@/components/BookmarkList'

export default async function DashboardPage() {
    const cookieStore = await cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { data: bookmarks } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
            <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Smart Bookmarks
                </h1>
                <div className="flex items-center gap-6 glass px-6 py-3 rounded-2xl">
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-200">{user.email?.split('@')[0]}</span>
                        <span className="text-[10px] text-slate-500">{user.email}</span>
                    </div>
                    <form action="/auth/signout" method="post">
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-sm font-medium border border-white/10">
                            Sign Out
                        </button>
                    </form>
                </div>
            </header>

            <main className="max-w-6xl mx-auto">
                <AddBookmark userId={user.id} />
                <BookmarkList initialBookmarks={bookmarks || []} userId={user.id} />
            </main>
        </div>
    )
}
