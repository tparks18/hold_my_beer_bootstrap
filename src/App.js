import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LandingPage from "./views/LandingPage";
import Videos from "./views/Videos";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import Newsfeed from "./views/Newsfeed";
import MyPosts from "./views/MyPosts";
import Register from "./views/Register";
import Login from "./views/Login";
import VotingHistory from "./views/VotingHistory";
import MyVideos from "./views/MyVideos";


function App() {
  return (
    <React.Fragment>
      <Main />
      <main className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/myvideos" element={<MyVideos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/votinghistory" element={<VotingHistory />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
