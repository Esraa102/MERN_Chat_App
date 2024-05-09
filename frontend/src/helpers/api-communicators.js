const baseURL = "https://mern-chat-app-c4jv.onrender.com/api/v1";

const registerUser = async (username, fullName, email, password, gender) => {
  const res = await fetch(`${baseURL}/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, fullName, email, password, gender }),
  });
  const data = await res.json();
  if (data.status === "OK") {
    console.log(data);
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

const logInUser = async (email, password) => {
  const res = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (data.status === "OK") {
    console.log(data);
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

const checkAuthStatus = async () => {
  const res = await fetch(`${baseURL}/auth/check-auth`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "OK") {
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

const logOutUser = async () => {
  const res = await fetch(`${baseURL}/auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "OK") {
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

const getUserChats = async () => {
  const res = await fetch(`${baseURL}/users`, {
    credentials: "include",
  });
  const data = await res.json();
  if (data.status === "OK") {
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

const sendMessage = async (receiverId, message) => {
  const res = await fetch(`${baseURL}/messages/send/${receiverId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  if (data.status === "OK") {
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

const getAllMessages = async (id) => {
  const res = await fetch(`${baseURL}/messages/${id}`, {
    credentials: "include",
  });
  const data = await res.json();
  if (data.status === "OK") {
    return data;
  } else {
    console.log(data);
    throw new Error(data.message);
  }
};

export {
  registerUser,
  logInUser,
  checkAuthStatus,
  logOutUser,
  getUserChats,
  sendMessage,
  getAllMessages,
};
