import Follow from "../../component/Follow";
import { useState } from "react";
import UnFollow from "../../component/UnFollow";
import { Link } from "react-router-dom";

const Recommended = ({ pic, name, add }) => {
  const [follow, setFollow] = useState(true);
  const state = { pic, name, add , follow };

  return (
    <div className="Recommended" >
      <Link className="recomcon"  to={"../myprofile"} state={state}>
        <div className="Recommended-img">
          <img src={pic} alt={name} />
        </div>
        <div className="add-name">
          <div className="name">{name}</div>
          <div className="username">@{add}</div>
        </div>
      </Link>
      <a className="follow-container" onClick={() => setFollow(!follow)}>
        {follow ? <Follow /> : <UnFollow />}
      </a>
    </div>
  );
};

export default Recommended;
