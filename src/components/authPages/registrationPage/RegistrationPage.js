import React from 'react';
import {TextField, Typography} from "@mui/material";
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {AuthValidation} from "../../../utils/validation/AuthValidation";
import CustomInput from "../../UI/customInput/CustomInput";
import {useDispatch} from "react-redux";
import {Registration} from "../../../store/actions/AuthActions";


const RegistrationPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Box className={classes.root}>
            <Box>
                <img src={img} className={classes.img} />
            </Box>
            <Box className={classes.container}>
                <p className={classes.title}>Пройти регистрацию</p>
                <Formik
                    initialValues={{ name: '', phonenumber: '', email: '', password: '', password_confirmation: '' }}
                    //validationSchema={AuthValidation}
                    onSubmit={ (values, action) => {
                        console.log(values, 'values')
                        dispatch(Registration(values))
                        action.resetForm()
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Box className={classes.subContainer}>
                                <CustomInput
                                    label={'Имя*'}
                                    width={'70%'}
                                    name={'name'}
                                    value={values.name}
                                    handleChange={handleChange}
                                    touched={touched.name}
                                    error={errors.name}
                                    mb={0}
                                />
                                <CustomInput
                                    label={'Телефон'}
                                    width={'70%'}
                                    name={'phonenumber'}
                                    value={values.phonenumber}
                                    handleChange={handleChange}
                                    touched={touched.phonenumber}
                                    error={errors.phonenumber}
                                    mb={0}
                                />
                                <CustomInput
                                    label={'Email*'}
                                    width={'70%'}
                                    name={'email'}
                                    value={values.email}
                                    handleChange={handleChange}
                                    touched={touched.email}
                                    error={errors.email}
                                    mb={0}
                                />
                                <CustomInput
                                    label={'Пароль*'}
                                    width={'70%'}
                                    name={'password'}
                                    value={values.password}
                                    handleChange={handleChange}
                                    touched={touched.password}
                                    error={errors.password}
                                    mb={0}
                                />
                                <CustomInput
                                    label={'Подтвердить пароль*'}
                                    width={'70%'}
                                    name={'password_confirmation'}
                                    value={values.password_confirmation}
                                    handleChange={handleChange}
                                    touched={touched.password_confirmation}
                                    error={errors.password_confirmation}
                                    mb={0}
                                />
                                 <Box className={classes.footer}>
                                    <Button variant={'outlined'} onClick={handleSubmit}>Регистрация</Button>
                                    <Typography style={{fontSize: '15px', textAlign: 'center'}} color={'#4B9A2D'}>Для завершения регистрации, вам на почту выслана ссылка, пройдите по ссылке</Typography>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default RegistrationPage;