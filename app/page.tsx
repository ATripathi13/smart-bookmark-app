export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black">
            <div className="glass p-12 rounded-3xl shadow-2xl max-w-2xl w-full">
                <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Smart Bookmark App
                </h1>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    The ultimate productivity tool to save, manage, and sync your favorite links in real-time.
                </p>
                <div className="flex flex-col gap-4 items-center">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get Started with Google
                    </button>
                </div>
            </div>
        </main>
    );
}
