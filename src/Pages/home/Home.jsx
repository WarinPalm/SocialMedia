import "./home.css";
import HomeLeft from "./component/HomeLeft";
import HomeMid from "./component/HomeMid";
import HomeRight from "./component/HomeRight";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <HomeLeft />
        <HomeMid />
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
