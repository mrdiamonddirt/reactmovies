import { writeCookie } from "../common";

export const loginUser = async (name, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/loginUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            }),
    
        });

        const data = await response.json();
        console.log(data)
        setter(data.name)
        writeCookie("jwt_token", data.token, 7)

    } catch (error) {
        console.log(error)
        
    }

    // create crud functions for users
    
    // add a delete own user function

    }

    export const findUser = async (cookie) => {
        try {
            const response = await fetch("http://localhost:5001/findUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${cookie}`
                    },
            });
    
            const data = await response.json();
            console.log(data)
            return (data.username)
        } catch (error) {
            console.log(error)
            
        }
    }
// add a new user to the database function
export const registerUser = async (name, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            }),
        })
        const data = await response.json();
        console.log(data)
        setter(data.name)
    } catch (error) {
        console.log(error)
    }    
}

// get all users from the database
export const getAllUsers = async (setter) => {
    try {
        const response = await fetch("http://localhost:5001/getUsers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            }
        })
        const data = await response.json();
        console.log(data)
        setter(data.data.users)

    } catch (error) {
        console.log(error)
    }
}