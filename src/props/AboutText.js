import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Button } from 'react-bootstrap';

export default function MyComponent({ isSmallScreen, handleDownload }) {
  const h2Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      duration: 2000,
      distance: '60px',
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal(h2Ref.current, { delay: 200 });
    sr.reveal(p1Ref.current, { delay: 400 });
    sr.reveal(p2Ref.current, { delay: 600 });
    sr.reveal(p3Ref.current, { delay: 800 });
    if (isSmallScreen) {
      sr.reveal(buttonRef.current, { delay: 1000 });
    }
    else {
      sr.reveal(buttonRef.current, { delay: 600 });
    }
  }, []);

  return (
    <>
      <h2 ref={h2Ref}>
        Here's <span style={{ color: '#fdb2b7' }}>Chloe Yip</span> !
      </h2>

      {isSmallScreen ? (
        <>
          <p ref={p1Ref}>A Frontend Developer</p>
          <p ref={p2Ref}>AI Developer</p>
          <p ref={p3Ref}>3D Model Designer</p>
        </>
      ) : (
        <p ref={p1Ref}>A Frontend Developer, AI Developer, 3D Model Designer</p>
      )}

      <Button ref={buttonRef} onClick={handleDownload} variant="danger">
        Download CV
      </Button>
    </>
  );
}