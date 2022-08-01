import React, { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };
  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className='back-to-top'>
          &#8679;
        </button>
      )}
    </div>
  );
};

export default ScrollUp;
