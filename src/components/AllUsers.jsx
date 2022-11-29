import React from "react";
import { useState } from "react";
import {getAllUsers} from '../utils'

const AllUsers = ({ setter }) => {
    
    const [users, setUsers] = useState([]); // this is the state of the users
    const [changingUsername, setChangingUsername] = useState(false); // this is the state of the changing username
    
        const submitHandler = async (e) => { //e is the event
            e.preventDefault();
            console.log("submitting")
            getAllUsers(setUsers)
            console.log('console log of users', users)
            // console.log(email)
            await getAllUsers(setter)
        }

    return (
       <>
        <button onClick={submitHandler}>
        Get All Users
        </button>
        <div className="UserDiv">
        {
            users?
            Object.keys(users).map((user) => {
                return (
                    <div key={user}>
                        <p>{users[user].name}</p>
                        <button>Change Username</button>
                        <p>{users[user].email}</p>
                        <button>Change Email</button>
                    </div>
                )
            })
            :
            <h3> No Users </h3>

        }    
        </div>         
       </>
    )
};

export default AllUsers;