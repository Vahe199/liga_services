import {object, string, ref, number} from "yup";
// service_type: '', service_name: '', address: '', description: '', file
export const AddTaskValidation = object().shape({
    name: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
    phone: number()
        .typeError('Толко цифры')
        .min(3, 'Номер телефона недействителен')
        .max(18, 'Номер телефона недействителен'),
    email: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный')
        .email('Это не электронная почта'),
    password: string()
        .required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(20, 'Слишком длинный'),
    confirmPassword: string()
        .required('Обязательное поле')
        .oneOf([ref("password")], "пароль не совпадает")
});