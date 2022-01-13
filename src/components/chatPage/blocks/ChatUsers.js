import React from 'react';
import Box from "@mui/material/Box";
import {usersData} from "../../../utils/data/chat/usersData";
import {Typography} from "@mui/material";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import {useChatStyles} from "../../../globalStyles/ChatStyles";
import Divider from "@mui/material/Divider";

const ChatUsers = ({active,
                    setInfoUser,
                    isGreaterThan900px,
                    setShowChatHeader,
                    setHideChatUsers,
                    setActive,
                    setIsGreaterThan900px}) => {

    const classes = useChatStyles();
    const chooseUser = (item) => {
        setActive(item.id)
        setIsGreaterThan900px(true)
        if(!isGreaterThan900px){
            setInfoUser(item.name)
            setHideChatUsers(true)
            setShowChatHeader(true)
        }
    }
    return (
        <Box style={{overflowY: 'scroll', height: '83vh', backgroundColor: '#fff'}}>
            {usersData.map((item, index) =>
                <div key={index}>
                <Box style={{backgroundColor: active === item.id && '#D7D7D7'}} onClick={() => chooseUser(item)} className={classes.userBlock}>
                    <Avatar style={{marginRight: 10, width: '60px', height: '60px'}}/>
                    <Box>
                        <div  style={{display: "flex", alignItems: "center"}}>
                            <Typography variant={"h1"}>Номер и описание заказа</Typography>
                        </div>
                        <Typography variant={"h4"}>{item.name}</Typography>
                        <Box style={{display: "flex", alignItems: "center", flexWrap: 'wrap'}}>
                            <Rating style={{color: "#FFF066"}} size={'small'} name="half-rating-read" defaultValue={4}
                                    readOnly precision={0.5}/>
                            <Typography color={'#808080'} style={{whiteSpace: 'nowrap'}} variant={'h4'}>(3 отзывов)</Typography>
                        </Box>
                    </Box>
                </Box>
                    <Divider color={'#808080'} style={{margin: "0"}} />
                </div>
            )}
        </Box>
    )
}

export default ChatUsers;
