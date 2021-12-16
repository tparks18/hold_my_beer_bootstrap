import React, { useContext, useState } from 'react';
import VideoModal from './VideoModal';
import VideoImage from './VideoImage';
import {useGetVideosByUserID, useGetVideos}from '../api/apiVideo';
import {useGetUserVotes} from '../api/apiVote';
import {UserContext} from '../context/UserContext'


export default function VideoGallery(props) {
    const {user} = useContext(UserContext)
    const [flag, setFlag] = useState(true)
    const vote_info = useGetUserVotes(user.user_id, flag)
    if (props.user_id) return <UserGallery user_id={props.user_id} vote_info={vote_info} flag={flag} setFlag={setFlag}/>
    return <FullGallery vote_info={vote_info} flag={flag} setFlag={setFlag}/>
}



function UserGallery(props) {    
    const videos = useGetVideosByUserID(props.user_id)
    return (
      <section>
          <section>
                {videos?.data?.map((video)=><VideoImage id={video.id} video={video}/>)}   
        </section>

        <section>
        {
                videos?.data?.map((video)=><VideoModal flag={props.flag} setFlag={props.setFlag} id={video.id} votes={props.vote_info.data} video={video}/>)              
        }
        </section>
      </section>
    )
}

function FullGallery(props) {    
    const videos = useGetVideos()
    return (
      <section>
          <section>
                {videos?.data?.map((video)=><VideoImage  id={video.id} video={video}/>)}
            
        </section>

        <section>
        {
                videos?.data?.map((video)=><VideoModal flag={props.flag} setFlag={props.setFlag} id={video.id} vote={props.vote_info.data} video={video}/>)              
        }
        </section>
      </section>
    )
}