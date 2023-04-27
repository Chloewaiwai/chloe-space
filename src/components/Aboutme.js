import React from 'react';
import './About.css';
import { Navbar, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Aboutme() {

  function handleDownload() {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/ChloeYip_CV(Resume).pdf';
    link.target = '_blank';
    link.download = 'ChloeYip_CV(Resume).pdf';
    link.click();
  }

  return (
      <Row id="about" style={{ height: '100vh' , flexDirection:"column"}}>
        <Col style={{ backgroundColor: '#323239', flex:1 , paddingTop:50 }}>
          <Container style={{ height: '100%' }}>
            <Row className="justify-content-md-center" style={{ height: '100%', alignItems: 'center'}}>
              <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'flex-end', borderRight: 'solid', paddingRight:20 }}>
                <h2>
                  Here's <span style={{ color: '#fdb2b7' }}>Chloe Yip</span> !
                </h2>
                <p>A Frontend Developer, AI Developer, 3D model designer</p>
                <Button onClick={handleDownload} variant="danger">Download CV</Button>
              </Col>
              <Col xs={12} md={6} style={{ paddingLeft:20}}>
                <Image src={process.env.PUBLIC_URL + '/me.png'} alt="chloe's icon" roundedCircle fluid style={{ width: '70%', height: 'auto' }} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="text-center" style={{ backgroundColor: '#323239' , flex:0}}>
          <AiOutlineArrowDown className="arrow-icon" style={{ fontSize: '50px', marginBottom:50 }}/>
        </Col>
      </Row>
      
  );
}