import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await login(data);
      navigate("/");
    } catch (err) {
      if (err) {
        setErr(err.response.data);
      }
    }
  };

  return (
    <div className="container">
      <div className="type">
        <div className="left-container">
          <div className="left-content">
            <h1>Janerm Social App</h1>
            <p>
              Connect with the people you know around <br /> the world!
            </p>
          </div>
        </div>
        <div className="right-container">
          <form className="formType" onSubmit={handleForm}>
            <h2>Sign In</h2>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {err && <p style={{ color: "red" }}>{err}</p>}
            <button type="submit" className="btn">
              Sign In
            </button>
            <div className="links">
              <Link className="forgetPassword" to={"./forget-password"}>
                Forget Password?
              </Link>
              <Link to={"/sign-up"}>Create a New Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
