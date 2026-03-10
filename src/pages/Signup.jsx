import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, Utensils, Github, Chrome } from 'lucide-react';
import '../styles/auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Registering user:', formData);
    navigate('/');
  };

  return (
    <div className="auth-page animate-fade">
      <div className="auth-card animate-up">
        <div className="auth-header">
          <div className="auth-logo">
            <Utensils size={32} color="var(--primary)" />
            <span>GoMeal</span>
          </div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us and start ordering!</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="form-input-wrapper">
              <User className="form-input-icon" size={20} />
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="form-input-wrapper">
              <Mail className="form-input-icon" size={20} />
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="name@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="form-input-wrapper">
              <Lock className="form-input-icon" size={20} />
              <input 
                type="password" 
                name="password"
                className="form-input" 
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="form-input-wrapper">
              <Lock className="form-input-icon" size={20} />
              <input 
                type="password" 
                name="confirmPassword"
                className="form-input" 
                placeholder="••••••••"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="auth-button">
            <UserPlus size={20} />
            Sign Up
          </button>
        </form>

        <div className="social-auth">
          <div className="social-divider">Or join with</div>
          <div className="social-buttons">
            <button className="social-btn">
              <Chrome size={20} />
              Google
            </button>
            <button className="social-btn">
              <Github size={20} />
              Github
            </button>
          </div>
        </div>

        <div className="auth-footer">
          Already have an account? 
          <Link to="/login" className="auth-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
