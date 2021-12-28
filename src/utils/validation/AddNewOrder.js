import {number, object, string} from "yup";
//, , place_work: value
export const AddNewOrder = object().shape({
    nomination: string().required('Обязательное поле'),
    Service_category: string().required('Обязательное поле'),
    subCategories: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    description: string()
        .min(4, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    region: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    address: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    time_from: string()
        .required('Обязательное поле'),
    time_to: string()
        .required('Обязательное поле'),
    payment_from: number()
        .typeError('Толко цифры')
        .min(3, 'Номер телефона недействителен')
        .max(18, 'Номер телефона недействителен'),
    payment_to: number()
        .typeError('Толко цифры')
        .min(3, 'Номер телефона недействителен')
        .max(18, 'Номер телефона недействителен'),
    // place_work: boolean()
    //     .required().oneOf([0 , 1], 'Selecting the gender field is required'),
});