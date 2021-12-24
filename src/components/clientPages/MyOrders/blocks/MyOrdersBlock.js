import * as React from "react";
import {Divider, IconButton, Typography} from "@mui/material";
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";


const MyOrdersBlock = () => {
    const [btnSelected, setBtnSelected] = useState(1);

    useEffect(() => {
        console.log(btnSelected, 'btnSelected')
    }, [])
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

            <Box onClick={() => setBtnSelected(1)} style={{display:'flex'}}>
                <Typography color='#000000' style={{fontWeight: btnSelected === 1 ? '500' : '400', whiteSpace:'nowrap', fontSize: '18px'}}>
                    Не откликнувшые заказы
                </Typography>
                <IconButton style={btnSelected === 1 ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}}>
                    <ArrowSvg/>
                </IconButton>
            </Box>

            <Box onClick={() => setBtnSelected(2)} style={{display:'flex'}}>
                <Typography color='#000000' style={{fontWeight: btnSelected === 2 ? '500' : '400', fontSize: '18px'}}>
                    Заказы в работе
                </Typography>
                <IconButton style={btnSelected === 2 ? {fontWeight: btnSelected === 3 ? '500' : '400', transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}} >
                    <ArrowSvg/>
                </IconButton>
            </Box>

            <Box onClick={() => setBtnSelected(3)} style={{display:'flex'}}>
                <Typography color='#000000' style={{fontWeight: btnSelected === 3 ? '500' : '400', fontSize: '18px', fonWeight: 500}}>
                    Завершенные заказы
                </Typography>
                <IconButton style={btnSelected === 3 ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}} >
                    <ArrowSvg/>
                </IconButton>
            </Box>

            <Box onClick={() => setBtnSelected(4)} style={{display:'flex'}}>
                <Typography color='#000000' style={{fontWeight: btnSelected === 4 ? '500' : '400', fontSize: '18px'}}>
                    История заказов
                </Typography>
                <IconButton style={btnSelected === 4 ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}} >
                    <ArrowSvg/>
                </IconButton>
            </Box>



        </Box>
    );
};


export default MyOrdersBlock;