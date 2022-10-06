import $api from "../http";

export default class AuthService {
    static async fetchUsers() {
        return $api.get('/users', {})
    }
}