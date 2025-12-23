import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SupaUpload — Платформа для загрузки и хранения файлов на Supabase",
  description: "SupaUpload — современная платформа для загрузки, хранения и управления файлами (изображения, видео, документы) на базе Supabase. Легкая интеграция с React, Next.js и Vue. Бесплатный и безопасный сервис для личных и профессиональных проектов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
