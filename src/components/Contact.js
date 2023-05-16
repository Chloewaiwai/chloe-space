import './Contact.css';
import ContactForm from '../props/ContactForm';
import { Stack, Row, Col} from 'react-bootstrap';

export default function Contact() {
  return (
    <Row id="contact" style={{ minHeight: '100vh' , flexDirection:"column"}}>
        <Col style={{ backgroundColor: 'rgb(50, 50, 57)', justifyContent:"center", height: '100%', display: 'flex', alignItems: 'center'}} className='gradient-circles-container'>
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <ContactForm />
        </Col>
    </Row>
  );
}