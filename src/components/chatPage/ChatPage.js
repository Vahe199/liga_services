import React, {useEffect, useState} from 'react';
import {useChatStyles} from "../../globalStyles/ChatStyles";
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import ChatUsers from "./blocks/ChatUsers";
import ChatContent from "./blocks/ChatContent";
import {SkrepSvg} from "../../assets/svg/chat/SkrepSvg";
import CustomInput from "../UI/customInput/CustomInput";
import {SendMessageSvg} from "../../assets/svg/chat/SendMessageSvg";
import CustomInputAddFile from "../UI/customInputAddFile/CustomInputAddFile";

const ChatPage = () => {
    const classes = useChatStyles();
    const [active, setActive] = useState(1);
    const [isGreaterThan900px, setIsGreaterThan900px] = useState(false);
    const [hideChatUsers, setHideChatUsers] = useState(false);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 900) {
                setIsGreaterThan900px(true);
            } else {
                setIsGreaterThan900px(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        console.log(isGreaterThan900px, 'isGreaterThan900px')
    }, [isGreaterThan900px])
    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                {!hideChatUsers && <Grid item xs={12} md={4}>
                    <ChatUsers setHideChatUsers={setHideChatUsers}
                               hideChatUsers={hideChatUsers}
                               setIsGreaterThan900px={setIsGreaterThan900px}
                               active={active}
                               isGreaterThan900px={isGreaterThan900px}
                               setActive={setActive}/>
                </Grid>}
                {isGreaterThan900px && <Grid item xs={12} md={8}>
                    <ChatContent/>
                    <Box className={classes.inputField}>
                        <Box className={classes.iconSvg}>
                            <input
                                color="primary"
                                type="file"
                                id="icon-button-file"
                                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                style={{display: 'none'}}
                            />
                            <label style={{cursor: 'pointer'}} htmlFor="icon-button-file">
                                <SkrepSvg/>
                            </label>
                        </Box>
                        <Box style={{padding: '4px 0', width: '100%'}}>
                            <TextField
                                fullWidth
                                placeholder={'Сообщение...'}
                                InputProps={{className: classes.input}}
                            />
                        </Box>
                        <Box className={classes.iconSvg}>
                            <SendMessageSvg/>
                        </Box>
                    </Box>
                </Grid>}
            </Grid>
        </Box>
    )
}

export default ChatPage;
