import React from 'react';
import {Box, Typography} from "@mui/material";
import CustomSelect from "../../../../../UI/selects/CustomSelect";
import {DelBtnSvg} from "../../../../../../assets/svg/Profile/DelBtnSvg";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";

const
    CategoriesList = ({condition, label, handleChange, arr, fun, placeholder}) => {
    const classes = useInfoCardStyles();
    return (
        !condition ? <Box>
            <Typography variant={'h5'}>
                {label}
            </Typography>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {arr.map((item, index) =>
                    <Box key={item.id} className={classes.categoriesBackGround}>
                        <Typography variant={'h4'}>{`${item.name} `}</Typography>
                    </Box>
                )}
            </Box>
        </Box> :
        <Box>
            <Box style={{marginBottom: '40px'}} className={classes.singleInput}>
                <CustomSelect handleChange={handleChange} placeholder={placeholder} mt={20} />
            </Box>
            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {arr.map((item, index) =>
                    <Box key={item.id} className={classes.categoriesBackGround}>
                        <Typography variant={'h4'}>{`${item.name} `}</Typography>
                        <Box onClick={() => fun(item.id)} className={classes.delBtn}>
                            <DelBtnSvg />
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default CategoriesList;