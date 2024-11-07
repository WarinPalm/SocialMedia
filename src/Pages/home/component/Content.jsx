import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HeartSolid from "./HeartSolid";
import HeartRegulat from "./HeartRegulat";

const Content = ({ post }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="content-container" onDoubleClick={() => setLike(true)}>
      <div className="top-content">
        <div className="user-pic">
          <img src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHWM539yjmOZ8m77GujEFxQ~xkua5ICdaWKtbkwfkfoOmZMuAcRdObcC69NoOdlU5vp2JonV2L7xUY53Ir4S7kSNtO49cd1gKYjPoNeBiW4YBlTZr2iP6tv4LMOSMEeERCqG4UCOghJ2JXooqN0ca-G1Dt2gEu9w83I~43IIYsR5ZE94iZ00zDdN9IhjCQ2c47U-Sj-6~5RGYgbizDf8usk2H-GascnRsb6QT4yy1O1Lk7jMxFt7vpiFdJpXEE2M5l3CSjJJ2SkLF94~A2qjSPoJON2fNplvycj0IaFpE7ftL6o4t23ipgYlDTsp9DuZ9~LfOZ0a8Pqk1dpdtXh0Mw__" />
        </div>
        <div className="user-info">
          <div className="user-name">Anly Sambath</div>
          <div className="user-username">@anly</div>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className="faEllipsis" size="xl"/>
      </div>
      <div className="centre-content">{post.text}</div>
      <div className="botton-content">
        {like ? (
          <a onClick={() => setLike(!like)}>
            <HeartSolid />
          </a>
        ) : (
          <a onClick={() => setLike(!like)}>
            <HeartRegulat />
          </a>
        )}
        <FontAwesomeIcon
          className="share-icon"
          icon={faShare}
          size="2xl"
          style={{ color: "#675ce7" }}
        />
      </div>
    </div>
  );
};

export default Content;
