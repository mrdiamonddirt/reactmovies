import React from "react";
import { useState } from "react";
import {getAllUsers} from '../utils'

const AllUsers = ({ setter }) => {
    
    const [users, setUsers] = useState([]); // this is the state of the users
    
        const submitHandler = async (e) => { //e is the event
            e.preventDefault();
            console.log("submitting")
            console.log(users)
            // console.log(email)
            await getAllUsers(users, setter)
        }
    return (
       <>
        <button onClick={submitHandler}>
        Get All Users
        </button>
       </>
    )
};

export default AllUsers;