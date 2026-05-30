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
    description: '',
    url: 'https://dadsintown.com',
    images: [
      {
        url: '/dadsintown.png',
      },
    ],
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