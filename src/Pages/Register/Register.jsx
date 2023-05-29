import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/signUp", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
            <h2>Create an Account</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            {err && <p style={{ color: "red" }}>{err}</p>}
            <button type="submit" className="btn">
              Sign Up
            </button>
            <div className="links">
              <Link className="forgetPassword" to={"./forget-password"}>
                Forget Password?
              </Link>
              <Link className="forgetPassword" to={"/sign-in"}>
                Already has an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
