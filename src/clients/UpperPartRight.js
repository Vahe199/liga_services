import * as React from "react";
import Typography from "@mui/material/Typography";

const UpperPartRight = () => {
  return (
        <Typography
        size="40px"
        noWrap
        component="div"
        color=" #808080"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    >
        Дата: 15 нояб.(пн) - 30 дек. (чт)
    </Typography>

    
  );
};
export default UpperPartRight;
