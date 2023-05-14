import React from 'react'
import { Button} from 'react-bootstrap';

export default function AboutText() {
    function handleDownload() {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/ChloeYip_CV(Resume).pdf';
        link.target = '_blank';
        link.download = 'ChloeYip_CV(Resume).pdf';
        link.click();
      }

      const isSmallScreen = window.innerWidth <= 500;

  return (
  <>
    <h2>
      Here's <span style={{ color: '#fdb2b7' }}>Chloe Yip</span> !
    </h2>

    {isSmallScreen ? (
      <>
        <p>A Frontend Developer</p>
        <p>AI Developer</p>
        <p>3D Model Designer</p>
      </>
    ) : (
      <p>A Frontend Developer, AI Developer, 3D Model Designer</p>
    )}
    
    <Button onClick={handleDownload} variant="danger">Download CV</Button>
  </>
  )
}
