import React, {useEffect, useState} from 'react';
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {categories} from "../../../../../utils/data/categories/Categories";
import WorkingPlaceWorkBlock from "./blocks/WorkingPlaceWorkBlock";
import CardTitle from "../../../../UI/titles/CardTitle";
import {FieldArray, Formik} from "formik";
import {Box, Typography} from "@mui/material";
import CategoriesListEdit from "./blocks/CategoriesList";
import ExperienceShowList from "./blocks/ExperienceShowList";
import CategoriesList from "./blocks/CategoriesList";

const ExperienceBlock = ({editExperienceBlock, setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();
    const [data, setData] = useState(categories);
    const [valueTime, setValueTime] = useState([null, null]);
    const [value, setValue] = useState([]);

    const putDate = (val) => {
        setValueTime(val)
    }

    useEffect(() => {
        //console.log(valueTime)
    }, [value])

    const deleteItem = (id) => {
         setData((prev) => data.filter((item) => id !== item.id));
        console.log()
    }

    const handleChange = (event) => {
        setData((prev) => [...prev, {
            name: event.target.value,
            subCategories: ['Ремонт ', 'Сантехнические работы и отопление', 'Ремонт к', 'Сантехничение', 'Ремонтр и домов', 'Сантские работы и отопление', 'Ремони домов', 'ческие работы и отопление'],
            id: Math.random()
        }])
        console.log(event.target.value)
    };

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={{
                    categories: [
                        {
                            item: ''
                        }
                    ],
                    subCategories: [
                        {
                            item: ''
                        }
                    ],
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
                        <CardTitle title={'Специальность и опыт'}
                                   condition={editExperienceBlock}
                                   fun={setEditExperienceBlock}
                        />
                        {!editExperienceBlock ? <Box>
                        <Typography variant={'h5'}>
                            Категории услуг
                        </Typography>
                            <ExperienceShowList arr={values.categories} />
                    </Box> :
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
                        </Box>}

                        {!editExperienceBlock ? <Box>
                                <Typography variant={'h5'}>
                                    Подкатегории услуг
                                </Typography>
                                <ExperienceShowList arr={values.subCategories} />
                            </Box> :
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
                            </Box>}
                    </form>
                )}
            </Formik>

            {/*<CategoriesList  fun={deleteItem}*/}
            {/*                 condition={editExperienceBlock}*/}
            {/*                 arr={data}*/}
            {/*                 handleChange={handleChange}*/}
            {/*                 placeholder={'Выбрать категории'}*/}
            {/*                 label={'Выбрать категории'} />*/}

            {/*<CategoriesList fun={deleteItem}*/}
            {/*                condition={editExperienceBlock}*/}
            {/*                arr={data}*/}
            {/*                handleChange={handleChange}*/}
            {/*                placeholder={'Выбрать подкатегории'}*/}
            {/*                label={'Подкатегории услуг'} />*/}

            <WorkingPlaceWorkBlock valueTime={valueTime} setValueTime={setValueTime} condition={editExperienceBlock} />

        </Card>
    )
}

export default ExperienceBlock;