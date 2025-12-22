import React, { useState, useRef } from 'react';
import './About.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const aboutRef = useRef(null);

  const features = [
    {
      icon: '🧠',
      title: 'Smarter Conversations',
      description:
        "Context-aware responses tailored to what you're building or learning with real-time adaptation and deep understanding.",
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: '🎨',
      title: 'Creator Tools',
      description:
        'Brainstorm ideas, refine content, outline projects, and grow your creativity with AI-powered inspiration.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: '💻',
      title: 'Developer Assistance',
      description:
        'Debugging help, code explanations, architecture guidance, and automated workflow optimization.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: '⚡',
      title: 'Personal Workflow',
      description:
        'Organize notes, break down problems, learn faster, and stay consistent with intelligent task management.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Active Users', icon: '👥' },
    { number: '50M+', label: 'Conversations', icon: '💬' },
    { number: '99.9%', label: 'Uptime', icon: '🚀' },
    { number: '150+', label: 'Countries', icon: '🌍' },
  ];

  return (
    <div className="about-page" ref={aboutRef}>
      <Helmet>
        <title>About Marsyn | AI Workspace & Productivity Platform</title>
        <meta
          name="description"
          content="Learn about Marsyn – your personal AI workspace designed to boost productivity, organize tasks, and collaborate intelligently."
        />
      </Helmet>

      {/* Animated Background Elements */}
      <div className="cosmic-background">
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
        <div className="energy-orb orb-1"></div>
        <div className="energy-orb orb-2"></div>
      </div>

      {/* Main Content */}
      <div className="about-container">
        {/* Header Section */}
        <section className="about-header animate-in">
          <div className="header-badge">
            <span className="badge-icon">🚀</span>
            The Future of Intelligent Assistance
          </div>

          <h1 className="about-title">
            About <span className="gradient-text">Marsyn</span>
          </h1>

          <p className="about-subtitle">
            Your personal AI workspace — designed to think with you, not just
            answer questions. Built for creators, developers, students, and
            visionaries who demand clarity, speed, and direction.
          </p>

          {/* Animated Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-glow"></div>
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To democratize intelligent assistance — making advanced AI
                capabilities accessible to everyone, everywhere. We're building
                tools that amplify human potential, not replace it.
              </p>
              <ul className="mission-list">
                <li>Make thinking easier</li>
                <li>Make building faster</li>
                <li>Make clarity accessible</li>
                <li>Empower every creator</li>
              </ul>
            </div>

            <div className="vision-card">
              <div className="card-glow"></div>
              <div className="card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                We envision Marsyn as your personal intelligence layer — an AI
                that grows with you, understands your context, and helps you
                achieve more with confidence and creativity.
              </p>
              <div className="vision-features">
                <span className="vision-tag">Context-Aware</span>
                <span className="vision-tag">Always Learning</span>
                <span className="vision-tag">Deeply Personal</span>
                <span className="vision-tag">Infinitely Scalable</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="features-showcase">
          <div className="section-header">
            <h2>What Marsyn Helps You Achieve</h2>
            <p>Transform your workflow with intelligent assistance</p>
          </div>

          <div className="features-container">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`feature-card ${
                    activeFeature === index ? 'active' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  style={{ '--feature-gradient': feature.gradient }}
                >
                  <div className="feature-glow"></div>
                  <div className="feature-header">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                  </div>
                  <p>{feature.description}</p>
                  <div className="feature-highlights">
                    {index === 0 && [
                      'Real-time Adaptation',
                      'Deep Context',
                      'Personalized Responses',
                    ]}
                    {index === 1 && [
                      'Idea Generation',
                      'Content Refinement',
                      'Project Planning',
                    ]}
                    {index === 2 && [
                      'Code Debugging',
                      'Architecture Guidance',
                      'Best Practices',
                    ]}
                    {index === 3 && [
                      'Task Management',
                      'Learning Acceleration',
                      'Workflow Optimization',
                    ]}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Visualizer */}
            <div className="feature-visualizer">
              <div className="visualizer-orb"></div>
              <div className="visualizer-waves">
                {[1, 2, 3, 4].map((wave) => (
                  <div
                    key={wave}
                    className={`wave ${
                      activeFeature + 1 === wave ? 'active' : ''
                    }`}
                    style={{ animationDelay: `${wave * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <div className="visualizer-content">
                <h3>{features[activeFeature].title}</h3>
                <p>{features[activeFeature].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <div className="philosophy-content">
            <div className="philosophy-header">
              <div className="philosophy-icon">🌌</div>
              <h2>Our Philosophy</h2>
            </div>

            <div className="philosophy-grid">
              <div className="philosophy-principle">
                <div className="principle-icon">🎯</div>
                <h4>Clarity Over Complexity</h4>
                <p>
                  We believe powerful tools should be simple to use and easy to
                  understand.
                </p>
              </div>

              <div className="philosophy-principle">
                <div className="principle-icon">⚡</div>
                <h4>Speed With Purpose</h4>
                <p>
                  Fast responses that are thoughtful, not rushed or superficial.
                </p>
              </div>

              <div className="philosophy-principle">
                <div className="principle-icon">🤝</div>
                <h4>Helpful, Not Overwhelming</h4>
                <p>
                  Guidance that empowers you without taking away your creative
                  control.
                </p>
              </div>

              <div className="philosophy-principle">
                <div className="principle-icon">🚀</div>
                <h4>Elevate Human Potential</h4>
                <p>
                  Technology that enhances your abilities and expands what's
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="tech-stack-section">
          <div className="section-header">
            <h2>Powered by Cutting-Edge Technology</h2>
            <p>Built on the latest advancements in AI and machine learning</p>
          </div>

          <div className="tech-stack">
            {[
              { name: 'Neural Networks', icon: '🧠', color: '#667eea' },
              {
                name: 'Natural Language Processing',
                icon: '💬',
                color: '#f093fb',
              },
              { name: 'Machine Learning', icon: '⚡', color: '#4facfe' },
              { name: 'Cloud Computing', icon: '☁️', color: '#43e97b' },
              { name: 'Real-time Processing', icon: '🎯', color: '#ff6b6b' },
              { name: 'Data Analytics', icon: '📊', color: '#a8edea' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="tech-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tech-icon" style={{ background: tech.color }}>
                  {tech.icon}
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Ready to Transform Your Workflow?</h2>
            <p>
              Join thousands of creators, developers, and innovators who are
              already achieving more with Marsyn
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <span className="btn-glow"></span>
                Start Your Journey
              </button>
              <button className="cta-btn secondary">Explore Features</button>
            </div>
          </div>

          <div className="cta-visual">
            <div className="pulsing-orb"></div>
            <div className="connecting-dots">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="dot"
                  style={{ '--dot-delay': `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="closing-statement">
          <div className="statement-content">
            <div className="statement-icon">✨</div>
            <h2>Welcome to Marsyn</h2>
            <p className="statement-text">
              Where your ideas meet intelligent assistance, and your potential
              meets its match. This is more than a tool — it's your partner in
              creation, your guide in complexity, and your accelerator in
              innovation.
            </p>
            <div className="final-tagline">
              <span className="tagline-text">Your mind, upgraded.</span>
              <span className="tagline-sparkle">⚡</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
