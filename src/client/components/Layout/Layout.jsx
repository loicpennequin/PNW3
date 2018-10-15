import React, { Component } from 'react';
import PublicLayout from './PublicLayout/PublicLayout.jsx';
import PrivateLayout from './PrivateLayout/PrivateLayout.jsx';

class Layout extends Component {
    render() {
        return (
            <>
                <PublicLayout />
                <PrivateLayout />
            </>
        );
    }
}

export default Layout;
