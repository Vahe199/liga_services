import React from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {messages} from "../../../utils/data/chat/messages";
import {useChatStyles} from "../../../globalStyles/ChatStyles";


const ChatContent = () => {

    const classes = useChatStyles();

    const MessageText = ({item}) => {
        return (
            <div>
                <Typography style={{fontSize: 18}}>{item.text}</Typography>
            </div>
        )
    }

    return (
        <Box style={{overflowY: 'scroll', height: '100vh', backgroundColor: '#e1e3e5'}}>
            {messages.map((item, index) =>
                <Box style={{margin: '20px 0'}} key={index}>
                    <Box className={classes.container} style={{display: 'flex', justifyContent: item.mine ? 'flex-end' : 'flex-start'}}>
                        {/*{item.mine || <Box>*/}
                        {/*    <Box className={classes.badge} >*/}
                        {/*        <Typography style={{fontSize: 12}}>*/}
                        {/*            name*/}
                        {/*        </Typography>*/}
                        {/*        <Typography style={{fontSize: 12}}>*/}
                        {/*            surName[0]*/}
                        {/*        </Typography>*/}
                        {/*    </Box>*/}
                        {/*</Box>}*/}
                        {item.mine && <Typography className={classes.textDate} style={{marginRight: 5}}>12:48</Typography>}
                        <Box className={classes.messageBlock} style={{backgroundColor: item.mine ? '#445E77' : '#D0D0D0'}}>
                            <MessageText item={item} />
                        </Box>
                        {item.mine || <Typography className={classes.textDate} style={{marginLeft: 5}}>12:48</Typography>}
                    </Box>
                </Box>
            )}
        </Box>
    );
}




export default ChatContent;
