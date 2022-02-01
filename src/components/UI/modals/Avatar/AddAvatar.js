import React from "react";
import {Avatar, Button} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import upload from "../../../../assets/image/upload.png";
import {LightTooltip} from "../../../../globalStyles/LightTooltip";
import {HtmlTooltip} from "../../../../globalStyles/ HtmlTooltip";
import Typography from "@mui/material/Typography";
import Upload from "../../../../assets/image/upload1.png";
import {choosesAvatarData} from "../../../../store/actions/ProfileDataActions";
import {useDispatch, useSelector} from "react-redux";

const useAvatarStyles = makeStyles({
    fileInput: {
        backgroundColor: "#C4C4C4 !important",
        width: "64px !important",
        height: "64px !important",

        borderRadius: "50% !important",
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
    select: {
        display: "flex",
        alignItems:"center",
        padding:"4px 10px",
        "&:hover": {
             color:"#466582",
            background:"#e6edf5"
        },
        "& .MuiTypography-h6":{
            fontSize:12,
            "&:hover": {
                fontWeight:700
            },
        }
    }
})


export const AddAvatar = ({avatarPreview, setAvatarPreview}) => {
    const classes = useAvatarStyles()
    const {user} = useSelector(state => state.profile);
    const [open, setOpen] = React.useState(false);
    const [avatar, setAvatar] = React.useState("");
    const [val, setVal] = React.useState("");
const dispatch = useDispatch()
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const changeAvatar = () => {
        setOpen(false);
    };

    const choosesAvatar = async () => {
       let formData = new FormData();
        formData.append("img_path", avatar);
       await dispatch(choosesAvatarData(formData))
        setOpen(false);
       setVal("")
    }
    return (
        <>
            <div style={{paddingRight: '10px'}}>

                <HtmlTooltip arrow onClose={handleTooltipClose}
                             open={open}
                             disableFocusListener
                             disableHoverListener
                             disableTouchListener
                             title={
                                 <React.Fragment>
                                     <label htmlFor="raised-button-file">
                                         <div className={classes.select}>
                                             <input
                                                 name={"photo"}
                                                 accept="image/*"
                                                 style={{display: "none"}}
                                                 id="raised-button-file"
                                                 multiple
                                                 type="file"
                                                 onChange={(e) => {
                                                     console.log(e,"fileReader")
                                                     const fileReader = new FileReader();
                                                     fileReader.onload = () => {
                                                         if (fileReader.readyState === 2) {
                                                             // setFieldValue("photo", e.target.files[0]);
                                                             setAvatarPreview(fileReader.result);
                                                             setAvatar(e.target.files[0]);
                                                             setVal(fileReader.result);
                                                         }
                                                     };
                                                     if (e.target.files[0]) {
                                                         fileReader.readAsDataURL(e.target.files[0]);
                                                     }
                                                 }}
                                             />
                                             <img
                                                 style={{
                                                     marginRight: 10,
                                                     height: '40px'
                                                 }}
                                                 alt="upload"
                                                 src={Upload}
                                             />

                                             <Typography variant={"h6"}
                                                          color="inherit">Обновить фото
                                                 профиля</Typography>
                                         </div>
                                         <Button sx={{textTransform: "none"}} onClick={()=> {
                                             setOpen(!open)
                                             setVal("")

                                         }}
                                                 color={"error"}> Закрыть</Button>
                                         {val && <Button onClick={choosesAvatar}
                                             sx={{textTransform: "none"}}
                                         color={"success"}>Сохранить</Button> }

                                     </label>
                                 </React.Fragment>
                             }
                >
                    <Button onClick={()=>setOpen(!open)}
                        component="span"
                        className={
                            avatarPreview
                                ? classes.fileInputAvatar
                                : classes.fileInput
                        }
                    >
                        {avatarPreview ?
                            <Avatar
                                alt="Avatar"
                                src={val ? val : `${process.env.REACT_APP_IMG_API}${user.img_path}`}
                                className={classes.fileInputAvatar}
                                style={{marginRight: 10, width: '60px', height: '60px'}}
                            />
                            : <img src={upload} style={{width: 20, height: 20}}/>
                        }
                    </Button>
                </HtmlTooltip>
            </div>
        </>
    )
}
