import Pages from './../../components/pages/index.js';

const { Home, fetchFunctions } = Pages;
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        dataFetchKey: 'home',
        authLevel: 'public',
        fetchFn: fetchFunctions.home
    }
];

export default routes;
