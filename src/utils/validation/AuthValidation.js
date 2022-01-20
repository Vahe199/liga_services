import {object, ref, string} from "yup";

export const AuthValidation = object().shape({
    name: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
    phonenumber: string()
        .matches(/^[0-9]+$/, "Толко число")
        .min(11, 'Номер телефона должен быть 11 символов')
        .max(11, 'Номер телефона должен быть 11 символов'),
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
        .oneOf([ref("password")], "Пароль не совпадает")
});