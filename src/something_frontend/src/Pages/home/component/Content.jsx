import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HeartSolid from "./HeartSolid";
import HeartRegulat from "./HeartRegulat";

const Content = ({ post, deletePost, name, add, pic}) => {
  const [like, setLike] = useState(false);
  
  return (
    <div className="post-border mb-4 p-3 rounded">
      <div className="d-flex align-items-center">
        <div className="user-pic">
          <img
            src={pic}
            alt="User"
            className="rounded-circle"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="ms-2">
          <div className="user-name">{name}</div>
          <div className="user-username">{add}</div>
        </div>
        <FontAwesomeIcon icon={faTrash}className="ms-auto me-3 mb-2" size="xl" onClick={() => deletePost(post.id)} />
      </div>
      <div className="centre-content mt-2">
        <p className="textt-post" style={{color:"white"}}>{post.text}</p>
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
