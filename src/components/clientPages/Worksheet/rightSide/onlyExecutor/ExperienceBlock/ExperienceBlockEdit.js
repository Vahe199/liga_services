import React, {useState} from 'react';
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
import {useSelector} from "react-redux";

const ExperienceBlockEdit = ({ setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();
const {header} = useSelector(state => state.header)
const {category} = header;
const [index, setIndex] = useState(0)
const newCategory = [...category].map((option) => ({
    key: option.id,
    value: option. category_name ? option. category_name : "",
    label: option. category_name,
}));

const newSubCategories = [...category[index]?.subcategories].map((option) => ({
    key: option.id,
    value: option.subcategory_name ? option.subcategory_name : "",
    label: option.subcategory_name,
}));
    console.log(newSubCategories,"newSubCategories")
    const saveData = () => {
        setTimeout(() => {
            setEditExperienceBlock(false)
        }, 2000)
    }

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={{
                    categories: [

                    ],
                    subCategories: [

                    ],
                    workPlace: [
                        {
                            place: '',
                            date: [null, null],
                        },
                    ],
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
                                Специальность и опыт
                            </Typography>

                            <Button type={"submit"}  onClick={saveData}
                                    size={"small"} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                                <FileSVG color={'#808080'}/>
                            </Button>

                        </Box>
                        <CustomDivider />
                        <Box>
                            <FieldArray name={'categories'}>
                                {({push, remove}) => (
                                    <CategoriesListEdit handleChange={(val) => {
                                        setIndex(val[1])
                                         push({item: val[0]})
                                    }}
                                                        placeholder={'Выбрать категории'}
                                                        arr={newCategory}
                                                        remove={remove}
                                                        arraySelect={values.categories}
                                    />
                                )}
                            </FieldArray>
                        </Box>
                        <Box>
                            <FieldArray name={'subCategories'}>
                                {({push, remove}) => (
                                    <CategoriesList

                                                    handleChange={(val) => {
                                                        push({item: val[0]})
                                                    }}
                                                    placeholder={'Выбрать подкатегории'}
                                                    arr={newSubCategories}
                                                    remove={remove}
                                                    arraySelect={values.subCategories}
                                    />
                                )}
                            </FieldArray>
                        </Box>
                        <Box>
                            <FieldArray name={'workPlace'}>
                                {({push, remove}) => (
                                    <Box>
                                        {values.workPlace.map((work, index) => {
                                                const fieldName = `workPlace[${index}].date`;

                                                return(
                                                    <Box key={index}>
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
                                                                        value={work.date}
                                                                        fun={(newValue) => setFieldValue(fieldName, newValue)}
                                                                    />

                                                                </Box>
                                                            </Box>
                                                            {values.workPlace.length > index +1 ?<div onClick={() => remove(index)}>
                                                                    <TrashSvg/>
                                                                </div>
                                                                : <AddButton fun={() => push({place: '', date: [null,null]})}/>}
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
