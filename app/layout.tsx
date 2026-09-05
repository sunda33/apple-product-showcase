import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://127.0.0.1:3000'),
  title: 'iPhone — Designed to be loved',
  description: 'Explore iPhone models, finishes, features, and prices in a premium Apple-inspired product showcase.',
  openGraph: {
    title: 'iPhone — Designed to be loved',
    description: 'Explore the latest iPhone lineup, colors, features, and prices.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone — Designed to be loved',
    description: 'Explore the latest iPhone lineup, colors, features, and prices.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

