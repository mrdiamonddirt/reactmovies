import React from "react";
import { useState } from "react";
import { getAllUsers } from "../utils";
import UpdateUser from "./UpdateUser";

const AllUsers = ({ setter }) => {
  const [users, setUsers] = useState([]); // this is the state of the users
  const [changingUsername, setChangingUsername] = useState(false); // this is the state of the changing username

  const submitHandler = async (e) => {
    //e is the event
    e.preventDefault();
    console.log("submitting");
    getAllUsers(setUsers);
    console.log("console log of users", users);
    // console.log(email)
    await getAllUsers(setter);
  };

  const updateUserHandler = async () => {
    setChangingUsername(!changingUsername);
    console.log("changing username", changingUsername);
  };

  return (
    <div className="AllUsersContainer">
      <button className="buttonClass" onClick={submitHandler}>
        Get All Users
      </button>
      <div className="UserDiv">
        {users ? (
          Object.keys(users).map((user) => {
            return (
              <div key={user}>
                <p>{users[user].name}</p>
                <p>{users[user].email}</p>
                {changingUsername ? (
                  <div>
                    <UpdateUser />
                  </div>
                ) : null}
                <button className="buttonClass" onClick={updateUserHandler}>
                  Update User
                </button>
                {/* <button className="buttonClass">Change Email</button> */}
              </div>
            );
          })
        ) : (
          <h3> No Users </h3>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
