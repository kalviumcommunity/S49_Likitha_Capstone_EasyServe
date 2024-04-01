import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // Import your CSS file for styling

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h1 className="login-heading">Login</h1>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="login-input"
          />
          <button className="login-button">Login</button>
          <div className="register-link">
            Don't have an account yet?{" "}
            <Link className="register-link-text" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
