import React, {useEffect, useRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomDatePicker from "../../../UI/datePicker/CustomDatePicker";
import {DownloadSvg} from "../../../../assets/svg/DownloadSvg";
import {FieldArray, Formik} from "formik";
import CustomSelect from "../../../UI/selects/CustomSelect";
import CustomInputAddFile from "../../../UI/customInputAddFile/CustomInputAddFile";
import CustomInput from "../../../UI/customInput/CustomInput";
import FormControl from "@mui/material/FormControl";
import CustomInputIcon from "../../../UI/customInput/CustomInputIcon";
import BlueButton from "../../../UI/CustomButtons/BlueButton";
import {useMyOrdersStyles} from "../MyOrders";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AddNewTask} from "../../../../store/actions/TaskActions";
import {AddNewOrderValidation} from "../../../../utils/validation/AddNewOrderValidation";


const AddNewOrderForm = ({setOpenToaster}) => {
    const classes = useMyOrdersStyles();
    const [value, setValue] = useState('remotely');
    const {loadBtn} = useSelector(state => state.task)
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

    const FILE_SIZE = 160 * 1024;
    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
    ];


    return (
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
                await dispatch(AddNewTask(values))
               // await setOpenToaster(true)
                //action.resetForm()
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
                        <Grid style={{width: '100%'}}  item sm={12} lg={6}>
                            <Box>
                                <CustomInput
                                    name={'title'}
                                    label={'????????????????'}
                                    handleChange={(val) => setFieldValue('title', val)}
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
                                handleChange={(val) => setFieldValue('task_description', val)}
                                touched={touched.task_description}
                                error={errors.task_description}
                                textArea={true}
                            />
                            <Box>
                                {/*<FieldArray name={'task_img'}>*/}
                                {/*    {({push}) => (*/}
                                {/*        <Box>*/}
                                {/*            <input*/}
                                {/*                color="primary"*/}
                                {/*                //name={`task_img`}*/}
                                {/*                type="file"*/}
                                {/*                multiple*/}
                                {/*                // onChange={(e) => {*/}
                                {/*                //     setFieldValue(`task_img`, e.target.files)*/}
                                {/*                // }}*/}
                                {/*                //onChange={(e) => push(e.target.files[0])}*/}

                                {/*                onChange={(e) => {*/}
                                {/*                    //setArrFiles(e.target.files)*/}
                                {/*                    //setFieldValue('task_img', e.target.files)*/}
                                {/*                    for(let i = 0; i <= e.target.files.length; i++){*/}
                                {/*                        setArrFiles(e.target.files[i])*/}
                                {/*                        //setFieldValue(`task_img${index}`, e.target.files[i])*/}
                                {/*                        //handleChange(i)*/}
                                {/*                        //push(e.target.files[i])*/}
                                {/*                        //push(e.target.files[i])*/}
                                {/*                        //console.log(e.target.files[i], "e.target.files")*/}
                                {/*                        // arrayHelpers.insert(i)*/}
                                {/*                    }*/}
                                {/*                }}*/}
                                {/*                // onChange={(e) => {*/}
                                {/*                //     // setFieldValue('task_img',e.target.files[0])*/}
                                {/*                //     for(let i; i <= e.target.files.length; i++){*/}
                                {/*                //         //push(e.target.files[i])*/}
                                {/*                //         console.log(e.target.files[i], "e.target.files")*/}
                                {/*                //     }*/}
                                {/*                //     //console.log(e.target.files, "e.target.files")*/}
                                {/*                // }}*/}
                                {/*                id="icon-button-file"*/}
                                {/*                accept=".png, .jpg, .jpeg, .gif, .csv, .txt, .pdf"*/}
                                {/*                style={{ display: 'none' }}*/}
                                {/*            />*/}
                                {/*            <label style={{display: 'flex', marginTop: '10px', justifyContent: 'flex-start', alignItems: 'center'}} htmlFor="icon-button-file">*/}
                                {/*                <DownloadSvg />*/}
                                {/*                <p style={{fontSize: '15px', margin: 0, paddingLeft: '20px', color: '#000'}}>???????????????????? ????????</p>*/}
                                {/*            </label>*/}
                                {/*            {touched.task_img && errors.task_img && <p style={{*/}
                                {/*                fontSize: '15px',*/}
                                {/*                color: '#F44336',*/}
                                {/*                margin: '5px 0 0 0',*/}
                                {/*            }}>{errors.task_img}</p>}*/}
                                {/*        </Box>*/}
                                {/*    )}*/}
                                {/*</FieldArray>*/}
                                {/*<input*/}
                                {/*    type={'file'}*/}
                                {/*    //name={'task_img'}*/}
                                {/*    onChange={(e) => {*/}
                                {/*        setFieldValue('task_img', e.target.files)*/}
                                {/*    }}*/}
                                {/*    multiple*/}
                                {/*/>*/}
                                <input
                                    color="primary"
                                    type="file"
                                    multiple
                                    onChange={(e) => {
                                        setFieldValue('task_img', e.target.files)
                                    }}
                                    id="icon-button-file"
                                    accept=".png, .jpg, .jpeg, .gif, .csv, .txt, .pdf"
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
                            {value === 'client' && <Box style={{marginTop: '20px'}}>
                                <CustomInput
                                    label={'????????????'}
                                    name={'region'}
                                    value={values.region}
                                    handleChange={(val) => setFieldValue('region', val)}
                                    touched={touched.region}
                                    error={errors.region}
                                />
                                <CustomInput
                                    label={'??????????'}
                                    name={'address'}
                                    value={values.address}
                                    handleChange={(val) => setFieldValue('address', val)}
                                    touched={touched.address}
                                    error={errors.address}
                                />
                            </Box>}

                            <Box style={{marginTop: value === 'client' ? '10px' : '10px'}}>
                                <BlueButton action={() => {
                                    handleSubmit();
                                    console.log(errors, 'errors')
                                    console.log(values, 'values')
                                }}
                                            backgroundColor={'#445E77'}
                                            disabledColor={'#445e77c4'}
                                            load={loadBtn}
                                            label={'???????????????? ??????????'} />
                                {/*<Button onClick={handleSubmit} variant={'outlined'}>?????????????? ??????????????????????</Button>*/}
                            </Box>

                        </Grid>
                        <Grid  item sm={12} lg={6}>
                            <Box className={classes.boxInput}>
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
                                    label={'????????????'}
                                    value={values.price_from}
                                    handleChange={handleChange}
                                    touched={touched.price_from}
                                    error={errors.price_from}
                                    icon={'??????.'}
                                    placeholder={'????'}
                                    width={'60%'}
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
