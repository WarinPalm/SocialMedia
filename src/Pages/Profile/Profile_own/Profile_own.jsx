import Profile_left from "./component/Profile_left";
import Profile_mid from "./component/Profile_mid";
import Profile_right from "./component/Profile_right";
import "./Profile_own.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import HomeRight from "../../home/component/HomeRight";

const Profile_own = () => {
  const location = useLocation();
  const { pic, name, add, follow, setfollow } = location.state || {};

  const [followStatus, setFollowStatus] = useState(follow);

  return (
    <div className="profile_own-container home-content">
      <Profile_left />
      <Profile_mid 
        picture={pic} 
        name={name} 
        add={add} 
        follow={followStatus} 
        setFollow={setFollowStatus} 
      />
      <Profile_right />
    </div>
  );
};

export default Profile_own;
