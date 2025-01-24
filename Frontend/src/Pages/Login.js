import React, { useState } from "react";
import logo from "../assets/auth_Assets/logo";
import person_icon from "../assets/auth_Assets/person_icon";

const Login = () => {
  const [state, setState] = useState("sign up");
  return (
    <div
      className="flex items-center justify-center min-h-screen px-6
        sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400"
    >
      <img
        src={logo}
        alt=""
        className="absolute left-5 sm:left-20
        top-5 w-28 sm:w-32 cursor-pointer"
      />
      <div>
        <h2>{state === "Sign Up" ? "Create Account" : "Login"}</h2>
        <p>
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account!"}
        </p>
        <form>
          <div>
            <img src={person_icon} alt="" />
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
