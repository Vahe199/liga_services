import {object, ref, string} from "yup";

export const ForgetEmailValidation = object().shape({
    email: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный')
        .email('Это не электронная почта')
});