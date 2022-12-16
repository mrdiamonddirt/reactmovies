import React from "react";
import { getCookie } from "./common";
const { io } = require("socket.io-client");

export const SocketContext = React.createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = React.useState(null);

    React.useEffect(() => {
        // where is the server which socket you want to connect to hosted?
        // const socket = io();
        const socket = io("http://localhost:5001", {
            withCredentials: false,
            auth: {
                token: getCookie("jwt_token"),
                username: getCookie("username"),
            },
        });
        // connect to the socket io socket
        socket.on("connect", () => {
            console.log("connected to socket io");
            console.log("connected:", socket.connected);
            // send a message to the server
            // get username and send to server
            socket.emit("message", "hello from the client");
            // socket.emit("message", "hello from the client", (response) => {
            //     console.log("response from server:", response);
            // });
        });
        // socket.emit("message", "hello from the client", (response) => {
        //     console.log("response from server:", response);
        // });
        setSocket(socket);
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
