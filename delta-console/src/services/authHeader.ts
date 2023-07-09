export default function authHeader() {
    const currentLogin = localStorage.getItem('console_user');
    let currentUser = null;

    if (currentLogin) currentUser = JSON.parse(currentLogin);

    if (currentUser && currentUser.accessToken) {
        return {ConsoleAuth: 'Bearer ' + currentUser.accessToken};
    }
    else {
        return {ConsoleAuth: ''};
    }
}