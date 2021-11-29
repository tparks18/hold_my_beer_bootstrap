import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LandingPage from "./components/LandingPage";
import Videos from "./components/Videos";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Newsfeed from "./components/Newsfeed";

function App() {
  return (
    <React.Fragment>
      <Main />
      <main className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Settings />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
