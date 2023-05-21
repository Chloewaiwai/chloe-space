import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Stack, Row, Col, ProgressBar, Container} from 'react-bootstrap';
import { ReactComponent as LeftSvg } from './littlegirl.svg';
import LogoList from '../../props/LogoList';
import './Skills.css'; 

export default function Skills() {
  const skillsList = [
    {
      title: "Frontend Web Development",
      list: "frontend",
      bar: 89
    },{
      title: "Software Development",
      list: "software",
      bar: 76
    },{
      title: "AI Model Development",
      list: "ai",
      bar: 58
    },{
      title: "Design",
      list: "design",
      bar: 54
    }
  ]

  const imgRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2000,
      distance: '30px',
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal(imgRef.current, { origin: 'right' });
    sr.reveal(progressRef.current, { origin: 'left', delay: 200 });
  }, []);

  return (
    <Row id="skills" style={{ minHeight: '100vh' , flexDirection:"column"}}>
      <Col style={{ backgroundColor: 'rgb(50, 50, 57)', justifyContent:"center", height: '100%', display: 'flex', alignItems: 'center'}}>
        <Container className='skill-container' style={{ width:"70%", height:"100%", borderRadius:10, padding:5, display:"flex", flexDirection:"row", alignItems:"center", flexWrap:"wrap", alignContent:"center"}}>
          <Col xs={12} md={12} lg={5} style={{display:"flex", justifyContent:"center"}} ref={imgRef}>
            <LeftSvg className='left-svg'/>
          </Col>
          <Col xs={12} md={12} lg={7} ref={progressRef}>
            <h3 style={{paddingBottom:15}}>Skills</h3>
            {skillsList.map((item, index) => 
              <div key={index}>
              <Stack  direction='horizontal' style={{ alignItems: "center", marginBottom: 15 }}>
                <p style={{ marginBottom: 0, marginRight: 10 }}>{item.title}</p>
                <LogoList type={item.list} />
              </Stack>
              <ProgressBar now={item.bar} variant="info" style={{ marginBottom: 20 }} />
              </div>
            )}
          </Col>
        </Container>
        </Col>
    </Row>
  )
}

// #323239
// #fdb2b7 pink