import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our AI experts</p>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p style={{ marginBottom: '2rem' }}>
              Ready to transform your business with AI? Contact our experts 
              today to discuss your specific needs and discover how we can help.
            </p>
            
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <strong>Email</strong><br />
                info@sentinelixai.com
              </div>
            </div>
            
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <strong>Phone</strong><br />
                +1 (555) 123-4567
              </div>
            </div>
            
            <div className="contact-item">
              <MapPin size={20} />
              <div>
                <strong>Address</strong><br />
                123 Innovation Drive<br />
                San Francisco, CA 94107
              </div>
            </div>
            
            <div className="contact-item">
              <Clock size={20} />
              <div>
                <strong>Business Hours</strong><br />
                Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                Sat - Sun: Closed
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>Send us a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;