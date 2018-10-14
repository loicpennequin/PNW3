import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Home.sass';
import RegisterForm from './RegisterForm/RegisterForm.jsx';
import UserModel from './../../../resources/models/UserModel.js';

const fetchData = params => ({});

export { fetchData };

@subscribe()
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerErrors : {},
            registerSuccess: false
        };
    }

    async register(values){
        const { validationErrors } = await UserModel.create(values);
        if (validationErrors) {
            this.setState({registerErrors: validationErrors});
        } else {
            this.setState({ registerSuccess : true });
        }
    }

    render() {
        const { registerErrors, registerSuccess } = this.state;
        return (
            <>
                <RegisterForm onSubmit={values => this.register(values)} errors={registerErrors}/>
                {registerSuccess && <p style={{color: 'green'}}>Registration successful</p>}
            </>
        );
    }
}

export default Home;
