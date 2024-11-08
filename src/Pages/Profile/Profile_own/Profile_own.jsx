import Profile_left from "./componemt/Profile_left";
import Profile_mid from "./componemt/Profile_mid";
import Profile_right from "./componemt/Profile_right";
import "./Profile_own.css";

const Profile_own = () => {
  return (
    <div className="profile_own-container">
      <div className="left-pro">
        <Profile_left />
      </div>
      <Profile_mid />
      <div className="right-pro">
        <Profile_right />
      </div>
    </div>
  );
};

export default Profile_own;
