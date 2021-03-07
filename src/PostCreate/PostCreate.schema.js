import * as yup from 'yup';

export const PostCreateSchema = yup.object().shape({
    image: yup.mixed()
        .required('Image is required'),
    decription: yup.string()
        .max(2000, 'Description is too long'),
});