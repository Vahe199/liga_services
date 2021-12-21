import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DownloadSvg from './DownloadSvg'
import Rating from "@mui/material/Rating";
import MessengerSvg from './MessengerSvg';



const ClientBar = () => {
    return (
        <Box style={{borderRadius: '20px', boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.15)',  padding:'30px 30px'}}>
            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center", marginBottom:'15px'}}>
                <Box style={{width:'50%', color: '#000000', fontWeight: '500',whiteSpace:'nowrap'}}>
                     <Typography>
                         Категория: Разное
                     </Typography>
                </Box>  

                <Box style={{width:'50%', textAlign:'right', color:'#808080', fontSize: '24px', whiteSpace:'nowrap'}}>
                      <Typography>
                          Дата: 15 нояб.(пн) - 30 дек. (чт)
                      </Typography>
                </Box>
      
            </Box>
            <Box style={{border: '1px solid #808080', marginBottom:'28px'}}></Box> 

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ fontSize: "28px", width:'50%'}}>
                   <Typography>Создание Сайтов</Typography>
                </Box>
                <Box style={{fontSize:'24px',color:'#000000',fontWeight: '500',display:'flex', justifyContent:'flex-end', width:'50%'}}>
                    <Typography> Место встречи </Typography>
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center", marginBottom:'20px'}}>
                <Box style={{ fontSize: "28px", width:'50%', color:'#5A7287'}}>
                   <Typography>от 10000 руб.</Typography>
                </Box>
                <Box style={{fontSize:'24px',color:'#808080',fontWeight: '500',display:'flex', justifyContent:'flex-end', width:'50%'}}>
                    <Typography> Дистанционно </Typography>
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ fontSize: "24px", color: "#808080",width:'50%'}}>
                   <Typography>Исполнитель</Typography>
                </Box>
                <Box style={{fontSize:'24px',display:'flex', justifyContent:'flex-end', color: '#000000', fontWeight: '500', width:'50%'}}>
                    <Typography> Договор </Typography>
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ fontSize: "24px", color: "#000000",width:'50%',fontWeight: 500}}>
                   <Typography>Егор Крид</Typography>
                </Box>
                <Box style={{whiteSpace:'nowrap',color:'#808080', display:'flex', fontSize:'24px', justifyContent:'flex-end',width:'50%'}}>
                   <Box style={{ cursor:'pointer', paddingRight:'15px'}}>
                        <DownloadSvg/>
                   </Box>
                   <Typography>
                       Скачать файл
                   </Typography>
               </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ fontSize: "24px", color: "#808080",width:'50%'}}>
                   <Typography>Баллы</Typography>
                </Box>
                <Box style={{ width:'50%'}}>
                    
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{marginBottom:'22px',width:'50%'}}>
                     <Rating name="no-value" value={null} />
                </Box>
                <Box style={{ whiteSpace:'nowrap',color:'#808080',fontSize:'24px',display:'flex', justifyContent:'flex-end', width:'50%'}}>
                <Box style={{ cursor:'pointer'}}>
                     <MessengerSvg/>
                </Box>
                    <Typography>
                       Написать исполнителю
                    </Typography>
               </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ width:'50%'}}>
                  <Box>
                    <button style={{color: '#FFFFFF', background: '#4B9A2D',borderRadius: '10px', boxSizing: 'border-box', border: '1px solid #808080', padding:'14px 25px', cursor:'pointer', whiteSpace:'nowrap' }}>Оставить отзыв</button>
                  </Box>
                   
                </Box>
                <Box style={{fontSize:'24px',display:'flex', justifyContent:'flex-end', color: '#808080', width:'50%'}}>
                    <Typography> Подробнее </Typography>
                </Box>
            </Box>
        </Box>
      )
      
  };
  export default ClientBar;