import React from 'react';
import { useParams } from 'react-router-dom';
import { Brain, BarChart3, Cog, Database } from 'lucide-react';

const Solutions = () => {
  const { solution } = useParams();
  
  const solutionsData = {
    'ai-consulting': {
      title: 'AI Consulting',
      icon: Brain,
      description: 'Strategic AI consulting to transform your business operations',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'ROI Analysis',
        'Change Management',
        'Training & Support'
      ]
    },
    'machine-learning': {
      title: 'Machine Learning',
      icon: Database,
      description: 'Custom machine learning models for predictive analytics',
      features: [
        'Predictive Modeling',
        'Classification & Regression',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Model Deployment'
      ]
    },
    'data-analytics': {
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into actionable business insights',
      features: [
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Statistical Analysis',
        'Trend Forecasting',
        'Custom Dashboards'
      ]
    },
    'automation': {
      title: 'Process Automation',
      icon: Cog,
      description: 'Automate repetitive tasks and optimize workflows',
      features: [
        'Robotic Process Automation',
        'Workflow Optimization',
        'Document Processing',
        'Quality Assurance',
        'Integration Services',
        'Performance Monitoring'
      ]
    }
  };

  const currentSolution = solutionsData[solution] || solutionsData['ai-consulting'];
  const IconComponent = currentSolution.icon;

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>{currentSolution.title}</h1>
          <p>{currentSolution.description}</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
            <div className="content-card">
              <div className="card-image">
                <IconComponent size={80} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Key Features</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {currentSolution.features.map((feature, index) => (
                    <li key={index} style={{ 
                      padding: '0.5rem 0', 
                      borderBottom: '1px solid #f3f4f6',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: 'linear-gradient(45deg, #10b981, #0ea5e9)',
                        borderRadius: '50%'
                      }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Solution Overview</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
                Our {currentSolution.title.toLowerCase()} solutions are designed to meet the unique needs 
                of modern businesses looking to leverage artificial intelligence for competitive advantage. 
                We combine cutting-edge technology with industry expertise to deliver measurable results.
              </p>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Benefits</h3>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                  <strong>Increased Efficiency:</strong> Automate repetitive tasks and optimize workflows to save time and resources.
                </div>
                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9' }}>
                  <strong>Better Decision Making:</strong> Leverage data-driven insights to make informed business decisions.
                </div>
                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
                  <strong>Competitive Advantage:</strong> Stay ahead of the competition with innovative AI solutions.
                </div>
                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                  <strong>Scalable Growth:</strong> Build solutions that grow with your business needs.
                </div>
              </div>
              
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                color: 'white',
                padding: '2rem', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Ready to Get Started?
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Let our experts help you implement {currentSolution.title.toLowerCase()} solutions 
                  that drive real business value.
                </p>
                <a href="/contact" className="cta-button">Schedule Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;