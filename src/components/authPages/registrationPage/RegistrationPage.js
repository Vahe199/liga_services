import React from 'react';
import {TextField, Typography} from "@mui/material";
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {AuthValidation} from "../../../utils/validation/AuthValidation";


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
                                <Box className={classes.boxInput}>
                                    <p className={classes.inputText}>Имя*</p>
                                    <TextField
                                        variant={"outlined"}
                                        className={classes.input}
                                        name="name"
                                        autoComplete={'off'}
                                        value={values.name}
                                        onChange={handleChange}
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                    />
                                </Box>
                                <Box className={classes.boxInput}>
                                    <p className={classes.inputText}>Телефон</p>
                                    <TextField
                                        variant={"outlined"}
                                        className={classes.input}
                                        name="phone"
                                        autoComplete={'off'}
                                        value={values.phone}
                                        onChange={handleChange}
                                        error={touched.phone && Boolean(errors.phone)}
                                        helperText={touched.phone && errors.phone}
                                    />
                                </Box>
                                <Box className={classes.boxInput}>
                                    <p className={classes.inputText}>Email*</p>
                                    <TextField
                                        variant={"outlined"}
                                        className={classes.input}
                                        name="email"
                                        autoComplete={'off'}
                                        value={values.email}
                                        onChange={handleChange}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </Box>
                                <Box className={classes.boxInput}>
                                    <p className={classes.inputText}>Пароль*</p>
                                    <TextField
                                        variant={"outlined"}
                                        className={classes.input}
                                        name="password"
                                        autoComplete={'off'}
                                        value={values.password}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </Box>
                                <Box className={classes.boxInput}>
                                    <p className={classes.inputText}>Подтвердить пароль*</p>
                                    <TextField
                                        variant={"outlined"}
                                        name="confirmPassword"
                                        className={classes.input}
                                        autoComplete={'off'}
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                    />
                                </Box>
                                 <Box className={classes.footer}>
                                    <Button className={classes.btn} onClick={handleSubmit}>Регистрация</Button>
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