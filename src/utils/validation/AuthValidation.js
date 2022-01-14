import {object, string, ref, number} from "yup";

export const AuthValidation = object().shape({
    name: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
    phonenumber: number()
        .typeError('Толко цифры')
        .min(10, 'Номер телефона недействителен')
        .max(11, 'Номер телефона недействителен'),
    email: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный')
        .email('Это не электронная почта'),
    password: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
    password_confirmation: string()
        .required('Обязательное поле')
        .oneOf([ref("password")], "пароль не совпадает")
});