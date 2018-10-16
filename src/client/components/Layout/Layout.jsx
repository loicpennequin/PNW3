import React, { Component } from 'react';
import PublicLayout from './PublicLayout/PublicLayout.jsx';
import PrivateLayout from './PrivateLayout/PrivateLayout.jsx';
import { subscribe } from 'react-contextual';

@subscribe(store => ({
    authenticated: store.authenticated
}))
class Layout extends Component {
    render() {
        const { authenticated } = this.props;
        return authenticated ? <PrivateLayout /> : <PublicLayout />;
    }
}

export default Layout;
