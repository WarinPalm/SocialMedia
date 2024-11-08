import "../signin/signin.css";
import bg from "../../../../public/social media platform_fix.png";

const SingUp = () => {
  return (
    <div className="singin-container">
      <div className="bg-singIn">
        <img src={bg} alt="bg" />
      </div>
      <form className="sing-in-put">
        <h1>SING UP</h1>
        <div className="inputder">
          <label>Username</label>
          <input name="username" type="usename" required />
          <label>Email Address</label>
          <input name="email" type="email" required />
          <label>Password</label>
          <input name="password" type="password" required />
          <label>Re-Enter password</label>
          <input name="re-password" type="password" required />
          <button className="submit" type="submit">
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
