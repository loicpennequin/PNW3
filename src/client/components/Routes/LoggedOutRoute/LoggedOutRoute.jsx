import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { subscribe } from 'react-contextual';
import Prefetcher from './../Prefetcher/Prefetcher.jsx';

const LoggedOutRoute = ({ component: Component, fetchFn, needPrefetch, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !authenticated ? (
                <Prefetcher
                    {...props}
                    fetchFn={fetchFn}
                    component={Component}
                    needPrefetch={needPrefetch}
                />
            ) : (
                <Redirect
                    to={{
                        pathname: '/dashboard',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

function mapStateToProps(store){
    return {
        authenticated: store.authenticated
    };
}

export default subscribe(mapStateToProps)(LoggedOutRoute);
