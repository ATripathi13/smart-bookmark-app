import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Smart Bookmark App",
    description: "Manage your bookmarks with ease and real-time updates.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen">
                {children}
            </body>
        </html>
    );
}
