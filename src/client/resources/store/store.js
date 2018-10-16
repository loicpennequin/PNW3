import routes from './../services/routesService.js';
const store = {
    routes,
    authenticated: false,
    login: () => state => ({ authenticated: true }),
    logout: () => state => ({ authenticated: false })
};

export default store;
