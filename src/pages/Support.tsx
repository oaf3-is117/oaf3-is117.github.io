import { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import "../styles/contactus.css"
function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Enter subject" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter your message" 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactUs;
