import React, { useState } from "react";
import background from "../assets/background.png";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "./SignUp.css";
import axios from "axios";

const SignUp = ({ onRedirect, onShowSearch, onShowPremium, onShowAbout }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }
     try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log("User signed up:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error.response.data.message);
      alert("Error signing up, please try again.");
    }
    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up with Google");
  };
  const handleGithubSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up with GitHub");
  };
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={onRedirect}>Home</li>
          <li onClick={onShowSearch} className="clickable">Search</li>
          <li onClick={onShowPremium} className="clickable">Premium</li>
          <li onClick={onShowAbout} className="clickable">About Us</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div
        className="signup-container d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="signup-content bg-dark p-5 rounded-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
          <h2 className="text-center text-light mb-3">Sign Up</h2>
          <p className="text-center text-light mb-4">Just some details to get you in.</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {["firstName", "lastName", "username", "email"].map((field) => (
              <div className="form-floating mb-3" key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  className="form-control"
                  id={field}
                  placeholder={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
              </div>
            ))}
            {["password", "confirmPassword"].map((field) => (
              <div className="form-floating mb-3 position-relative" key={field}>
                <input
                  type={showPassword ? "text" : "password"}
                  name={field}
                  className="form-control"
                  id={field}
                  placeholder={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={field}>
                  {field === "confirmPassword" ? "Confirm Password" : "Password"}
                </label>
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} position-absolute top-50 end-0 translate-middle-y me-3 text-secondary`}
                  style={{ cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            ))}
            <div className="text-center text-light my-3">or sign up with</div>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <button className="btn btn-outline-light rounded-circle p-3" onClick={handleGoogleSignUp}>
                <FaGoogle />
              </button>
              <button className="btn btn-outline-light rounded-circle p-3" onClick={handleGithubSignUp}>
                <FaGithub />
              </button>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <button 
  type="button" 
  className="btn btn-outline-light text-light mt-3 px-4 py-2 rounded-pill shadow-sm transition-all hover-effect btn-back-home"
  onClick={onRedirect}
>
  <i className="bi bi-arrow-left-circle me-2"></i> Back to Home
  </button>
    </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
