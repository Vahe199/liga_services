import React from 'react';
import {FormControlLabel, TextField, Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import {Formik} from "formik";
import Button from "@mui/material/Button";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {LoginValidation} from "../../../utils/validation/LoginValidation";


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
                                <FormControlLabel
                                    onChange={handleChange}
                                    value={values.remember}
                                    className={classes.checkbox}
                                    control={<Checkbox />}
                                    label="Запомнить"
                                    labelPlacement="end"
                                />
                                <Box className={classes.footer}>
                                    <Button className={classes.btn} onClick={handleSubmit}>Вход</Button>
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