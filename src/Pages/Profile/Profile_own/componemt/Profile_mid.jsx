import Follow from "../../../component/Follow"
import UnFollow from "../../../component/UnFollow"
import { useState } from "react"

const Profile_mid = ({pic , name , add , follow }) => {
  const [followw , setFolloww] = useState(follow)
  return (
    <div className="profile-mid">
      <div className="profile">
        <img src={pic} className="profile-pic"></img>
        <div className="bg-profile"></div>
        <div className="profilefordetail">
          <div className="leftleft">
            <div className="name">{name}</div>
            <div className="addname">@{add}</div>
          </div>
          <div className="rightright" onClick={()=>setFolloww(!followw)}>
            {followw ? <Follow /> : <UnFollow />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile_mid