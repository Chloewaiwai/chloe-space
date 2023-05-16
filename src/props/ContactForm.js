import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', firstName, lastName, companyName, phoneNo, email, message);

    // Send email using EmailJS service
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      message: message,
      company_name: companyName,
      last_name: lastName,
      first_name: firstName,
      phone_no: phoneNo,
      email: email,
    }, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Your message has been sent.');
      }, (error) => {
        console.error('Email error:', error);
        alert('An error occurred while sending your message. Please try again later.');
      });

    // Reset form fields
    setFirstName('');
    setLastName('');
    setCompanyName('');
    setPhoneNo('');
    setEmail('');
    setMessage('');
  };
  return (
    
            <Container className='contact-form'>
                <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formPhoneNo">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>
        <Button type="submit">Send Message</Button>
      </Form>
            </Container>
  );
}