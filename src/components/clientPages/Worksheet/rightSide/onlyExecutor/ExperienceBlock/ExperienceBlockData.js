import React from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {Box, Divider, Typography} from "@mui/material";
import ExperienceShowList from "../blocks/ExperienceShowList";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";

const ExperienceBlockData = ({editExperienceBlock, setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();
      return (
        <Card sx={{boxShadow: 2}} className={classes.root}>
            <Box
                x style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Специальность и опыт
                </Typography>
                    <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                         onClick={() => setEditExperienceBlock(true)}>
                        <PenSvg/>
                    </Box>
            </Box>
            <Divider style={{ border: "1px solid #808080", width: "100%" }} />
            <Box>
                <Typography variant={'h5'}>
                    Категории услуг
                </Typography>
                <ExperienceShowList arr={[]}/>
            </Box>


            <Box>
                <Typography variant={'h5'}>
                    Подкатегории услуг
                </Typography>
                <ExperienceShowList arr={[]}/>
            </Box>
            <Box>
                <Typography variant={"h5"}>
                    Опыт работы
                </Typography>
                <Box>
                    <Box>
                        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Typography style={{marginRight: '40px'}} variant={'h6'}>
                                Фриланс работа, с дома
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h3"}>
                                От
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h6"}>
                                10/10/2008
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h3"}>
                                До
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h6"}>
                                Сейчас
                            </Typography>
                        </Box>

                    </Box>
                </Box>

            </Box>

        </Card>
    )
}

export default ExperienceBlockData;
