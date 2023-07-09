import axios from 'axios';
import authHeader from './authHeader.ts';

const API_ENDPOINT = 'http://localhost:5173/api/test';

class UserService {
    getPublicData() {
        return axios.get(API_ENDPOINT + 'pub');
    }

    getUserData() {
        return axios.get(API_ENDPOINT + 'user', { headers: authHeader() });
    }
}

export default new UserService();