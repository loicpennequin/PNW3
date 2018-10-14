import api from './../services/RESTService.js';

export default class UserModel {
    static async create(body) {
        try {
            let response = await api.post('/users', body);
            console.log(response);
            return response;
        } catch (err) {
            return err;
        }
    }
}
