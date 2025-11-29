import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
