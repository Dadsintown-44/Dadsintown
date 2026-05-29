import './globals.css';

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Creatiwise — We Craft Brands & Digital Experiences',
  description: 'Elevate Your Brand with Exceptional Design Solutions. From branding to UI, we bring your vision to life with tailored online design services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}