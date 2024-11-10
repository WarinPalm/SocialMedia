import { useEffect, useState } from "react";
import Recommended from "./Recommended";
import { profileInfo } from "../../component/profileInfo";

const HomeRight = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Object.values(profileInfo));
  }, []);

  return (
    <div className="right">
      <h1>Recommended</h1>
      {data.map((person, index) => (
        <Recommended 
          key={index}
          currentName={person.name} 
          currentPicture={person.picture} 
          currentAdd={person.add} 
          currentStatus={person.statusFow} 
        />
      ))}
    </div>
  );
};

export default HomeRight;
