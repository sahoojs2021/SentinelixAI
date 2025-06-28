import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>About SentinelixAI</h1>
          <p>Leading the future of artificial intelligence</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Story</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Founded in 2020, SentinelixAI emerged from a vision to democratize artificial intelligence 
              and make advanced AI solutions accessible to businesses of all sizes. Our team of world-class 
              AI researchers, data scientists, and engineers are passionate about solving complex problems 
              through innovative technology.
            </p>
          </div>
          
          <div className="content-grid">
            <div className="content-card">
              <div className="card-image">
                <Target size={60} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Our Mission</h3>
                <p className="card-description">
                  To empower businesses worldwide with intelligent AI solutions that drive innovation, 
                  enhance productivity, and create sustainable competitive advantages in the digital age.
                </p>
              </div>
            </div>
            
            <div className="content-card">
              <div className="card-image">
                <Eye size={60} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Our Vision</h3>
                <p className="card-description">
                  To be the global leader in AI transformation, creating a future where intelligent 
                  technology seamlessly integrates with human expertise to solve the world's most 
                  complex challenges.
                </p>
              </div>
            </div>
            
            <div className="content-card">
              <div className="card-image">
                <Award size={60} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Our Values</h3>
                <p className="card-description">
                  Innovation, integrity, and impact guide everything we do. We believe in ethical AI 
                  development, transparent partnerships, and delivering measurable results that 
                  transform businesses and communities.
                </p>
              </div>
            </div>
            
            <div className="content-card">
              <div className="card-image">
                <Users size={60} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Our Team</h3>
                <p className="card-description">
                  A diverse team of 150+ AI experts, researchers, and engineers from top universities 
                  and tech companies, united by our passion for pushing the boundaries of what's possible 
                  with artificial intelligence.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
            padding: '3rem', 
            borderRadius: '12px', 
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
              Join hundreds of companies that trust SentinelixAI to power their AI initiatives.
            </p>
            <a href="/contact" className="cta-button">Start Your AI Journey</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;