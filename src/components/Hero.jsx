import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 1000;
      const progress = Math.min(scrollY / heroHeight, 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const marsRotation = scrollProgress * 360;
  // const marsScale = 1 + scrollProgress * 0.5;
  const textOpacity = 1 - scrollProgress * 2;

  return (
    <div className="hero-container" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="stars-small"></div>
        <div className="nebula"></div>
        <div className="galaxy"></div>
      </div>

      {/* Floating Asteroids */}
      <div className="asteroid asteroid-1">💫</div>
      <div className="asteroid asteroid-2">✨</div>
      <div className="asteroid asteroid-3">⭐</div>
      <div className="asteroid asteroid-4">🌟</div>

      {/* Mars Planet System */}
      <div className="solar-system">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>

        <div
        // className="mars-planet"
        // style={{
        //   transform: `rotate(${marsRotation}deg) scale(${marsScale})`,
        //   opacity: 0.8 + scrollProgress * 0.2,
        // }}
        >
          <div className="planet-surface">
            <div className="crater crater-1"></div>
            <div className="crater crater-2"></div>
            <div className="crater crater-3"></div>
            <div className="crater crater-4"></div>
            <div className="crater crater-5"></div>
            <div className="mars-feature feature-1"></div>
            <div className="mars-feature feature-2"></div>
          </div>
          <div className="planet-glow"></div>
        </div>

        {/* Mars Moons */}
        <div
          className="moon phobos"
          style={{ transform: `rotate(${marsRotation * 2}deg)` }}
        >
          <div className="moon-surface"></div>
        </div>
        <div
          className="moon deimos"
          style={{ transform: `rotate(${marsRotation * 1.5}deg)` }}
        >
          <div className="moon-surface"></div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div
        className="hero-content"
        style={{
          opacity: textOpacity,
          transform: `translateY(${scrollProgress * 100}px)`,
        }}
      >
        <div className="hero-badge">
          <span className="badge-icon">🚀</span>
          Welcome to the Future of Digital Innovation
        </div>

        <h1 className="hero-title">
          <span className="title-line">Exploring the</span>
          <span className="title-gradient">Digital Universe</span>
          <span className="title-line">with Marsyn</span>
        </h1>

        <div className="typing-animation">
          <p className="typing-text">
            Where <span className="highlight">Code Meets Cosmos</span> and
            Innovation Knows No Bounds
          </p>
        </div>

        <p className="hero-description">
          We're pioneering the next generation of digital solutions, blending
          cutting-edge technology with cosmic inspiration. Our mission is to
          transform your digital presence into an interstellar experience that
          captivates and converts.
        </p>

        {/* Interactive Stats */}
        <div className="animated-stats">
          <div className="stat-item">
            <div className="stat-number" data-target="150">
              0
            </div>
            <div className="stat-label">Projects Launched</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="98">
              0
            </div>
            <div className="stat-label">Success Rate</div>
            <span className="stat-percent">%</span>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="24">
              0
            </div>
            <div className="stat-label">Innovation Hours</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="500">
              0
            </div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
        </div>

        {/* Tech Stack Cloud */}
        <div className="tech-cloud">
          {[
            'React',
            'Node.js',
            'Python',
            'TypeScript',
            'AWS',
            'Docker',
            'Kubernetes',
            'TensorFlow',
            'Three.js',
            'GraphQL',
            'MongoDB',
            'PostgreSQL',
          ].map((tech, index) => (
            <span
              key={tech}
              className="tech-tag"
              style={{
                animationDelay: `${index * 0.2}s`,
                transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${
                  (mousePosition.y - 50) * 0.1
                }px)`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button className="cta-btn primary">
            <span className="btn-glow"></span>
            <span className="btn-icon">🌌</span>
            Launch Project
          </button>
          <button className="cta-btn secondary">
            <span className="btn-icon">📡</span>
            Explore Galaxy
          </button>
          <button className="cta-btn outline">
            <span className="btn-icon">🛰️</span>
            View Orbit
          </button>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <div className="client-logos">
            {['NASA', 'SPACEX', 'BLUE ORIGIN', 'VIRGIN GALACTIC'].map(
              (client) => (
                <div key={client} className="client-logo">
                  {client}
                </div>
              )
            )}
          </div>
          <p className="proof-text">Trusted by interstellar pioneers</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="cosmic-scroll-indicator">
        <div className="scroll-orbit">
          <div className="scroll-satellite"></div>
        </div>
        <span className="scroll-text">Begin Cosmic Journey</span>
      </div>

      {/* Particle Effects */}
      <div className="particles-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 7}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Audio Visualizer Effect */}
      <div className="audio-waves">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="wave-bar"
            style={{
              animationDelay: `${i * 0.1}s`,
              height: `${20 + Math.random() * 60}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
