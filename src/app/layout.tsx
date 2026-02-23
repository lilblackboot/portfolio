import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suzan Mansuri - Software Developer & Designer",
  description: "Motivated Computer Science student specializing in AI with expertise in Next.js, React Native, and Generative AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-black text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
