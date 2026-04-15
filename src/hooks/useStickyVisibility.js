import { useEffect, useState } from 'react';

export function useStickyVisibility(threshold = 420) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
}