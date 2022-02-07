import React, {useEffect, useState} from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {FieldArray, Formik} from "formik";
import CategoriesListEdit from "../blocks/CategoriesList";
import CategoriesList from "../blocks/CategoriesList";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import RangeDatePicker from "../../../../../UI/datePicker/RangeDatePicker";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import {TrashSvg} from "../../../../../../assets/svg/TrashSvg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {choosesProfessionData} from "../../../../../../store/actions/ProfileDataActions";
import get from "lodash/get";
import pick from "lodash/pick";
import {resetPartReducer} from "../../../../../../store/reducers/ProfileDataReducer";

const ExperienceBlockEdit = ({ setEditExperienceBlock, setOpenToaster}) => {
    const classes = useInfoCardStyles();
    const dispatch = useDispatch()
const {header} = useSelector(state => state.header)
const {profile, successWork, error} = useSelector(state => state.profile)
const {category} = header;
const [index, setIndex] = useState(0)
const [workingDate, setWorkingDate] = useState([null,null])
const newCategory = [...category].map((option) => ({
    key: option.id,
    value: option. category_name ? option. category_name : "",
    label: option. category_name,
}));
useEffect(()=>{
    if(successWork){
           setEditExperienceBlock(false)
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

const newSubCategories = [...category[index]?.subcategories].map((option) => ({
    key: option.id,
    value: option.subcategory_name ? option.subcategory_name : "",
    label: option.subcategory_name,
}));



    const initialValues = {
        executor_categories: get(profile, "executor_categories", [{id:"",category_name:"",executor_profile_id:""}]).map(
            (categories) =>
                pick(categories, ["category_name"])
        ),
        executor_subcategories: get(profile, "executor_subcategories", [{id:"",executor_profile_id:"",subcategory_name:""}]).map(
            (subcategories) =>
                pick(subcategories, ["subcategory_name"])
        ),
        executor_profile_work_experiences: profile?.executor_profile_work_experiences?.length > 0  ? get(profile, "executor_profile_work_experiences", [{working_place:"",recruitment_data:"",dismissal_data:""}]).map(
            (work) =>
                pick(work, ["working_place","recruitment_data","dismissal_data"])
        ): [{working_place:"",recruitment_data:"",dismissal_data:""}],
    }

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, action) => {
                    await dispatch(choosesProfessionData({ "profession_and_experience":[values]}))
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
                                Специальность и опыт
                            </Typography>

                            <Button type={"submit"}
                                    size={"small"} style={{cursor: "pointer",minWidth:0, marginLeft:25}}>
                                <FileSVG color={'#808080'}/>
                            </Button>

                        </Box>
                        <CustomDivider />
                        <Box>
                            <FieldArray name={'executor_categories'}>
                                {({push, remove}) => (
                                    <CategoriesListEdit handleChange={(val) => {
                                         push({"category_name": val})
                                    }}
                                                        placeholder={'Выбрать категории'}
                                                        arr={newCategory}
                                                        remove={(val)=> {
                                                            remove(val)
                                                        }}
                                                        setIndex={setIndex}
                                                        arraySelect={[...values.executor_categories].map((optin)=>({
                                                            item:optin?.category_name
                                                        }))}
                                    />
                                )}
                            </FieldArray>
                        </Box>
                        <Box>
                            <FieldArray name={'executor_subcategories'}>
                                {({push, remove}) => (
                                    <CategoriesList
                                                    handleChange={(val) => {
                                                        push({"subcategory_name": val})
                                                    }}
                                                    placeholder={'Выбрать подкатегории'}
                                                    arr={newSubCategories}
                                                    remove={remove}
                                                    arraySelect={[...values.executor_subcategories].map((option)=>({
                                                        item:option?.subcategory_name
                                                    }))}
                                    />
                                )}
                            </FieldArray>
                        </Box>
                        <Box>
                            <FieldArray name={'executor_profile_work_experiences'}>
                                {({push, remove}) => (
                                    <Box>
                                        {values.executor_profile_work_experiences.map((work, index) => {
                                                const fieldName = `executor_profile_work_experiences[${index}].working_duration`;
                                            const recruitment_data=`executor_profile_work_experiences[${index}].recruitment_data`;
                                            const dismissal_data=`executor_profile_work_experiences[${index}].dismissal_data`;
                                            let date_r = values.executor_profile_work_experiences[index].recruitment_data;
                                            let date_d = values.executor_profile_work_experiences[index].dismissal_data;
                                                return(
                                                    <Box key={index}>
                                                        <Box style={{marginBottom: '20px'}}>
                                                            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                                                                <Box className={classes.singleInput}>
                                                                    <CustomInput placeholder={'Место работы'}
                                                                                 name={`executor_profile_work_experiences[${index}].working_place`}
                                                                                 value={work.working_place}
                                                                                 handleChange={handleChange}
                                                                    />
                                                                </Box>
                                                                <Box style={{width: '350px'}}>
                                                                    <RangeDatePicker
                                                                        value={[date_r, date_d]}
                                                                        fun={(newValue) => {
                                                                            setWorkingDate(newValue)
                                                                              setFieldValue(recruitment_data,newValue[0] ? moment(newValue[0]).format("YYYY-MM-DD") : "")
                                                                              setFieldValue(dismissal_data,newValue[1] ? moment(newValue[1]).format("YYYY-MM-DD") : "")
                                                                        }}
                                                                    />

                                                                </Box>
                                                            </Box>
                                                            {values.executor_profile_work_experiences.length > index +1 ?<div onClick={() => remove(index)}>
                                                                    <TrashSvg/>
                                                                </div>
                                                                : <AddButton fun={() => push({working_place:"",recruitment_data:"",dismissal_data:""})}/>}
                                                        </Box>
                                                    </Box>)
                                            }
                                        )}
                                    </Box>
                                )}
                            </FieldArray>
                        </Box>
                    </form>
                )}
            </Formik>

        </Card>
    )
}

export default ExperienceBlockEdit;
