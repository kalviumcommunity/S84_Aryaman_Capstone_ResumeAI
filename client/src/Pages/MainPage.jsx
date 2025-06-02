import React, { useEffect, useState } from "react";
import "./MainPage.css";
import logo from "../assets/resumeai-logo.png"
import { FaRobot, FaFileAlt, FaEdit, FaSearch, FaDownload, FaPenNib, FaGlobe, FaChartLine } from "react-icons/fa";

function MainPage({ onGetStarted, onShowAbout, onShowPremium, onShowSearch}) {
  useEffect(() => {
    const testimonials = document.querySelector(".testimonial-container");

    const handleScroll = () => {
      const position = testimonials.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight * 0.8) {
        testimonials.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    document.querySelector(".testimonial-container").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".testimonial-container").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li onClick={onShowSearch} className="clickable">Search</li>
          <li onClick={onShowPremium} className="clickable">Premium</li>
          <li onClick={onShowAbout} className="clickable">About Us</li>
          <li>Profile</li>
        </ul>
      </nav>

      <header className="hero">
      <div className="logo-container">
        <img src={logo} alt="ResumeAI Logo" className="logo" />
      </div>

        <div className="circle big-circle"></div>
        <div className="circle small-circle left"></div>
        <div className="circle small-circle right"></div>
        
        <h1>
          Create a Job-Winning <span className="gradient-text">Resume</span> in
          Seconds with AI!
        </h1>

        <TypingEffect />

        <button className="cta-button" onClick={onGetStarted}>
          Get Started
        </button>
      </header>

      <section className="features">
        <div className="feature-card">
          <FaRobot className="feature-icon" />
          <h2>AI Resume Suggestions</h2>
          <p>Let AI tailor your resume based on job descriptions.</p>
        </div>
        <div className="feature-card">
          <FaFileAlt className="feature-icon" />
          <h2>Custom Templates</h2>
          <p>Choose from professional, modern, and creative templates.</p>
        </div>
        <div className="feature-card">
          <FaEdit className="feature-icon" />
          <h2>Real-Time Editing</h2>
          <p>Edit and preview your resume live as you make changes.</p>
        </div>
        <div className="feature-card">
          <FaSearch className="feature-icon" />
          <h2>ATS Optimization</h2>
          <p>Ensure your resume is ATS-friendly and stands out to recruiters.</p>
        </div>
        <div className="feature-card">
          <FaDownload className="feature-icon" />
          <h2>One-Click Export</h2>
          <p>Download your resume in multiple formats, including PDF and DOCX.</p>
        </div>
        <div className="feature-card">
          <FaPenNib className="feature-icon" />
          <h2>AI-Powered Cover Letters</h2>
          <p>Generate personalized cover letters tailored to your applications.</p>
        </div>
        <div className="feature-card">
          <FaGlobe className="feature-icon" />
          <h2>Multi-Language Support</h2>
          <p>Create resumes in different languages to apply for global jobs.</p>
        </div>
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h2>Resume Analytics</h2>
          <p>Track views and downloads to see how your resume is performing.</p>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="testimonials-title">What Our Users Say</h2>
        <div className="testimonial-scroll">
          <button className="scroll-btn" onClick={scrollLeft}>◀</button>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex J." className="testimonial-img" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">“This AI tool helped me land my dream job!”</p>
              <span className="testimonial-author">— Alex J.</span>
            </div>

            <div className="testimonial-card">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah M." className="testimonial-img" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">“Super easy to use, and the templates are amazing!”</p>
              <span className="testimonial-author">— Sarah M.</span>
            </div>

            <div className="testimonial-card">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="John D." className="testimonial-img" />
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">“A game-changer for resume building. Highly recommended!”</p>
              <span className="testimonial-author">— John D.</span>
            </div>
            <div className="testimonial-card">
  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Priya S." className="testimonial-img" />
  <div className="stars">⭐⭐⭐⭐⭐</div>
  <p className="testimonial-text">“I created my resume in just minutes. Super efficient and clean!”</p>
  <span className="testimonial-author">— Priya S.</span>
</div>

<div className="testimonial-card">
  <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="Kevin L." className="testimonial-img" />
  <div className="stars">⭐⭐⭐⭐⭐</div>
  <p className="testimonial-text">“The AI suggestions helped me stand out from other applicants.”</p>
  <span className="testimonial-author">— Kevin L.</span>
</div>

<div className="testimonial-card">
  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Emily R." className="testimonial-img" />
  <div className="stars">⭐⭐⭐⭐⭐</div>
  <p className="testimonial-text">“A must-have tool for anyone applying for jobs in 2025.”</p>
  <span className="testimonial-author">— Emily R.</span>
</div>

<div className="testimonial-card">
  <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Mohamed A." className="testimonial-img" />
  <div className="stars">⭐⭐⭐⭐⭐</div>
  <p className="testimonial-text">“Sleek design, easy-to-use interface, and top-notch results!”</p>
  <span className="testimonial-author">— Mohamed A.</span>
</div>

<div className="testimonial-card">
  <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Sophie B." className="testimonial-img" />
  <div className="stars">⭐⭐⭐⭐⭐</div>
  <p className="testimonial-text">“Landed two interviews within a week of updating my resume here!”</p>
  <span className="testimonial-author">— Sophie B.</span>
</div>

          </div>
          <button className="scroll-btn" onClick={scrollRight}>▶</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-glow">Empowering Resumes with AI</p>

          <div className="footer-nav">
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <p className="footer-copyright">
            © 2025 ResumeAI. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
const TypingEffect = () => {
  const text = "Let AI optimize your resume for maximum impact.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 65);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <p className="animated-text">
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </p>
  );
};


export default MainPage;
