import React, {useEffect, useRef, useState} from 'react';
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import {Formik} from "formik";
import {AuthValidation} from "../../../utils/validation/AuthValidation";
import CustomInput from "../../UI/customInput/CustomInput";
import {useDispatch, useSelector} from "react-redux";
import Toaster from "../../UI/toaster/Toaster";
import BlueButton from "../../UI/CustomButtons/BlueButton";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { GreenArrowSvg } from '../../../assets/svg/intro/GreenArrowSvg';
import {useStyles} from "../../../globalStyles/AuthStyles";
import {resetAuth} from "../../../store/reducers/AuthReducer";

import {Registration} from "../../../store/actions/AuthActions";



const RegistrationPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {success, error, message, errorAuth, loadAuth} = useSelector(state => state.auth);
    //toaster
    const [openToaster, setOpenToaster] = useState(false);
    const formikRef = useRef({});

    useEffect(() => {
        if (error) {
            setOpenToaster(true)
            dispatch(resetAuth())

        }
        if (success) {
            navigate("/")
            formikRef.current.resetForm();
            dispatch(resetAuth())
        }
    }, [success, error, message]);

    const HandleSvg = () => {
        navigate('/');
      }

    return (
        <Box className={classes.root}>
            <Box style={{position: 'absolute'}}>
                <Toaster open={openToaster}
                         message={message}
                         error={errorAuth}
                         setOpen={setOpenToaster} />
            </Box>
            <Box>
                <img alt={'photo'} src={img} className={classes.img} />
            </Box>

            <Box className={classes.container}>
                <Box onClick={HandleSvg} style={{position:"absolute", left:"50px", top:"20px", transform: "rotate(180deg)", cursor:"pointer"}}>
                    <GreenArrowSvg color={"#25588d"}/>

            </Box>
                <p className={classes.title}>Пройти регистрацию</p>
                <Formik
                    phonenumber
                    password_confirmation
                    innerRef={formikRef}
                    initialValues={{ name: '', phonenumber: '', email: '', password: '', password_confirmation: '' }}
                    validationSchema={AuthValidation}
                    onSubmit={ async (values) => {
                        await dispatch(Registration(values))

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
                                    <BlueButton width={'160px'} load={loadAuth} label={'Регистрация'} action={handleSubmit} />
                                    <Typography style={{fontSize: '15px', textAlign: 'center',color:'#4B9A2D'}} >Для завершения регистрации, вам на почту выслана ссылка, пройдите по ссылке</Typography>
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
