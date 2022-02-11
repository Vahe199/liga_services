import React, {useEffect} from "react";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import {FieldArray, Formik} from "formik";
import {Checkbox, FormControlLabel, FormGroup, FormLabel,FormControl, Radio, RadioGroup} from "@mui/material";
import {updateExecutorData} from "../../../../../../store/actions/ProfileDataActions";
import {useDispatch, useSelector} from "react-redux";
import {resetPartReducer} from "../../../../../../store/reducers/ProfileDataReducer";
import get from "lodash/get";
import pick from "lodash/pick";

const EducationBlockEdit = ({editEducationBlock, setEditEducationBlock,setOpenToaster}) => {
    const classes = useInfoCardStyles();
    const dispatch = useDispatch()
    const {profile ={},successWork, error} = useSelector(state => state.profile)
    useEffect(()=>{
        if(successWork){
            setEditEducationBlock(false)
            setOpenToaster(true)
            setTimeout(()=>{
                dispatch(resetPartReducer())
            },7000)
        }
        if(error){
            setOpenToaster(true)
            setTimeout(()=>{
                dispatch(resetPartReducer())
            },7000)
        }
    },[successWork, error])
    const initialValues = {
        executor_educations: get(profile, "executor_educations", [{
            id: "",
            education_type: "",
            education_place: ""
        }]).map(
            (education) =>
                pick(education, ["education_type","education_place"])
        ),
        executor_education_certificates:get(profile, "executor_education_certificates", [{id:"",certificate_base:""}]).map(
            (certificates) =>
                pick(certificates, ["certificate_base"])
        )
    }
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, action) => {
                    // setEditEducationBlock(false)
                    console.log(values, 'values')
                    dispatch(updateExecutorData(values))
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
                                        size={"small"} sx={{minWidth:0,padding:0,marginLeft:5}}>
                                    <FileSVG color={'#808080'}/>
                                </Button>
                            </Box>
                            <CustomDivider />
                            <Typography variant={"h5"}>
                                Образование
                            </Typography>
                            <Box>
                                <FormControl component="fieldset">
                                    <FormLabel style={{margin: '-15px 0 10px 0'}} className={classes.inputText}
                                               component="legend">Место выполнения работы</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue={`${values.executor_educations[0].education_type}`}
                                        name="executor_educations[0].education_type"
                                        style={{display: "flex", flexDirection: "row"}}
                                    >
                                        <FormControlLabel
                                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                                            style={{color: '#4B9A2D'}} size={'small'} onChange={(e) => {
                                                setFieldValue('executor_educations[0].education_type', e.target.value)
                                            }} value="Начальное общее"/>} label="Начальное общее"/>
                                        <FormControlLabel control={<Radio onChange={(e) => {
                                            setFieldValue('executor_educations[0].education_type', e.target.value)
                                        }} classes={{root: classes.radio, checked: classes.checked}}
                                                                          style={{color: '#4B9A2D'}} size={'small'}
                                                                          value="Основное общее"/>}
                                                          label="Основное общее"/>
                                        <FormControlLabel
                                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                                            style={{color: '#4B9A2D'}} size={'small'}
                                                            onChange={(e) => {
                                                                setFieldValue('executor_educations[0].education_type', e.target.value)
                                                            }} value="Среднее общее"/>} label="Среднее общее"/>
                                        <FormControlLabel
                                            control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                                            style={{color: '#4B9A2D'}} size={'small'}
                                                            onChange={(e) => {
                                                                setFieldValue('executor_educations[0].education_type', e.target.value)
                                                            }} value="Высшее"/>} label="Высшее"/>
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Typography variant={"h5"}>
                                Образовательное учереждение
                            </Typography>

                            <Box className={classes.singleInput}>
                                <CustomInput
                                    name={'executor_educations[0].education_place'}
                                    value={values.executor_educations[0].education_place}
                                    handleChange={(val)=>setFieldValue('executor_educations[0].education_place',val)}
                                />
                            </Box>
                            <Typography variant={"h5"}>
                                Сертификаты
                            </Typography>
                            <FieldArray name={'executor_education_certificates'}>
                                {({push, remove}) => (
                                    <CustomImageList education={true} imageData={values.executor_education_certificates} push={(val) => push({certificate_base: val})} remove={remove}
                                    />

                                )}
                            </FieldArray>
                        </Box>
                    </form>
                )}
            </Formik>

        </Card>
    )
}

export default EducationBlockEdit;
