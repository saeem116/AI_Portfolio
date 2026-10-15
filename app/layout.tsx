import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saeem Zaman | MERN Stack Developer",
  description: "Building digital experiences that help businesses grow. Specializing in React, Next.js, Node.js, and MongoDB.",
  keywords: ["MERN Stack Developer", "React Developer", "Next.js Developer", "Full Stack Developer", "Saeem Zaman"],
  authors: [{ name: "Saeem Zaman" }],
  openGraph: {
    title: "Saeem Zaman | MERN Stack Developer",
    description: "Building digital experiences that help businesses grow.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-[var(--color-background)] text-[var(--color-text-primary)] transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
