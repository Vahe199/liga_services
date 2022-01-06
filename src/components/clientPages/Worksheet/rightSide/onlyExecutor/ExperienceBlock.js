import React, {useEffect, useState} from 'react';
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {categories} from "../../../../../utils/data/categories/Categories";
import CategoriesList from "./blocks/CategoriesList";
import WorkingPlaceWorkBlock from "./blocks/WorkingPlaceWorkBlock";
import CardTitle from "../../../../UI/titles/CardTitle";

const ExperienceBlock = ({editExperienceBlock, setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();
    const [data, setData] = useState(categories);
    const [valueTime, setValueTime] = useState([null, null]);

    const putDate = (val) => {
        setValueTime(val)
    }

    useEffect(() => {
        console.log(valueTime)
    }, [valueTime])

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
            <CardTitle title={'Специальность и опыт'}
                       condition={editExperienceBlock}
                       fun={setEditExperienceBlock}
            />
            <CategoriesList  fun={deleteItem}
                             condition={editExperienceBlock}
                             arr={data}
                             handleChange={handleChange}
                             placeholder={'Выбрать категории'}
                             label={'Выбрать категории'} />

            <CategoriesList fun={deleteItem}
                            condition={editExperienceBlock}
                            arr={data}
                            handleChange={handleChange}
                            placeholder={'Выбрать подкатегории'}
                            label={'Подкатегории услуг'} />

            <WorkingPlaceWorkBlock valueTime={valueTime} setValueTime={setValueTime} condition={editExperienceBlock} />

        </Card>
    )
}

export default ExperienceBlock;