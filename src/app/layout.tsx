import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LilBlackBoot - Developer & Designer",
  description: "Motivated Computer Science student specializing in AI with expertise in Next.js, React Native, and Generative AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased`}>
        <div className="min-h-screen bg-black text-white">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
