import * as React from "react";
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
import {useSelector} from "react-redux";

const SocialNetworksEdit = ({setEditSocialNetwork, editSocialNetwork}) => {
  const classes = useProfileCardStyles();
    const {profile} = useSelector(state => state.profile);
  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
        <Formik
            initialValues={{ fasebook_link: profile?.fasebook_link, instagram_link: profile?.instagram_link }}
            onSubmit={async (values, action) => {
                console.log(values, 'values')
                setEditSocialNetwork(false)
                action.resetForm()
            }}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                    <Box>
                        <Box className={classes.orderSubBlockSpaceBetween}>
                            <Typography variant={"h6"}>Привязанные соцсети</Typography>
                            <IconButton onClick={handleSubmit}>
                                <FileSVG color={'#808080'} />
                            </IconButton>
                        </Box>
                        <Box style={{ background: "#808080", height: 2, marginBottom: "10px" }} />
                        <Box style={{ display: "flex", alignItems: "center", marginBottom: 15 }}>
                            <Avatar src={VK} style={{ marginRight: 25 }} variant="rounded" />
                            <CustomInputIcon name={'fasebook_link'}
                                             width={'100%'}
                                             value={values.fasebook_link}
                                             handleChange={handleChange}
                                             placeholder={"привязать"} />
                        </Box>
                        <Box style={{ display: "flex", alignItems: "center" }}>
                            <Avatar src={instagram} style={{ marginRight: 25 }} variant="rounded" />
                            <CustomInputIcon name={'instagram_link'}
                                             width={'100%'}
                                             value={values.instagram_link}
                                             handleChange={handleChange}
                                             placeholder={"привязать"} />
                        </Box>
                    </Box>
                </form>
            )}
        </Formik>
    </Card>
  );
};
export default SocialNetworksEdit;
