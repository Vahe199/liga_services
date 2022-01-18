import React from 'react';
import Box from "@mui/material/Box";

const CustomInputAddFile = ({value, handleChange, name, svg, label}) => {
    return (
        <Box>
            <input
                color="primary"
                type="file"
                name={name}
                value={value}
                onChange={handleChange}
                id="icon-button-file"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: 'none' }}
            />
            <label style={{display: 'flex', marginTop: '10px', justifyContent: 'flex-start', alignItems: 'center'}} htmlFor="icon-button-file">
                {svg}
                <p style={{fontSize: '15px', margin: 0, paddingLeft: '20px', color: '#000'}}>{label}</p>
            </label>
        </Box>
    )
}

export default CustomInputAddFile;