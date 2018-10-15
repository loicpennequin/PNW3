import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Login.sass';

const fetchData = params => ({ loginFetch: 'login' });

export { fetchData };

@subscribe()
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Login works !</p>
        );
    }
}

export default Login;
