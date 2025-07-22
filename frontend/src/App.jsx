import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  if (!token) {
    return showRegister ? (
      <RegisterForm
        onRegister={() => setShowRegister(false)}
        switchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <LoginForm
        onLogin={setToken}
        switchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="app-container">
      <h1>Welcome to Movie Recommendation System 🎬</h1>
      <p style={{marginTop: 20}}>You are logged in!</p>
      {/* Next: Show movie list, add movie, etc. */}
    </div>
  );
}

export default App; 