import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import CustomSelect from "../../../../../UI/selects/CustomSelect";
import {DelBtnSvg} from "../../../../../../assets/svg/Profile/DelBtnSvg";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";

const CategoriesList = ({arr, handleChange, placeholder, remove}) => {
    const classes = useInfoCardStyles();
    return (
        <Box>
            <Box style={{marginBottom: '40px'}} className={classes.singleInput}>
                <CustomSelect handleChange={handleChange}
                              placeholder={placeholder} mt={20}/>
            </Box>


            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {arr.map((item, index) => (

                    item.item !== '' ? <Box key={item.index} className={classes.categoriesBackGround}>
                        <Typography variant={'h4'}>{item.item}</Typography>
                        <Box onClick={() => remove(index)} className={classes.delBtn}>
                            <DelBtnSvg/>
                        </Box>
                    </Box> : ''
                    )
                )}
            </Box>
        </Box>
    )
}

export default CategoriesList;