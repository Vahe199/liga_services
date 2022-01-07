import React from 'react';
import {Box, Typography} from "@mui/material";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import RangeDatePicker from "../../../../../UI/datePicker/RangeDatePicker";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import {FieldArray, Formik} from "formik";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";

const WorkingPlaceWorkBlock = ({condition, setValueTime, valueTime}) => {
    const classes = useInfoCardStyles();
    return (
        <Box>
            <Typography variant={"h5"}>
                Опыт работы
            </Typography>
            <Formik
                initialValues={{
                    workPlace: [
                        {
                            place: '',
                            date: '',
                        },
                    ],
                }}
                onSubmit={async (values, action) => {
                    console.log(values, 'values')
                    action.resetForm()
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      setFieldValue
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <FieldArray name={'workPlace'}>
                            {({push, remove}) => (
                                <Box>
                                    {values.workPlace.map((work, index) =>
                                        <Box>
                                            {!condition ?
                                                <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                                                    <Typography style={{marginRight: '40px'}} variant={'h6'}>
                                                        Фриланс работа, с дома
                                                    </Typography>
                                                    <Typography style={{marginRight: '10px'}} variant={"h3"}>
                                                        От
                                                    </Typography>
                                                    <Typography style={{marginRight: '10px'}} variant={"h6"}>
                                                        10/10/2008
                                                    </Typography>
                                                    <Typography style={{marginRight: '10px'}} variant={"h3"}>
                                                        До
                                                    </Typography>
                                                    <Typography style={{marginRight: '10px'}} variant={"h6"}>
                                                        Сейчас
                                                    </Typography>
                                                </Box>
                                                :
                                                <Box style={{marginBottom: '20px'}}>
                                                    <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                                                        <Box className={classes.singleInput}>
                                                            <CustomInput placeholder={'Место работы'}
                                                                         name={`workPlace[${index}].place`}
                                                                         value={work.place}
                                                                         handleChange={handleChange}
                                                            />
                                                        </Box>
                                                        <Box style={{width: '350px'}}>
                                                            <RangeDatePicker
                                                                value={valueTime}
                                                                fun={(val) => setValueTime(val)}
                                                         />

                                                        </Box>
                                                    </Box>
                                                    <AddButton fun={() => push({place: '', date: ''})} />
                                                </Box>}
                                        </Box>
                                    )}
                                </Box>
                            )}
                        </FieldArray>
                    </form>
                )}
            </Formik>
        </Box>
    );
}

export default WorkingPlaceWorkBlock;