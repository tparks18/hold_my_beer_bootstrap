import React, {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext'
import {Image, Video} from 'cloudinary-react';
import { usePostVote, usePutVote } from '../api/apiVote';
import { useDeleteVideo } from '../api/apiVideo';
import { useNavigate } from "react-router-dom";

const CloseButton = () =>(                  
    <button
        type="button"
        className="btn btn-secondary"
        data-mdb-dismiss="modal"
    >
      Close
  </button>)

const handleNewVote=(vote, video, setUserVote, flag, setFlag)=>{
  setUserVote({"video_id":video.video_id, "vote":vote })
  setFlag(!flag)
}

const handleChangeVote=(vote, video, vote_id, setUserUpdateVote, flag, setFlag)=>{
  setUserUpdateVote({"video_id":video.video_id, "vote":vote, "vote_id":vote_id})
  setFlag(!flag)

}

const DownVoteButton = ({video, vote, userVote, setUserVote, setUserUpdateVote, flag, setFlag}) =>{
  return(
      <button id="downvotebtn" onClick={()=>{!vote?.vote ? handleNewVote(false,video, setUserVote, flag, setFlag ):handleChangeVote(false, video ,vote?.vote_id,setUserUpdateVote, flag,setFlag )}} type="button" disabled={vote?.vote==false} className={!vote || vote===null ? `btn btn-danger`  : vote?.vote===false ? `btn btn-danger` :`btn btn-secondary`}>
          <i
          style={{ marginRight: 5 }}
          className="fas fa-thumbs-down"
          />
              {video.down_votes}

      </button>
    )}

const UpVoteButton = ({video, vote, userVote, setUserVote, setUserUpdateVote, flag, setFlag}) =>{
  return(
    <button id="upvotebtn" onClick={()=>{!vote?.vote ? handleNewVote(true,video,  setUserVote, flag, setFlag ):handleChangeVote(true, video ,vote?.vote_id, setUserUpdateVote, flag,setFlag )}}type="button" disabled={vote?.vote==true} className={!vote || vote===null ? `btn btn-success` : vote?.vote===true ? `btn btn-success`:`btn btn-secondary`}>
        {console.log("vote in button",vote?.vote)}
        <i
        style={{ marginRight: 5 }}
        className="fas fa-thumbs-up"
        />
            {video.up_votes}
    </button>)}
const handleDeleteVideo=(e, setDeleteVideoProps, video, user, history)=>{
  e.preventDefault();
  e.stopPropagation();
  setDeleteVideoProps({video_id: video.video_id ,token:user.token})
  history(`${window.location.pathname}`)
  
}
const DeleteButton = ({video, user, history}) =>{
  const [deleteVideoProps, setDeleteVideoProps]=useState({})
  useDeleteVideo(deleteVideoProps.video_id, deleteVideoProps.token)
  return(                      
    <button type="button" onClick = {(e)=>handleDeleteVideo(e,setDeleteVideoProps,video, user, history)} className="btn btn-danger">
        <i
        style={{ marginRight: 5 }}
        className="fas fa-minus-circle"
        />
        Delete
    </button>
    )}

export default function VideoModal(props) {
    const {user} = useContext(UserContext)
    const vote = props.votes?.find((vote)=>vote?.video_id==props.video.video_id)
    const [userVote,setUserVote]=useState({})
    const [userUpdateVote,setUserUpdateVote]=useState({}) 
    const postVote = usePostVote(userVote,user.token)
    const putVote = usePutVote(userUpdateVote?.vote_id,userUpdateVote,user.token)
    let history = useNavigate();
    return (
            <div
            className="modal fade"
            id={`vid-mod${props.video.video_id}`}
            tabIndex={-1}
            aria-labelledby="exampleModal2Label"
            aria-hidden="true"
            >
              {console.log('the vote list in Video Modal',props.votes)}
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                <Video publicId={props.video.cloud_id}  controls={true} fallbackContent="Your browser does not support HTML5 video tags."/>
                </div>
                      <div className="text-center py-2"><h5>{props.video.title}</h5><i>{props.video.creator_name}</i></div>
                <div className="text-center py-3">
                  <div className="row justify-content-center">
                    <div className="text-center py-2 col-2">
                        <UpVoteButton flag={props.flag} setFlag={props.setFlag}  userVote={userVote} setUserUpdateVote={props.setUserUpdateVote} setUserVote={setUserVote} video={props.video} vote={vote}/>
                    </div>

                    <div className="text-center py-2 col-2">
                        {user.user_id===props.video.user_id ?<DeleteButton video={props.video} user={user}  history={history}/>:<DownVoteButton flag={props.flag} setFlag={props.setFlag}  setUserUpdateVote={props.setUserUpdateVote} userVote={userVote} setUserVote={setUserVote} video={props.video} vote={vote}/>}
                    </div>
                  </div>

                <CloseButton/>
                </div>
              </div>
            </div>
          </div>
    
    )
}
