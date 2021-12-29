import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";



const BlockBar = () => {

    return (

        <Box style={{boxShadow:' 4px 4px 10px rgba(0, 0, 0, 0.15)', borderRadius: '20px', padding:'25px', width:'70%'}}>
            <Box>
                <Box style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', width:'100%', marginBottom:'20px'}}>
                    <Box style={{width:'50%',color:'#808080',display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                        <Box style={{display:'flex'}}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fill="#C4C4C4"/>
                            </svg>
                        </Box>
                        <Box>
                            <Typography style={{paddingLeft:'15px', color:'#000000', fontSize:'24px'}}>Елена</Typography>
                        </Box>
                        <Box style={{paddingLeft:'12px'}}>
                            <OnlineSvg />
                        </Box>
                    </Box>


                    <Box style={{color:'#808080', fontSize:'18px',width:'50%',display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                        <Typography style={{paddingRight:'18px'}}>5 минут назад</Typography>
                        <Box>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M13 1L0.999999 13" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </Box>
                    </Box>
                </Box>

                <div style={{width:'100%', height:'1px', border: '1px solid #808080', marginBottom:'25px'}}>

                </div>

            </Box>
            <div>
                <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center',fontSize:'28px',fontWeight: 500}}>
                    <Box style={{whiteSpace:'nowrap',color: '#000000'}}>
                        Создание Сайтов
                    </Box>
                    <Box style={{color: '#000000'}}>
                        Категория
                    </Box>
                </Box>

                <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center',fontSize:'28px',fontWeight: 500}}>
                    <Box style={{fontSize:'28px', color:'#5A7287'}}>
                        от 10000 руб.
                    </Box>
                    <Box style={{fontSize:'24px', color:'#808080'}}>
                        Разное
                    </Box>
                </Box>

                <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                    <Box style={{width:'50%', color:'#808080', fontSize:'24px'}}>
                        Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!

                    </Box>
                    <Box style={{width:'50%'}}>
                        <Box style={{textAlign:'right',fontSize:'28px',fontWeight: 500,color: '#000000'}}>
                            Место встречи
                        </Box>

                        <Box style={{fontSize:'24px', color:'#808080', textAlign:'right'}}>
                            Дистанционно
                        </Box>

                        <Box style={{textAlign:'right',fontSize:'28px',fontWeight: 500,color: '#000000'}}>
                            Когда
                        </Box>

                        <Box style={{textAlign:'right', color: '#808080', fontSize: '24px'}}>
                            15 нояб.(пн) - 30 дек. (чт)
                        </Box>

                        <Box style={{textAlign:'right', color: '#808080', fontSize: '24px'}}>
                            можно предложить свои даты
                        </Box>

                    </Box>
                </Box>

                <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                    <Box style={{width:'50%',color:'#4C9B2D', fontSize:'24px'}}>
                        Клиенту интересно ваше предложение
                    </Box>
                    <Box style={{width:'50%'}}>

                    </Box>
                </Box>


            </div>
        </Box>


    )

};
export default BlockBar;