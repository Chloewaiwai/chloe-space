import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
  const [name, setname] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', firstName, name, companyName, phoneNo, email, message);
    // Send email using EmailJS service
    emailjs.send("service_5tia4vn","template_a4tezk3",{
      message: message,
      company_name: companyName,
      name: name,
      email: email,
    }, 'D-QQbd_W--pU1W85A')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Your message has been sent.');
      }, (error) => {
        console.error('Email error:', error);
        alert('An error occurred while sending your message. Please try again later.');
      });

    // Reset form fields
    setFirstName('');
    setname('');
    setCompanyName('');
    setPhoneNo('');
    setEmail('');
    setMessage('');
  };
  return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formname" className='field'> 
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="formEmail" className='field'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formCompanyName" className='field'>
          <Form.Label>Your Company</Form.Label>
          <Form.Control type="text" placeholder="Enter your company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formMessage" className='field'>
          <Form.Label>Message</Form.Label>
          <Form.Control className='message-box' as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="danger">Send Message</Button>
      </Form>
  );
}