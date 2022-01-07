import React from 'react';
import {Box} from "@mui/material";
import {FileSVG} from "../../../assets/svg/Profile/FileSVG";
import PenSvg from "../../../assets/svg/Profile/PenSvg";

const EditButton = ({condition, fun}) => {

    return (
        condition ? <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}} onClick={() => fun(false)}>
                <FileSVG color={'#808080'} />
            </Box> :
            <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}} onClick={() => fun(true)}>
                <PenSvg />
            </Box>
    )
}

export default EditButton;