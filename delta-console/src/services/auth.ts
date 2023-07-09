import axios from 'axios';

const API_ENDPOINT = `http://localhost:5173/api/auth`;

class AuthService {
    login(user: string, pass: string) {
        return axios.post(
            API_ENDPOINT + 'login', {
                user,
                pass
            }
        ).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem('console_user', JSON.stringify(res.data));
            }

            return res.data;
        })
    }

    logout() {
        localStorage.removeItem('console_user');
    }

    register(user: string, pass: string, email: string) {
        return axios.post(
            API_ENDPOINT + 'register', {
                user,
                pass,
                email
            }
        );
    }

    getUser() {
        const currentLogin = localStorage.getItem('console_user');
        if (currentLogin) return JSON.parse(currentLogin);

        return null;
    }
}

export default new AuthService;