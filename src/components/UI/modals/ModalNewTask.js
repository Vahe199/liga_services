import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import HeaderModal from "./blocks/HeaderModal";
import {Formik} from "formik";
import {DownloadSvg} from "../../../assets/svg/DownloadSvg";
import ModalForAuth from "./ModalForAuth";
import CustomDatePicker from "../datePicker/CustomDatePicker";
import CustomInput from "../customInput/CustomInput";
import CustomSelect from "../selects/CustomSelect";
import CustomInputAddFile from "../customInputAddFile/CustomInputAddFile";
import {useDispatch, useSelector} from 'react-redux';
import {AddNewTask} from "../../../store/actions/TaskActions";
import Grid from "@mui/material/Grid";
import BlueButton from "..//CustomButtons/BlueButton";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import CustomInputIcon from "../customInput/CustomInputIcon";
import { makeStyles } from '@material-ui/core';
import {AddNewOrderValidation} from "../../../utils/validation/AddNewOrderValidation";

export const useStyles = makeStyles({
    root:{
        //height: "100%",
        //paddingTop: '70px',
        // backgroundColor: '#e1e3e5',
        //marginBottom: '70px',
        //paddingTop: '40px',
        "& .MuiTypography-h4":{
            fontWeight: 500,
            fontSize:20,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h5":{
            fontWeight: 500,
            fontSize:17,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h6":{
            color: "#808080",
            fontSize: 14,
            whiteSpace: 'noWrap',
            fontWeight: 400,
        },
        '& .MuiTypography-body1': {
            color: '#808080',
            fontSize: '14px',
        },

        //button
        "& .MuiButton-contained": {
            backgroundColor: '#4B9A2D',
            borderRadius: '10px',
        },
        "& .MuiButton-outlined": {
            background: "#445E77",
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            borderRadius: '10px',
            "&:hover": {
                background: '#6585a5 !important',
            }
        },
        //cardItem
        "& .MuiCard-root": {
            borderRadius: '10px',
            margin: '10px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            '@media (max-width: 450px)' : {
                margin: '20px 0',
            },
        },
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
            width: '170px',
            borderRadius: '10px',
            border: '1px solid #808080',
            height: '45px',
            backgroundColor: '#fff',
        },
        //input
        '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
            marginBottom: '10px',
            width: '100%',
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '10px',
        },

        //select
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '10px',
        },
        //from
        "& .MuiOutlinedInput-input": {
            color: "#000",
        },
    },
    radio: {
        '&$checked': {
            color: '#4B9A2D'
        },
    },
    checked: {},

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 20px 0 20px',
        flexWrap: 'wrap',
    },
    datePickerBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    datepicker: {
        background: '#fff',
    },
    boxInput: {
        width: '100%',
        marginBottom: '18px',
    },
    boxInput2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '18px',
    },
    inputText: {
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        marginTop: '15px',
        marginBottom: '4px',
        color: '#000000',
    },
    input: {
        width: '100%',
        height: '16px',
        fontSize: '25px',
    },
    checkbox: {
        marginTop: '20px',
        alignSelf: 'flex-start',
        paddingLeft: '120px',
    },
    time: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        padding: '12px 42px',
        borderRadius: '10px',
        width: '150px',
        cursor: 'pointer',
    },
    orderSubBlockSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '10px',
    },
    orderSubBlockSpaceAround: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '10px',
    },
    wrapBox: {
        '@media (max-width: 450px)' : {
            width: '100%',
            marginBottom: '20px',
        },
    },
    wrapRight: {
        textAlign: 'right',
        '@media (max-width: 450px)' : {
            textAlign: 'left',
        },
    },
    btnDanger: {
        background: "#E54C51",
        color: '#fff',
        borderRadius: '10px',
        cursor: 'pointer',
        padding: '4px 12px',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        letterSpacing: '0.02857em',
        fontWeight: '600',
        "&:hover": {
            background: '#965A3E !important',
        }
    },
    containerSupport: {
      padding: '0 200px',
      margin: '70px 0 500px 0',
        '@media (max-width: 950px)' : {
            padding: '0',
        },
    },
    subContainerSupport: {
      padding: '0 100px',
        '@media (max-width: 1100px)' : {
            padding: '0'
        },
    },
})


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 3,
};

const ModalNewTask = ({showModal, setShowModal}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setShowModal(false);

    const classes = useStyles();
    const [value, setValue] = React.useState('remotely');
    const dispatch = useDispatch();
    const {header} = useSelector(state => state.header)
    const {category} = header;
    const [index, setIndex] = useState(0)
    const newCategory = [...category].map((option) => ({
        key: option.id,
        value: option. category_name ? option. category_name : "",
        label: option. category_name,
    }));

    const newSubCategories = [...category[index]?.subcategories].map((option) => ({
        key: option.id,
        value: option.subcategory_name ? option.subcategory_name : "",
        label: option.subcategory_name,
    }));

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{border: 'none'}}
            >
                <Box style={{maxHeight: '100%', overflow: 'auto'}} sx={{ ...style}}>
                    {open && <ModalForAuth open={open} setOpen={setOpen} />}
                    <Box className={classes.root}>
                        <HeaderModal title={'???????????????? ?????????? ??????????????'} close={handleClose} />
                        <Formik
                            initialValues={{
                                category_name: '',
                                subcategory_name: '',
                                task_description: '',
                                region: '',
                                address: '',
                                task_img: [],
                                task_starttime: '',
                                task_finishtime: '',
                                task_location: value,
                                title: '',
                                price_from: '',
                                price_to: ''
                            }}
            validationSchema={AddNewOrderValidation}
            onSubmit={async (values, action) => {
                //console.log(values, 'values')
                dispatch(AddNewTask(values))
                action.resetForm()
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
                    <Grid container spacing={4} >
                        <Grid  item sm={12} md={7}>
                            <Box>
                                <CustomInput
                                    name={'title'}
                                    label={'????????????????'}
                                    handleChange={handleChange}
                                    value={values.title}
                                    touched={touched.title}
                                    error={errors.title}
                                />
                            </Box>
                            <Box style={{marginBottom: '40px'}}>
                                <CustomSelect
                                    name={'category_name'}
                                    label={'?????????????????? ??????????*'}
                                    handleChange={(val) => {
                                        setFieldValue('category_name', val)
                                    }}
                                    setIndex={setIndex}
                                    value={values.category_name}
                                    touched={touched.category_name}
                                    error={errors.category_name}
                                    arr={newCategory}
                                />
                            </Box>
                            <Box style={{marginBottom: '40px'}}>
                                <CustomSelect
                                    label={'????????????????????????*'}
                                    name={'subcategory_name'}
                                    handleChange={(val) => {
                                        setFieldValue('subcategory_name', val)
                                    }}
                                    value={values.subcategory_name}
                                    touched={touched.subcategory_name}
                                    error={errors.subcategory_name}
                                    arr={newSubCategories}
                                />
                            </Box>
                            <CustomInput
                                label={'????????????????'}
                                name={'task_description'}
                                value={values.task_description}
                                handleChange={handleChange}
                                touched={touched.task_description}
                                error={errors.task_description}
                                textArea={true}
                            />
                            <Box>
                                <input
                                    color="primary"
                                    type="file"
                                    multiple
                                    onChange={(e) => {
                                        setFieldValue('task_img', e.target.files)
                                    }}
                                    id="icon-button-file"
                                    accept=".png, .jpg, .jpeg, .gif, .csv, .txt, .pdf."
                                    style={{ display: 'none' }}
                                />
                                <label style={{display: 'flex', marginTop: '10px', justifyContent: 'flex-start', alignItems: 'center'}} htmlFor="icon-button-file">
                                    <DownloadSvg />
                                    <p style={{fontSize: '15px', margin: 0, paddingLeft: '20px', color: '#000'}}>???????????????????? ????????</p>
                                </label>
                                {touched.task_img && errors.task_img && <p style={{
                                    fontSize: '15px',
                                    color: '#F44336',
                                    margin: '5px 0 0 0',
                                }}>{errors.task_img}</p>}
                            </Box>
                            <Box style={{marginTop: value === 'client' ? '10px' : '10px'}}>
                                <BlueButton disabledColor={'#445E77'}
                                            backgroundColor={'#445E77'} action={handleSubmit} label={'???????????????? ??????????'} />
                                {/*<Button onClick={handleSubmit} variant={'outlined'}>?????????????? ??????????????????????</Button>*/}
                            </Box>

                        </Grid>
                        <Grid  item sm={12} md={5} >
                            <Box className={classes.boxInput} >
                                <FormControl component="fieldset">
                                    <FormLabel style={{margin: '-15px 0 10px 0'}} className={classes.inputText} component="legend">?????????? ???????????????????? ????????????</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue="remotely"
                                        name="task_location"
                                    >
                                        <FormControlLabel control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                              style={{color: '#4B9A2D'}} size={'small'} onChange={(e) => {
                                            setValue('remotely')
                                           setFieldValue('task_location', e.target.value)
                                        }} value="remotely" />} label="????????????????????????" />
                                        <FormControlLabel  control={<Radio  onChange={(e) => {
                                            setValue('executor')
                                            setFieldValue('task_location', e.target.value)
                                        }} classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}} size={'small'}   value="executor" />} label="?? ??????????????????????" />
                                        <FormControlLabel  control={<Radio classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}}  size={'small'}
                                             onChange={(e) => {
                                                 setValue('client')
                                            setFieldValue('task_location', e.target.value)
                                        }} value="client" />} label="?? ??????????????" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <p style={{marginBottom: '15px'}} className={classes.inputText}>???????????????? ???????? ???????????? ??????????</p>
                            <Box style={{marginBottom: '20px'}}>
                                <Box style={{marginBottom: '20px'}}>
                                    <CustomDatePicker
                                        value={values.task_starttime}
                                        name={'task_starttime'}
                                        fun={(val)=>setFieldValue('task_starttime',val)}
                                        touched={touched.task_starttime}
                                        errors={errors.task_starttime}
                                    />
                                </Box>
                                <CustomDatePicker
                                    value={values.task_finishtime}
                                    name={'task_finishtime'}
                                    fun={(val)=>setFieldValue('task_finishtime',val)}
                                    touched={touched.task_finishtime}
                                    errors={errors.task_finishtime}
                                />

                            </Box>
                            <CustomInputIcon
                                name={'price_from'}
                                label={'????????????'}
                                value={values.price_from}
                                handleChange={handleChange}
                                touched={touched.price_from}
                                error={errors.price_from}
                                icon={'??????.'}
                                placeholder={'????'}
                            />
                            <CustomInputIcon
                                name={'price_to'}
                                label={'????????????'}
                                value={values.price_to}
                                handleChange={handleChange}
                                touched={touched.price_to}
                                error={errors.price_to}
                                icon={'??????.'}
                                placeholder={'????'}
                            />

                        </Grid>
                    </Grid>
                    <Box style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        {value === 'client' && <Box style={{width:'56%'}}>
                                <CustomInput
                                    label={'????????????'}
                                    name={'region'}
                                    value={values.region}
                                    handleChange={handleChange}
                                    touched={touched.region}
                                    error={errors.region}
                                />
                            </Box>}
                            {value === 'client' && <Box style={{width:'39%'}}>
                                <CustomInput
                                    label={'??????????'}
                                    name={'address'}
                                    value={values.address}
                                    handleChange={handleChange}
                                    touched={touched.address}
                                    error={errors.address}
                                />
                            </Box>}
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
