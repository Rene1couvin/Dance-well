import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    username: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    role: "student",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });
    setLoading(true);

    const url = isLogin ? "http://127.0.0.1:8000/login" : "http://127.0.0.1:8000/signup";
    const data = isLogin
      ? { loginInput: formData.emailOrPhone, password: formData.password }
      : { ...formData };

    try {
      const response = await axios.post(url, data);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      
      setMessage({ type: "success", text: isLogin ? "Login successful!" : "Signup successful! Please login." });
      setTimeout(() => navigate(response.data.role === "admin" ? "/admin" : "/"), 1000);
    } catch (error) {
      setMessage({ type: "danger", text: error.response?.data?.error || "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container pt-4 mt-4">
      <div className="card auth-card mt-4">
        <h2 className="text-center">{isLogin ? "Login" : "Sign Up"}</h2>

        {message.text && <div className={`alert alert-${message.type}`}>{message.text}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" name="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" name="phoneNumber" placeholder="Enter your phone" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" placeholder="Choose a username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select className="form-control" name="role" value={formData.role} onChange={handleChange}>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Email or Phone</label>
            <input type="text" className="form-control" name="emailOrPhone" placeholder="Enter email or phone" value={formData.emailOrPhone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
