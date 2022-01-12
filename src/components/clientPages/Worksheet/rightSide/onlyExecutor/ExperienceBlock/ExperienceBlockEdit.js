import React, {useEffect, useState} from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {categories} from "../../../../../../utils/data/categories/Categories";
import WorkingPlaceWorkBlock from "../blocks/WorkingPlaceWorkBlock";
import CardTitle from "../../../../../UI/titles/CardTitle";
import {FieldArray, Formik} from "formik";
import {Box, Typography,Button,Divider} from "@mui/material";
import CategoriesListEdit from "../blocks/CategoriesList";
import ExperienceShowList from "../blocks/ExperienceShowList";
import CategoriesList from "../blocks/CategoriesList";
import EditButton from "../../../../../UI/CustomButtons/EditButton";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import RangeDatePicker from "../../../../../UI/datePicker/RangeDatePicker";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import {TrashSvg} from "../../../../../../assets/svg/TrashSvg";

const ExperienceBlockEdit = ({ setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();


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
                        <Divider style={{ border: "1px solid #808080", width: "100%" }} />
                            <Box>
                                <FieldArray name={'categories'}>
                                    {({push, remove}) => (
                                        <CategoriesListEdit handleChange={(e) => push({item: e.target.value})}
                                                            placeholder={'Выбрать категории'}
                                                            arr={values.categories}
                                                            remove={remove}
                                        />
                                    )}
                                </FieldArray>
                            </Box>
                            <Box>
                                <FieldArray name={'subCategories'}>
                                    {({push, remove}) => (
                                        <CategoriesList handleChange={(e) => push({item: e.target.value})}
                                                        placeholder={'Выбрать подкатегории'}
                                                        arr={values.subCategories}
                                                        remove={remove}
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
                                                <Box>
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
