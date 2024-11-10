import React, { useState } from "react";
import Follow from "../../../component/Follow";
import UnFollow from "../../../component/UnFollow";
import Content from "../../../home/component/Content" 
const Profile_mid = ({ picture, name, add, follow, setFollow }) => {

  const posts = [
    {
      id: "1",
      text: "This is the first post",
      image: "/ICP/icp1.png",
      video: null,
    },
    {
      id: "2",
      text: "This is the second post with a video",
      image: null,
      video: "/ICP/icpvideo.mp4",
    },
    {
      id: "3",
      text: "This is the third post with both image and video",
      image: "/ICP/icp2.png",
      video: "/ICP/icpvideo.mp4",
    },
  ];

  return (
    <div className="profile-mid">
      <div className="profile">
        <img src={picture} className="profile-pic" alt={name} />
        <div className="bg-profile"></div>
        <div className="profilefordetail">
          <div className="leftleft">
            <div className="name">{name}</div>
            <div className="addname">{add}</div>
          </div>
          <div className="rightright" onClick={() => setFollow(!follow)}>
            {follow ? <Follow /> : <UnFollow />}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {posts.map((post) => (
          <Content key={post.id} post={post} deletePost={() => {}} name={name} add={add} pic={picture}/>
        ))}
      </div>
    </div>
  );
};

export default Profile_mid;
