import React, {useEffect, useState} from "react";
import img from "../../../assets/image/authImg.jpg";
import Box from "@mui/material/Box";
import {Formik} from "formik";
import CustomInput from "../../UI/customInput/CustomInput";
import {useDispatch, useSelector} from "react-redux";
import BlueButton from "../../UI/CustomButtons/BlueButton";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {useStyles} from "../../../globalStyles/AuthStyles";
import {GreenArrowSvg} from "../../../assets/svg/intro/GreenArrowSvg";
import Toaster from "../../UI/toaster/Toaster";
import {UpdatePassword} from "../../../utils/validation/UpdatePassword";
import {ForgetPassword, ResetPassword} from "../../../store/actions/AuthActions";


const ForgetPasswordPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {load} = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false)
    const handleSvg = () => {
        navigate('/');
    }


    return (
        <Box className={classes.root}>
            <Box>
                <img src={img} className={classes.img}/>
            </Box>
            <Box className={classes.container}>
                {/*<Toaster error={error} success={success} message={message} open={open} setOpen={setOpen}/>*/}
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
                            //dispatch(ResetPassword(values));
                            navigate('/login')
                        }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleSubmit,
                          setFieldValue
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Box className={classes.subContainer}>
                                <CustomInput
                                    label={"Пароль"}
                                    width={"70%"}
                                    name={"password"}
                                    type={'password'}
                                    value={values.password}
                                    handleChange={(val) => setFieldValue('password', val)}
                                    touched={touched.password}
                                    error={errors.password}
                                />
                                <CustomInput
                                    label={"Подтвердить пароль"}
                                    width={"70%"}
                                    type={'password'}
                                    name={"password_confirmation"}
                                    value={values.password_confirmation}
                                    handleChange={(val) => setFieldValue('password_confirmation', val)}
                                    touched={touched.password_confirmation}
                                    error={errors.password_confirmation}

                                />
                                <Box className={classes.footer}>
                                    <BlueButton
                                        action={handleSubmit}
                                        load={load}
                                        label={"Продолжить"}
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

export default ForgetPasswordPage;
