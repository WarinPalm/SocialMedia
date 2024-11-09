import Follow from "../../../component/Follow";
import UnFollow from "../../../component/UnFollow";
import { useState } from "react";

const Profile_mid = ({ picture, name, add, follow, setFollow }) => {
  return (
    <div className="profile-mid">
      <div className="profile">
        <img src={picture} className="profile-pic" alt={name} />
        <div className="bg-profile"></div>
        <div className="profilefordetail">
          <div className="leftleft">
            <div className="name">{name}</div>
            <div className="addname">@{add}</div>
          </div>
          <div className="rightright" onClick={() => setFollow(!follow)}>
            {follow ? <Follow /> : <UnFollow />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_mid;
