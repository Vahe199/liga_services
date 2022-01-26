import React from "react";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import {Formik} from "formik";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";


const EducationBlockEdit = ({editEducationBlock, setEditEducationBlock}) => {
    const classes = useInfoCardStyles();

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={{ education_type: [], education_name: '', description: '', file: ''}}
                onSubmit={async (values, action) => {
                    setEditEducationBlock(false)
                    //console.log(values, 'values')
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
                        <Box>
                            <Box
                                style={{display: 'flex', alignItems: 'flex-start'}}>
                                <Typography className={classes.title}>
                                    Образование и сертификаты
                                </Typography>
                                <Button type={handleSubmit}
                                        //onClick={() => setEditEducationBlock(false)}
                                        size={"small"} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                                    <FileSVG color={'#808080'}/>
                                </Button>
                            </Box>
                            <CustomDivider />
                            <Typography variant={"h5"}>
                                Образование
                            </Typography>
                            <Box>
                                <FormControl component="fieldset" variant="standard">
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Checkbox style ={{
                                                    color: '#4B9A2D'
                                                }} size="small"
                                                          value={values.education_type}
                                                          onChange={handleChange} name="initial" />
                                            }
                                            label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Начальное общее</Typography>}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox style ={{
                                                    color: '#4B9A2D'
                                                }} size="small"
                                                          value={values.education_type} onChange={handleChange} name="basic" />
                                            }
                                            label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Основное общее</Typography>}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox style ={{
                                                    color: '#4B9A2D'
                                                }}  size="small"
                                                          value={values.education_type} onChange={handleChange} name="average" />
                                            }
                                            label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Среднее общее</Typography>}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox style ={{
                                                    color: '#4B9A2D'
                                                }} size="small"
                                                          value={values.education_type} onChange={handleChange} name="higher" />
                                            }
                                            label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Высшее</Typography>}
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Box>
                            <Typography variant={"h5"}>
                                Образовательное учереждение
                            </Typography>

                            <Box className={classes.singleInput}>
                                <CustomInput
                                    name={'education_name'}
                                    value={values.education_name}
                                    handleChange={handleChange}
                                />
                            </Box>
                            <Typography variant={"h5"}>
                                Сертификаты
                            </Typography>
                            <CustomImageList imageData={imageData} />

                            <CustomInputAddFile
                                name={'file'}
                                value={values.file}
                                handleChange={handleChange}
                                svg={<AddButton />}
                            />
                        </Box>
                    </form>
                )}
            </Formik>

        </Card>
    )
}

export default EducationBlockEdit;
