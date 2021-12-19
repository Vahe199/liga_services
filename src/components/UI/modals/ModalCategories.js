import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    modalContainer: {
        position: 'absolute',
        top: '10%',
        left: '20%',
        backgroundColor: '#E1E3E3',
        //zIndex: 1,
        borderRadius: '20px',
        width: '70%',
        height: '500px',
        padding: '20px',
    }
});




const ModalCategories = ({setItems, data, setShowModal, showModal}) => {
    const classes = useStyles();
    return (
        <Box onMouseEnter={() => setShowModal(true)}
             onMouseLeave={() => setShowModal(false)}
             style={{display: showModal ? 'block' : 'none'}}
             className={classes.modalContainer}>
            {data.map(category =>
                <Typography color={'#808080'} style={{fontWeight: 500, fontSize: '24px'}}>{category}</Typography>
            )}
        </Box>
    );
}

export default ModalCategories;




