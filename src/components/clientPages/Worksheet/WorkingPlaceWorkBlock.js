import React from 'react';
import {Box, Typography} from "@mui/material";
import CustomInput from "../../UI/customInput/CustomInput";
import RangeDatePicker from "../../UI/datePicker/RangeDatePicker";
import AddButton from "../../UI/CustomButtons/AddButton";
import {FieldArray, Form, Formik} from "formik";
import {useInfoCardStyles} from "./InfoCard/InfoCardStyles";
import Button from "@mui/material/Button";
import {AddTaskValidation} from "../../../utils/validation/AddTaskValidation";
import CustomSelect from "../../UI/selects/CustomSelect";
import CustomDatePicker from "../../UI/datePicker/CustomDatePicker";
import CustomInputAddFile from "../../UI/customInputAddFile/CustomInputAddFile";
import {DownloadSvg} from "../../../assets/svg/DownloadSvg";

const WorkingPlaceWorkBlock = ({condition}) => {
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
                                            <CustomInput
                                                name={`workPlace[${index}].place`}
                                                value={work.place}
                                                handleChange={handleChange}
                                            />
                                            <CustomInput
                                                name={`workPlace[${index}].date`}
                                                value={work.date}
                                                handleChange={handleChange}
                                            />
                                        </Box>
                                    )}
                                    <Button onClick={() => push({place: '', date: ''})}>add</Button>
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