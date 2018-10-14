import Home, {
    fetchData as HomeFetch
} from './../../components/pages/Home/Home.jsx';
import Dashboard, {
    fetchData as DashboardFetch
} from './../../components/pages/Dashboard/Dashboard.jsx';
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        fetchFn: HomeFetch,
        authLevel: 'public'
    },
    {
        path: '/dashboard',
        exact: false,
        component: Dashboard,
        fetchFn: DashboardFetch,
        authLevel: 'private'
    }
];

export default routes;
