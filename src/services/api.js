// src/services/api.js
import axios from 'axios';

export const fetchChats = async (page = 1) => {
  try {
    const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return { data: [], current_page: 1, last_page: 1 };
  }
};
