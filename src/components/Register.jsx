import React from "react";
import { useState } from "react";
import {registerUser} from '../utils'

const Register = ({ setter }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
        const submitHandler = async (e) => { //e is the event
            e.preventDefault();
            console.log(username)
            console.log(email)
            console.log(password)
            await registerUser(username, email, password, setter)
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

export default Register;