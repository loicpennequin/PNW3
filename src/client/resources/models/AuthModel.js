import api from './../services/RESTService.js';

export default class AuthModel {
    static async login(body) {
        try {
            const response = await api.post('/login', body);
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}
