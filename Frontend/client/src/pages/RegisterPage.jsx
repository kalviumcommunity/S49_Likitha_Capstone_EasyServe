import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import "./LoginPage.css"; 

export default function RegisterPage() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }
  return (
  
            <div className="login-container">
              <div className="login-form-wrapper">
                <h1 className="login-heading">Register</h1>
                <form className="login-form" onSubmit={registerUser}>
                    <input type="Name" placeholder="Your name" className="login-input"  value={name} onChange={(ev) => setName(ev.target.value)}/>
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
                    All ready have an account?{" "}
                    <Link className="register-link-text" to={"/login"}>
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
  );
}

