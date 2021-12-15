import React, {useContext, useState} from "react";
import {UserContext} from '../context/UserContext';
import {Navigate} from "react-router-dom";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const MyVideos = () => {
  function showUploadWidget() {
    window.cloudinary.openUploadWidget({
       cloudName: "cae67",
       uploadPreset: "dwxv7gsk",
       sources: [
           "local",
           "url",
           "camera",
           "image_search",
           "google_drive",
           "facebook",
           "dropbox",
           "instagram",
           "shutterstock",
           "istock"
       ],
       googleApiKey: "187123697811376",
       showAdvancedOptions: true,
       cropping: true,
       multiple: false,
       defaultSource: "local",
       styles: {
           palette: {
               window: "#1C1C1C",
               windowBorder: "#90A0B3",
               tabIcon: "#45A2DA",
               menuIcons: "#1C1C1C",
               textDark: "#000000",
               textLight: "#FFFFFF",
               link: "#45A2DA",
               action: "#FF620C",
               inactiveTabIcon: "#1C75B4",
               error: "#F44235",
               inProgress: "#45A2DA",
               complete: "#20B832",
               sourceBg: "#E4EBF1"
           },
           fonts: {
               default: null,
               "'Fira Sans', sans-serif": {
                   url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                   active: true
               }
           }
       }
   },
    (err, info) => {
      if (!err) {    
        console.log("Upload Widget event - ", info);
        if (info.event=="success"){
         if(info.info.resource_type !== "video"){
           console.log("Must be a Video Try Again")
          }
          console.log(info.info.original_filename)
          console.log(info.info.public_id)
          console.log(info.info.thumbnail_url)
          setUploadVideo({
            "filename": info.info.original_filename,
            "cloud_id": info.info.public_id,
            "thumbnail_url": info.info.thumbnail_url,
          })
        }
      }
     });
    }
  const {user} = useContext(UserContext)
  const [uploadVideo, setUploadVideo] = useState({})
  const handleTitleVideo=(e)=>{
    let vid={...uploadVideo};
    vid.title=e.target.value;
    setUploadVideo(vid);
  }
  const handleSubmitVideo=()=>{
    console.log(uploadVideo)
  }

  if (!user.token) return <Navigate to='/login'/>
  return (
    <div>
      <div className="heading">
        <h3>My Videos</h3>
      </div>
      {/* MAKE THIS PART PRETTY */}
      <div>
        {Object.keys(uploadVideo).length>0?
        <form>
          <div>
            <label>Title</label>
          </div>
          <div>
            <input type="text" placeholder="Give Your Video A Title" onChange={(e)=>handleTitleVideo(e)}/>
          </div>            
          <div>
            <label>File</label>
          </div>            
          <div>            
            <input disabled value={uploadVideo.filename}></input>  
          </div>
          <div>
            <button onClick={()=>handleSubmitVideo}>Publish</button>  
          </div>
        </form>
        :
        <button  onClick={showUploadWidget}>Upload Video</button>
        }
      </div>
      {/* MAKE THIS PART PRETTY */}

      {/* Modal gallery */}
      <section className>
        {/* Section: Images */}
        <section className>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
                  className="w-100"
                />
                <a
                  href="#!"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal1"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg"
                  className="w-100"
                />
                <a
                  href="#!"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal2"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Images */}
        {/* Section: Modals */}
        <section className>
          {/* Modal 1 */}
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModal1Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/A3PDXmYoF5U"
                    title="YouTube video"
                    allowFullScreen
                  />
                </div>

                <div className="row justify-content-center">
                  <div className="text-center py-2 col-2">
                    {/* <button type="button" className="btn btn-success">
                      <i
                        style={{ marginRight: 5 }}
                        class="fas fa-thumbs-up"
                      ></i>
                      Like
                    </button> */}
                  </div>

                  <div className="text-center py-2">
                    <button type="button" className="btn btn-danger">
                      <i
                        style={{ marginRight: 5 }}
                        class="fas fa-thumbs-down"
                      ></i>
                      Delete
                    </button>
                  </div>
                </div>

                <div className="text-center py-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 2 */}
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModal2Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/wTcNtgA6gHs"
                    title="YouTube video"
                    allowFullScreen
                  />
                </div>
                <div className="text-center py-3">
                  <div className="row justify-content-center">
                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-success">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-up"
                        ></i>
                        Like
                      </button>
                    </div>

                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-danger">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-down"
                        ></i>
                        Dislike
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 3 */}
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex={-1}
            aria-labelledby="exampleModal3Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowFullScreen
                  />
                </div>
                <div className="text-center py-3">
                  <div className="row justify-content-center">
                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-success">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-up"
                        ></i>
                        Like
                      </button>
                    </div>

                    <div className="text-center py-2 col-2">
                      <button type="button" className="btn btn-danger">
                        <i
                          style={{ marginRight: 5 }}
                          class="fas fa-thumbs-down"
                        ></i>
                        Dislike
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Modals */}
      </section>
      {/* Modal gallery */}
    </div>
  );
};

export default MyVideos;
