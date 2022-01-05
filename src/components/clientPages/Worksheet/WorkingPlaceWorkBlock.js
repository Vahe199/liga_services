import React from 'react';
import {Box, Typography} from "@mui/material";
import CustomInput from "../../UI/customInput/CustomInput";
import RangeDatePicker from "../../UI/datePicker/RangeDatePicker";
import AddButton from "../../UI/CustomButtons/AddButton";
import * as PropTypes from "prop-types";
import {FieldArray, Form} from "formik";
import {useInfoCardStyles} from "./InfoCard/InfoCardStyles";
import Button from "@mui/material/Button";

function Formik(props) {
    return null;
}

Formik.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.shape({workPlace: PropTypes.any}),
    children: PropTypes.func
};
const WorkingPlaceWorkBlock = ({condition}) => {
    const classes = useInfoCardStyles();
    const initialValues = {
        workPlace: [
            {
                place: '',
                date: '',
            },
        ],
    };
    return (
        <Box>
            <Typography variant={"h5"}>
                Опыт работы
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    console.log(values)
                }}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <FieldArray name="friends">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.workPlace.length > 0 &&
                                    values.workPlace.map((work, index) => (
                                        <Box style={{marginBottom: '20px'}}>
                                            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                                                <Box className={classes.singleInput}>
                                                    <CustomInput
                                                        name={`workPlace.${index}.place`}
                                                        handleChange={handleChange}
                                                        value={`workPlace.${index}.place`}
                                                        placeholder={'Место работы'} />
                                                </Box>
                                                {/*<Box style={{width: '350px'}}>*/}
                                                {/*    <RangeDatePicker   />*/}
                                                {/*</Box>*/}
                                            </Box>
                                            <AddButton />
                                            <Button onClick={() => push({ name: '', email: '' })}>dvsv</Button>
                                        </Box>
                                    ))}
                                </div>
                            )}
                        </FieldArray>
                        <button type="submit">Invite</button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default WorkingPlaceWorkBlock;