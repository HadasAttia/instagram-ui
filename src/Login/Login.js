import React, { useContext, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { loginSchema } from './Login.schema';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { UserService } from '../services/user.service';
import { UserContext } from '../user-context';

function Login() {

    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const [showError, setShowError] = useState(false);

   async function submit(values) {
       setShowError(false);

       const res = await UserService.login(values);
       if (res.status !== 200) {
           setShowError(true);
           return;
       }
       const json = await res.json();
       Cookies.set('instagram-user', json.token, { expires: 30 });

       const user = await UserService.me();
       setUser(user);
       history.push('/');

    }

    return (
        <div>
            <h2>Login</h2>
            {showError && <div className="alert alert-danger">
                Incorrect username or password
                </div>}
            <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={loginSchema}
                onSubmit={submit}>
                 <Form>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username</label>
                        <Field className="form-control" id="username" name="username" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <Field type="password" className="form-control" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                    <hr />
                    <div className="text-center">
                        Don't have an account? sign up here <Link to="/register" className="Login_register-link">Register</Link>
                    </div>
                 </Form>
            </Formik>
        </div>
    );
}

export default Login;
