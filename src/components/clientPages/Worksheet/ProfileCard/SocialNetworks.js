import * as React from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {useProfileCardStyles} from "./ProfileCardStyles";
import VK from "../../../../assets/image/VK.png"
import Instagram from "../../../../assets/image/Instagram.png"

const SocialNetworks = () => {
    const classes = useProfileCardStyles()
    return (
        <Box sx={{boxShadow: 2}} className={classes.root}>

                    <Typography variant={"h6"}>Привязанные соцсети</Typography>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Avatar src={VK} style={{marginRight: 25}} variant="rounded"/>
                <Box>
                    <Typography variant={"h6"}>Вконтакте</Typography>
                    <Typography variant={"h5"} style={{margin: 0}}>не привязана</Typography>
                </Box>
            </Box>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Avatar src={Instagram} style={{marginRight: 25}} variant="rounded"/>
                <Box>
                    <Typography variant={"h6"}>Инстаграм</Typography>
                    <Typography variant={"h5"} style={{margin: 0}}>не привязана</Typography>
                </Box>
            </Box>
   </Box>
    );
};
export default SocialNetworks;
