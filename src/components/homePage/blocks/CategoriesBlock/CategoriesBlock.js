import React, {useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import Button from "@mui/material/Button";
import ModalCategories from "../../../UI/modals/ModalCategories";
import {categories} from "../../../../utils/data/categories/Categories";
import MainTitle from "../../../UI/common/titles/MainTitles";

export const useStyles = makeStyles({
    aboutTitle: {
        color: '#445E77',
        fontSize: '40px',
        textAlign: 'center',
    },
    btn: {
        background: '#E1E3E3',
        padding: '15px',
        fontSize: '20px',
        fontWeight: 500,
        boxShadow: '0px 4px 7px #3e576c4d',
        borderRadius: '20px',
        color: '#000',
        height: '70px',
        //whiteSpace: 'nowrap',
        width: '340px',
        margin: '10px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const CategoriesBlock = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    useEffect(() => {
        console.log(items, 'items')
    }, [items])
    return (
        <Box style={{background: 'rgba(62, 87, 108, 0.3)'}}>
            {items.length !== 0 && <ModalCategories setItems={setItems} data={items}/>}
            <Container maxWidth="xl">
                <MainTitle mb={'75px'} mb={'75px'}>Категории услуг</MainTitle>
                <Box className={classes.container}>
                    {categories.map(category =>
                        <Button onClick={() => setItems(category.subCategories)} sx={{ boxShadow: '3' }} m={5} className={classes.btn}>{category.name}</Button>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default CategoriesBlock;