import React from 'react';
import CustomSelect from "../../../../../UI/selects/CustomSelect";
import {DelBtnSvg} from "../../../../../../assets/svg/Profile/DelBtnSvg";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CategoriesList = ({arr=[], arraySelect=[], handleChange, placeholder, remove}) => {
    const classes = useInfoCardStyles();
    return (
        <Box>
            <Box style={{marginBottom: '40px'}} className={classes.singleInput}>
                <CustomSelect handleChange={(val)=> handleChange(val)} arr={arr}
                              placeholder={placeholder} mt={20}/>
            </Box>


            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                {arraySelect.map((item, index) => (

                    item.item !== '' ? <Box key={index} className={classes.categoriesBackGround}>
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
