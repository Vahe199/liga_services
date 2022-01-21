import React from "react";
import {Avatar, Button} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import upload from "../../../../assets/image/upload.png";
import {LightTooltip} from "../../../../globalStyles/LightTooltip";
import {HtmlTooltip} from "../../../../globalStyles/ HtmlTooltip";
import Typography from "@mui/material/Typography";
import {Upload} from "../../../../assets/svg/Upload";

const useAvatarStyles = makeStyles({
    fileInput:{
        backgroundColor:"#C4C4C4 !important",
        width:"64px !important",
        height:"64px !important",

        borderRadius:"50% !important",
        "&:hover": {
            backgroundColor: "#D6D9DC !important",
            boxShadow: "none",
        },
        "&:active": {
            backgroundColor: "#ADB3B8",
        },
    },
    fileInputAvatar: {
        width: "64px !important",
        height: "64px !important",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50% !important",
        "&:hover": {
             backgroundColor: "#4b9a2d1c",
            boxShadow: "none",
        },
        "&:active": {
            backgroundColor: "#ADB3B8",
        },
    },
})



export const AddAvatar = ({avatarPreview, setAvatarPreview}) => {
    const classes = useAvatarStyles()
    return(
        <>
            <div style={{ paddingRight: '10px' }}>
                <input
                    name={"photo"}
                    accept="image/*"
                    style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={(e) => {
                        const fileReader = new FileReader();
                        fileReader.onload = () => {
                            if (fileReader.readyState === 2) {
                                // setFieldValue("photo", e.target.files[0]);
                                setAvatarPreview(fileReader.result);
                            }
                        };
                        if (e.target.files[0]) {
                            fileReader.readAsDataURL(e.target.files[0]);
                        }
                    }}
                />
                <label htmlFor="raised-button-file">
                    {/*<LightTooltip title="Нажмите, чтобы изменить картинку" placement="bottom" arrow>*/}
                    <HtmlTooltip arrow
                        title={
                            <React.Fragment>
                                <img
                                        style={{marginRight:10,
                                            lightingColor:"#000",
                                            width: '15px',
                                            height: '15px'}}
                                        alt="upload"
                                        src={upload}
                                />

                                <Typography variant={"h6"}
                                    style={{fontSize:12}} color="inherit">Обновить фото профиля</Typography>
                            </React.Fragment>
                        }
                    >
                    <Button
                        component="span"
                        className={
                            avatarPreview
                                ? classes.fileInputAvatar
                                : classes.fileInput
                        }
                    >
                        {avatarPreview ?
                            <Avatar
                                alt="Remy Sharp"
                                src={avatarPreview ? avatarPreview : upload}
                                className={classes.fileInputAvatar}
                                style={{marginRight: 10, width: '60px', height: '60px'}}
                            />
                            :<img src={upload} style={{width:20,height:20}}/>
                        }
                    </Button>
                    {/*</LightTooltip>*/}
                    </HtmlTooltip>
                        </label>
            </div>
        </>
    )
}
