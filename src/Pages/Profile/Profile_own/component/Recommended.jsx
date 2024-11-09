import Follow from "../../component/Follow";
import { useState } from "react";
import UnFollow from "../../component/UnFollow";
import { Link } from "react-router-dom";

const Recommended = ({ currentName, currentPicture, currentAdd, currentStatus }) => {
  const [follow, setFollow] = useState(currentStatus);

  return (
    <div className="Recommended">
      <Link 
        className="recomcon" 
        to="../myprofile"
        state={{
          pic: currentPicture,
          name: currentName,
          add: currentAdd,
          follow: follow,
        }}
      >
        <div className="Recommended-img">
          <img src={currentPicture} alt={currentName} />
        </div>
        <div className="add-name">
          <div className="name">{currentName}</div>
          <div className="username">@{currentAdd}</div>
        </div>
      </Link>
      <a className="follow-container" onClick={() => setFollow(!follow)}>
        {follow ? <Follow /> : <UnFollow />}
      </a>
    </div>
  );
};

export default Recommended;
