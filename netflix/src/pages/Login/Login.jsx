import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";


import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import "./Login.css";
import logo from "../../assets/assets/logo.png";

const Login = () => {
  const navigate=useNavigate();
  const [pagestate, setpagestate] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [response,setResponse]=useState("");

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (pagestate === "Sign Up") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        console.log("User Registered!", userCredential.user);
        toast.success("Sign Up successful")
        setpagestate("Sign In")
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User Signed In!", userCredential.user);
        toast.success("Sign Up successful")
        navigate("/Home")
      }
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  }
  
  
  
  ;

  return (
    <div className="box">
      <img src={logo} className="login-logo" alt="logo" />
      <div className="content">
        <div className="login-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="signin">
              <h1>{pagestate}</h1>
            </div>

            {pagestate === "Sign Up" && (
              <input
                className="log-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              className="log-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="log-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="signin-btn" type="submit">
              {pagestate === "Sign Up" ? "Sign Up" : "Sign In"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p className="nh">Need help?</p>
            </div>

            {pagestate === "Sign In" ? (
              <div className="state-change">
                <p>Create an Account</p>
                <p
                  className="state-changer"
                  onClick={() => setpagestate("Sign Up")}
                >
                  Sign Up
                </p>
              </div>
            ) : (
              <div className="state-change">
                <p>Already have an Account?</p>
                <p
                  className="state-changer"
                  onClick={() => setpagestate("Sign In")}
                >
                  Sign In
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
