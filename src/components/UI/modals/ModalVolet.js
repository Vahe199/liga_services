import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CloseSvg } from "../../../assets/svg/CloseSvg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import WalletSvg from "./WalletSvg";
import { Radio } from "@mui/material";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalVolet = () => {



    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
    setSelectedValue(event.target.value);
    };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [close, setClose] = useState(false);
  const closeChange = () => setOpen(false);
  
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{borderRadius:'10px'}} sx={style}>
          <Box style={{ textAlign: "right", marginBottom: "-30px" }} onClick={closeChange}>
            <CloseSvg />
          </Box>
          <Typography
            style={{
              textAlign: "center",
              color: "#445E77",
              fontWeight: 500,
              fontSize: "25px",
              marginBottom: "30px",
            }}
          >
            Недостаточно средств
          </Typography>
          <Typography style={{ fontSize: "18px" }}>Пополнить 20 руб</Typography>
          <FormControl style={{width:'100%'}} sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
                 Текущий баланс
            </InputLabel>
            <OutlinedInput style={{borderRadius:'10px', border: '1px solid #808080'}}          
              endAdornment={
                <InputAdornment position="end">
                    <Box style={{paddingRight:'20px'}}><WalletSvg/></Box>
                    <Typography style={{fontSize:"20px"}}>
                        10 руб
                    </Typography>
                   
                </InputAdornment>
              }
            />
          </FormControl>
             <Box style={{display:'flex', alignItems:'center', marginBottom:'30px'}}>
                <Box style={{display:'flex', alignItems:'center', paddingRight:'50px'}}>
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    />
                    <Typography>Карта</Typography>
                </Box>
                <Box style={{display:'flex', alignItems:'center'}}>
                    <Radio
                         checked={selectedValue === 'b'}
                         onChange={handleChange}
                         value="b"
                         name="radio-buttons"
                         inputProps={{ 'aria-label': 'B' }}
                    />
                    <Typography>Кошелек</Typography>
                </Box> 




{/* <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange2}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
        <p style={{fontWeight: 500}}>Женский</p>
        <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange2}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
        <p style={{fontWeight: 500}}>Мужской</p> */}


            </Box>
            <Button style={{background:'#445E77', borderRadius: '10px', width:'100%', padding:'17px'}} variant="contained" disableElevation>
                Пополнить
            </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalVolet;
