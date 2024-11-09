import "./signin.css";
import bg from "/social media platform_fix.png";
import { Link, useNavigate } from "react-router-dom";

const SingIn = () => {
  const navigate = useNavigate();

  // login with Plug Wallet
  const loginWithPlugWallet = async () => {
    if (window.ic && window.ic.plug) {
      try {
        // check wallet 
        const connected = await window.ic.plug.isConnected();
        if (!connected) {
          // If not connect go to connect
          await window.ic.plug.requestConnect();
        }

        navigate("../home");

      } catch (error) {
        console.error("Connect failed", error);
      }
    } else {
      alert("You don't have Plug Wallet. Please download Plug Wallet.");
    }
  };

  return (
    
    <div className="singin-container">
      <div className="bg-singIn">
        <img src={bg} alt="bg" />
      </div>
      <form className="sing-in-put">
        <h1>SIGN IN</h1>
        <div className="inputder">
          <label>Email Address</label>
          <input name="email" type="email" required />
          <label>Password</label>
          <input name="password" type="password" required />
          
          <button className="submit w-100 mt-3" type="submit">CONTINUE</button>
          
          <button
            className="submit-plug w-100 mt-4 mb-3"
            type="button"
            onClick={loginWithPlugWallet}
          >
            Sign-In with Plug-Wallet
          </button>
          <p>Don’t have an account yet?</p>
          <Link to={'../signup'}>Sign-Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
