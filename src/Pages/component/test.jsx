import React, { useEffect, useState } from 'react';
import { profileInfo } from './profileInfo';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Object.values(profileInfo));
  }, []);

  return (
    <div>
      {data.map((profile, index) => (
        <div key={index}>
          <h2>{profile.name}</h2>
          <img src={profile.picture} alt={profile.name} />
          <p>Username: {profile.add}</p>
          <p>Status Follow: {profile.statusFow}</p>
        </div>
      ))}
    </div>
  );
}

export default Test;
