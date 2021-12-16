import React from "react";

const PostDetail = () => {
  return (
    <div>
      <div className="card my-3">
        <div className="card-header">Title of post here</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>post content here</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">date created here</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
