import React from "react";
import { DataNotification } from "../../utils/DataNotification";
import { CloseSvg } from "../../assets/svg/CloseSvg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CustomDivider from "../UI/customDivider/CustomDivider";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height:"100vh",
    paddingTop: '90px',
    marginBottom: '70px',
    backgroundColor: '#e1e3e5',
    "& .MuiTypography-h6": {
      fontWeight: 500,
      fontSize: 18,
      marginBottom: 10,
    },
    "& .MuiTypography-h5": {
      fontSize: 18,
      color: "#808080",
      marginTop: 15,
    },
    "& .MuiCard-root": {
      borderRadius: "10px",
      margin: "20px",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
      padding: "30px",
    },
  },
});

const NotificationPage = (props) => {
  const classes = useStyles();
  return (
      <Box className={classes.root}>
      <Container maxWidth={"lg"} className={classes.root}>
        <Box>
          <Card>
            {DataNotification.map((item, index) => (
              <div key={index}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography style={{ paddingLeft: "20px" }}>
                    {item.name}
                  </Typography>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      style={{
                        color: "#616161",
                        paddingRight: "50px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.data}
                    </Typography>
                    <IconButton>
                      <CloseSvg />
                    </IconButton>
                  </Box>
                </p>
                <CustomDivider />
              </div>
            ))}
          </Card>
        </Box>
      </Container>
      </Box>
  );
};

export default NotificationPage;
