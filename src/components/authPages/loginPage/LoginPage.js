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
import ModalForget from "../../UI/modals/ModalForget";


const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formikRef = useRef({});
    const [remember, setRemember] = useState(false);
    const {load, error, success, message, forgetErrorError, successWork, loadForget} = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false)
    const [openModalForget, setOpenModalForget] = useState(false)
    const HandleSvg = () => {
        navigate('/');
    }
    useEffect(() => {
        if (error) {
            setOpen(true)
            //dispatch(resetAuth())
        }
        if (success) {
             navigate("/")
             formikRef.current.resetForm();
             //dispatch(resetAuth())
        }
    }, [success, error, message, successWork, forgetErrorError]);

    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
            dispatch(resetAuth())
        }, 6000)
    }, [open])

    return (
        <Box className={classes.root}>
            <ModalForget load={loadForget} setOpenToaster={setOpen} open={openModalForget} setOpen={setOpenModalForget}/>
            <Box>
                <img src={img} className={classes.img}/>
            </Box>
            <Box className={classes.container}>
                <Toaster error={forgetErrorError} success={successWork} message={message} open={open} setOpen={setOpen}/>
                <Box onClick={HandleSvg} style={{
                    position: "absolute",
                    left: "50px",
                    top: "20px",
                    transform: "rotate(180deg)",
                    cursor: "pointer"
                }}>
                    <GreenArrowSvg color={"#25588d"}/>
                </Box>
                <p className={classes.title}>????????</p>
                <Formik innerRef={formikRef}
                        initialValues={{email: "", password: ""}}
                        validationSchema={LoginValidation}
                        onSubmit={(values) => {
                            dispatch(Login(values));
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
                                    label={"Email*"}
                                    width={"70%"}
                                    name={"email"}
                                    value={values.email}
                                    handleChange={(val) => setFieldValue('email', val)}
                                    touched={touched.email}
                                    error={errors.email}
                                />
                                <CustomInput
                                    label={"????????????*"}
                                    width={"70%"}
                                    name={"password"}
                                    type={'password'}
                                    value={values.password}
                                    handleChange={(val) => setFieldValue('password', val)}
                                    touched={touched.password}
                                    error={errors.password}

                                />

<Typography style={{cursor:'pointer'}} onClick={() => setOpenModalForget(true)}
                        variant={"h6"} className={classes.textBtn}>???????????? ????????????</Typography>
                                <FormControlLabel
                                    className={classes.checkbox}
                                    control={
                                        <Checkbox
                                            onChange={(e) => {
                                                setRemember(!remember);
                                            }}
                                            checked={remember}
                                            value={remember}
                                            name={"remember"}
                                        />
                                    }

                                    label="??????????????????"
                                    labelPlacement="end"
                                />
                                <Box className={classes.footer}>
                                    <BlueButton
                                        action={handleSubmit}
                                        load={load}
                                        label={"????????"}
                                    />
                                    <Typography
                                        style={{fontSize: "15px", textAlign: "center"}}
                                        color={"#fff"}
                                    >
                                        ?????? ???????????????????? ??????????????????????, ?????? ???? ?????????? ?????????????? ????????????,
                                        ???????????????? ???? ????????????
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

export default LoginPage;
