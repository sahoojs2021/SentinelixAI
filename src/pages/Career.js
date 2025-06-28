import React from 'react';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const Career = () => {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150K - $200K",
      description: "Lead the development of cutting-edge AI models and algorithms for enterprise clients."
    },
    {
      title: "Data Scientist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "$120K - $160K",
      description: "Analyze complex datasets and develop predictive models to drive business insights."
    },
    {
      title: "ML Research Scientist",
      department: "Research",
      location: "New York, NY",
      type: "Full-time",
      salary: "$180K - $250K",
      description: "Conduct groundbreaking research in machine learning and publish findings in top-tier conferences."
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$140K - $180K",
      description: "Define product strategy and roadmap for AI-powered solutions and platforms."
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build the future of AI with SentinelixAI</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Work With Us?</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Join a team of passionate innovators working on cutting-edge AI technology. 
              We offer competitive compensation, comprehensive benefits, and the opportunity 
              to make a real impact on the future of artificial intelligence.
            </p>
          </div>
          
          <div className="features-grid" style={{ marginBottom: '3rem' }}>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={30} />
              </div>
              <h3>Collaborative Culture</h3>
              <p>Work with brilliant minds in a supportive, inclusive environment that values diverse perspectives.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={30} />
              </div>
              <h3>Competitive Benefits</h3>
              <p>Comprehensive health coverage, equity packages, flexible PTO, and professional development budget.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={30} />
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working arrangements, remote options, and emphasis on maintaining healthy work-life balance.</p>
            </div>
          </div>
          
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Open Positions</h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {jobs.map((job, index) => (
              <div key={index} className="content-card" style={{ display: 'block' }}>
                <div className="card-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
                      <div style={{ color: '#10b981', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        {job.department}
                      </div>
                    </div>
                    <button 
                      className="cta-button" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                      onClick={() => alert('Application form would open here')}
                    >
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="card-description" style={{ marginBottom: '1rem' }}>
                    {job.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} />
                      {job.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={14} />
                      {job.type}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <DollarSign size={14} />
                      {job.salary}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;