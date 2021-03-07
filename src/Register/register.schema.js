import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(4, 'Username must be 4-16 characters')
        .max(16, 'Username must be 4-16 characters')
        .required()
        .test('isUnique', 'Username is already taken', (value) => isUnique('usernane', value)),
    password: yup.string()
        .min(6, 'Password must be 6-26 characters')
        .max(26, 'Password must be 6-26 characters')
        .required(),
    email: yup.string()
        .email('Invalid email')
        .required()
        .test('isUnique', 'Email is already in use', (value) => isUnique('email', value)),
    agreeToTerms: yup.mixed().oneOf([true], 'You must agree to terms')
});

const memo = {
    email: {},
    username: {}
};

async function isUnique(field, value) {
    if (memo[field].hasOwnProperty(value)) {
        return memo[field][value];
    }
   const res = await fetch(`http://localhost:4000/user/check?${field}=${value}`);
   const json = await res.json();
   memo[field][value] = !json;
   return memo[field][value];
}