import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {makeStyles} from "@material-ui/core";
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
        margin: '20px',
    },
    container: {
        position: 'relative',
        columnCount: '4',
        columnRule: '3px dashed #445E77',
        '@media (max-width: 1450px)' : {
            columnCount: '3'
        },
        '@media (max-width: 1130px)' : {
            columnCount: '2'
        },
        '@media (max-width: 780px)' : {
            columnCount: '1'
        },
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
                <MainTitle mb={'75px'}>Категории услуг</MainTitle>
                <Box className={classes.container}>
                    {categories.map((category,i) =>
                            <ModalCategories key={i}
                                setShowModal={setShowModal}
                                showModal={showModal}
                                setItems={setItems}
                                category={category}
                                data={items}/>

                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default CategoriesBlock;
