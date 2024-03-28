import "./globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/configs/site";
import clsx from "clsx";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={clsx("min-h-screen")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
