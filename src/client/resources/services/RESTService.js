import wretch from 'wretch';
import { dedupe } from 'wretch-middlewares';
import constants from './constants.js';

const getToken = () => `Bearer ${localStorage.getItem('token')}`;

let w = wretch(constants.API_URL + '/api')
    .middlewares([dedupe()])
    .options({ credentials: 'include', mode: 'cors' })
    .resolve(resolver =>
        resolver
            .notFound(async (error, req) => {
                console.log(error);
                // TODO
                return { error: 404 };
            })
            .unauthorized(async (error, req) => {
                console.log(error);
                // TODO
                return { error: 401 };
            })
            .json(json => {
                if (json.token) {
                    localStorage.setItem('token', json.token);
                }
                if (json._userId) {
                    localStorage.setItem('uid', json.userId);
                }
                delete json.token;
                return json;
            })
    );

export default {
    w: w,
    get: (url, params) =>
        w
            .url(url)
            .query(params)
            .auth(getToken())
            .get(),
    post: (url, body) => {
        return w
            .url(url)
            .auth(getToken())
            .json(body)
            .post();
    },
    put: (url, body) =>
        w
            .url(url)
            .auth(getToken())
            .json(body)
            .put(),
    delete: url =>
        w
            .url(url)
            .auth(getToken())
            .delete()
};
