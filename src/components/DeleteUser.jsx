import React from "react";

import { deleteUser} from '../utils'

const DeleteUser = ({ user }) => {
    
        const deleteAccount = async () => {
            await deleteUser(user)
            let name = 'jwt_token'
            document.cookie = name + '=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    
        return (
            <div>
                <form onSubmit={deleteAccount}>
                    <button type="submit">Delete Account</button>
                </form>
            </div>
        )
    

}

export default DeleteUser;