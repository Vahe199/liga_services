import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LargeLogo from "../../../../assets/image/LogoLarge.png";
import { GreenArrowSvg } from "../../../../assets/svg/intro/GreenArrowSvg";
import { GoToChatSvg } from "../../../../assets/svg/intro/GoToChatSvg";
import ModalNewTask from "../../../UI/modals/ModalNewTask";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

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
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "100%",
  },

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
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);
  console.log(auth);
  const goToChat = () => {
    if (auth) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

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
          ?????? ?????????????????????? ???????????? ???????????? ?? ?????????? ??????????
        </Typography>
        <Button
          onClick={() => setShowModal(true)}
          className={classes.btn}
          size={"large"}
          variant="contained"
          color="success"
        >
          ???????????????? ??????????????
        </Button>
        <Typography mb={"10px"} color={"#000"}>
          ?????????????? ???????????????? ???????????????? ?????? ???????????? ?? ???? ???????????????? ?????? ??????
          ??????????????????????, ??????
        </Typography>
        <Typography mb={"20px"} style={{ color: "grey" }}>
          ???????????????? ???????????? ???? ????????????
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className={classes.pulse} style={{ cursor: "pointer" }}>
            <Box className={classes.pulse1}>
              <Box className={classes.pulse2}>
                <GreenArrowSvg />
              </Box>
            </Box>
          </Box>
          <Typography
            onClick={scrollToCategories}
            style={{ color: "grey", paddingLeft: 20, cursor: "pointer" }}
          >
            ?????????? ???????????????????????? ?? ???????????? ????????????????????????
          </Typography>
        </Box>
      </Grid>
      <Grid style={{ position: "relative" }} item xs={12} md={6}>
        <img src={LargeLogo} alt={"logo"} className={classes.img} />
        <Box onClick={goToChat} className={classes.chat}>
          <GoToChatSvg />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
