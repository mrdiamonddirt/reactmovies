import { writeCookie } from "../common";

export const loginUser = async (name, email, password, setter) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_REST_API_URL}loginUser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            }
        );

        const data = await response.json();
        console.log(data);
        setter(data.user);
        writeCookie("jwt_token", data.token, 7);
        writeCookie("username", name, 7);
    } catch (error) {
        console.log(error);
    }

    // create crud functions for users

    // add a delete own user function
};

export const findUser = async (cookie) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_REST_API_URL}loginUser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookie}`,
                },
            }
        );

        const data = await response.json();
        console.log(data);
        return data.name;
    } catch (error) {
        console.log(error);
    }
};
// add a new user to the database function
export const registerUser = async (name, email, password, setter) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_REST_API_URL}addUser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
        setter(data.name);
    } catch (error) {
        console.log(error);
    }
};

// get all users from the database
export const getAllUsers = async (setter) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_REST_API_URL}getUsers`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        console.log(data);
        setter(data.data.users);
    } catch (error) {
        console.log(error);
    }
};

export const Updateuser = async (user, key, value) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_REST_API_URL}UpdateUser`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: user,
                    key: key,
                    value: value,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (user) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_REST_API_URL}deleteUser`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: user,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
