import type { Metadata } from "next";
import { Raleway } from 'next/font/google'
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={raleway.variable}
    >
      <body>{children}</body>
    </html>
  );
}
