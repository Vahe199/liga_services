import * as React from "react";
import {Avatar, Box, TextField, Typography} from "@mui/material";
import VK from "../../../../assets/image/VK.png"
import Instagram from "../../../../assets/image/Instagram.png"
import {useEditCardStyles} from "./EditCardStyles";
import Card from "@mui/material/Card";

const EditSocialNetworks = () => {
    const classes = useEditCardStyles()
    return (
        <Card sx={{boxShadow: 2}} className={classes.root}>

                    <Typography variant={"h6"}>Привязанные соцсети</Typography>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Box style={{display: "flex", alignItems: "center", marginBottom:10}}>
                <Avatar src={VK} style={{marginRight: 25}} variant="rounded"/>
                <TextField placeholder={"привязать"}/>
            </Box>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Avatar src={Instagram} style={{marginRight: 25}} variant="rounded"/>
                <TextField placeholder={"привязать"}/>
            </Box>
   </Card>
    );
};
export default EditSocialNetworks;
