import * as React from "react";
import Typography from "@mui/material/Typography";

const UpperPartLeft = () => {
    return (
        <Typography
            size="40px"
            noWrap
            component="div"
            color="#000000"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
            Категория: Разное
        </Typography>

      )
      
  };
  export default UpperPartLeft;