
import axios, { AxiosInstance } from 'axios';

class Api {
  private apiClient!: AxiosInstance;

  constructor(baseUrl: string, timeout?: number) {
    this.apiClient = axios.create({
      baseURL: baseUrl,
      timeout: timeout, 
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(endpoint : string) {
    try {
      const response = await this.apiClient.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  //thêm post, update, delete
}

export default Api;
