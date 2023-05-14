import React from 'react'
import { Row, Col} from 'react-bootstrap';
import AboutText from './AboutText';
import AboutImg from './AboutImg';

export default function AboutSections() {
  return (
    <Col className="about-section">
        <Row className="justify-content-md-center about-row"
             style={{ height: '100%', alignItems: 'center' }} >
                <Col
                    xs={12} md={6} className="about-text">
                    <AboutText />
                </Col>
                <Col xs={12} md={6} style={{ paddingLeft: 20 }} className="about-img">
                    <AboutImg />
                </Col>
        </Row>
    </Col>
  )
}
