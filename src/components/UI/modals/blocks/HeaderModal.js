import React from 'react';
import {useStyles} from "../../../../globalStyles/ModalStyles";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";
import {CloseSvg} from "../../../../assets/svg/CloseSvg";

const HeaderModal = ({title, close}) => {
    const classes = useStyles();
    return (
        <Box className={classes.headerBlock}>
            <p className={classes.title}>{title}</p>
            <IconButton onClick={close}>
                <CloseSvg />
            </IconButton>
        </Box>
    )
}

export default HeaderModal;