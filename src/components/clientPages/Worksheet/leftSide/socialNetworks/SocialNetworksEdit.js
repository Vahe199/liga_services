import React, {useState} from "react";
import Card from "@mui/material/Card";
import CustomInputIcon from "../../../../UI/customInput/CustomInputIcon";
import {useProfileCardStyles} from "../../../../../globalStyles/ProfileCardStyles";
import VK from "../../../../../assets/image/VK.png";
import instagram from "../../../../../assets/image/Instagram.png";
import {FileSVG} from "../../../../../assets/svg/Profile/FileSVG";
import {Formik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {updateSocLink} from "../../../../../store/actions/ProfileDataActions";
import {changeSocLinks} from "../../../../../store/reducers/ProfileDataReducer";

const SocialNetworksEdit = ({setEditSocialNetwork, setOpenToaster}) => {
  const classes = useProfileCardStyles();
    const {user} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [fasebook_link, setFacebookLink] = useState(user?.fasebook_link)
    const [instagram_link, setinstagramLink] = useState(user?.instagram_link)

    const changeMyProfiles = async () => {
        await dispatch(updateSocLink({
            fasebook_link,
            instagram_link
        }))
        await dispatch(changeSocLinks({instagram_link, fasebook_link}))
        setFacebookLink('')
        setinstagramLink('')
        await setOpenToaster(true)
        await setEditSocialNetwork(false)
    }

  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
        <Box>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h6"}>Привязанные соцсети</Typography>
                <IconButton onClick={changeMyProfiles}>
                    <FileSVG color={'#808080'} />
                </IconButton>
            </Box>
            <Box style={{ background: "#808080", height: 2, marginBottom: "10px" }} />
            <Box style={{ display: "flex", alignItems: "center", marginBottom: 15 }}>
                <Avatar src={VK} style={{ marginRight: 25 }} variant="rounded" />
                <CustomInputIcon
                                 width={'100%'}
                                 value={fasebook_link}
                                 handleChange={(e) => setFacebookLink(e.target.value)}
                                 placeholder={"привязать"} />
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={instagram} style={{ marginRight: 25 }} variant="rounded" />
                <CustomInputIcon
                                 width={'100%'}
                                 value={instagram_link}
                                 handleChange={(e) => setinstagramLink(e.target.value)}
                                 placeholder={"привязать"} />
            </Box>
        </Box>
    </Card>
  );
};
export default SocialNetworksEdit;
