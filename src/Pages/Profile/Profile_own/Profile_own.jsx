import Profile_left from "./componemt/Profile_left";
import Profile_mid from "./componemt/Profile_mid";
import Profile_right from "./componemt/Profile_right";
import "./Profile_own.css";
import { useLocation } from "react-router-dom";

const Profile_own = () => {
  const location = useLocation();
  const { state } = location;
  
  return (
    <div className="profile_own-container">
      <div className="left-pro">
        <Profile_left />
      </div>
      <Profile_mid profile={state.pic} name={state.name} add={state.add} follow = {state.follow} setfollow={state.setfollow} />
      <div className="right-pro">
        <Profile_right />
      </div>
    </div>
  );
};

export default Profile_own;
