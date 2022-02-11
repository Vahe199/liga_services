import {array, boolean, mixed, object, string} from "yup";
import * as yup from "yup";
export function checkIfFilesAreTooBig(files) {
    let valid = true
    if (files) {
        files.map(file => {
            const size = file.size / 1024 / 1024
            if (size > 10) {
                valid = false
            }
        })
    }
    return valid
}

export function checkIfFilesAreCorrectType(files) {
    let valid = true
    if (files) {
        files.map(file => {
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                valid = false
            }
        })
    }
    return valid
}
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
    // task_img: array().of(mixed()
    //     //.nullable(true)
    //     .test("fileSize", "The file is too large", (value) => {
    //         return value && value.size <= 1000;
    //     })
    //     .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
    //         return value && (
    //             value.type === "image/jpeg" ||
    //             value.type === "image/bmp" ||
    //             value.type === "image/png" ||
    //             value.type === 'application/pdf' ||
    //             value.type === "application/msword"
    //         )
    //     })
    //     .required('Обязательное поле')).min(1, 'В поле должно быть хотя бы 1 элемента.').nullable()
    // task_img: array().required().min(1, 'vdsvdv').nullable().of(mixed()
    //     .test('fileType', 'Unsupported File Format', function (value) {
    //         const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
    //         return SUPPORTED_FORMATS.includes(value.type)
    //     })
    //     .test('fileSize', "File Size is too large", value => {
    //         const sizeInBytes = 1000;//0.5MB
    //         return value.size <= sizeInBytes;
    //     }))

    task_img: array().nullable()
            .min(1, 'В поле должно быть хотя бы 1 элемента.')
            .test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', checkIfFilesAreTooBig)
            .test(
                'is-big-file',
                'VALIDATION_FIELD_FILE_WRONG_TYPE',
                checkIfFilesAreCorrectType
            ),

})