import React from 'react'
import Profile_left from "./component/Profile_left";
import MyProfile_mid from './component/MyProfile_mid';
import Profile_right from "./component/Profile_right";
import "./Profile_own.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Content from '../../home/component/Content';
function MyProfile() {
    const location = useLocation();
    const { pic, name, add } = location.state || {};

    return (
        <div className="profile_own-container home-content">
            <Profile_left />
            <MyProfile_mid 
                picture={pic} 
                name={name} 
                add={add} 
            />
            <Profile_right />
            
        </div>
    

    );
}

export default MyProfile;
