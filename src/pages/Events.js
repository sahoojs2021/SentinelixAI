import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco Convention Center",
      type: "Conference",
      attendees: "500+",
      description: "Join industry leaders for a full day of AI insights, networking, and product demonstrations."
    },
    {
      title: "Machine Learning Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "SentinelixAI HQ",
      type: "Workshop",
      attendees: "50",
      description: "Hands-on workshop covering advanced machine learning techniques and practical applications."
    },
    {
      title: "AI Ethics Roundtable",
      date: "April 5, 2024",
      time: "1:00 PM - 3:00 PM",
      location: "Virtual Event",
      type: "Panel Discussion",
      attendees: "200+",
      description: "Thought-provoking discussion on the ethical implications of AI in modern business."
    },
    {
      title: "Data Science Bootcamp",
      date: "April 12, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Online",
      type: "Training",
      attendees: "100",
      description: "Intensive bootcamp covering data science fundamentals and AI implementation strategies."
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Upcoming Events</h1>
          <p>Connect, learn, and grow with the AI community</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join Our Events</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Stay ahead of the curve with SentinelixAI events. From technical workshops to industry conferences, 
              our events provide valuable insights, networking opportunities, and hands-on learning experiences 
              in the rapidly evolving world of artificial intelligence.
            </p>
          </div>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            {events.map((event, index) => (
              <div key={index} className="content-card" style={{ display: 'block' }}>
                <div className="card-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>{event.title}</h3>
                      <div style={{ 
                        background: 'linear-gradient(45deg, #10b981, #0ea5e9)',
                        color: 'white',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        display: 'inline-block',
                        marginBottom: '0.5rem'
                      }}>
                        {event.type}
                      </div>
                    </div>
                    <button 
                      className="cta-button" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                      onClick={() => alert('Registration would open here')}
                    >
                      Register
                    </button>
                  </div>
                  
                  <p className="card-description" style={{ marginBottom: '1.5rem' }}>
                    {event.description}
                  </p>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '1rem', 
                    fontSize: '0.9rem', 
                    color: '#666' 
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={16} />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
            padding: '3rem', 
            borderRadius: '12px', 
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
              Want to Host an Event?
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
              Partner with SentinelixAI to host your own AI-focused event or workshop.
            </p>
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;