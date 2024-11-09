import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import { Link } from "react-router-dom";

const Profile_left = () => {
  const pic = "https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHWM539yjmOZ8m77GujEFxQ~xkua5ICdaWKtbkwfkfoOmZMuAcRdObcC69NoOdlU5vp2JonV2L7xUY53Ir4S7kSNtO49cd1gKYjPoNeBiW4YBlTZr2iP6tv4LMOSMEeERCqG4UCOghJ2JXooqN0ca-G1Dt2gEu9w83I~43IIYsR5ZE94iZ00zDdN9IhjCQ2c47U-Sj-6~5RGYgbizDf8usk2H-GascnRsb6QT4yy1O1Lk7jMxFt7vpiFdJpXEE2M5l3CSjJJ2SkLF94~A2qjSPoJON2fNplvycj0IaFpE7ftL6o4t23ipgYlDTsp9DuZ9~LfOZ0a8Pqk1dpdtXh0Mw__";
  const name = "Anly Sambath";
  const add = "@anly";

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
            <Link to="/" style={{textDecoration:"None"}}>
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
