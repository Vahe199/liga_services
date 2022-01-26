import React, {useEffect, useRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomDatePicker from "../../../UI/datePicker/CustomDatePicker";
import {DownloadSvg} from "../../../../assets/svg/DownloadSvg";
import {Formik} from "formik";
import CustomSelect from "../../../UI/selects/CustomSelect";
import CustomInputAddFile from "../../../UI/customInputAddFile/CustomInputAddFile";
import CustomInput from "../../../UI/customInput/CustomInput";
import FormControl from "@mui/material/FormControl";
import CustomInputIcon from "../../../UI/customInput/CustomInputIcon";
import BlueButton from "../../../UI/CustomButtons/BlueButton";
import {useMyOrdersStyles} from "../MyOrders";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useDispatch} from "react-redux";
import {AddNewTask} from "../../../../store/actions/TaskActions";
import {AddNewOrderValidation} from "../../../../utils/validation/AddNewOrderValidation";


const AddNewOrderForm = () => {
    const classes = useMyOrdersStyles();
    const [value, setValue] = useState('remotely');
    const dispatch = useDispatch();
    const [files, setFiles] = useState([])

    const handleFile = (e) => {
        setFiles(e)
    };




    return (
        <Formik
            initialValues={{
                category_name: '', subcategory_name: '', task_description: '',
                task_img: [], region: '', address: '', task_starttime: '',
                task_finishtime: '', task_location: value, title: '', price_from: '', price_to: ''
            }}
            //validationSchema={() => AddNewOrderValidation(value)}
            onSubmit={async (values, action) => {
                console.log(values, 'values')
                //console.log(files, 'ref.current')
                //dispatch(AddNewTask(values))
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
                        <Grid  item sm={12} lg={6}>
                            <Box>
                                <CustomInput
                                    name={'title'}
                                    label={'Название'}
                                    handleChange={handleChange}
                                    value={values.title}
                                    touched={touched.title}
                                    error={errors.title}
                                />
                            </Box>
                            <Box style={{marginBottom: '40px'}}>
                                <CustomSelect
                                    name={'category_name'}
                                    label={'Категория услуг*'}
                                    handleChange={handleChange}
                                    value={values.category_name}
                                    touched={touched.category_name}
                                    error={errors.category_name}
                                />
                            </Box>
                            <Box style={{marginBottom: '40px'}}>
                                <CustomSelect
                                    label={'Подкатегория*'}
                                    name={'subcategory_name'}
                                    value={values.subcategory_name}
                                    handleChange={handleChange}
                                    touched={touched.subcategory_name}
                                    error={errors.subcategory_name}
                                />
                            </Box>
                            <CustomInput
                                label={'Описание'}
                                name={'task_description'}
                                value={values.task_description}
                                handleChange={handleChange}
                                touched={touched.task_description}
                                error={errors.task_description}
                                textArea={true}
                            />
                            <Box>
                                <CustomInputAddFile
                                    name={'task_img'}
                                    value={values.task_img}
                                    handleChange={handleChange}
                                    label={'Прикрепить файл'}
                                    svg={<DownloadSvg />}
                                />
                            </Box>
                            {value === 'client' && <Box style={{marginTop: '20px'}}>
                                <CustomInput
                                    label={'Регион'}
                                    name={'region'}
                                    value={values.region}
                                    handleChange={handleChange}
                                    touched={touched.region}
                                    error={errors.region}
                                />
                                <CustomInput
                                    label={'Адрес'}
                                    name={'address'}
                                    value={values.address}
                                    handleChange={handleChange}
                                    touched={touched.address}
                                    error={errors.address}
                                />
                            </Box>}

                            <Box style={{marginTop: value === 'client' ? '10px' : '10px'}}>
                                <BlueButton action={handleSubmit} label={'Профиль исполнителя'} />
                                {/*<Button onClick={handleSubmit} variant={'outlined'}>Профиль исполнителя</Button>*/}
                            </Box>

                        </Grid>
                        <Grid  item sm={12} lg={6}>
                            <Box className={classes.boxInput}>
                                <FormControl component="fieldset">
                                    <FormLabel style={{margin: '-15px 0 10px 0'}} className={classes.inputText} component="legend">Место выполнения работы</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue="remotely"
                                        name="task_location"
                                    >
                                        <FormControlLabel control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                                                          style={{color: '#4B9A2D'}} size={'small'} onChange={(e) => {
                                            setValue('remotely')
                                            setFieldValue('task_location', e.target.value)
                                        }} value="remotely" />} label="Дистанционно" />
                                        <FormControlLabel  control={<Radio  onChange={(e) => {
                                            setValue('executor')
                                            setFieldValue('task_location', e.target.value)
                                        }} classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}} size={'small'}   value="executor" />} label="У исполнителя" />
                                        <FormControlLabel  control={<Radio classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}}  size={'small'}
                                                                           onChange={(e) => {
                                                                               setValue('client')
                                                                               setFieldValue('task_location', e.target.value)
                                                                           }} value="client" />} label="У клиента" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <p style={{marginBottom: '15px'}} className={classes.inputText}>Желаемый срок начала работ</p>
                            <Box style={{marginBottom: '20px', width: '60%'}}>
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
                                {/*<RangeDatePicker*/}
                                {/*    value={values.time_to}*/}
                                {/*    name={'time_to'}*/}
                                {/*    touched={touched.time_to}*/}
                                {/*    errors={errors.time_to}*/}
                                {/*    fun={(newValue) => setFieldValue('time_to', newValue)}*/}

                                {/*/>*/}
                            </Box>
                            <CustomInputIcon
                                name={'price_from'}
                                label={'Оплата'}
                                value={values.price_from}
                                handleChange={handleChange}
                                touched={touched.price_from}
                                error={errors.price_from}
                                icon={'Руб.'}
                                placeholder={'От'}
                                width={'60%'}
                            />
                            <CustomInputIcon
                                name={'price_to'}
                                label={'Оплата'}
                                value={values.price_to}
                                handleChange={handleChange}
                                touched={touched.price_to}
                                error={errors.price_to}
                                icon={'Руб.'}
                                placeholder={'До'}
                                width={'60%'}
                            />
                        </Grid>
                    </Grid>

                </form>
            )}
        </Formik>
    )
}

export default AddNewOrderForm;
