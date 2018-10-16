import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import Routes from './../../Routes/Routes.jsx';
import PrivateNavbar from './PrivateNavbar/PrivateNavbar.jsx';

@subscribe(store => ({
    routes: store.routes
}))
class PrivateLayout extends Component {
    render() {
        return (
            <>
                <PrivateNavbar />
                <Routes
                    routes={this.props.routes.filter(
                        route => route.authLevel === 'private'
                    )}
                />
            </>
        );
    }
}

export default PrivateLayout;
