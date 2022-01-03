import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const ProgressLine = ({persent}) => {
    return (
        <Box>
            <Box style={{marginBottom: '10px'}}>
                <Typography>
                    {`Заполненность профиля ${persent} %`}
                </Typography>
            </Box>
            <progress style={{width: '100%'}} id="file" value={persent} max="100" />
        </Box>

    )
}

export default ProgressLine;