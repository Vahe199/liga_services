import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HeaderModal from "./blocks/HeaderModal";
import {Formik} from "formik";
import {useStyles} from "../../../globalStyles/ModalStyles";
import {DownloadSvg} from "../../../assets/svg/DownloadSvg";
import {AddTaskValidation} from "../../../utils/validation/AddTaskValidation";
import ModalForAuth from "./ModalForAuth";
import CustomDatePicker from "../common/datePicker/CustomDatePicker";
import CustomInput from "../common/customInput/CustomInput";
import CustomSelect from "../common/customSelect/CustomSelect";
import CustomInputAddFile from "../common/customInputAddFile/CustomInputAddFile";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 3,
};

const ModalNewTask = ({showModal, setShowModal}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setShowModal(false);
    const classes = useStyles();


    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{border: 'none'}}
            >
                <Box sx={style}>
                    {open && <ModalForAuth open={open} setOpen={setOpen} />}
                    <Box className={classes.root}>
                        <HeaderModal title={'Оставить новое задание'} close={handleClose} />
                        <Formik
                            initialValues={{ service_type: '', service_name: '', address: '', description: '', file: '', time_from: '', time_to: '' }}
                            validationSchema={AddTaskValidation}
                            onSubmit={async (values, action) => {
                                console.log(values, 'values')
                                setOpen(true)
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
                                  setFieldValue
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <Box>
                                        <Box style={{marginBottom: '30px'}}>
                                            <CustomSelect
                                                name={'service_type'}
                                                label={'Вид услуг'}
                                                handleChange={handleChange}
                                                value={values.service_type}
                                                touched={touched.service_type}
                                                error={errors.service_type}
                                                mt={0}
                                            />
                                        </Box>
                                        <CustomInput
                                            label={'Название услуг*'}
                                            name={'service_name'}
                                            value={values.service_name}
                                            handleChange={handleChange}
                                            touched={touched.service_name}
                                            error={errors.service_name}
                                            mb={25}
                                        />
                                        <CustomInput
                                            label={'Укажите адрес*'}
                                            name={'service_name'}
                                            value={values.address}
                                            handleChange={handleChange}
                                            touched={touched.address}
                                            error={errors.address}
                                            mb={25}
                                        />
                                        <CustomInput
                                            label={'Описание'}
                                            name={'description'}
                                            value={values.description}
                                            handleChange={handleChange}
                                            touched={touched.description}
                                            error={errors.description}
                                            textArea={true}
                                            mb={25}
                                        />
                                        <Box className={classes.otherDocs}>
                                            <p style={{fontSize: '15px', color: '#000', margin: '55px 0 10px 0'}}>Желаемый срок начала работ</p>
                                            <Box style={{display: 'flex'}}>
                                                <Box style={{paddingRight: '10px'}}>
                                                    <CustomDatePicker
                                                        value={values.time_from}
                                                        name={'time_from'}
                                                        fun={setFieldValue}
                                                        touched={touched.time_from}
                                                        errors={errors.time_from}
                                                    />
                                                </Box>
                                                    <CustomDatePicker
                                                        value={values.time_to}
                                                        name={'time_to'}
                                                        fun={setFieldValue}
                                                        touched={touched.time_to}
                                                        errors={errors.time_to}
                                                    />
                                            </Box>
                                            <CustomInputAddFile
                                                name={'file'}
                                                value={values.file}
                                                handleChange={handleChange}
                                                label={'Прикрепить файл'}
                                                svg={<DownloadSvg />}
                                            />
                                        </Box>
                                        <Box className={classes.footer}>
                                            <Button onClick={handleSubmit}>Оформить заказ</Button>
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

export default ModalNewTask;
