import React, {useState} from 'react';
import img from '../../../assets/image/authImg.jpg';
import Box from "@mui/material/Box";
import {Formik} from "formik";
import {AuthValidation} from "../../../utils/validation/AuthValidation";
import CustomInput from "../../UI/customInput/CustomInput";
import {useDispatch, useSelector} from "react-redux";
import {Registration} from "../../../store/actions/AuthActions";
import Toaster from "../../UI/toaster/Toaster";
import BlueButton from "../../UI/CustomButtons/BlueButton";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {useStyles} from "../../../globalStyles/AuthStyles";


const RegistrationPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {message, errorAuth, loadAuth} = useSelector(state => state.auth);

    //toaster
    const [openToaster, setOpenToaster] = useState(false);

    return (
        <Box className={classes.root}>
            <Box style={{position: 'absolute'}}>
                <Toaster open={openToaster}
                         message={message.message}
                         error={errorAuth}
                         setOpen={setOpenToaster} />
            </Box>
            <Box>
                <img alt={'photo'} src={img} className={classes.img} />
            </Box>
            <Box className={classes.container}>
                <p className={classes.title}>Пройти регистрацию</p>
                <Formik
                    phonenumber
                    password_confirmation

                    initialValues={{ name: '', phonenumber: '', email: '', password: '', password_confirmation: '' }}
                    validationSchema={AuthValidation}
                    onSubmit={ async (values, action) => {
                        await dispatch(Registration(values))
                        await setOpenToaster(true)
                        setTimeout(() => {
                            if(!errorAuth){
                                navigate('/')
                            }
                        }, 2000)

                        action.resetForm()
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
                                    <BlueButton load={loadAuth} label={'Регистрация'} action={handleSubmit} />
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
