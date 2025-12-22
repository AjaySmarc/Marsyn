import React from 'react';
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  ArrowRight,
  TrendingUp,
  Code,
  Rocket,
  Brain,
  Target,
  Users,
  CheckCircle,
  MessageCircle,
  Star,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import './SocialMedia.css';
import { Helmet } from 'react-helmet-async';

const SocialMedia = () => {
  // Social media stats
  const socialStats = [
    {
      platform: 'Instagram',
      icon: <Instagram size={24} />,
      followers: '12K+',
      label: 'followers',
      color: 'instagramBg',
      link: 'https://instagram.com',
    },
    {
      platform: 'YouTube',
      icon: <Youtube size={24} />,
      followers: '5K+',
      label: 'subscribers',
      color: 'youtubeBg',
      link: 'https://youtube.com',
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin size={24} />,
      followers: '3K+',
      label: 'connections',
      color: 'linkedinBg',
      link: 'https://linkedin.com',
    },
    {
      platform: 'Twitter/X',
      icon: <Twitter size={24} />,
      followers: '2K+',
      label: 'followers',
      color: 'twitterBg',
      link: 'https://twitter.com',
    },
  ];

  // Growth journey data
  const growthJourney = [
    {
      metric: 'Instagram Growth',
      from: 0,
      to: 5000,
      duration: '60 days',
      progress: 100,
    },
    {
      metric: 'YouTube Subscribers',
      from: 0,
      to: 5000,
      duration: '90 days',
      progress: 100,
    },
    { metric: 'Monthly Reach', value: '20K+', description: 'per reel average' },
    { metric: 'Content Created', value: '30+', description: 'reels posted' },
  ];

  // Content categories
  const contentTypes = [
    {
      icon: <Code size={20} />,
      title: 'Tech Reels',
      desc: 'Java, React, DSA tutorials',
      tag: 'programming',
    },
    {
      icon: <Rocket size={20} />,
      title: 'Startup & Career',
      desc: 'Founder advice & growth',
      tag: 'startups',
    },
    {
      icon: <Brain size={20} />,
      title: 'AI & Productivity',
      desc: 'Tools & automation tips',
      tag: 'ai',
    },
    {
      icon: <Target size={20} />,
      title: 'Freelancing',
      desc: 'Building in public journey',
      tag: 'freelance',
    },
  ];

  // Collaboration opportunities
  const opportunities = [
    {
      title: 'Freelance Web Development',
      desc: 'React, Next.js, Full-Stack',
      icon: <Code size={20} />,
    },
    {
      title: 'Content Collaboration',
      desc: 'Tech tutorials & brand content',
      icon: <MessageCircle size={20} />,
    },
    {
      title: 'Startup Promotion',
      desc: 'Product launches & growth',
      icon: <Rocket size={20} />,
    },
    {
      title: 'Tech Consulting',
      desc: 'Architecture & scaling advice',
      icon: <Users size={20} />,
    },
    {
      title: 'Speaking / Workshops',
      desc: 'Live sessions & training',
      icon: <Star size={20} />,
    },
  ];

  // Social proof
  const testimonials = [
    {
      text: 'Amazing content strategy that doubled our engagement!',
      author: 'SaaS Founder',
      platform: 'LinkedIn',
    },
    {
      text: 'Your tech explanations made complex topics simple for our team.',
      author: 'Tech Lead',
      platform: 'Twitter',
    },
    {
      text: 'Consistent, high-quality content that actually drives results.',
      author: 'Marketing Director',
      platform: 'Instagram',
    },
  ];

  return (
    <div className="container">
      <Helmet>
        <title>Marsyn Social Media | Tech, AI & Startups</title>
        <meta
          name="description"
          content="Explore Ajay's social media presence covering tech insights, AI innovations, startup journeys, and web development projects."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <div className="avatar">
            <span>AJ</span>
          </div>
          <h1 className="heroTitle">Hi, I'm Ajay 👋</h1>
          <p className="heroSubtitle">
            I build in public, share tech insights, and help brands grow
            digitally.
          </p>
          <div className="nicheTag">
            <span>Tech | Startups | AI | Web Development</span>
          </div>
          <p className="heroDescription">
            Helping startups grow through tech + content.
          </p>
          <div className="heroButtons">
            <button className="button primaryButton">
              View My Work <ArrowRight size={20} />
            </button>
            <button className="button secondaryButton">
              Collaborate With Me <MessageCircle size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Stats */}
      <section className="section">
        <h2 className="sectionTitle">Digital Presence</h2>
        <div className="statsGrid">
          {socialStats.map((stat, index) => (
            <a
              key={index}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`statCard ${stat.color}`}
            >
              <div className="statHeader">
                <div className="statPlatform">
                  {stat.icon}
                  <span>{stat.platform}</span>
                </div>
                <ExternalLink size={18} />
              </div>
              <div className="statNumber">{stat.followers}</div>
              <div className="statLabel">{stat.label}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Growth Progress */}
      <section className="growthSection">
        <div className="sectionHeader">
          <TrendingUp className="trendingIcon" size={28} />
          <h2 className="sectionTitle">Growth Journey</h2>
        </div>

        <div className="growthGrid">
          {growthJourney.map((item, index) => (
            <div key={index} className="growthItem">
              <div className="growthHeader">
                <span className="growthMetric">{item.metric}</span>
                {item.value && (
                  <span className="growthValue">{item.value}</span>
                )}
              </div>

              {item.from !== undefined && (
                <>
                  <div className="growthRange">
                    <span>{item.from}</span>
                    <span>{item.to}</span>
                  </div>
                  <div className="progressBar">
                    <div
                      className="progressFill"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="growthDuration">
                    Achieved in {item.duration}
                  </div>
                </>
              )}

              {item.description && (
                <div className="growthDescription">{item.description}</div>
              )}
            </div>
          ))}
        </div>

        <div className="consistencyNote">
          <p>
            📍 <strong>Consistency matters more than numbers.</strong> Posting
            daily for 90+ days.
          </p>
        </div>
      </section>

      {/* Content I Create */}
      <section className="section">
        <h2 className="sectionTitle">Content I Create</h2>
        <div className="contentGrid">
          {contentTypes.map((content, index) => (
            <div key={index} className="contentCard">
              <div className="contentHeader">
                <div className="contentIcon">{content.icon}</div>
                <span className="contentTitle">{content.title}</span>
              </div>
              <p className="contentDesc">{content.desc}</p>
              <span className="contentTag">#{content.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section">
        <div className="collaborationSection">
          <h2 className="sectionTitle">Why Collaborate With Me?</h2>

          <div className="benefitsGrid">
            {[
              'I understand tech + audience',
              'I build authentic content, not ads',
              'I explain complex ideas simply',
              "I'm consistent & reliable",
            ].map((point, index) => (
              <div key={index} className="benefitItem">
                <CheckCircle className="checkIcon" size={20} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="workWithSection">
            <h3 className="workWithTitle">I work best with:</h3>
            <div className="workWithTags">
              {[
                'Startups',
                'SaaS Products',
                'EdTech',
                'Tech Communities',
                'Digital Agencies',
              ].map((type, index) => (
                <span key={index} className="workWithTag">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities & Collaboration */}
      <section className="section">
        <h2 className="sectionTitle">Opportunities & Collaboration</h2>

        <div className="opportunitiesGrid">
          {opportunities.map((opp, index) => (
            <div key={index} className="opportunityCard">
              <div className="opportunityHeader">
                <div className="opportunityIcon">{opp.icon}</div>
                <h3>{opp.title}</h3>
              </div>
              <p className="opportunityDesc">{opp.desc}</p>
              <button className="opportunityButton">
                Learn More <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="collaborationCTA">
          <button className="collaborateButton">Let's Collaborate</button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section">
        <h2 className="sectionTitle">What Others Say</h2>

        <div className="testimonialsGrid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="starIcon" />
                ))}
              </div>
              <p className="testimonialText">"{testimonial.text}"</p>
              <div className="testimonialFooter">
                <span className="testimonialAuthor">{testimonial.author}</span>
                <span className="testimonialPlatform">
                  {testimonial.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Links */}
      <section className="section">
        <div className="contactSection">
          <h2 className="contactTitle">Let's Build Something Together</h2>

          <div className="contactButtons">
            <a href="mailto:hello@ajay.com" className="contactButton">
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contactButton calendarButton"
            >
              <Calendar size={20} />
              Book a Call
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="contactButton whatsappButton"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          <div className="socialLinksSection">
            <h3 className="socialLinksTitle">Connect Everywhere</h3>
            <div className="socialLinks">
              {socialStats.map((stat, index) => (
                <a
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  {React.cloneElement(stat.icon, { size: 24 })}
                </a>
              ))}
            </div>
          </div>

          <div className="footer">
            <p>© {new Date().getFullYear()} Ajay. All rights reserved.</p>
            <p className="footerSubtitle">Digital Presence & Social Proof</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
