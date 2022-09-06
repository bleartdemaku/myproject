import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format!!!').required('Required'),
    password: Yup.string().min(8).max(20).required('Required'),
})