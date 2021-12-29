import React from "react";
import { Box, Button, Stack, Switch, TextareaAutosize } from "@mui/material";
import Divider from "@mui/material/Divider";
import CustomImageList from "../UI/customimagelist/CustomImageList";
import { imageData } from "../../utils/data/imagedata/ImageData";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CustomDatePicker from "../UI/datePicker/CustomDatePicker";

const AboutOrder = () => {
  return (
    <Box
      style={{
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontWeight: 500, fontSize: "20px", width: "70%" }}>
          Создание Сайтов. Помочь адаптировать скрипт для выгрузки Kibana
          (изначальный скрипт через Phyton, request) к новой выгрузке
        </p>
        <Box>
          <p style={{ fontSize: "18px", color: "#5A7287" }}>Категория</p>
          <p style={{ fontSize: "18px", fontWeight: 500 }}>Разное</p>
          <p
            style={{
              whiteSpace: "nowrap",
              fontSize: "24px",
              color: "#5A7287",
              fontWeight: 500,
            }}
          >
            {" "}
            от 10000 руб.
          </p>
        </Box>
      </Box>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <p style={{ fontWeight: 500, fontSize: "18px" }}>Место встречи</p>
      <p style={{ fontSize: "18px", color: "#808080" }}>Дистанционно</p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <p style={{ fontWeight: 500, fontSize: "18px" }}>Когда</p>
      <p style={{ fontSize: "18px", color: "#808080" }}>
        15 нояб.(пн) - 30 дек. (чт), можно предложить свои даты
      </p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <p style={{ fontSize: "18px", fontWeight: 500 }}>Описание</p>
      <p style={{ fontSize: "18px", color: "#808080" }}>
        Единый центр услуг - это удобный, динамично развивающийся Единый Сервис
        Красноярского края, который позволяет быстро и безопасно находить
        надёжных исполнителей для решения любых задач, услуг и поручений! Мы
        собрали для вас в одно место, опытных, проверенных, специалистов своего
        дела! Теперь каждый может вызвать любого специалиста по одному единому
        номеру! Красноярск, Железногорск, Сосновоборск, Берёзовка и все близ
        лежащие населённые пункты! Уже более 400 категорий услуг в одном месте!
        Ни каких очередей и ожиданий! Только проверенные специалисты! Быстро,
        надёжно, качественно, без хлопот и переживаний!
      </p>
      <p style={{ fontSize: "18px", color: "#808080" }}>
        Единый центр услуг - это удобный, динамично развивающийся Единый Сервис
        Красноярского края, который позволяет быстро и безопасно находить
        надёжных исполнителей для решения любых задач, услуг и поручений! Мы
        собрали для вас в одно место, опытных, проверенных, специалистов своего
        дела! Теперь каждый может вызвать любого специалиста по одному единому
        номеру! Красноярск, Железногорск, Сосновоборск, Берёзовка и все близ
        лежащие населённые пункты! Уже более 400 категорий услуг в одном месте!
        Ни каких очередей и ожиданий! Только проверенные специалисты! Быстро,
        надёжно, качественно, без хлопот и переживаний!
      </p>
      <Box style={{ marginBottom: "50px" }}>
        <CustomImageList imageData={imageData} />
      </Box>
      <Divider
        style={{
          border: "1px solid #808080",
          width: "100%",
          marginBottom: "50px",
        }}
      />

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={25}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <p style={{ fontSize: "18px" }}>Стоимость услуги</p>
          <Box>
            <Box style={{ display: "flex" }}>
              <TextField
                style={{ paddingRight: "20px" }}
                variant={"outlined"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">{"Руб."}</InputAdornment>
                  ),
                }}
                sx={{
                  input: { height: 10, borderRadius: 20, width: 150 },
                }}
              />

              <TextField
                variant={"outlined"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      style={{ borderRadius: "10px" }}
                      position="start"
                    >
                      {"Руб."}
                    </InputAdornment>
                  ),
                }}
                sx={{
                  input: { height: 10, borderRadius: 20, width: 150 },
                }}
              />
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontSize: "18px" }}>Указать точную стоимость</p>
              <Switch />
            </Box>
          </Box>
        </Box>

        <Box>
          <p style={{ fontSize: "18px" }}>Предлогать свои даты</p>
          <Box style={{ display: "flex" }}>
            <Box style={{ paddingRight: "20px" }}>
              <CustomDatePicker />
            </Box>
            <CustomDatePicker />
          </Box>
        </Box>
      </Stack>
      <p style={{ fontSize: "18px" }}>Предложение заказчику </p>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={8}
        placeholder="Пример предложения
          Здравствуйте Елена, у меня 5+ лет опыта работы. Работаю с такими языками программирования как Phyton, JavaScript, Laravel и т.д. Люблю своё дело...."
        style={{ width: "100%", marginBottom: "35px" }}
      />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Button variant="contained" color="success" style={{padding:'16px 100px', fontSize: '24px'}}>
          Отправить
        </Button>
      </Box>
    </Box>
  );
};
export default AboutOrder;
