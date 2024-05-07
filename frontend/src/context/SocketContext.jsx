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
      const socket = io("http://localhost:5000", {
        query: {
          userId: user._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
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
