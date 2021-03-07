import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import './Register.scss';
import { registerSchema } from './register.schema';
import { useHistory } from 'react-router-dom';
import { UserService } from '../services/user.service';

function Register() {

    const history = useHistory();
    const [showSuccess, setSuccess] = useState(false);

    function submit(values) {
        UserService.create(values)
            .then(res => {
                if (res.status === 201) {
                    setSuccess(true);
                    setTimeout(() => history.push('/login'), 2000);
                }
                console.log('Failure');
            });
    }

    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={{username: '', email: '', password: '', agreeToTerms: false}}
                validationSchema={registerSchema}
                validateOnChange={true}
                onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                                <Field className="form-control" id="username" name="username" />
                                <ErrorMessage name="username" component="div" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                                <Field type="email" className="form-control" id="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                                <Field type="password" className="form-control" id="password" name="password" />
                                <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group mb-3">
                            <Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms" />
                                <label className="form-check-label" htmlFor="agreeToTerms">Agree To Terms</label>
                                <ErrorMessage name="agreeToTerms" component="div" />
                        </div>
                        <div className="form-group">
                            { showSuccess
                                ? <div className="alert alert-success Register__success"><b>Success!</b> Wait for transfer...</div>
                                : <button type="submit" className="mt-3 Register__submit-btn" disabled={isSubmitting}>Submit</button> 
                            }
                        </div>
                    
                    
                    
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default Register;
