import React from 'react'

const PostCard = () => {
    return (
      // <div key={post.id} className="card my-3"> this is what it will look like once we can pass the props
      <div className="card my-3">
        <div className="card-header">
          <Link to="/">
            Post title goes here, link goes to the id of a specific post
          </Link>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>post content here</p>
            <footer className="blockquote-footer">
              Author goes here
              <cite title="Source Title">Date created goes here</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    );
}

export default PostCard
