import React from 'react';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RatingBlock = ({reviews, size = 'medium', star = 4}) => {
    console.log(star, 'star')
    return (
        <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Rating style={{color:"red"}} name="half-rating-read" defaultValue={star} precision={0.5} size={size} readOnly />
            <Typography style={{whiteSpace: 'nowrap'}}>{`${reviews} отз.`}</Typography>
        </Box>

    )
}

export default RatingBlock;
