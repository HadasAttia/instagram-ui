import { Field, Form, Formik } from 'formik';
import React from 'react';
import { PostCreateSchema } from './PostCreate.schema';
import environment from '../environments/index';
import './PostCreate.scss';
import { useHistory } from 'react-router-dom';
import { UserService } from '../services/user.service';


function PostCreate() {

    const history = useHistory();

    async function submit(values) {
        const data = new FormData();
        data.append('image', values.image);
        data.append('description', values.description);

        try {
            await fetch(environment.appUrl + '/post', {
                method: 'PUT',
                body: data,
                headers: {
                    Authorization: UserService.getToken()
                }
            });
            history.pushState('/');
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div>
        <h1>Create post</h1>
        <Formik
        initialValues={{image: '', description: ''}}
        validationSchema={PostCreateSchema}
        onSubmit={submit}>
            {({ setFieldValue }) => (
                <Form>
                    <div>
                        <input type="file"
                        id="image"
                        className="form-control"
                        onChange={(e) => setFieldValue('image', e.target.files[0])}
                        />
                        <Field as="textarea" />
                        <button>Send</button>
                    </div>
                </Form>
            )}

        </Formik>
        </div>


    );
}

export default PostCreate;
