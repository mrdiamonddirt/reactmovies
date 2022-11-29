import React from "react";
import { useState } from "react";
import {updateUser} from '../utils'

const Updateuser = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     console.log("submitting")
    //     console.log(name, email
    //     )
    //     await updateUser(name, email, password)
    // }

    const updateUserName = async (e) => {
        e.preventDefault();
        console.log("submitting")
        await updateUser(user , 'name', name) 
    }

    const updateUserEmail = async (e) => {
        e.preventDefault();
        console.log("submitting")
        await updateUser(user , 'email', email)
    }

    const updateUserPassword = async (e) => {
        e.preventDefault();
        console.log("submitting")
        await updateUser(user , 'password', password)
    }

    return (
        <div>
            <form onSubmit={updateUserName}>
                <label htmlFor="name">Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type="submit">Update Name</button>
            </form>
            <form onSubmit={updateUserEmail}>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Update Email</button>
            </form>
            <form onSubmit={updateUserPassword}>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Update Password</button>
            </form>
        </div>
    )

}

export default Updateuser;