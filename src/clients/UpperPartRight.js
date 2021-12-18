import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UpperPartRight = () => {
  return (
    <Box>
        <Typography
        size="40px"
        noWrap
        component="div"
        color=" #808080"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    >
        Дата: 15 нояб.(пн) - 30 дек. (чт)
    </Typography>
    </Box>
    
  );
};
export default UpperPartRight;
