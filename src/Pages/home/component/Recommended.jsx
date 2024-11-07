
const Recommended = ({ pic , name , add }) => {
  return (
    <div className="Recommended">
      <div className="Recommended-img">
        <img src={pic} alt={name}/>
      </div>
      <div className="add-name">
        <div className="name">{name}</div>
        <div className="username">@{add}</div>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
};

export default Recommended;
