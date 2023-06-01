import React, { useRef, useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([
    { text: "Email no puede ser vacio", isError: false },
    { text: "Password no puede ser vacio", isError: false },
  ]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigation = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  // const passwordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  const signInHandler = () => {
    if (email.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      const newErrors = [...errors];
      newErrors[0].isError = true;
      setErrors(newErrors);
      return;
    }

    if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      const newErrors = [...errors];
      newErrors[1].isError = true;
      setErrors(newErrors);
      return;
    }

    onLogin();
    navigation("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h4 className={`${email.length === 0 && "red-text"}`}>
          ¡Bienvenidos a Book Champions!
        </h4>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Email"
            type="email"
            onChange={emailChangeHandler}
            value={email}
            ref={emailRef}
          />
        </div>
        {errors[0].isError && <p>{errors[0].text}</p>}
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
        </div>
        {errors[1].isError && <p>{errors[1].text}</p>}
        <button onClick={signInHandler} className="signin-button" type="button">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Login;