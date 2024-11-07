import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Content from "./Content";
import { useState } from "react";

const HomeMid = () => {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [like , setLike] = useState(false);

  const post = () => {
    if (!text) return;

    setPosts([...posts, { text, id: crypto.randomUUID() }]);
    setText("");
  };

  return (
    <div className="mid">
      <div className="home-text">
        <h1>HOME</h1>
      </div>
      <div className="mid-post">
        <div className="left-post">
          <img
            className="user-img"
            src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHWM539yjmOZ8m77GujEFxQ~xkua5ICdaWKtbkwfkfoOmZMuAcRdObcC69NoOdlU5vp2JonV2L7xUY53Ir4S7kSNtO49cd1gKYjPoNeBiW4YBlTZr2iP6tv4LMOSMEeERCqG4UCOghJ2JXooqN0ca-G1Dt2gEu9w83I~43IIYsR5ZE94iZ00zDdN9IhjCQ2c47U-Sj-6~5RGYgbizDf8usk2H-GascnRsb6QT4yy1O1Lk7jMxFt7vpiFdJpXEE2M5l3CSjJJ2SkLF94~A2qjSPoJON2fNplvycj0IaFpE7ftL6o4t23ipgYlDTsp9DuZ9~LfOZ0a8Pqk1dpdtXh0Mw__"
          />
        </div>
        <div className="centre-post">
          <textarea
            placeholder="Text something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="right-post">
          <FontAwesomeIcon
            className="img-icon"
            icon={faImage}
            size="xl"
            style={{ color: "#675ce7" }}
          />
          <FontAwesomeIcon
            className="video-icon"
            icon={faVideo}
            size="xl"
            style={{ color: "#675ce7" }}
          />
          <button className="post-but" onClick={post}>
            Post!
          </button>
        </div>
      </div>
      {posts.map((posts) => {
        return <Content key={posts.id} post={posts} />;
      })}
    </div>
  );
};

export default HomeMid;
