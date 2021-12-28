import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {FormControl} from "@mui/material";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import Box from "@mui/material/Box";
import CustomDatePicker from "../../../UI/common/datePicker/CustomDatePicker";
import {DownloadSvg} from "../../../../assets/svg/DownloadSvg";
import Button from "@mui/material/Button";
import {Formik} from "formik";
import {useMyOrdersStyles} from "../MyOrders";
import CustomSelect from "../../../UI/common/customSelect/CustomSelect";
import CustomInputAddFile from "../../../UI/common/customInputAddFile/CustomInputAddFile";
import CustomInput from "../../../UI/common/customInput/CustomInput";
import {AddNewOrderValidation} from "../../../../utils/validation/AddNewOrderValidation";


const AddNewOrderForm = () => {
    const classes = useMyOrdersStyles();
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log(value, 'value')
    }, [value])
    return (
        <Formik
            initialValues={{ nomination: '', Service_category: '', subCategories: '', description: '', file: '', region: '', address: '', time_from: '', time_to: '', payment_from: '', payment_to: '', place_work: value}}
            validationSchema={AddNewOrderValidation}
            onSubmit={async (values, action) => {
                console.log(values, 'values')
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
                    <Grid container spacing={4} >
                        <Grid  item sm={12} lg={6}>
                            <Box style={{marginBottom: '25px'}}>
                                <CustomSelect
                                    name={'nomination'}
                                    label={'Название'}
                                    handleChange={handleChange}
                                    value={values.nomination}
                                    touched={touched.nomination}
                                    error={errors.nomination}
                                    mt={0}
                                />
                            </Box>
                            <Box style={{marginBottom: '25px'}}>
                                <CustomSelect
                                    name={'Service_category'}
                                    label={'Категория услуг*'}
                                    handleChange={handleChange}
                                    value={values.Service_category}
                                    touched={touched.Service_category}
                                    error={errors.Service_category}
                                />
                            </Box>
                            <CustomInput
                                label={'Подкатегория*'}
                                name={'subCategories'}
                                value={values.subCategories}
                                handleChange={handleChange}
                                touched={touched.subCategories}
                                error={errors.subCategories}
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
                            <Box style={{marginTop: '60px'}}>
                                <CustomInputAddFile
                                    name={'file'}
                                    value={values.file}
                                    handleChange={handleChange}
                                    label={'Прикрепить файл'}
                                    svg={<DownloadSvg />}
                                />
                            </Box>
                            {value === 'client' && <Box>
                                <CustomInput
                                    label={'Регион'}
                                    name={'region'}
                                    value={values.region}
                                    handleChange={handleChange}
                                    touched={touched.region}
                                    error={errors.region}
                                    mb={25}
                                />
                                <CustomInput
                                    label={'Адрес'}
                                    name={'address'}
                                    value={values.address}
                                    handleChange={handleChange}
                                    touched={touched.address}
                                    error={errors.address}
                                    mb={25}
                                />
                            </Box>}

                            <Box style={{marginTop: value ? '50px' : '10px'}}>
                                <Button onClick={handleSubmit} variant={'outlined'}>Профиль исполнителя</Button>
                            </Box>

                        </Grid>
                        <Grid  item sm={12} lg={6}>
                            <Box className={classes.boxInput}>
                                <FormControl component="fieldset">
                                    <FormLabel style={{margin: '-15px 0 10px 0'}} className={classes.inputText} component="legend">Место выполнения работы</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue="remotely"
                                        name="place_work"
                                    >
                                        <FormControlLabel control={<Radio classes={{root: classes.radio, checked: classes.checked}} size={'small'} onChange={(e) => {
                                            setValue('remotely')
                                           setFieldValue('place_work', e.target.value)
                                        }} value="remotely" />} label="Дистанционно" />
                                        <FormControlLabel  control={<Radio  onChange={(e) => {
                                            setValue('executor')
                                            setFieldValue('place_work', e.target.value)
                                        }} classes={{root: classes.radio, checked: classes.checked}} size={'small'}   value="executor" />} label="У исполнителя" />
                                        <FormControlLabel  control={<Radio classes={{root: classes.radio, checked: classes.checked}}  size={'small'}
                                             onChange={(e) => {
                                                 setValue('client')
                                            setFieldValue('place_work', e.target.value)
                                        }} value="client" />} label="У клиента" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <p style={{marginBottom: '15px'}} className={classes.inputText}>Желаемый срок начала работ</p>
                            <Box>
                                <Box style={{marginBottom: '10px'}}>
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
                            <CustomInput
                                name={'payment_from'}
                                label={'Оплата'}
                                value={values.payment_from}
                                handleChange={handleChange}
                                touched={touched.payment_from}
                                error={errors.payment_from}
                                icon={true}
                                placeholder={'От'}
                                mb={25}
                            />
                            <CustomInput
                                name={'payment_to'}
                                value={values.payment_to}
                                handleChange={handleChange}
                                touched={touched.payment_to}
                                error={errors.payment_to}
                                icon={true}
                                placeholder={'До'}
                            />
                        </Grid>
                    </Grid>

                </form>
            )}
        </Formik>
    )
}

export default AddNewOrderForm;