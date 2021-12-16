import React, {useContext, useEffect} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LandingPage from "./views/LandingPage";
import Videos from "./views/Videos";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import Register from "./views/Register";
import Login from "./views/Login";
import VotingHistory from "./views/VotingHistory";
import MyVideos from "./views/MyVideos";
import { useGetVideos } from "./api/apiVideo";

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
            <Route path="/register" element={<Register />} />
            <Route path="/myvideos" element={<MyVideos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/votinghistory" element={<VotingHistory />} />
          </Routes>
        </main>
    </React.Fragment>
  );
}

export default App;
