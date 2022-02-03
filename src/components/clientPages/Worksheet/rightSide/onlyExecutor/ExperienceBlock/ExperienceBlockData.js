import React from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import ExperienceShowList from "../blocks/ExperienceShowList";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import {useSelector} from "react-redux";
import moment from "moment";

const ExperienceBlockData = ({editExperienceBlock, setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();
    const {profile} = useSelector(state => state.profile)
    const {executor_categories=[],executor_subcategories=[],executor_profile_work_experiences=[]} = profile
    const categoriesShowList = [...executor_categories].map((option)=>({
        key:option?.id,
        item:option?.category_name
    }))

    const subcategoriesShowList = [...executor_subcategories].map((option)=>({
        key:option?.id,
        item:option?.subcategory_name
    }))

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
            <CustomDivider />
            <Box>
                <Typography variant={'h5'}>
                    Категории услуг
                </Typography>
                <ExperienceShowList arr={categoriesShowList}/>
            </Box>


            <Box>
                <Typography variant={'h5'}>
                    Подкатегории услуг
                </Typography>
                <ExperienceShowList arr={subcategoriesShowList}/>
            </Box>
            <Box>
                <Typography variant={"h5"}>
                    Опыт работы
                </Typography>
                <Box>
                    { [...executor_profile_work_experiences].map((option,i)=>(
                        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Typography style={{width:"30%"}} variant={'h6'}>
                                {option?.working_place}
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h3"}>
                                От
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h6"}>
                                {option?.recruitment_data ? moment(option?.recruitment_data).format("DD/MM/YYYY") : ""}
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h3"}>
                                До
                            </Typography>
                            <Typography style={{marginRight: '10px'}} variant={"h6"}>
                                 {option?.dismissal_data ? moment(option?.dismissal_data).format("DD/MM/YYYY") : ""}
                            </Typography>
                        </Box>))
                    }
                </Box>

            </Box>

        </Card>
    )
}

export default ExperienceBlockData;
