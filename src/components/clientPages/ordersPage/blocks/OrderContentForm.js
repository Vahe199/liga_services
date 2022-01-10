import React, {useState} from 'react';
import {Formik} from "formik";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import Divider from "@mui/material/Divider";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomInput from "../../../UI/customInput/CustomInput";
import Switch from '@mui/material/Switch';
import CustomDatePicker from "../../../UI/datePicker/CustomDatePicker";
import CustomInputIcon from "../../../UI/customInput/CustomInputIcon";
import Button from "@mui/material/Button";


const OrderContentForm = ({setShowModal}) => {
    const classes = useOrderAboutStyles();
    return (
        <Formik
            initialValues={{ payment_from: '', payment_to: '', agree: 'N', time_to: new Date(), time_from: new Date(), offer: '' }}
            onSubmit={(values, action) => {
                console.log(values, 'values')
                setShowModal(true)
                action.resetForm()
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
                            direction={{md: 'column', lg: 'row'}}
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={4}
                        >
                            <Box>
                                <Typography variant={'h4'}>
                                    Стоимость услуги
                                </Typography>
                                <Box style={{display: 'flex', margin: '10px 0'}}>
                                    <Box style={{paddingRight: '10px'}}>
                                        <CustomInputIcon
                                            name={'payment_from'}
                                            value={values.payment_from}
                                            handleChange={handleChange}
                                            placeholder={'От'}
                                            width={'70%'}
                                            icon={'Руб.'}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomInputIcon
                                            name={'payment_to'}
                                            value={values.payment_to}
                                            handleChange={handleChange}
                                            placeholder={'До'}
                                            width={'70%'}
                                            icon={'Руб.'}
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
                            <Box>
                                <Typography variant={'h4'}>Предлогать свои даты</Typography>
                                <Box style={{display: 'flex', margin: '10px 0'}}>
                                    <Box style={{paddingRight: '10px'}}>
                                        <CustomDatePicker
                                            value={values.time_from}
                                            fun={(val) => setFieldValue('time_from',val)}
                                            name={'time_from'}
                                        />
                                    </Box>
                                    <CustomDatePicker
                                        value={values.time_to}
                                        name={'time_to'}
                                        fun={(val) => setFieldValue('time_to',val)}
                                    />
                                </Box>
                            </Box>
                        </Stack>
                        <Box style={{margin: '20px 0'}}>
                            <Typography style={{marginBottom: '20px'}} variant={'h4'}>
                                Предложение заказчику
                            </Typography>
                            <CustomInput
                                name={'offer'}
                                textArea={true}
                                value={values.offer}
                                handleChange={handleChange}
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