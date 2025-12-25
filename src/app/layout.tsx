import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";






export const metadata: Metadata = {
  title: "SupaUpload — Платформа для загрузки и хранения файлов на Supabase",
  description:
    "SupaUpload — современная платформа для загрузки, хранения и управления файлами (изображения, видео, документы) на базе Supabase. Легкая интеграция с React, Next.js и Vue. Бесплатный и безопасный сервис для личных и профессиональных проектов.",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider   theme={{
        fontFamily: "Arimo, sans-serif",
      }}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
