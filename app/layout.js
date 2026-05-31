import './globals.css';

import { Playfair_Display } from 'next/font/google'
import AppShell from './AppShell';

const playfair = Playfair_Display({
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://dadsintown.com'),
  title: 'Dadsintown',
  description: 'Dadsintown — Turning brands into conversation starters.',
  icons: {
    icon: '/facicon.png',
  },
  openGraph: {
    title: 'Dadsintown',
    description: 'Dadsintown — Turning brands into conversation starters.',
    url: 'https://dadsintown.com',
    images: [
      {
        url: '/dadsintown.png',
        width: 1200,
        height: 630,
        alt: 'Dadsintown open graph banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dadsintown',
    description: 'Dadsintown — Turning brands into conversation starters.',
    images: ['/dadsintown.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}