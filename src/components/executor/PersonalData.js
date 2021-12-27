import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Radio } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";





const PersonalData = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
  setSelectedValue(event.target.value);
  };
  return (
    <Box
      style={{
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "20px 50px",
        width: "40%",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace: "nowrap" }}>
        Личные данные
      </p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <p style={{ color: "#808080", fontSize: "18px" }}>Пол</p>

      <Box style={{ display: "flex", marginBottom: "25px" }}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
        <p style={{fontWeight: 500}}>Женский</p>
        <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
        <p style={{fontWeight: 500}}>Мужской</p>
      </Box>
      <p style={{ color: "#808080", fontSize: "18px" }}>Дата рождения</p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker renderInput={(params) => <TextField {...params} />} />
      </LocalizationProvider>
      <p style={{ color: "#808080", fontSize: "18px" }}>Обо мне</p>
      <TextField
        style={{ width: "100%" }}
        id="outlined-multiline-static"
        rows={4}
      />
    </Box>
  );
};

export default PersonalData;
