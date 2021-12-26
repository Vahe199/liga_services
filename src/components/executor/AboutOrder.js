import React from 'react';
import { Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

const AboutOrder = () => {
    return (
    <Box style={{boxShadow:' 4px 4px 10px rgba(0, 0, 0, 0.15)', borderRadius: '20px', padding:'30px'}}>
        <Box style={{display:'flex', justifyContent:'space-between' }}> 
                <p style={{fontWeight: 500, fontSize:'20px', width:'70%'}}>Создание Сайтов. Помочь адаптировать скрипт для выгрузки Kibana (изначальный скрипт через Phyton, request) к новой выгрузке</p>
            <Box>
                <p style={{ fontSize:'18px',color: '#5A7287'}}>Категория</p>
                <p style={{ fontSize:'18px', fontWeight: 500}}>Разное</p>
                <p style={{whiteSpace:'nowrap', fontSize:'24px', color: '#5A7287', fontWeight: 500}}> от 10000 руб.</p>
            </Box>
        </Box>
        <Divider style={{border:'1px solid #808080', width:'100%'}} />
            <p style={{fontWeight: 500, fontSize: '18px'}}>Место встречи</p>
            <p style={{fontSize: '18px',color: '#808080'}}>Дистанционно</p>
        <Divider style={{border:'1px solid #808080', width:'100%'}} />
            <p style={{fontWeight: 500, fontSize: '18px'}}>Когда</p>
            <p style={{fontSize: '18px',color: '#808080'}}>15 нояб.(пн) - 30 дек. (чт), можно предложить свои даты</p>
        <Divider style={{border:'1px solid #808080', width:'100%'}} />
            <p style={{fontSize: '18px',fontWeight: 500}}>Описание</p>
            <p style={{fontSize: '18px',color: '#808080'}}>
                 Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!
                Мы собрали для вас в одно место, опытных, проверенных, специалистов своего дела! Теперь каждый может вызвать любого специалиста по одному единому номеру!
                Красноярск, Железногорск, Сосновоборск, Берёзовка и все близ лежащие населённые пункты! Уже более 400 категорий услуг в одном месте! Ни каких очередей и ожиданий! Только проверенные специалисты! Быстро, надёжно, качественно, без хлопот и переживаний!
            </p>
            <p style={{fontSize: '18px',color: '#808080'}}>
                 Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!
                Мы собрали для вас в одно место, опытных, проверенных, специалистов своего дела! Теперь каждый может вызвать любого специалиста по одному единому номеру!
                Красноярск, Железногорск, Сосновоборск, Берёзовка и все близ лежащие населённые пункты! Уже более 400 категорий услуг в одном месте! Ни каких очередей и ожиданий! Только проверенные специалисты! Быстро, надёжно, качественно, без хлопот и переживаний!
            </p>
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=200&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=200&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

                 <Box style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:'40px'}}>
                    <Button variant="contained" color="success">Откликнуться</Button>  
                 </Box>
    </Box>
    )
}
export default AboutOrder;
