export const loginUser = async (name, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:3000/loginUser", {
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

    } catch (error) {
        console.log(error)
        
    }

    // create crud functions for users
    // add a new user to the database function
    // add a delete own user function

    }