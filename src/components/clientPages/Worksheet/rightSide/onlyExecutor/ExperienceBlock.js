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
import EditButton from "../../../../UI/CustomButtons/EditButton";
import Divider from "@mui/material/Divider";
import {FileSVG} from "../../../../../assets/svg/Profile/FileSVG";
import PenSvg from "../../../../../assets/svg/Profile/PenSvg";

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

                    ],
                    subCategories: [

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
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                      setFieldValue
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Typography className={classes.title}>
                                Специальность и опыт
                            </Typography>

                            {editExperienceBlock ? <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                                                        onClick={() => setEditExperienceBlock(false)}>
                                    <FileSVG color={'#808080'}/>
                                </Box> :
                                <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                                     onClick={() => setEditExperienceBlock(true)}>
                                    <PenSvg/>
                                </Box>}
                        </Box>
                        <Divider style={{ border: "1px solid #808080", width: "100%" }} />
                        {!editExperienceBlock ? <Box>
                        <Typography onClick={handleSubmit} variant={'h5'}>
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

            <WorkingPlaceWorkBlock valueTime={valueTime} setValueTime={setValueTime} condition={editExperienceBlock} />

        </Card>
    )
}

export default ExperienceBlock;