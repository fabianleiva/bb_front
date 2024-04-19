import axios from 'axios';

export default class HttpService {

  static async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  static async get(url, params) {
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  static async put(url, data) {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  static async delete(url) {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}



