import "./signin.css";
import bg from "/public/social media platform_fix.png";
import { Link } from "react-router-dom";

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
          <button className="submit w-100" type="submit"><Link className="text-decoration-none"to="../">CONTINUE</Link></button>
          <p>Don’t have an account yet?</p>
          <Link to={'../signup'}>Sign-Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
