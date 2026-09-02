import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Athlete 30 — Workout Guide',
  description: 'A five-day muscle, athleticism and posture workout guide with visual exercise demonstrations.',
  openGraph: {
    title: 'Athlete 30 — Workout Guide',
    description: 'Build width. Stand taller. Stay fast.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Athlete 30 workout guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athlete 30 — Workout Guide',
    description: 'Build width. Stand taller. Stay fast.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
