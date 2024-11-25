import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add methods for specific API calls
export const checkLogin = (loginData) => {
  return apiClient.post("/login", loginData);
};

export const addComplaint = (complaint) => {
    return apiClient.post("/complaint",complaint)
}

export const getData = () => {
    return apiClient.get("/complaint");
};