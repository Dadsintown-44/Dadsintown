'use client';

import { useEffect, useState } from 'react';
import ScrollAnimations from '../src/components/ScrollAnimations';
import Preloader from './Preloader';

export default function AppShell({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showPreloader ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [showPreloader]);

  useEffect(() => {
    if (!showPreloader) return undefined;
    const fallback = setTimeout(() => {
      setShowPreloader(false);
    }, 4500);

    return () => clearTimeout(fallback);
  }, [showPreloader]);

  return (
    <>
      {showPreloader && (
        <Preloader onDone={() => setShowPreloader(false)} />
      )}
      <ScrollAnimations />
      {children}
    </>
  );
}
