import {array, boolean, mixed, object, string} from "yup";

export const ClickOnTaskValidation = () => object().shape({
    offer_to_employer: string().required('Обязательное поле')
        .min(4, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    startdate_from: string()
        .required('Обязательное поле'),
    start_date_to: string()
        .required('Обязательное поле'),
    service_price_from: string()
        .required('Обязательное поле')
        .matches(/^[0-9]+$/, "Толко число")
        .min(3, 'Номер телефона должен быть 11 символов')
        .max(18, 'Номер телефона должен быть 11 символов'),
    service_price_to: string()
        .required('Обязательное поле')
        .matches(/^[0-9]+$/, "Толко число")
        .min(3, 'Номер телефона должен быть 11 символов')
        .max(18, 'Номер телефона должен быть 11 символов'),
})