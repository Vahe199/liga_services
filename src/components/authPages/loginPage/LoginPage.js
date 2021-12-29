import React from 'react';
import {FormControlLabel, TextField, Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import {Formik} from "formik";
import Button from "@mui/material/Button";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {LoginValidation} from "../../../utils/validation/LoginValidation";
import CustomInput from "../../UI/customInput/CustomInput";


const LoginPage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
                <img src={img} className={classes.img} />
            </Box>
            <Box className={classes.container}>
                <p className={classes.title}>Вход</p>
                <Formik
                    initialValues={{ email: '', password: '', remember: false }}
                    validationSchema={LoginValidation}
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
                                    label={'Email*'}
                                    width={'70%'}
                                    name={'email'}
                                    value={values.email}
                                    handleChange={handleChange}
                                    touched={touched.email}
                                    error={errors.email}
                                />
                                <CustomInput
                                    label={'Пароль*'}
                                    width={'70%'}
                                    name={'password'}
                                    value={values.password}
                                    handleChange={handleChange}
                                    touched={touched.password}
                                    error={errors.password}
                                />
                                <FormControlLabel
                                    onChange={handleChange}
                                    value={values.remember}
                                    className={classes.checkbox}
                                    control={<Checkbox />}
                                    label="Запомнить"
                                    labelPlacement="end"
                                />
                                <Box className={classes.footer}>
                                    <Button variant={'outlined'}  onClick={handleSubmit}>Вход</Button>
                                    <Typography style={{fontSize: '15px', textAlign: 'center'}} color={'#fff'}>Для завершения регистрации, вам на почту выслана ссылка, пройдите по ссылке</Typography>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default LoginPage;