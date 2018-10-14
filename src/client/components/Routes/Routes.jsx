import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { subscribe } from 'react-contextual';
import NotFound from './../pages/NotFound/NotFound.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import LoggedOutRoute from './LoggedOutRoute/LoggedOutRoute.jsx';

@subscribe(store => ({
    routes: store.routes
}))
class PublicRoutes extends Component {
    static propTypes = {
        routes: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {
        return (
            <Switch>
                {this.props.routes.map(({ component: Component, ...route }) => {
                    const GeneratedRoute = route.authLevel === 'public' ? LoggedOutRoute : PrivateRoute;
                    return (
                        <GeneratedRoute
                            key={'route-' + route.path}
                            component={Component}
                            {...route}
                        />
                    );
                })}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default PublicRoutes;
