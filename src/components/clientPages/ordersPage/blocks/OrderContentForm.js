import React from 'react';
import {Formik} from "formik";
import Divider from "@mui/material/Divider";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomInput from "../../../UI/customInput/CustomInput";
import Switch from '@mui/material/Switch';
import CustomInputIcon from "../../../UI/customInput/CustomInputIcon";
import Button from "@mui/material/Button";
import RangeDatePicker from "../../../UI/datePicker/RangeDatePicker";
import Stack from "@mui/material/Stack";
import moment from "moment";
import {useDispatch} from "react-redux";
import {clickOnTask} from "../../../../store/actions/TaskExecutorActions";
import {resetPartReducer} from "../../../../store/reducers/TaskReducer";
import {ClickOnTaskValidation} from "../../../../utils/validation/ClickOnTaskValidation";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";


const OrderContentForm = ({setShowModal, state, setOpenToaster}) => {
    const classes = useOrderAboutStyles();
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{ service_price_from: '', offer_to_employer: '', service_price_to: '', startdate_from: '', start_date_to: '', task_id: state?.id }}
            validationSchema={ClickOnTaskValidation}
            onSubmit={(values, action) => {
                //console.log(values, 'values')
                dispatch(clickOnTask(values))
                setOpenToaster(true)
                setTimeout(() => {
                    dispatch(resetPartReducer())
                    setShowModal(false)
                }, 7000)
                //setShowModal(true)
                //action.resetForm()
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
                    <CustomDivider />
                    <Box style={{padding: '30px'}}>
                        <Stack
                            direction={{xs: 'column', sm: 'column', md: 'column', lg: 'row'}}
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={4}
                        >
                            <Box style={{padding: '0 10px'}}>
                                <Typography variant={'h4'}>
                                    Стоимость услуги
                                </Typography>
                                <Box style={{display: 'flex', margin: '10px 0'}}>
                                    <Box style={{paddingRight: '10px'}}>
                                        <CustomInputIcon
                                            name={'service_price_from'}
                                            value={values.service_price_from}
                                            handleChange={handleChange}
                                            placeholder={'От'}
                                            width={'100%'}
                                            icon={'Руб.'}
                                            touched={touched.service_price_from}
                                            error={errors.service_price_from}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomInputIcon
                                            name={'service_price_to'}
                                            value={values.service_price_to}
                                            handleChange={handleChange}
                                            placeholder={'До'}
                                            width={'100%'}
                                            icon={'Руб.'}
                                            touched={touched.service_price_to}
                                            error={errors.service_price_to}
                                        />
                                    </Box>
                                </Box>
                                <Box className={classes.orderSubBlockSpaceBetween}>
                                    <Typography variant={'h4'}>Указать точную стоимость</Typography>
                                    <Switch
                                        onChange={handleChange}
                                        name="agree"
                                        value="Y"
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Box>
                            </Box>
                            <Box style={{padding: '0 10px'}}>
                                <Typography variant={'h4'}>Предлогать свои даты</Typography>
                                <Box style={{display: 'flex', margin: '10px 0'}}>
                                    <Box style={{paddingRight: '10px'}}>
                                        {/*<RangeDatePicker*/}
                                        {/*    value={values.time}*/}
                                        {/*    fun={(newValue) => setFieldValue('time', newValue)}*/}
                                        {/*/>*/}
                                        <RangeDatePicker
                                            value={[values.startdate_from, values.start_date_to]}
                                            fun={(newValue) => {
                                                setFieldValue('startdate_from',newValue[0] ? moment(newValue[0]).format("YYYY-MM-DD") : "")
                                                setFieldValue('start_date_to',newValue[1] ? moment(newValue[1]).format("YYYY-MM-DD") : "")
                                            }}
                                        />
                                        {touched.startdate_from && errors.startdate_from && touched.start_date_to && errors.start_date_to && <p style={{
                                            fontSize: '15px',
                                            color: '#F44336',
                                            margin: '5px 0 0 0',
                                        }}>{errors.start_date_to}</p>}
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                        <Box style={{margin: '20px 0'}}>
                            <Typography style={{marginBottom: '20px'}} variant={'h4'}>
                                Предложение заказчику
                            </Typography>
                            <CustomInput
                                name={'offer_to_employer'}
                                textArea={true}
                                value={values.offer_to_employer}
                                handleChange={(val) => setFieldValue('offer_to_employer', val)}
                                touched={touched.offer_to_employer}
                                error={errors.offer_to_employer}
                            />
                        </Box>
                        <Box style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                            <Box>
                                <Button style={{width: '200px'}} onClick={handleSubmit} variant={'contained'}>
                                    Отправить
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default OrderContentForm;