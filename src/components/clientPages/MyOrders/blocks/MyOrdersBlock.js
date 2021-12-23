import * as React from "react";
import {Divider, IconButton, Typography} from "@mui/material";
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";
import Box from "@mui/material/Box";


const MyOrdersBlock = () => {
    return (
        <Box
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "20px",
                padding:"30px",
            }}>
            <Box>
                <Typography style={{fontWeight: 500, fontSize: '21px', whiteSpace:'nowrap', marginBottom:'25px'}}>
                    Заказы
                </Typography>
            </Box>
            <Divider color={'#808080'} style={{margin: '20px 0'}}/>

            <Box style={{display:'flex'}}>
                <Typography color='#000000' style={{whiteSpace:'nowrap', fontSize: '18px'}}>
                    Не откликнувшые заказы
                </Typography>
                <IconButton>
                    <ArrowSvg/>
                </IconButton>
            </Box>

            <Box style={{display:'flex'}}>
                <Typography color='#000000' style={{fontSize: '18px'}}>
                    Заказы в работе
                </Typography>
                <IconButton>
                    <ArrowSvg/>
                </IconButton>
            </Box>

            <Box style={{display:'flex'}}>
                <Typography color='#000000' style={{fontSize: '18px', fonWeight: 500}}>
                    Завершенные заказы
                </Typography>
                <IconButton>
                    <ArrowSvg/>
                </IconButton>
            </Box>

            <Box style={{display:'flex'}}>
                <Typography color='#000000' style={{fontSize: '18px'}}>
                    История заказов
                </Typography>
                <IconButton>
                    <ArrowSvg/>
                </IconButton>
            </Box>


        </Box>
    );
};


export default MyOrdersBlock;