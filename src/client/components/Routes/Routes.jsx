import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import LoggedOutRoute from './LoggedOutRoute/LoggedOutRoute.jsx';

class PublicRoutes extends Component {
    static propTypes = {
        routes: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {
        return (
            <Switch>
                {this.props.routes.map(({ component: Component, ...route }) => {
                    const GeneratedRoute =
                        route.authLevel === 'public'
                            ? LoggedOutRoute
                            : PrivateRoute;
                    return (
                        <GeneratedRoute
                            key={'route-' + route.path}
                            component={Component}
                            {...route}
                        />
                    );
                })}
            </Switch>
        );
    }
}

export default PublicRoutes;
