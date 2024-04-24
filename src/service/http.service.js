import axios from 'axios';
const API_URL = 'http://localhost:3000';

export default class HttpService {

  static async post(url, data) {
    const response = await axios.post(`${API_URL}${url}`, data);
    return response.data;
  }
  static async get(url, params) {
    try {
      const response = await axios.get(`${API_URL}${url}`, { params });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  static async put(url, data) {
    try {
      const response = await axios.put(`${API_URL}${url}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  static async delete(url) {
    try {
      const response = await axios.delete(`${API_URL}${url}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}



