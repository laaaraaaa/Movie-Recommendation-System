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

  const [movies, setMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/movies/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/recommendations/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setRecommendations(data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
      }
    };

    if (token) {
      Promise.all([fetchMovies(), fetchRecommendations()]).finally(() =>
        setLoading(false)
      );
    }
  }, [token]);

  return (
    <div className="app-container">
      <h1>Welcome to Movie Recommendation System 🎬</h1>
      <p style={{ marginTop: 20 }}>You are logged in!</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="content">
          <div className="movie-list">
            <h2>All Movies</h2>
            <ul>
              {movies.map((m) => (
                <li key={m.id}>
                  {m.title} ({m.genre})
                </li>
              ))}
            </ul>
          </div>
          <div className="recommendations">
            <h2>Recommendations</h2>
            <ul>
              {recommendations.map((m) => (
                <li key={m.id}>
                  {m.title} ({m.genre})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 