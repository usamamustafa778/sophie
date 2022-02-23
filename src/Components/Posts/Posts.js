import React from "react";
import "./Posts.css";

function Posts() {
  return (
    <div className="posts">
      <div className="posts__header">
        <h2>Posts</h2>
        <button className="btn__newPost">New Post</button>
      </div>
      <div className="posts__links">
        <div className="post">
          <img src="/d1.png" alt="" className="post__img" />
          <div className="post__link">
            <div>
              <h3>Curious Puppy</h3>
              <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
          </div>
        </div>
        <div className="post">
          <img src="/d2.png" alt="" className="post__img" />
          <div className="post__link">
            <div>
              <h3>Cute Smillind Dog</h3>
              <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
          </div>
        </div>
        <div className="post">
          <img src="/d3.png" alt="" className="post__img" />
          <div className="post__link">
            <div>
              <h3>Cute Jack Russel</h3>
              <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
