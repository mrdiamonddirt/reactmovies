import React from "react";
// import { connect } from 'react-redux';
import { useState } from "react";

const Login = ({ setter }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(username)
        console.log(email)
        console.log(password)
        // const user = {
        //     username,
        //     email,
        //     password
        // }
    }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
