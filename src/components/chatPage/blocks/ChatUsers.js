import React from 'react';
import Box from "@mui/material/Box";
import {usersData} from "../../../utils/data/chat/usersData";
import {AddAvatar} from "../../UI/modals/Avatar/AddAvatar";
import {Typography} from "@mui/material";
import InfoSVG from "../../../assets/svg/Profile/InfoSVG";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import CustomDivider from "../../UI/customDivider/CustomDivider";
import {useChatStyles} from "../../../globalStyles/ChatStyles";
import Divider from "@mui/material/Divider";

const ChatUsers = ({active, isGreaterThan900px, setHideChatUsers, setActive, setIsGreaterThan900px, hideChatUsers}) => {
    const classes = useChatStyles();
    const chooseUser = (id) => {
        setActive(id)
        setIsGreaterThan900px(true)
        if(!isGreaterThan900px){
            setHideChatUsers(true)
        }
    }
    return (
        <Box style={{overflowY: 'scroll', height: '100vh', backgroundColor: '#fff'}}>
            {usersData.map((item, index) =>
                <>
                <Box style={{backgroundColor: active === item.id && '#D7D7D7'}} onClick={() => chooseUser(item.id)} className={classes.userBlock}>
                    <Avatar style={{marginRight: 10, width: '60px', height: '60px'}}/>
                    <Box>
                        <div  style={{display: "flex", alignItems: "center"}}>
                            <Typography variant={"h1"}>Номер и описание заказа</Typography>
                        </div>
                        <Typography variant={"h4"}>Имя исполнителя</Typography>
                        <Box style={{display: "flex", alignItems: "center", flexWrap: 'wrap'}}>
                            <Rating style={{color: "#FFF066"}} size={'small'} name="half-rating-read" defaultValue={4}
                                    readOnly precision={0.5}/>
                            <Typography color={'#808080'} style={{whiteSpace: 'nowrap'}} variant={'h4'}>(3 отзывов)</Typography>
                        </Box>
                    </Box>
                </Box>
                    <Divider color={'#808080'} style={{margin: "0"}} />
                </>
            )}
        </Box>
    )
}

export default ChatUsers;