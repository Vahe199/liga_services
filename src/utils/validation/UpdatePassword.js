import {object, ref, string} from "yup";

export const UpdatePassword = object().shape({
    password: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
    password_confirmation: string()
        .required('Обязательное поле')
        .oneOf([ref("password")], "Пароль не совпадает")
});