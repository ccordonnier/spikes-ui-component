import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Spikes UI Components",
  description: "Développement de composants ui en NextJS, TypeScript et TailwindCSS pour une expérience de développement front-end rapide et fluide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
