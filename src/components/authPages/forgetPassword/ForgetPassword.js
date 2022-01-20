import React, {useEffect, useRef, useState} from "react";
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
import {useStyles} from "../../../globalStyles/AuthStyles";
import {GreenArrowSvg} from "../../../assets/svg/intro/GreenArrowSvg";
import {LoginValidation} from "../../../utils/validation/LoginValidation";
import Toaster from "../../UI/toaster/Toaster";
import {resetAuth} from "../../../store/reducers/AuthReducer";
import {UpdatePassword} from "../../../utils/validation/UpdatePassword";


const ForgetPassword = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {load, error, success,message} = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false)
    const handleSvg = () => {
        navigate('/');
    }
    useEffect(() => {
        if (error) {
            setOpen(true)
        }
        if (success) {
            navigate("/")
        }
    }, [success, error, message]);

    return (
        <Box className={classes.root}>
            <Box>
                <img src={img} className={classes.img}/>
            </Box>
            <Box className={classes.container}>
                <Toaster error={error} success={success} message={message} open={open} setOpen={setOpen}/>
                <Box onClick={handleSvg} style={{
                    position: "absolute",
                    left: "50px",
                    top: "20px",
                    transform: "rotate(180deg)",
                    cursor: "pointer"
                }}>
                    <GreenArrowSvg color={"#25588d"}/>
                </Box>
                <p className={classes.title}>Восстановите пароль</p>
                <Formik
                        initialValues={{password: "", password_confirmation: ""}}
                        validationSchema={UpdatePassword}
                        onSubmit={(values) => {
                            console.log(values, 'values')
                            //dispatch(Login(values));
                        }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Box className={classes.subContainer}>
                                <CustomInput
                                    label={"Пароль"}
                                    width={"70%"}
                                    name={"password"}
                                    value={values.password}
                                    handleChange={handleChange}
                                    touched={touched.password}
                                    error={errors.password}
                                />
                                <CustomInput
                                    label={"Подтвердить пароль"}
                                    width={"70%"}
                                    name={"password_confirmation"}
                                    value={values.password_confirmation}
                                    handleChange={handleChange}
                                    touched={touched.password_confirmation}
                                    error={errors.password_confirmation}

                                />
                                <Box className={classes.footer}>
                                    <BlueButton
                                        action={handleSubmit}
                                        load={load}
                                        label={"Вход"}
                                    />
                                    <Typography
                                        style={{fontSize: "15px", textAlign: "center"}}
                                        color={"#fff"}
                                    >
                                        Для завершения регистрации, вам на почту выслана ссылка,
                                        пройдите по ссылке
                                    </Typography>

                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default ForgetPassword;
