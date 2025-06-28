import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, FileText, Users, Video } from 'lucide-react';

const Resources = () => {
  const { resource } = useParams();
  
  const resourcesData = {
    'blog': {
      title: 'Blog',
      icon: BookOpen,
      description: 'Latest insights and trends in AI technology',
      items: [
        {
          title: "The Future of AI in Healthcare",
          date: "March 10, 2024",
          excerpt: "Exploring how artificial intelligence is revolutionizing patient care and medical research."
        },
        {
          title: "Machine Learning Best Practices",
          date: "March 5, 2024",
          excerpt: "Essential guidelines for building robust and scalable machine learning systems."
        },
        {
          title: "AI Ethics in Enterprise",
          date: "February 28, 2024",
          excerpt: "Navigating the ethical considerations of implementing AI in business environments."
        }
      ]
    },
    'case-studies': {
      title: 'Case Studies',
      icon: FileText,
      description: 'Real-world success stories from our clients',
      items: [
        {
          title: "Retail Giant Increases Sales by 35%",
          client: "Fortune 500 Retailer",
          excerpt: "How AI-powered recommendation systems transformed customer experience and boosted revenue."
        },
        {
          title: "Manufacturing Efficiency Improvement",
          client: "Global Manufacturing Corp",
          excerpt: "Implementing predictive maintenance reduced downtime by 60% and saved millions in costs."
        },
        {
          title: "Financial Services Automation",
          client: "Leading Bank",
          excerpt: "Automated fraud detection system processed 99.9% of transactions with 95% accuracy."
        }
      ]
    },
    'whitepapers': {
      title: 'Whitepapers',
      icon: Users,
      description: 'In-depth technical documentation and research',
      items: [
        {
          title: "Enterprise AI Implementation Guide",
          pages: "24 pages",
          excerpt: "Comprehensive guide to successfully implementing AI solutions in enterprise environments."
        },
        {
          title: "ROI Measurement in AI Projects",
          pages: "18 pages",
          excerpt: "Framework for measuring and maximizing return on investment in AI initiatives."
        },
        {
          title: "AI Security and Compliance",
          pages: "32 pages",
          excerpt: "Best practices for ensuring security and regulatory compliance in AI systems."
        }
      ]
    },
    'webinars': {
      title: 'Webinars',
      icon: Video,
      description: 'Educational webinars and virtual events',
      items: [
        {
          title: "Getting Started with Machine Learning",
          duration: "45 minutes",
          excerpt: "Introduction to machine learning concepts and practical applications for business."
        },
        {
          title: "AI Strategy for Executives",
          duration: "60 minutes",
          excerpt: "Strategic insights for C-level executives on AI adoption and digital transformation."
        },
        {
          title: "Deep Dive: Neural Networks",
          duration: "90 minutes",
          excerpt: "Technical deep dive into neural network architectures and implementation."
        }
      ]
    }
  };

  const currentResource = resourcesData[resource] || resourcesData['blog'];
  const IconComponent = currentResource.icon;

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>{currentResource.title}</h1>
          <p>{currentResource.description}</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div style={{ display: 'grid', gap: '2rem' }}>
            {currentResource.items.map((item, index) => (
              <div key={index} className="content-card" style={{ display: 'block' }}>
                <div className="card-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                      {item.date && (
                        <div style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          {item.date}
                        </div>
                      )}
                      {item.client && (
                        <div style={{ color: '#0ea5e9', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          Client: {item.client}
                        </div>
                      )}
                      {item.pages && (
                        <div style={{ color: '#8b5cf6', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          {item.pages}
                        </div>
                      )}
                      {item.duration && (
                        <div style={{ color: '#f59e0b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          Duration: {item.duration}
                        </div>
                      )}
                    </div>
                    <div style={{ marginLeft: '1rem' }}>
                      <IconComponent size={40} color="#10b981" />
                    </div>
                  </div>
                  
                  <p className="card-description" style={{ marginBottom: '1.5rem' }}>
                    {item.excerpt}
                  </p>
                  
                  <button 
                    className="cta-button" 
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                    onClick={() => alert(`${currentResource.title.slice(0, -1)} would open here`)}
                  >
                    {resource === 'webinars' ? 'Watch Now' : 'Read More'}
                  </button>
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
              Stay Updated
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555' }}>
              Subscribe to our newsletter to receive the latest {currentResource.title.toLowerCase()} 
              and AI insights directly in your inbox.
            </p>
            <button className="cta-button" onClick={() => alert('Newsletter signup would open here')}>
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;