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
  title: {
    default: "Alex Morgan | Digital Growth & Client Acquisition Team Lead",
    template: "%s | Alex Morgan",
  },
  description:
    "Professional portfolio of a Digital Growth & Client Acquisition Team Lead specializing in digital marketing, lead generation, client acquisition, marketplace operations, sales support, CRM, and team leadership.",
  metadataBase: new URL("https://alexmorganportfolio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Morgan | Digital Growth & Client Acquisition Team Lead",
    description:
      "Portfolio for a digital growth and client acquisition leader focused on startup marketing, lead generation, CRM operations, and client relationship management.",
    type: "website",
    url: "https://alexmorganportfolio.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Digital Growth & Client Acquisition Team Lead",
    description:
      "Portfolio for a digital growth and client acquisition leader focused on startup marketing, lead generation, CRM operations, and client relationship management.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (error) {
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
