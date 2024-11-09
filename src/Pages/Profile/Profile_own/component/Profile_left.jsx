import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import { Link } from "react-router-dom";

const Profile_left = () => {
  const pic = "/ICP/1.png";
  const name = "Mr.ICP Internet";
  const add = "@ICP_USER";

  return (
    <div className="left">
      <div className="left-fixed">
        <div className="logo">
          <h1>SOMETHING</h1>
        </div>
        <div className="home-sidebar-container">
          <div className="current-user">
            <div className="img-and-name">
              <div className="img-user">
                <img src={pic} alt="User Profile"/>
              </div>
              <div className="about-user">
                <Link
                  style={{ textDecoration: "none" }} 
                  to="/myprofile" 
                  state={{ pic, name, add}}
                >
                  <div className="about-top">{name}</div>
                </Link>
                <div className="about-bottom">{add}</div>
              </div>
            </div>
            <Link to="../signin" style={{ textDecoration: "none" }}>
              <div className="logout">
                <a>Log-out</a>
              </div>
            </Link>
          </div>
          <div className="menu-container">
            <Link to="../home" style={{textDecoration:"None"}}>
              <div className="menu-home-container"> 
              
                <div className="home">
                  <div>
                    <FontAwesomeIcon
                      icon={faHouse}
                      size="2xl"
                      style={{ color: "#675ce7" }}
                    />
                  </div>
                  <div className="home-text">HOME</div>
                </div>
              
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_left;
