import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Profile Img */}
      <div className="user__profile">
        <img src="/user.png" alt="" />
      </div>

      {/* About User */}
      <div className="user">
        <div className="username">
          <h2>Pomerini</h2>
          <img src="/edit.svg" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
          provident dignissimos quasi, quas aperiam ea fuga voluptate vero,
          explicabo et, quisquam quam animi voluptatum accusantium illum ratione
          esse ad.
        </p>
      </div>

      <br />
      {/* Buttons */}
      <button className="sidebarbtn btn-blue">Logout</button>
      <br />
      <button className="sidebarbtn btn-black-outlined">Edit Profile</button>

      {/* Edit Profile Button */}
      {/* UPload New Post */}
    </div>
  );
}

export default Sidebar;
