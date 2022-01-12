import * as React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CustomInputIcon from "../../../../UI/customInput/CustomInputIcon";
import { useProfileCardStyles } from "../../../../../globalStyles/ProfileCardStyles";
import VK from "../../../../../assets/image/VK.png";
import instagram from "../../../../../assets/image/Instagram.png";

const SocialNetworksEdit = () => {
  const classes = useProfileCardStyles();
  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
      <Box className={classes.orderSubBlockSpaceBetween}>
        <Typography variant={"h6"}>Привязанные соцсети</Typography>
      </Box>
      <Box style={{ background: "#808080", height: 2, marginBottom: "10px" }} />
      <Box style={{ display: "flex", alignItems: "center", marginBottom: 15 }}>
        <Avatar src={VK} style={{ marginRight: 25 }} variant="rounded" />
        <Box></Box>
        <CustomInputIcon placeholder={"привязать"} />
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={instagram} style={{ marginRight: 25 }} variant="rounded" />
     <CustomInputIcon placeholder={"привязать"} />
      </Box>
    </Card>
  );
};
export default SocialNetworksEdit;
