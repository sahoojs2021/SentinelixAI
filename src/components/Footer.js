import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from '../sections/SocialLinks';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo" style={{ marginBottom: '1rem' }}>
              <Zap size={24} />
              <span>Sentinelix</span><span>AI</span>
            </div>
            <p>Cutting-edge AI/ML based cybersecurity solutions for the BFSI domain, providing enhanced security at the transaction level.</p>
            {/* Media icon */}
            <SocialLinks />
          </div>
          
          <div className="footer-section"> </div>
          
          <div className="footer-section"> </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Mail size={16} />
              <span>info@sentinelixai.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className='copy-right'>
            <p>&copy; 2025 SentinelixAI. All rights reserved.</p>
          </div>
          
          <div className='policy'>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-secondary-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-service" className="text-gray-400 hover:text-secondary-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-secondary-500 text-sm transition-colors">
                Cookie Policy
              </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;