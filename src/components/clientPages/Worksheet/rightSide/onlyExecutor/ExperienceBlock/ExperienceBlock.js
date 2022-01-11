import React, {useEffect, useState} from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {categories} from "../../../../../../utils/data/categories/Categories";
import WorkingPlaceWorkBlock from "../blocks/WorkingPlaceWorkBlock";
import CardTitle from "../../../../../UI/titles/CardTitle";
import {FieldArray, Formik} from "formik";
import {Box, Typography} from "@mui/material";
import CategoriesListEdit from "../blocks/CategoriesList";
import ExperienceShowList from "../blocks/ExperienceShowList";
import CategoriesList from "../blocks/CategoriesList";
import EditButton from "../../../../../UI/CustomButtons/EditButton";
import Divider from "@mui/material/Divider";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import ExperienceBlockEdit from "./ExperienceBlockEdit";
import ExperienceBlockData from "./ExperienceBlockData";

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
        <>
            {editExperienceBlock ? <ExperienceBlockEdit setEditExperienceBlock={setEditExperienceBlock}/>
            :<ExperienceBlockData setEditExperienceBlock={setEditExperienceBlock}/>}
             </>
    )
}

export default ExperienceBlock;
