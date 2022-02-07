import {array, boolean, mixed, object, string} from "yup";
import * as yup from "yup";

export const AddNewOrderValidation = () => object().shape({

    category_name: string().required('Обязательное поле'),
    title: string().required('Обязательное поле').min(3, 'Слишком короткый')
        .max(250, 'Слишком длинный'),
    subcategory_name: string().required('Обязательное поле'),
    task_description: string().required('Обязательное поле')
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
    task_starttime: string()
        .required('Обязательное поле'),
    task_finishtime: string()
        .required('Обязательное поле'),
    price_from: string()
        .required('Обязательное поле')
        .matches(/^[0-9]+$/, "Толко число")
        .min(3, 'Номер телефона должен быть 11 символов')
        .max(18, 'Номер телефона должен быть 11 символов'),
    price_to: string()
        .required('Обязательное поле')
        .matches(/^[0-9]+$/, "Толко число")
        .min(3, 'Номер телефона должен быть 11 символов')
        .max(18, 'Номер телефона должен быть 11 символов'),
    task_img: array().of(mixed().nullable(true).required('Обязательное поле')).min(1, 'В поле должно быть хотя бы 1 элемента.').nullable()
        // .test("fileSize", "The file is too large", (value) => {
        //     return value && value[0].sienter code hereze <= 2000000;
        // })
        // .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
        //     return value && (
        //         value[0].type === "image/jpeg" ||
        //         value[0].type === "image/bmp" ||
        //         value[0].type === "image/png" ||
        //         value[0].type === 'application/pdf' ||
        //         value[0].type === "application/msword"
        //     );
});

