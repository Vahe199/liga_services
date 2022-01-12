import React from "react";
import Card from "@mui/material/Card";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import CustomSelect from "../../../../../UI/selects/CustomSelect";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import SelectWithCheckbox from "../../../../../UI/selects/SelectWithCheckbox";
import {options} from "../../../../../../utils/data/selectWithCheckbox/DataSelectWithCheckbox";
import {FieldArray, Formik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const DistrictsAndAddressesEdit = ({editAddress, setEditAddress}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={{
                    region: '', address: ''
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
                        <Box
                            style={{display: 'flex', alignItems: 'flex-start'}}>
                            <Typography className={classes.title}>
                                Районы и адреса
                            </Typography>
                            <Button type={"submit"}
                                    onClick={() => setEditAddress(false)}
                                    size={"small"} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                                <FileSVG color={'#808080'}/>
                            </Button>

                        </Box>
                        <CustomDivider />
                        <Typography variant={"h5"}>
                            Регион
                        </Typography>

                        <Box style={{width: '200px', marginBottom: '40px'}}>
                            <CustomSelect
                                name={'region'}
                                handleChange={handleChange}
                                value={values.region}
                            />
                        </Box>

                        <Typography variant={"h5"}>Адреса</Typography>

                        <Box style={{width: '70%'}}>
                            <CustomInput
                                name={'address'}
                                handleChange={handleChange}
                                value={values.address}
                            />
                        </Box>

                        <Typography variant={"h5"}>Районы выезда к клиентам</Typography>
                        <Box style={{width: '200px', marginBottom: '40px'}}>
                            <SelectWithCheckbox options={options} />
                        </Box>
                    </form>
                )}
            </Formik>
        </Card>
    );
};

export default DistrictsAndAddressesEdit;
