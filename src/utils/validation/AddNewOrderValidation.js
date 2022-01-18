import {boolean, object, string} from "yup";

export const AddNewOrderValidation = ({value}) => object().shape({
    category_name: string().required('Обязательное поле'),
    subcategory_name: string().required('Обязательное поле'),
    subCategories: string()
        .required('Обязательное поле')
        .min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    task_description: string()
        .min(4, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    region: string().when('task_location', {
        is: (task_location) => task_location === 'client',
        then: string().required('Обязательное поле')
            .min(3, 'Слишком короткый')
            .max(250, 'Слишком длинный'),
        otherwise: string(),
    }),
    address: string().when('task_location', {
        is: (task_location) => task_location === 'client',
        then: string().required('Обязательное поле')
            .min(3, 'Слишком короткый')
            .max(250, 'Слишком длинный'),
        otherwise: string(),
    }),
    // region: string()
    //     .required('Обязательное поле')
    //     .min(3, 'Слишком короткый')
    //     .max(250, 'Слишком длинный'),
    // address: value === 'client' ? string()
    //     : string()
    //     .required('Обязательное поле')
    //     .min(3, 'Слишком короткый')
    //     .max(250, 'Слишком длинный'),
    task_starttime: string()
        .required('Обязательное поле'),
    task_finishtime: string()
        .required('Обязательное поле'),
    payment_from: string()
        .matches(/^[0-9]+$/, "Толко число")
        .min(3, 'Номер телефона должен быть 11 символов')
        .max(18, 'Номер телефона должен быть 11 символов'),
    payment_to: string()
        .matches(/^[0-9]+$/, "Толко число")
        .min(3, 'Номер телефона должен быть 11 символов')
        .max(18, 'Номер телефона должен быть 11 символов'),
    task_img: boolean()
        //.required().oneOf([0 , 1], 'Обязательное поле'),
});