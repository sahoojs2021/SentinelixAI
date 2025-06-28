import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, BarChart3, Users, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      text: "SentinelixAI transformed our data processing capabilities. We've seen a 300% increase in operational efficiency since implementation.",
      author: "Sarah Johnson",
      company: "TechCorp Industries",
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      text: "The AI solutions provided by SentinelixAI have revolutionized our customer service. Response times improved by 80%.",
      author: "Michael Chen",
      company: "Global Dynamics",
      image: "/images/testimonials/michael-chen.jpg"
    },
    {
      text: "Outstanding support and cutting-edge technology. SentinelixAI is our trusted partner for all AI initiatives.",
      author: "Emily Rodriguez",
      company: "Innovation Labs",
      image: "/images/testimonials/emily-rodriguez.jpg"
    },
    {
      text: "The machine learning models have helped us predict market trends with 95% accuracy. Incredible results!",
      author: "David Wilson",
      company: "Financial Solutions Inc",
      image: "/images/testimonials/david-wilson.jpg"
    },
    {
      text: "Implementation was seamless and the ROI exceeded our expectations. Highly recommend SentinelixAI.",
      author: "Lisa Anderson",
      company: "Manufacturing Plus",
      image: "/images/testimonials/lisa-anderson.jpg"
    },
    {
      text: "Their AI automation solutions saved us 40 hours per week on routine tasks. Game-changing technology!",
      author: "James Taylor",
      company: "Retail Innovations",
      image: "/images/testimonials/james-taylor.jpg"
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : Math.max(0, prevIndex - 3)
    );
  };

  const visibleTestimonials = testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Transforming Business with AI Intelligence</h1>
          <p>
            Harness the power of artificial intelligence to drive innovation, 
            optimize operations, and unlock unprecedented growth opportunities.
          </p>
          <Link to="/contact" className="cta-button">
            Get Started Today
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Why Choose SentinelixAI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={30} />
              </div>
              <h3>Advanced AI Solutions</h3>
              <p>
                Cutting-edge machine learning algorithms and AI models 
                tailored to your specific business needs and challenges.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={30} />
              </div>
              <h3>Enterprise Security</h3>
              <p>
                Bank-level security protocols ensuring your data and 
                AI implementations are protected with the highest standards.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={30} />
              </div>
              <h3>Rapid Deployment</h3>
              <p>
                Quick implementation and deployment of AI solutions 
                with minimal disruption to your existing workflows.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={30} />
              </div>
              <h3>Data Analytics</h3>
              <p>
                Transform raw data into actionable insights with our 
                advanced analytics and business intelligence tools.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={30} />
              </div>
              <h3>Expert Support</h3>
              <p>
                Dedicated team of AI specialists providing 24/7 support 
                and ongoing optimization of your AI systems.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Rocket size={30} />
              </div>
              <h3>Scalable Solutions</h3>
              <p>
                Flexible AI infrastructure that grows with your business, 
                from startup to enterprise-level implementations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-navigation">
              <button 
                className="testimonial-nav-btn" 
                onClick={prevTestimonials}
                disabled={currentTestimonialIndex === 0}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="testimonial-nav-btn" 
                onClick={nextTestimonials}
                disabled={currentTestimonialIndex + 3 >= testimonials.length}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="testimonial-carousel">
            <div className="testimonial-grid">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={currentTestimonialIndex + index} className="testimonial-card">
                  <div className="testimonial-profile">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="testimonial-avatar"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="testimonial-info">
                      <div className="testimonial-author">{testimonial.author}</div>
                      <div className="testimonial-company">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonial-indicators">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`testimonial-indicator ${Math.floor(currentTestimonialIndex / 3) === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonialIndex(index * 3)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;