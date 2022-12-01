import React from "react";
import { useState } from "react";
import { Updateuser, deleteuser } from "../utils";

const UpdateUser = ({ user }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const submitHandler = async (e) => {
  //     e.preventDefault();
  //     console.log("submitting")
  //     console.log(name, email
  //     )
  //     await updateUser(name, email, password)
  // }

  const updateUserName = async (e) => {
    e.preventDefault();
    console.log("updating Name");
    await Updateuser(user, "name", name);
    console.log(user);
  };

  const updateUserEmail = async (e) => {
    e.preventDefault();
    console.log("Updating Email");
    await Updateuser(user, "email", email);
  };

  const updateUserPassword = async (e) => {
    e.preventDefault();
    console.log("updating Password");
    await Updateuser(user, "password", password);
  };

  return (
    <div>
      <form onSubmit={updateUserName}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Update Name</button>
      </form>
      <form onSubmit={updateUserEmail}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update Email</button>
      </form>
      <form onSubmit={updateUserPassword}>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdateUser;
