import React from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CardTitle from "../../../../../UI/titles/CardTitle";
import {Box, Typography} from "@mui/material";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import PenSvg from '../../../../../../assets/svg/Profile/PenSvg';
import CustomDivider from '../../../../../UI/customDivider/CustomDivider';


const PortfolioData = ({editPortfolio, setEditPortfolio}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box
                x style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                        Портфолио
                </Typography>
                    <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                         onClick={() => setEditPortfolio(true)}>
                        <PenSvg/>
                    </Box>
            </Box>
            <CustomDivider />
            <Typography variant={"h5"}>
                Фотографии
            </Typography>
            <CustomImageList imageData={imageData} />
               <Typography variant={"h5"}>
                Ссылки
            </Typography>
                <Box>
                    <Typography style={{marginBottom: '10px'}} variant={'h6'}>
                        https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
                    </Typography>
                    <Typography variant={'h6'}>
                        https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
                    </Typography>
                </Box>
                <Box>
                    
                </Box>
        </Card>
    )
}

export default PortfolioData;