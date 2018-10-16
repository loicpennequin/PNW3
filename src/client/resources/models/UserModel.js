import api from './../services/RESTService.js';

export default class UserModel {
    static async create(body) {
        try {
            return await api.post('/users', body);
        } catch (err) {
            return err;
        }
    }
}
