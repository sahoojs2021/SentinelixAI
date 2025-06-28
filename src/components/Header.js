import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
    setResourcesDropdownOpen(false); // Close other dropdown
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
    setSolutionsDropdownOpen(false); // Close other dropdown
  };

  const closeAllDropdowns = () => {
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeAllDropdowns}>
            <Zap size={24} />
            <span>Sentinelix</span><span>AI</span>
          </Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          
          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            {/* Home menu */}
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeAllDropdowns}>Home</Link>
            </li>

            {/* Solutions menu */}
            <li className="nav-item dropdown-container">
              <button 
                className="nav-link dropdown-trigger"
                onClick={toggleSolutionsDropdown}
              >
                Solutions <ChevronDown size={16} />
              </button>
              <div className={`dropdown ${solutionsDropdownOpen ? 'active' : ''}`}>
                <Link to="/solutions/ai-consulting" className="dropdown-item" onClick={closeAllDropdowns}>AI Consulting</Link>
                <Link to="/solutions/machine-learning" className="dropdown-item" onClick={closeAllDropdowns}>Machine Learning</Link>
                <Link to="/solutions/data-analytics" className="dropdown-item" onClick={closeAllDropdowns}>Data Analytics</Link>
                <Link to="/solutions/automation" className="dropdown-item" onClick={closeAllDropdowns}>Process Automation</Link>
              </div>
            </li>

            {/* Resources menu */}
            <li className="nav-item dropdown-container">
              <button 
                className="nav-link dropdown-trigger"
                onClick={toggleResourcesDropdown}
              >
                Resources <ChevronDown size={16} />
              </button>
              <div className={`dropdown ${resourcesDropdownOpen ? 'active' : ''}`}>
                <Link to="/resources/case-studies" className="dropdown-item" onClick={closeAllDropdowns}>Case Studies</Link>
                <Link to="/resources/white-papers" className="dropdown-item" onClick={closeAllDropdowns}>Whitepapers</Link>
                <Link to="/resources/webinars" className="dropdown-item" onClick={closeAllDropdowns}>Webinars</Link>
              </div>
            </li>

            {/* About Us menu */}
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeAllDropdowns}>About Us</Link>
            </li>

            {/* Careers menu */}
            <li className="nav-item">
              <Link to="/careers" className="nav-link" onClick={closeAllDropdowns}>Careers</Link>
            </li>
            
            {/* Events menu */}
            <li className="nav-item">
              <Link to="/events" className="nav-link" onClick={closeAllDropdowns}>Events</Link>
            </li>

            {/* Contact menu */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeAllDropdowns}>Contact</Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;