import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import Content from "./Content";
import { useState } from "react";

const HomeMid = () => {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null); 
  const [video, setVideo] = useState(null); 

  const post = () => {
    if (!text && !image && !video) return; 

    setPosts([
      ...posts,
      { text, image, video, id: crypto.randomUUID() }
    ]);
    setText("");
    setImage(null); 
    setVideo(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideo(videoURL);
    }
  };
  
  const deletePost = (id)=>{
    setPosts((posts.filter(item => item.id !== id)))
  }
  return (
    <div className="mid container py-4">
      <div className="home-text text-center mb-4">
        <h1>HOME</h1>
      </div>
      <div className="row align-items-center">
        <div className="col-1 me-3 mb-3">
          <img
            className="user-img rounded-circle ms-2"
            src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHWM539yjmOZ8m77GujEFxQ~xkua5ICdaWKtbkwfkfoOmZMuAcRdObcC69NoOdlU5vp2JonV2L7xUY53Ir4S7kSNtO49cd1gKYjPoNeBiW4YBlTZr2iP6tv4LMOSMEeERCqG4UCOghJ2JXooqN0ca-G1Dt2gEu9w83I~43IIYsR5ZE94iZ00zDdN9IhjCQ2c47U-Sj-6~5RGYgbizDf8usk2H-GascnRsb6QT4yy1O1Lk7jMxFt7vpiFdJpXEE2M5l3CSjJJ2SkLF94~A2qjSPoJON2fNplvycj0IaFpE7ftL6o4t23ipgYlDTsp9DuZ9~LfOZ0a8Pqk1dpdtXh0Mw__"
            alt="User"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-10">
          <textarea
            className="form-control text-area-post p-3"
            style={{backgroundColor :"transparent",color:"white",}}
            placeholder="Text something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="3"
          />

          {image && (
            <div className="preview-container mt-2">
              <img src={image} alt="Selected preview" className="img-fluid rounded" />
            </div>
          )}
          {video && (
            <div className="preview-container mt-2">
              <video controls className="w-100 rounded">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div className="d-flex justify-content-between w-100 ">
            <div>
              <label htmlFor="image-upload">
                <FontAwesomeIcon
                  className="img-icon mt-3"
                  icon={faImage}
                  size="xl"
                  style={{ color: "#675ce7" }}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-upload"
              />
              <label htmlFor="video-upload" className="ms-2">
                <FontAwesomeIcon
                  className="video-icon mt-3"
                  icon={faVideo}
                  size="xl"
                  style={{ color: "#675ce7" }}
                />
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                style={{ display: "none" }}
                id="video-upload"
              />
            </div>
            <div>
              <button className="btn btn-primary mt-3" onClick={post}>
                Post!
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts.map((post) => (
          <Content key={post.id} post={post} deletePost={deletePost} />
      ))}
      
    </div>
  );
};

export default HomeMid;
