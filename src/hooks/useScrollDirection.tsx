import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  useEffect(() => {
    let lastY = window.pageYOffset;
    const onScroll = () => {
      const y = window.pageYOffset;
      if (Math.abs(y - lastY) < 10) return; // small threshold
      setScrollDir(y > lastY ? 'down' : 'up');
      lastY = y > 0 ? y : 0;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrollDir;
}
