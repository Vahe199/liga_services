import React, {useEffect, useRef, useState} from 'react';
import {useChatStyles} from "../../globalStyles/ChatStyles";
import Box from "@mui/material/Box";
import {Grid, TextField} from "@mui/material";
import ChatUsers from "./blocks/ChatUsers";
import ChatContent from "./blocks/ChatContent";
import {SkrepSvg} from "../../assets/svg/chat/SkrepSvg";
import {SendMessageSvg} from "../../assets/svg/chat/SendMessageSvg";
import InfoOrder from "./blocks/InfoOrder";
import ChatHeader from "../UI/headers/ChatHeader";
import {messages} from "../../utils/data/chat/messages";

const ChatPage = () => {
    const classes = useChatStyles();
    //It's for style user Items, when we choose him
    const [active, setActive] = useState(1);
    //After 900px my chat content hide
    const [isGreaterThan900px, setIsGreaterThan900px] = useState(false);
    //It's work, when isGreaterThan900px === true, and hide my users, because of open chat content
    const [hideChatUsers, setHideChatUsers] = useState(false);
    //It's work, when isGreaterThan900px === true, and on chatContent show header
    const [showChatHeader, setShowChatHeader] = useState(false);
    //Here I save info of user, which I choose
    const [infoUser, setInfoUser] = useState('');
    //Here save all messages
    const [messagesData, setMessagesData] = useState(messages)
    //It's connect with textField
    const [value, setValue] = useState('')
    const chatRef = useRef();


    const SendMessage = () => {
        if(value !== ''){
            setMessagesData((prev) => [...prev, {
                id: Math.random(),
                text: value,
                mine: true,
                file: false,
                reply: true,
                video: false,
            },])
            setValue('')
        }
    }

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


    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                {!hideChatUsers && <Grid item xs={12} md={4}>
                    <ChatUsers setHideChatUsers={setHideChatUsers}
                               hideChatUsers={hideChatUsers}
                               setIsGreaterThan900px={setIsGreaterThan900px}
                               active={active}
                               setInfoUser={setInfoUser}
                               setShowChatHeader={setShowChatHeader}
                               isGreaterThan900px={isGreaterThan900px}
                               setActive={setActive}/>
                </Grid>}
                {isGreaterThan900px && <Grid item xs={12} md={8}>
                    {showChatHeader && <ChatHeader infoUser={infoUser}
                                                   setActive={setActive}
                                                   setIsGreaterThan900px={setIsGreaterThan900px}
                                                   setInfoUser={setInfoUser}
                                                   setHideChatUsers={setHideChatUsers}
                                                   setShowChatHeader={setShowChatHeader}
                                                   showChatHeader={showChatHeader}/>}
                    <InfoOrder showChatHeader={showChatHeader} />
                    <ChatContent messagesData={messagesData} chatRef={chatRef} />
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
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        SendMessage()
                                    }
                                }}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder={'Сообщение...'}
                                InputProps={{className: classes.input}}
                                value={value}
                            />
                        </Box>
                        <Box onClick={SendMessage} className={classes.iconSvg}>
                            <SendMessageSvg />
                        </Box>
                    </Box>
                </Grid>}
            </Grid>
        </Box>
    )
}

export default ChatPage;
