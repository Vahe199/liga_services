import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import img from "../../../assets/image/authImg.jpg";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import CustomInput from "../../UI/customInput/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../store/actions/AuthActions";
import BlueButton from "../../UI/CustomButtons/BlueButton";
import { useNavigate } from "react-router-dom";
import { FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { GreenArrowSvg } from "../../../assets/svg/intro/GreenArrowSvg";
import { useStyles } from "../../../globalStyles/AuthStyles";

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [remember, setRemember] = useState(false)
    const {load, error} = useSelector(state => state.auth)
    const HandleSvg = () => {
        navigate('/');
    }
    return (
        <Box className={classes.root}>
            <Box>
                <img src={img} className={classes.img} />
            </Box>
            <Box className={classes.container}>
                <Box onClick={HandleSvg} style={{position:"absolute", left:"50px", top:"20px", transform: "rotate(180deg)", cursor:"pointer"}}>
                    <GreenArrowSvg />
                </Box>
                <p className={classes.title}>Вход</p>
                <Formik
                    initialValues={{ email: '', password: ''}}
                    // validationSchema={LoginValidation}
                    onSubmit={(values, action) => {
                        dispatch(Login(values))
                        action.resetForm()
                        if(!error){
                            navigate('/')
                        }
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
                                    control={<Checkbox onChange={(e)=> {
                                        setRemember(!remember)
                                    }}
                                                       checked={remember}
                                                       value={remember}
                                                       name={'remember'}  />}
                                    label="Запомнить"
                                    labelPlacement="end"
                                />
                                <Box className={classes.footer}>
                                    <BlueButton width={'160px'} action={handleSubmit} load={load} label={'Вход'} />
                                    <Typography style={{fontSize: '15px', textAlign: 'center'}} color={'#fff'}>Для завершения регистрации, вам на почту выслана ссылка, пройдите по ссылке</Typography>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
);
};

export default LoginPage;