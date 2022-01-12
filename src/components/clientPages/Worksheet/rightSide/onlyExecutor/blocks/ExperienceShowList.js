import React from 'react';
import {Box, Typography} from "@mui/material";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";

const ExperienceShowList = ({arr}) => {
    const classes = useInfoCardStyles();
    return (
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            {arr.map((item, index) =>
                item.item !== '' ? <Box key={index} className={classes.categoriesBackGround}>
                    <Typography variant={'h4'}>{`${item.item} `}</Typography>
                </Box> : ''
            )}
        </Box>
    )
}

export default ExperienceShowList;
