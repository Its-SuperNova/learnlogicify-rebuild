// app/layout.server.tsx (this file will be server-side only)
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://learnlogicify.com'),
  title: {
    template: '%s | LearnLogicify',
    default: 'LearnLogicify - Learn Logic Programming and Problem Solving',
  },
  description: 'LearnLogicify is your premier platform for mastering logic programming, problem-solving skills, and advanced computer science concepts through interactive courses and hands-on learning.',
  keywords: ['logic programming', 'computer science', 'problem solving', 'coding', 'learning platform', 'programming courses', 'online education'],
  authors: [{ name: 'LearnLogicify Team' }],
  creator: 'LearnLogicify',
  publisher: 'LearnLogicify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnlogicify.com',
    siteName: 'LearnLogicify',
    title: 'LearnLogicify - Learn Logic Programming and Problem Solving',
    description: 'Master logic programming and problem-solving skills through interactive courses and hands-on learning.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LearnLogicify - Your Gateway to Logic Programming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LearnLogicify - Learn Logic Programming and Problem Solving',
    description: 'Master logic programming and problem-solving skills through interactive courses and hands-on learning.',
    images: ['/twitter-image.jpg'],
    creator: '@learnlogicify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'kuk6j7jHAji8Fhp6VCTVitu9SCYU_B4M9dCNhNS9OZE',
  },
  alternates: {
    canonical: 'https://learnlogicify.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
