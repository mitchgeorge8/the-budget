export const login = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const logout = () => {
  return fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUser = () => {
  return fetch("/api/users/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
