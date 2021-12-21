import * as React from "react";
import Box from "@mui/material/Box";




const ContainerBar = () => {

    return (
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




      )
      
  };
  export default ContainerBar;