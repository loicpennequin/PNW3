import routes from './../services/routesService.js';
const store = {
    routes,
    authenticated: false,
    login: () => ({ authenticated: true }),
    logout: () => ({ authenticated: false })
};

export default store;
