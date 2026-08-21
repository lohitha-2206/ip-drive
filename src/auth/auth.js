const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/auth";

// Set authentication token and user info
export const setAuth = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("username", user?.username || "");
};

// Get authentication token
export const getToken = () => localStorage.getItem("token");

// Get username
export const getUsername = () => localStorage.getItem("username");

// Get user info
export const getUser = () => {
  const token = getToken();
  const userJson = localStorage.getItem("user");
  if (!token || !userJson) return null;

  try {
    return { token, user: JSON.parse(userJson) };
  } catch {
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = () => !!getToken();

// Logout - clear all auth data
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("user");
  localStorage.removeItem("loggedInUsername");
};

const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const parseResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
};

// Signup API call
export const signup = async (username, email, password) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return parseResponse(response);
};

// Login API call
export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return parseResponse(response);
};

export const verifyAuth = async () => {
  const response = await fetch(`${API_BASE_URL}/verify`, {
    headers: {
      ...authHeaders(),
    },
  });
  return parseResponse(response);
};

export const fetchMe = async () => {
  const response = await fetch(`${API_BASE_URL}/me`, {
    headers: {
      ...authHeaders(),
    },
  });
  return parseResponse(response);
};
