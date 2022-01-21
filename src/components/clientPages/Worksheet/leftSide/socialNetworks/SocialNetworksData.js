import React from "react";
import Card from "@mui/material/Card";
import PenSvg from "../../../../../assets/svg/Profile/PenSvg";
import VK from "../../../../../assets/image/VK.png";
import instagram from "../../../../../assets/image/Instagram.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import {Link} from "@mui/material";
import {useProfileCardStyles} from "../../../../../globalStyles/ProfileCardStyles";

const SocialNetworksData = ({ setEditSocialNetwork, editSocialNetwork }) => {
  const classes = useProfileCardStyles();
  const {profile} = useSelector(state => state.profile);
   return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
      <Box className={classes.orderSubBlockSpaceBetween}>
        <Typography variant={"h6"}>Привязанные соцсети</Typography>
          <IconButton onClick={() => setEditSocialNetwork(true)}>
            <PenSvg />
          </IconButton>
      </Box>
      <Box style={{ background: "#808080", height: 2, marginBottom: "10px" }} />
      <Box style={{ display: "flex", alignItems: "center", marginBottom: 15 }}>
        <Avatar src={VK} style={{ marginRight: 25 }} variant="rounded" />
        <Box>
          <Typography variant={"h6"}>Вконтакте</Typography>
            {profile?.fasebook_link ? <Link variant={"h5"} style={{ margin: 0 }}>
                {profile?.fasebook_link}
            </Link> : <Typography variant={"h5"} style={{ margin: 0 }}>
                не привязана
            </Typography>}
        </Box>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={instagram} style={{ marginRight: 25 }} variant="rounded" />
          <Box>
            <Typography variant={"h6"}>Инстаграм</Typography>
              {profile?.instagram_link ? <Link variant={"h5"} style={{ margin: 0 }}>
                  {profile?.instagram_link}
              </Link> : <Typography variant={"h5"} style={{ margin: 0 }}>
                  не привязана
              </Typography>}
          </Box>
      </Box>
    </Card>
  );
};
export default SocialNetworksData;
