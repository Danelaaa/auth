import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to document body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`auth-container ${theme}`}>
      <div className="top-bar">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <h2>Welcome, {user?.name || "User"}!</h2>
      <p>You are logged in.</p>
    </div>
  );
}

export default Home;
