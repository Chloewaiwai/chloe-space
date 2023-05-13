import React from 'react'
import { Stack, Row, Col, ProgressBar, Container, Image } from 'react-bootstrap';
import { ReactComponent as LeftSvg } from './littlegirl.svg';
import LogoList from '../props/LogoList';
import './Skills.css'; 

export default function Skills() {
  const skillsList = [
    {
      title: "Frontend Web Development",
      list: "frontend",
      bar: 80
    },{
      title: "Software Development",
      list: "software",
      bar: 60
    },{
      title: "AI Model Development",
      list: "ai",
      bar: 40
    },{
      title: "Design",
      list: "design",
      bar: 50
    }
  ]
  return (
    <Row id="skills" style={{ height: '100vh' , flexDirection:"column" }}>
      <Col style={{ backgroundColor: 'rgb(50, 50, 57)', justifyContent:"center"}}>
        <Container className='skill-container' style={{ width:"70%", height:"100%", borderRadius:10, padding:5, display:"flex", flexDirection:"row", alignItems:"center", flexWrap:"wrap", alignContent:"center"}}>
          <Col xs={12} md={12} lg={5} style={{display:"flex", justifyContent:"center"}}>
            <LeftSvg className='left-svg'/>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <h3 style={{paddingBottom:15}}>Skills</h3>
            {skillsList.map((item) => 
              <>
              <Stack direction='horizontal' style={{ alignItems: "center", marginBottom: 15 }}>
                <p style={{ marginBottom: 0, marginRight: 10 }}>{item.title}</p>
                <LogoList type={item.list} />
              </Stack>
              <ProgressBar now={item.bar} variant="info" style={{ marginBottom: 20 }} />
              </>
            )}
          </Col>
        </Container>
        </Col>
    </Row>
  )
}

// #323239
// #fdb2b7 pink