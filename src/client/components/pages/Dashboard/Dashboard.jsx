import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Dashboard.sass';

const fetchData = params => ({ dashboardFetch: 'dashboard' });

export { fetchData };

@subscribe()
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Dashboard works !</p>
        );
    }
}

export default Dashboard;
