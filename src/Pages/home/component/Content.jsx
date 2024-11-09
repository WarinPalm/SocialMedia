import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HeartSolid from "./HeartSolid";
import HeartRegulat from "./HeartRegulat";

const Content = ({ post,deletePost }) => {
  const [like, setLike] = useState(false);
  
  return (
    <div className="content-container mb-4 border p-3 rounded">
      <div className="d-flex align-items-center">
        <div className="user-pic">
          <img
            src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHWM539yjmOZ8m77GujEFxQ~xkua5ICdaWKtbkwfkfoOmZMuAcRdObcC69NoOdlU5vp2JonV2L7xUY53Ir4S7kSNtO49cd1gKYjPoNeBiW4YBlTZr2iP6tv4LMOSMEeERCqG4UCOghJ2JXooqN0ca-G1Dt2gEu9w83I~43IIYsR5ZE94iZ00zDdN9IhjCQ2c47U-Sj-6~5RGYgbizDf8usk2H-GascnRsb6QT4yy1O1Lk7jMxFt7vpiFdJpXEE2M5l3CSjJJ2SkLF94~A2qjSPoJON2fNplvycj0IaFpE7ftL6o4t23ipgYlDTsp9DuZ9~LfOZ0a8Pqk1dpdtXh0Mw__"
            alt="User"
            className="rounded-circle"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="ms-2">
          <div className="user-name">Anly Sambath</div>
          <div className="user-username">@anly</div>
        </div>
        <FontAwesomeIcon icon={faTrash}className="ms-auto me-3 mb-2" size="xl" onClick={() => deletePost(post.id)} />
      </div>
      <div className="centre-content mt-2">
        <p>{post.text}</p>
        {post.image && <img src={post.image} alt="Post" className="img-fluid rounded mb-3" />}
        {post.video && (
          <video controls className="w-100 rounded mb-3">
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {like ? (
          <a onClick={() => setLike(!like)}>
            <HeartSolid />
          </a>
        ) : (
          <a onClick={() => setLike(!like)}>
            <HeartRegulat />
          </a>
        )}
    </div>
  );
};

export default Content;
