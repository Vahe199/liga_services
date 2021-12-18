import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import {categories} from "../../../../utils/data/categories/Categories";
import Button from "@mui/material/Button";
import ModalCategories from "../../../UI/modals/ModalCategories";

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
        boxShadow: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
        color: '#000',
        height: '78px',
        //whiteSpace: 'nowrap',
        width: '350px',
        margin: '50px 60px',
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
        <Box style={{background: 'rgba(62, 87, 108, 0.3)', marginBottom: '178px'}}>
            {items.length !== 0 && <ModalCategories setItems={setItems} data={items}/>}
            <Container maxWidth="xl">
                <Typography pb={'50px'} pt={'150px'} className={classes.aboutTitle}>Категории услуг</Typography>
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


