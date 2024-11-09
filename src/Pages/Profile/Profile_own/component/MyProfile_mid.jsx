import React from 'react'

function MyProfile_mid({ picture, name, add}) {
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
            </div>
          </div>
        </div>
      );
}

export default MyProfile_mid