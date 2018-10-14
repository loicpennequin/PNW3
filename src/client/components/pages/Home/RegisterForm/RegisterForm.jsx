import React, { Component } from 'react';
import { Form, Text } from 'informed';

class Registerform extends Component {

    render() {
        const { onSubmit, errors } = this.props;

        return (
            <div>
                <h2>Register</h2>
                <Form id="register-form" onSubmit={formState => onSubmit(formState)} className="form">
                    <div className="form-field">
                        <label htmlFor="register-username" className="label">Username</label>
                        <Text field="username" id="register-username" className="input input-text"/>
                        {errors?.username && <p className="field-error">{errors?.username[0]}</p>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="register-email" className="label">Email</label>
                        <Text field="email" id="register-email" className="input input-text"/>
                        {errors?.email && <p className="field-error">{errors?.email[0]}</p>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="register-password" className="label">Password</label>
                        <Text field="password" id="register-password" type="password" className="input input-text"/>
                        {errors?.password && <p className="field-error">{errors?.password[0]}</p>}
                    </div>
                    <div className="form-field">
                        <button type="submit" className="input input-submit">Submit</button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Registerform;
