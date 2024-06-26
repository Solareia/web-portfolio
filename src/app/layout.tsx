import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"

const primaryFont = Catamaran({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Artur Yasinskiy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <body className={`${primaryFont.className} bg-baselight dark:bg-base`}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
