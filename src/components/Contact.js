import './Contact.css';
import ContactForm from '../props/ContactForm';
import MyInfo from '../props/MyInfo';
import { Container, Row, Col, Image} from 'react-bootstrap';

export default function Contact() {
  return (
    <Row id="contact" style={{ minHeight: '100vh' , flexDirection:"column"}}>
        <Col style={{ backgroundColor: 'rgb(50, 50, 57)', justifyContent:"center", height: '100%', display: 'flex', alignItems: 'center'}} 
            className='gradient-circles-container'>
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            {/* <h1 className="contact-text">Contact Me</h1> */}
            <Row className='container-wrapper'>
              <Col style={{display:"flex", justifyContent:"center"}}>
                <MyInfo />
              </Col>
              <Col>
                <Container className='contact-form'>
                  <Row>
                    <Col md={8} ><ContactForm /></Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Col>
            </Row>
        </Col>
    </Row>
  );
}