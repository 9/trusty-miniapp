import * as TWA from "@twa-dev/sdk";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>🏠 Welcome to Trusty Mini App!</h1>;
}

function About() {
  return <h1>ℹ️ About Trusty</h1>;
}

function Contact() {
  return <h1>📞 Contact Us</h1>;
}

function App() {
  useEffect(() => {
    console.log("📢 Checking Telegram WebApp SDK...");
    console.log(window.Telegram.WebApp); // Debugging: Check if Telegram SDK exists

    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand(); // Expand the mini app
      console.log("✅ Telegram Web App Initialized!");
    } else {
      console.error("❌ Telegram WebApp is not available!");
    }
  }, []);

  return (
    <div>
      <h1>🚀 Trusty Mini App</h1>

      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
