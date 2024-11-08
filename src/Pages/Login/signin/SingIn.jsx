import "./signin.css";
import bg from "../../../../public/social media platform_fix.png";

const SingIn = () => {
  return (
    <div className="singin-container">
      <div className="bg-singIn">
        <img src={bg} alt="bg" />
      </div>
      <form className="sing-in-put">
        <h1>SING IN</h1>
        <div className="inputder">
          <label>Email Address</label>
          <input name="email" type="email" required/>
          <label>Password</label>
          <input name="password" type="password" required/>
          <button className="submit" type="submit">CONTINUE</button>
          <p>Don’t have an account yet?</p>
          <a href="">Sing-Up</a>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
