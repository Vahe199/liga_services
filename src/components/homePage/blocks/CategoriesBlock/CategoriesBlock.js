import React, {useEffect, useRef, useState} from 'react';
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
        margin: '20px',
        //position: 'relative',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }
});

const CategoriesBlock = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const openModal = (e, items) => {
        console.log(items)
        setShowModal(true);
        setItems(items)
    }

    const closeModal = (e) => {
        console.log(showModal)
        setShowModal(false);
    }

    return (
        <Box style={{background: 'rgba(62, 87, 108, 0.3)'}}>
            <Container maxWidth="xl">
                <MainTitle mb={'75px'} mb={'75px'}>Категории услуг</MainTitle>
                <Box className={classes.container}>
                    {categories.map(category =>
                        <Box>
                            <Button onMouseEnter={(e) => openModal(e, category.subCategories)} onMouseLeave={(e) => closeModal(e)}  sx={{ boxShadow: '3' }} m={5} className={classes.btn}>{category.name}</Button>
                            <ModalCategories
                                setShowModal={setShowModal}
                                showModal={showModal}
                                setItems={setItems}
                                data={items}/>
                        </Box>

                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default CategoriesBlock;