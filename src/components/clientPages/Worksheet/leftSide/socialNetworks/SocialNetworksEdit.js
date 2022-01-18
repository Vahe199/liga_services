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

const SocialNetworksEdit = ({setEditSocialNetwork, editSocialNetwork}) => {
  const classes = useProfileCardStyles();
  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
        <Formik
            initialValues={{ vk: '', instagram: '' }}
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
                            <CustomInputIcon name={'vk'}
                                             width={'100%'}
                                             value={values.vk}
                                             handleChange={handleChange}
                                             placeholder={"привязать"} />
                        </Box>
                        <Box style={{ display: "flex", alignItems: "center" }}>
                            <Avatar src={instagram} style={{ marginRight: 25 }} variant="rounded" />
                            <CustomInputIcon name={'instagram'}
                                             width={'100%'}
                                             value={values.instagram}
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
