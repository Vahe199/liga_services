import React from 'react';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const RatingBlock = ({reviews, size = 'medium'}) => {
    return (
        <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Rating style={{color:"red"}} name="half-rating-read" defaultValue={4} precision={0.5} size={size} readOnly />
            <Typography>{`${reviews} отз.`}</Typography>
        </Box>

    )
}

export default RatingBlock;