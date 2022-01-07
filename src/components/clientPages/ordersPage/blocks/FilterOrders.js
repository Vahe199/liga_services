import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { SelectSvg } from "../../../../assets/svg/SelectSvg";
import { DeleteSvg } from "../../../../assets/svg/DeleteSvg";
import { Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import {useOrderStyles} from "../../../../globalStyles/OrderStyles";


const FilterOrders = () => {
    const classes = useOrderStyles();
  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: 500 }}>Фильтр</p>
        <p style={{ fontSize: "24px", fontWeight: 500, color: "#5A7287" }}>
          Свернуть
        </p>
      </Box>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: 500, fontSize: "22px" }}>Услуги</p>
        <SelectSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Создание сайтов
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          IT-оутсорсинг
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Разработка моб приложений
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Верстка сайтов
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Мобильная версия сайта
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Разработка веб-приложений
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Разработка СРМ
        </p>
        <DeleteSvg />
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: 500, fontSize: "18px", paddingRight: "20px", whiteSpace:'nowrap' }}>
          Разработка игр
        </p>
        <DeleteSvg />
      </Box>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            background: "#EBEBEB",
            color: "#000000",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "15px 40px",
            fontSize: "18px",
            whiteSpace:'nowrap'
          }}
          variant="contained"
          disableElevation
        >
          Как в анкете
        </Button>
        <Button
          style={{
            background: "#EBEBEB",
            color: "#000000",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "15px 45px",
            fontSize: "18px",
            whiteSpace:'nowrap'
          }}
          variant="contained"
          disableElevation
        >
          Добавить
        </Button>
      </Box>

      <p style={{ fontSize: "24px", fontWeight: 500 }}>Регион</p>

        <FormControl
          fullWidth
          style={{
            background: "#EBEBEB",
            borderRadius: "10px",
            border: "1px solid #C4C4C4",
            whiteSpace:'nowrap'
          }}
        >
          <InputLabel id="demo-simple-select-label" style={{whiteSpace:'nowrap'}}>
            Москва и область
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Москва и область"
          >
            <MenuItem></MenuItem>
          </Select>
        </FormControl>

        <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace:'nowrap' }}>Место встречи</p>

        <Box style={{paddingLeft:'25px'}}>
            <p style={{fontSize:'18px', whiteSpace:'nowrap'}}>
                У специалиста
            </p>
            <p style={{fontSize:'18px', whiteSpace:'nowrap'}}>
                У клиента
            </p>
            <p style={{fontSize:'18px'}}>
                Дистанционно 
            </p>
        </Box>
        <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace:'nowrap' }}>Где искать</p>
        <Button variant="contained" disableElevation style={{width:'100%',background: '#EBEBEB',borderRadius: '10px', boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)', color:'#000000', padding:'15px'}}>
            Добавить
        </Button>
        <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace:'nowrap' }}>Ставка, руб. за усл.</p>
        
        <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField id="outlined-basic" label="От" variant="outlined" style={{borderRadius: '10px',border: '1px solid #C4C4C4'}} />
        <TextField id="outlined-basic" label="До" variant="outlined" style={{borderRadius: '10px',border: '1px solid #C4C4C4'}} />
      </Box>

      </Card>
  );
};

export default FilterOrders;
