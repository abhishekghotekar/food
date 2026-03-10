import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Utensils, Github, Chrome } from 'lucide-react';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    console.log('Logging in with:', email, password);
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
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Great to see you again!</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="form-input-wrapper">
              <Mail className="form-input-icon" size={20} />
              <input 
                type="email" 
                className="form-input" 
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="form-input-wrapper">
              <Lock className="form-input-icon" size={20} />
              <input 
                type="password" 
                className="form-input" 
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#" className="auth-link" style={{ fontSize: '0.85rem' }}>Forgot password?</a>
          </div>

          <button type="submit" className="auth-button">
            <LogIn size={20} />
            Sign In
          </button>
        </form>

        <div className="social-auth">
          <div className="social-divider">Or continue with</div>
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
          Don't have an account? 
          <Link to="/signup" className="auth-link">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
