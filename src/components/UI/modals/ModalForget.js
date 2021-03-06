import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HeaderModal from './blocks/HeaderModal';
import CustomInput from "../customInput/CustomInput";
import {Formik} from "formik";
import {ForgetEmailValidation} from "../../../utils/validation/ForgetEmailValidation";
import {useDispatch} from "react-redux";
import {ForgetPassword} from "../../../store/actions/AuthActions";
import BlueButton from "../CustomButtons/BlueButton";
import {useStyles} from "../../../globalStyles/ModalStyles";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    border: 'none',
    p: 3,
};

const ModalForget = ({open, setOpen, setOpenToaster, load}) => {
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                onClose={handleClose}
                aria-describedby="modal-modal-description"
                style={{border: 'none'}}
            >
                <Box sx={{ ...style ,width:{xs: 270, md: 400}}}>
                    <Box className={classes.root}>
                        <Formik initialValues={{email: ""}}
                                validationSchema={ForgetEmailValidation}
                                onSubmit={ async (values) => {
                                    //console.log(values, 'values')
                                    await dispatch(ForgetPassword(values))
                                    handleClose()
                                    setOpenToaster(true);
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
                                    <Box>
                                        <HeaderModal title={'?????????????????? ?????????????????? ???? email'} close={handleClose}/>
                                        <Box style={{margin: '10px', display:'flex', justifyContent: 'center'}}>
                                            <CustomInput
                                                label={'Email'}
                                                name={'email'}
                                                value={values.email}
                                                handleChange={handleChange}
                                                touched={touched.email}
                                                error={errors.email}
                                            />
                                        </Box>
                                        <Box className={classes.footer}>
                                            <Box style={{width:'50%', alignItems: 'center', display:'flex',justifyContent:'space-between' }}>
                                                {/*<Button onClick={handleSubmit} variant={'contained'} style={{ cursor: 'pointer'}}>????</Button>*/}
                                                <BlueButton
                                                    action={handleSubmit}
                                                    load={load}
                                                    label={"????"}
                                                    //width={'100px'}
                                                />
                                                <Button onClick={handleClose} >??????</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalForget;
