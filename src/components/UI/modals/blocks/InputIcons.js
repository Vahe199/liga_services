import React from 'react';
import WalletSvg from "../WalletSvg";
import Box from "@mui/material/Box";
import {useStyles} from "../../../../globalStyles/ModalStyles";

const InputIcons = () => {
    const  classes = useStyles();
    return (
        <Box className={classes.inputIcon}>
            <Box style={{paddingRight: '3px'}}>
                <WalletSvg />
            </Box>
            {'10 руб'}
        </Box>
    )
}

export default InputIcons;