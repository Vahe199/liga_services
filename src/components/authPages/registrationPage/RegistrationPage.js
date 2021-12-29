import React from 'react';
import {TextField, Typography} from "@mui/material";
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {AuthValidation} from "../../../utils/validation/AuthValidation";
import CustomInput from "../../UI/customInput/CustomInput";


const RegistrationPage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
                <img src={img} className={classes.img} />
            </Box>
            <Box className={classes.container}>
                <p className={classes.title}>Пройти регистрацию</p>
                <Formik
                    initialValues={{ name: '', phone: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={AuthValidation}
                    onSubmit={async (values, action) => {
                        console.log(values, 'values')
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
                                    name={'phone'}
                                    value={values.phone}
                                    handleChange={handleChange}
                                    touched={touched.phone}
                                    error={errors.phone}
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
                                    name={'confirmPassword'}
                                    value={values.confirmPassword}
                                    handleChange={handleChange}
                                    touched={touched.confirmPassword}
                                    error={errors.confirmPassword}
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