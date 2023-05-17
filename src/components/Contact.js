import './Contact.css';
import ContactForm from '../props/ContactForm';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
    <Row id="contact" style={{ minHeight: '100vh' , flexDirection:"column"}}>
        <Col style={{ backgroundColor: 'rgb(50, 50, 57)', justifyContent:"center", height: '100%', display: 'flex', alignItems: 'center'}} 
            className='gradient-circles-container'>
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            {/* <h1 className="contact-text">Contact Me</h1> */}
            <Container className='contact-form'>
              <Row>
                <Col md={8} ><ContactForm /></Col>
                <Col></Col>
              </Row>
            </Container>
            <div className='my-info'>
              <Row style={{marginBottom:20, alignItems:"center"}}>
                <Col md={2} style={{display:"flex", justifyContent:"center"}}><FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#323239",}} />
                </Col>
                <Col style={{color: "#323239"}}>chloe.yippw@gmail.com</Col>  
              </Row>
              <Row style={{marginBottom:20, alignItems:"center"}}>
                <Col md={2} style={{display:"flex", justifyContent:"center"}}><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#323239",}} />
                </Col>
                <Col style={{color: "#323239"}}>Chloewaiwai</Col>
              </Row>
              <Row style={{marginBottom:20, alignItems:"center"}}>
                <Col md={2} style={{display:"flex", justifyContent:"center"}}><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#323239",}} />
                </Col>
                <Col style={{color: "#323239"}}>Yip Chloe</Col>
              </Row>
            </div>
        </Col>
    </Row>
  );
}