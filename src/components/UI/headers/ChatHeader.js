import React from 'react';
import Box from "@mui/material/Box";
import {useChatStyles} from "../../../globalStyles/ChatStyles";
import IconButton from "@mui/material/IconButton";
import {GoBackSvg} from "../../../assets/svg/chat/GoBackSvg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ChatHeader = ({infoUser, showChatHeader, setShowChatHeader, setInfoUser, setActive, setIsGreaterThan900px, setHideChatUsers}) => {
    const classes = useChatStyles();

    const goBack = () => {
        setActive(1)
        setIsGreaterThan900px(false)
        setInfoUser('')
        setHideChatUsers(false)
        setShowChatHeader(false)
    }

    return (
        <Box className={classes.headerContainer}>
            <IconButton onClick={goBack} style={{paddingRight: '30px'}}>
                <GoBackSvg />
            </IconButton>
            <Typography style={{display: 'flex', alignItems: 'center'}} variant={'h1'}>
                <Box style={{paddingRight: '20px'}}>
                    <Avatar />
                </Box>
                <Typography variant={'h1'}>{infoUser}</Typography>
            </Typography>

        </Box>
    )
}

export default ChatHeader;