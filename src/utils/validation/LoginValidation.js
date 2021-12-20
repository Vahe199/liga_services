import {object, string} from "yup";

export const LoginValidation = object().shape({
    email: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный')
        .email('Это не электронная почта'),
    password: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
});