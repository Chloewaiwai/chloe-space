import React from 'react'
import { Stack, Row, Col, ProgressBar, Container } from 'react-bootstrap';
import { ReactComponent as LeftSvg } from './littlegirl.svg';

export default function Skills() {
  return (
    <Row id="skills" style={{ height: '100vh' , flexDirection:"column" }}>
      <Col style={{ backgroundColor: 'rgb(50, 50, 57)', justifyContent:"center"}}>
        <Container style={{ width:"60%", height:"100%", borderRadius:10, padding:5, display:"flex", flexDirection:"row", alignItems:"center"}}>
          <Col xs={12} md={4}>
            <LeftSvg />
          </Col>
          <Col xs={12} md={8}>
            <h2>Skills</h2>
            <ProgressBar now={80} variant="info" style={{marginBottom:20}}/>
            <ProgressBar now={60} variant="info" style={{marginBottom:20}}/>
            <ProgressBar now={40} variant="info" />
          </Col>
        </Container>
        </Col>
    </Row>
  )
}
