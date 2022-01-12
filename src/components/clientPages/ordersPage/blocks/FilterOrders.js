import React, {useState} from "react";
import {Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {SelectSvg} from "../../../../assets/svg/SelectSvg";
import {DeleteSvg} from "../../../../assets/svg/DeleteSvg";
import Card from "@mui/material/Card";
import {useOrderStyles} from "../../../../globalStyles/OrderStyles";
import {FieldArray, Formik} from "formik";
import CustomSelect from "../../../UI/selects/CustomSelect";
import CustomInput from "../../../UI/customInput/CustomInput";


const FilterOrders = ({setShowFilterBlock, showFilterBlock}) => {
    const classes = useOrderStyles();
    const [showservicesBlock, setShowServicesBlock] = useState(true);
    const [value, setValue] = useState('')
  return (
    <Card sx={{ boxShadow: 2, backgroundColor: '#E1E3E3' }}>
      <Box className={classes.orderSubBlockSpaceBetween}>
        <Typography variant={'h1'}>Фильтр</Typography>
        <Typography onClick={() => setShowFilterBlock(!showFilterBlock)} style={{cursor: 'pointer'}} variant={'h3'}>
          Свернуть
        </Typography>
      </Box>
      <Divider style={{marginBottom: '20px'}} color={'#808080'} />
        {showFilterBlock && <Box>
            <Formik
                initialValues={{
                    services: [
                        {item: 'Создание сайтов'},
                        {item: 'Создание сайтов'},
                        {item: 'Создание сайтов'},
                        {item: 'Создание сайтов'}
                    ],
                    region: '', place_work: value, payment_from: '', payment_to: ''
                }}
                onSubmit={async (values, action) => {
                    console.log(values, 'values')
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      setFieldValue
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween}>
                            <Typography variant={'h2'}>Услуги</Typography>
                            <Box onClick={() => setShowServicesBlock(!showservicesBlock)} style={{transform: showservicesBlock ? "rotate(180deg)" : "rotate(0deg)", cursor: 'pointer'}}>
                                <SelectSvg/>
                            </Box>
                        </Box>
                        {showservicesBlock && <FieldArray name={'services'}>
                            {({push, remove}) => (
                                <Box>
                                    {values.services.map((item, index) => (
                                            item.item !== '' ? <Box style={{marginBottom: '10px'}} key={index}
                                                                    className={classes.orderSubBlockSpaceBetween}>
                                                <Typography style={{paddingRight: '5px'}}
                                                            variant={'h4'}>{item.item}</Typography>
                                                <Box style={{cursor: 'pointer'}} onClick={() => remove(index)}>
                                                    <DeleteSvg/>
                                                </Box>
                                            </Box> : ''
                                        )
                                    )}
                                    <Box className={classes.orderSubBlockSpaceBetween}>
                                        <Button variant={'contained'}>
                                            Как в анкете
                                        </Button>
                                        <Button variant={'contained'}>
                                            Добавить
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </FieldArray>}
                        <Box style={{margin: '10px 0 40px 0'}}>
                            <Typography style={{marginBottom: '10px'}} variant={'h2'}>Регион</Typography>
                            <CustomSelect
                                name={'region'}
                                handleChange={handleChange}
                                value={values.region}
                                mt={0}
                            />
                        </Box>
                        <Box style={{margin: '80px 0 40px 0'}}>
                            <Typography style={{marginBottom: '10px'}} variant={'h2'}>Место встречи</Typography>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="remotely"
                                    name="place_work"
                                >
                                    <FormControlLabel control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                                                      style={{color: '#4B9A2D'}} size={'small'} onChange={(e) => {
                                        setValue('remotely')
                                        setFieldValue('place_work', e.target.value)
                                    }} value="remotely" />} label="Дистанционно" />
                                    <FormControlLabel  control={<Radio  onChange={(e) => {
                                        setValue('executor')
                                        setFieldValue('place_work', e.target.value)
                                    }} classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}} size={'small'}   value="executor" />} label="У исполнителя" />
                                    <FormControlLabel  control={<Radio classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}}  size={'small'}
                                                                       onChange={(e) => {
                                                                           setValue('client')
                                                                           setFieldValue('place_work', e.target.value)
                                                                       }} value="client" />} label="У клиента" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box style={{margin: '10px 0 40px 0'}}>
                            <Typography style={{marginBottom: '10px'}} variant={'h2'}>Где искать</Typography>
                            <Button style={{width: '100%'}} variant="contained">
                                Добавить
                            </Button>
                        </Box>
                        <Box style={{margin: '10px 0 40px 0'}}>
                            <Typography style={{marginBottom: '10px'}} variant={'h2'}>Ставка, руб. за усл.</Typography>
                            <Box className={classes.orderSubBlockSpaceBetween}>
                                <Box style={{width: '90%'}}>
                                    <CustomInput
                                        name={'payment_from'}
                                        width={'90%'}
                                        value={values.payment_from}
                                        handleChange={handleChange}
                                        placeholder={'От'}
                                    />
                                </Box>
                                <Box style={{width: '90%'}}>
                                    <CustomInput
                                        name={'payment_to'}
                                        width={'90%'}
                                        value={values.payment_to}
                                        handleChange={handleChange}
                                        placeholder={'До'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>}

      </Card>
  );
};

export default FilterOrders;
