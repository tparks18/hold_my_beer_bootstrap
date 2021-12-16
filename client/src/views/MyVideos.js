import React, {useContext, useState} from "react";
import {UserContext} from '../context/UserContext';
import {Navigate} from "react-router-dom";
import VideoUpload from "../components/VideoUpload";
import VideoGallery from "../components/VideoGallery";


const MyVideos = () => {
  const {user} = useContext(UserContext)

  if (!user.token) return <Navigate to='/login'/>
  return (
    <div>
      {console.log("user", user, "\n userid", user.user_id)}
      <div className="heading">
        <h3>{user.name}'s Videos</h3>
      </div>
      <VideoUpload/>
      <VideoGallery user_id={user.user_id}/>

      
    </div>
  );
};

export default MyVideos;
