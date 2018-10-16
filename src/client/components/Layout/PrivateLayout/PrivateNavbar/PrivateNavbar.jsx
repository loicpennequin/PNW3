import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { subscribe } from 'react-contextual';

@subscribe(store => ({ logout: store.logout }))
class PrivateNavbar extends Component {
    render() {
        const { logout } = this.props;
        return (
            <nav>
                <Link to="/dashboard">Home</Link>
                <a onClick={logout}>Logout</a>
            </nav>
        );
    }
}

export default PrivateNavbar;
