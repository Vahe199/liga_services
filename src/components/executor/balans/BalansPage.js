import React from "react";
// import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import {
  Card,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100%",
    marginBottom: 100,
    "& .MuiTypography-h6": {
      fontSize: 18,
      marginBottom: 10,
      color: "#808080" 
    },
    "& .MuiTypography-h5": {
      fontWeight: 500,
      fontSize: 20,
      color: "#FFFFF",
      marginTop: 15,
    },
    "& .MuiCard-root": {
      borderRadius: "20px",
      margin: "20px",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
      padding: "30px",
      "@media (max-width: 450px)": {
        margin: "20px 0",
      },
    },
    a1:{
        "@media (max-width: 550px)": {
            flexWrap:'wrap'
          }, 
    },
    
  },
});

const BalansPage = (props) => {
  const classes = useStyles();
  return (
    <Container
      style={{ paddingTop: "80px" }}
      maxWidth={"lg"}
      className={classes.root}
    >
      <Box className={classes.containerSupport}>
        <Card className={classes.root}>
          <Typography variant={"h5"}>
            Последние транзакции
          </Typography>
          <Divider style={{ height: "1px", background: "#808080" }}></Divider>
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"h5"}>Отклик</Typography>
            <Typography style={{textAlign:'right'}} variant={"h5"}>
              -300 руб.
            </Typography>
          </Typography>
          <Typography className="a1" style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant={"h6"}
              style={{ paddingRight: "10px" }}
            >
              2 Ноября
            </Typography>
            <Box
              style={{
                marginRight: "5px",
                width: "8px",
                height: "8px",
                background: "#C4C4C4",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography variant={"h6"}>
              описание заказа
            </Typography>
          </Typography>
          <Divider style={{ height: "1px", background: "#808080" }}></Divider>
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"h5"}>Пополнение баланса</Typography>
            <Typography variant={"h5"} style={{textAlign:'right'}}>
              +1300 руб.
            </Typography>
          </Typography>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant={"h6"}
              style={{ paddingRight: "10px", textAlign:'right'}}
            >
              2 Ноября
            </Typography>
            <Typography>
              Банковская карта
            </Typography>
          </Typography>
          <Divider style={{ height: "1px", background: "#808080" }}></Divider>
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"h5"}>Отклик</Typography>
            <Typography variant={"h5"} > 
              -500 руб.
            </Typography>
          </Typography>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant={"h6"}
              style={{ paddingRight: "10px" }}
            >
              25 Августа
            </Typography>
            <Box
              style={{
                marginRight: "5px",
                width: "8px",
                height: "8px",
                background: "#C4C4C4",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography variant={"h6"}>описание заказа</Typography>
          </Typography>
          <Divider style={{ height: "1px", background: "#808080" }}></Divider>
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"h5"}>Отклик</Typography>
            <Typography variant={"h5"} style={{textAlign:'right'}}> 
              -50 руб.
            </Typography>
          </Typography>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant={"h6"}
              style={{ paddingRight: "10px" }}
            >
              23 Августа
            </Typography>
            <Box
              style={{
                marginRight: "5px",
                width: "8px",
                height: "8px",
                background: "#C4C4C4",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography variant={"h6"}>описание заказа</Typography>
          </Typography>
          <Divider style={{ height: "1px", background: "#808080" }}></Divider>
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"h5"}>Отклик</Typography>
            <Typography variant={"h5"} style={{textAlign:'right'}}> 
              -50 руб.
            </Typography>
          </Typography>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant={"h6"}
              style={{ paddingRight: "10px" }}
            >
              20 Августа
            </Typography>
            <Box
              style={{
                marginRight: "5px",
                width: "8px",
                height: "8px",
                background: "#C4C4C4",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography variant={"h6"}>описание заказа</Typography>
          </Typography>
          <Divider style={{ height: "1px", background: "#808080", marginBottom:'30px' }}></Divider>
          <Typography variant={"h6"}>Более >></Typography>
        </Card>
      </Box>
    </Container>
  );
};

export default BalansPage;
