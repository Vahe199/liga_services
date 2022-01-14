import React from 'react';
import {FormControlLabel,  Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import {Formik} from "formik";
import Button from "@mui/material/Button";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {LoginValidation} from "../../../utils/validation/LoginValidation";
import CustomInput from "../../UI/customInput/CustomInput";
import {useDispatch} from "react-redux";
import {Login} from "../../../store/actions/AuthActions";


const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
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
                    onSubmit={(values, action) => {
                        console.log(values, 'values')
                        dispatch(Login(values))
                        action.resetForm()
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          setFieldValue,
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
                                    className={classes.checkbox}
                                    control={<Checkbox onChange={handleChange}
                                                       checked={values.remember}
                                                       name={'remember'}  />}
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
