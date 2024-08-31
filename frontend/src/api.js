// api.js
import axios from "axios";

const apiUrl = "https://your-backend-url.com/api"; // replace with your backend URL

const api = axios.create({
  baseURL: apiUrl,
});

export const getPopularProducts = async () => {
  try {
    const response = await api.get("/products/popular");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCustomerReviews = async () => {
  try {
    const response = await api.get("/reviews");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Add more API calls as needed
