import React from 'react';
import Card from "@mui/material/Card";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";


const PortfolioData = ({editPortfolio, setEditPortfolio}) => {
    const classes = useInfoCardStyles();
    const {profile ={}} = useSelector(state => state.profile)
    const {executor_portfolio_links = [], executor_portfolios=[]} = profile
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box
                 style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
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
            <CustomImageList imageData={executor_portfolios} show={editPortfolio} />
            <Typography variant={"h5"}>
                Ссылки
            </Typography>
            <Box>
                {executor_portfolio_links?.map((link, i)=>(
                    <Typography style={{marginBottom: '5px'}} variant={'h6'} key={i}>
                        {link?.portfolio_link}
                    </Typography>
                ))}
                {/*<Typography style={{marginBottom: '10px'}} variant={'h6'}>*/}
                {/*    https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/*/}
                {/*</Typography>*/}
                {/*<Typography variant={'h6'}>*/}
                {/*    https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/*/}
                {/*</Typography>*/}
            </Box>
            <Box>

            </Box>
        </Card>
    )
}

export default PortfolioData;
