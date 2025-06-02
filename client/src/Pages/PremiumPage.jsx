import React from 'react';
import './PremiumPage.css';

const PremiumPage = ({
  onShowAbout,
  onHome,
  onShowSearch,
  onShowProfile
}) => {
  return (
    <div className="premium-page">
      <nav className="navbar">
        <div className="logo">ResumeAI</div>
        <ul className="nav-links">
        <li onClick={onHome} className="clickable">Home</li>
        <li onClick={onShowSearch} className="clickable">Search</li>
          <li className="clickable active">Premium</li>
          <li onClick={onShowAbout} className="clickable">About Us</li>
          <li onClick={onShowProfile} className="clickable">Profile</li>
        </ul>
      </nav>
      <header className="premium-header">
        <h1>
          <span style={{ color: '#ffffff' }}>Upgrade to </span>
          <span className="gradient-text">Premium</span>
        </h1>
        <p>Unlock powerful AI tools and premium templates to boost your resume.</p>
      </header>
      <section className="premium-content">
        <div className="card">
          <h2 className="plan-title">Basic</h2>
          <p className="price">$4.99<span className="duration">/month</span></p>
          <ul className="features">
            <li>Essential AI tools</li>
            <li>Limited templates</li>
            <li>Email support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

        {/* Monthly Plan */}
        <div className="card popular-card">
          <div className="badge popular">Most Popular</div>
          <h2 className="plan-title">Monthly</h2>
          <p className="price">$9.99<span className="duration">/month</span></p>
          <ul className="features">
            <li>AI resume optimization</li>
            <li>Premium templates</li>
            <li>Priority support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

        <div className="card highlight saver-card">
          <div className="badge saver">Best Saver</div>
          <h2 className="plan-title">Yearly</h2>
          <p className="price">$99.99<span className="duration">/year</span></p>
          <ul className="features">
            <li>2 months free</li>
            <li>Full premium access</li>
            <li>Exclusive tools</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

        <div className="card">
          <h2 className="plan-title">Developer</h2>
          <p className="price">$59.99<span className="duration">/month</span></p>
          <ul className="features">
            <li>Complete dev toolkit</li>
            <li>API integrations</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>
      </section>
    </div>
  );
};
export default PremiumPage;
