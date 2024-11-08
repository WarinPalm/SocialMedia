import Profile_left from "./componemt/Profile_left";
import HomeRight from "../../home/component/HomeRight";
import "./Profile_own.css";


const Profile_own = () => {
  return (
    <div className="profile_own-container">
      <Profile_left />
      <HomeRight />
    </div>
  );
};

export default Profile_own;
