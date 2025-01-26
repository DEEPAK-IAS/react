import React from "react";
import { motion } from "framer-motion";
import "./signin.css"

export default function LoginForm() {
  return (
    <div className="login-container">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="title">Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
        <p className="register-link">
          Don’t have an account? <a href="#">Register here</a>
        </p>
      </motion.div>
    </div>
  );
}
