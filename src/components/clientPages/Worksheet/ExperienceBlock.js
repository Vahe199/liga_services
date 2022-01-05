import React, {useEffect, useState} from 'react';
import {useInfoCardStyles} from "./InfoCard/InfoCardStyles";
import Card from "@mui/material/Card";
import {Box, IconButton, Typography} from "@mui/material";
import EditButton from "../../UI/CustomButtons/EditButton";
import Divider from "@mui/material/Divider";
import {categories} from "../../../utils/data/categories/Categories";
import CustomSelect from "../../UI/selects/CustomSelect";
import {DelBtnSvg} from "../../../assets/svg/Profile/DelBtnSvg";
import CategoriesList from "./CategoriesList";
import CustomInput from "../../UI/customInput/CustomInput";
import RangeDatePicker from "../../UI/datePicker/RangeDatePicker";
import {formDate} from "../../../utils/dates/DateFormat";
import moment from "moment";
import AddButton from "../../UI/CustomButtons/AddButton";
import WorkingPlaceWorkBlock from "./WorkingPlaceWorkBlock";

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
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Специальность и опыт
                </Typography>
                <EditButton condition={editExperienceBlock} fun={setEditExperienceBlock} />
            </Box>
            <Divider style={{ border: "1px solid #808080", width: "100%" }} />
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

            <Typography variant={"h5"}>
                Специальность
            </Typography>
            {!editExperienceBlock ? <Typography variant={'h6'}>
                    Маникюр, педикюр, мейкап
                </Typography> :
                <Box className={classes.singleInput}>
                    <CustomInput />
                </Box>}

            {/*<WorkingPlaceWorkBlock condition={editExperienceBlock} />*/}
            <Typography variant={"h5"}>
                Опыт работы
            </Typography>
            <Box>
            {!editExperienceBlock ?
                <Box style={{display: 'flex'}}>
                    <Typography style={{marginRight: '40px'}} variant={'h6'}>
                        Фриланс работа, с дома
                    </Typography>
                    <Typography style={{marginRight: '10px'}} variant={"h3"}>
                        От
                    </Typography>
                    <Typography style={{marginRight: '10px'}} variant={"h6"}>
                        10/10/2008
                    </Typography>
                    <Typography style={{marginRight: '10px'}} variant={"h3"}>
                        До
                    </Typography>
                    <Typography style={{marginRight: '10px'}} variant={"h6"}>
                        Сейчас
                    </Typography>
                </Box>
                 :
                <Box style={{marginBottom: '20px'}}>
                <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Box className={classes.singleInput}>
                        <CustomInput placeholder={'Место работы'} />
                    </Box>
                    <Box style={{width: '350px'}}>
                        <RangeDatePicker value={valueTime} fun={(val) => putDate(val)}  />
                    </Box>
                </Box>
                <AddButton />
                </Box>}
            </Box>

        </Card>
    )
}

export default ExperienceBlock;