import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LargeLogo from "../../../../assets/image/LogoLarge.png";
import { GreenArrowSvg } from "../../../../assets/svg/intro/GreenArrowSvg";
import { GoToChatSvg } from "../../../../assets/svg/intro/GoToChatSvg";
import ModalNewTask from "../../../UI/modals/ModalNewTask";
import ExecuteButton from "../../../UI/common/CustomButtons/ExecuteButton";

export const useStyles = makeStyles({
  title: {
    fontSize: "40px",
    fontWeight: 700,
  },
  btn: {
    padding: "12px 78px",
    fontSize: "16px",
    marginBottom: "20px",
    display: "block",
    fontWeight: 700,
  },
  chat: {
    position: "absolute",
    bottom: -60,
    right: "0",
  },
  img: {
    width: "100%",
    height: "100%",
  },
//   pulse: {
//     background: "transparent",
//     borderRadius: "50%",
//     height: 30,
//     width: 30,
//     boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
//     transform: "scale(1)",
//     animation: "$pulse 1s infinite",
//     animationDuration:'3s'
//   },
//   "@keyframes pulse": {
//     "0%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
//     },
//     "75%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 15px #4A972C",
//     },
//     "100%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
//     },
//   },

//   pulse1: {
//     background: "transparent",
//     borderRadius: "50%",
//     height: 30,
//     width: 30,
//     boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
//     transform: "scale(1)",
//     animation: "$pulse 2s infinite",
//     animationDuration:'2s'
//   },

//   "@keyframes pulse1": {
//     "0%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
//     },
//     "75%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 15px rgba(0, 0, 0, 0.7)",
//     },
//     "100%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
//     },
//   },

//   pulse2: {
//     background: "transparent",
//     borderRadius: "50%",
//     height: 30,
//     width: 30,
//     boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
//     transform: "scale(1)",
//     animation: "$pulse 3s infinite",
//     animationDuration:'1s'
//   },

//   "@keyframes pulse2": {
//     "0%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 0 #4A972C",
//     },
//     "75%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 15px rgba(0, 0, 0, 0)",
//     },
//     "100%": {
//       transform: "scale(1)",
//       boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
//     },
//   },


pulse: {
    background: "transparent",
    borderRadius: "50%",
    height: 30,
    width: 30,
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    transform: "scale(1)",
    animation: "$pulse 2s infinite",
  },
  "@keyframes pulse": {
    "0%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.2)",
      },
      "75%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 15px rgba(0, 0, 0, 0)",
      },
      "100%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      },
  },

  pulse1: {
    background: "transparent",
    borderRadius: "50%",
    height: 30,
    width: 30,
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    transform: "scale(1)",
    animation: "$pulse 3s infinite",
  },

  "@keyframes pulse1": {
    "0%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.2)",
      },
      "75%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 15px rgba(0, 0, 0, 0)",
      },
      "100%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      },
  },

  pulse2: {
    background: "transparent",
    borderRadius: "50%",
    height: 30,
    width: 30,
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    transform: "scale(1)",
    animation: "$pulse 4s infinite",
  },

  "@keyframes pulse2": {
    "0%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.2)",
    },
    "75%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 15px rgba(0, 0, 0, 0)",
    },
    "100%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    },
  },



});

const Intro = ({ categoriesRef }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView();
  };
  return (
    <Grid mt={"20px"} mb={"80px"} container spacing={2}>
      {showModal && (
        <ModalNewTask showModal={showModal} setShowModal={setShowModal} />
      )}
      <Grid item xs={12} md={6}>
        <Typography mb={"20px"} className={classes.title} color={"#445E77"}>
          ВСЕ СПЕЦИАЛИСТЫ ВАШЕГО ГОРОДА В ОДНОМ МЕСТЕ
        </Typography>
        <Button
          onClick={() => setShowModal(true)}
          className={classes.btn}
          size={"large"}
          variant="contained"
          color="success"
        >
          Оставить задание
        </Button>
        <Typography mb={"10px"} color={"#000"}>
          Опишите подробно проблему или задачу и мы подберем для вас
          исполнителя, или
        </Typography>
        <Typography mb={"20px"} style={{ color: "grey" }}>
          Выберите услугу из списка
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className={classes.pulse} style={{ cursor: "pointer" }}>
            <Box className={classes.pulse1}>
              <Box className={classes.pulse2}>
                <GreenArrowSvg />
              </Box>
            </Box>
          </Box>
          {/* <ExecuteButton/> */}
          <Typography
            onClick={scrollToCategories}
            style={{ color: "grey", paddingLeft: 20, cursor: "pointer" }}
          >
            Стать исполнителем и начать зарабатывть
          </Typography>
        </Box>
      </Grid>
      <Grid style={{ position: "relative" }} item xs={12} md={6}>
        <img src={LargeLogo} alt={"logo"} className={classes.img} />
        <Box className={classes.chat}>
          <GoToChatSvg />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
