import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HeaderModal from "./blocks/HeaderModal";
import {FormControl, Select, TextField} from "@mui/material";
import {Formik} from "formik";
import {useStyles} from "../../../globalStyles/ModalStyles";
import MenuItem from "@mui/material/MenuItem";
import {DownloadSvg} from "../../../assets/svg/DownloadSvg";
import {AddTaskValidation} from "../../../utils/validation/AddTaskValidation";
import {FormHelperText} from "@material-ui/core";
import ModalForAuth from "./ModalForAuth";

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
                            initialValues={{ service_type: '', service_name: '', address: '', description: '', file: '' }}
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
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <Box className={classes.subContainer}>
                                        <Box className={classes.boxInput}>
                                            <p className={classes.inputText}>Вид услуг*</p>
                                            <FormControl style={{height: '10px', marginBottom: '10px'}} fullWidth>
                                                <Select
                                                    onChange={handleChange}
                                                    value={values.service_type}
                                                    name={'service_type'}
                                                    error={touched.service_type && Boolean(errors.service_type)}
                                                >
                                                    <MenuItem value={'Ten'}>Ten</MenuItem>
                                                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                                                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                                                </Select>
                                                {touched.service_type && errors.service_type && <FormHelperText style={{color: '#F44336', paddingLeft: '15px'}}>{errors.service_type}</FormHelperText>}
                                            </FormControl>
                                        </Box>
                                        <Box className={classes.boxInput}>
                                            <p className={classes.inputText}>Название услуг*</p>
                                            <TextField
                                                variant={"outlined"}
                                                className={classes.input}
                                                name="service_name"
                                                autoComplete={'off'}
                                                value={values.service_name}
                                                onChange={handleChange}
                                                error={touched.service_name && Boolean(errors.service_name)}
                                                helperText={touched.service_name && errors.service_name}
                                            />
                                        </Box>
                                        <Box className={classes.boxInput}>
                                            <p className={classes.inputText}>Укажите адрес*</p>
                                            <TextField
                                                variant={"outlined"}
                                                className={classes.input}
                                                name="address"
                                                autoComplete={'off'}
                                                value={values.address}
                                                onChange={handleChange}
                                                error={touched.address && Boolean(errors.address)}
                                                helperText={touched.address && errors.address}
                                            />
                                        </Box>
                                        <Box style={{marginBottom: '5px'}} className={classes.boxInput}>
                                            <p className={classes.inputText}>Описание</p>
                                            <TextField
                                                multiline
                                                style={{fontSize: '25px'}}
                                                rows={4}
                                                name="description"
                                                onChange={handleChange}
                                                value={values.description}
                                            />
                                        </Box>
                                        <Box className={classes.otherDocs}>
                                            <p style={{fontSize: '15px', color: '#000', margin: '5px 0 15px 0'}}>Желаемый срок начала работ</p>
                                            <Box>
                                                {/*<span className={classes.time}>Сегодня</span>*/}
                                                {/*<span style={{marginLeft: '20px'}} className={classes.time}>Завтра</span>*/}
                                                <TextField
                                                    id="date"
                                                    label="Birthday"
                                                    type="date"
                                                    defaultValue="2017-05-24"
                                                    sx={{ width: 220 }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Box>
                                            <Box>
                                                <input
                                                    color="primary"
                                                    accept="image/*"
                                                    type="file"
                                                    value={values.file}
                                                    onChange={handleChange}
                                                    id="icon-button-file"
                                                    style={{ display: 'none' }}
                                                />
                                                <label style={{display: 'flex', marginTop: '10px', justifyContent: 'flex-start', alignItems: 'center'}} htmlFor="icon-button-file">
                                                     <DownloadSvg />
                                                    <p style={{fontSize: '15px', paddingLeft: '20px', color: '#000'}}>Прикрепить файл</p>
                                                </label>

                                            </Box>
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
