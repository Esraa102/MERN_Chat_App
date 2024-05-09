/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { UseAuthContext } from "./AuthContext";
import io from "socket.io-client";
const SocketContext = createContext(null);

export const SocketContextProvider = ({ children }) => {
  const { user } = UseAuthContext();
  const [socket, setSocket] = useState(null); //socket connection
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    if (user) {
      const connection = io("https://mern-chat-app-c4jv.onrender.com", {
        query: {
          userId: user._id,
        },
      });
      setSocket(connection);
      socket?.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket?.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export const UseSocketContext = () => useContext(SocketContext);
