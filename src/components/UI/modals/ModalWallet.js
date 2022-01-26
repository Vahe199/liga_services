import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {CloseSvg} from "../../../assets/svg/CloseSvg";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useStyles} from "../../../globalStyles/ModalStyles";
import CustomInputIcon from "../customInput/CustomInputIcon";
import {Formik} from "formik";
import InputIcons from "./blocks/InputIcons";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalWallet = ({showModal, setShowModal}) => {

    const [value, setValue] = React.useState('a');



  const handleClose = () => setShowModal(false);
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{borderRadius:'10px'}} sx={{ ...style ,width:{xs: 270, sm: 400, md: 500}}}>
            <Box style={{textAlign: 'end'}}>
                <IconButton onClick={handleClose}>
                    <CloseSvg />
                </IconButton>
            </Box>
            <Box style={{padding: '0 20px'}}>
                <Box style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography style={{alignItems: 'center'}} className={classes.title}>
                        Недостаточно средств
                    </Typography>
                </Box>
                <Typography style={{ fontSize: "18px", marginTop: '20px' }}>Пополнить 20 руб</Typography>
                <Formik
                    initialValues={{ count: '', pay: value }}
                    onSubmit={(values, action) => {
                        //console.log(values, 'values')
                        setShowModal(true)
                        action.resetForm()
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          setFieldValue,
                          handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <CustomInputIcon
                                name={'count'}
                                value={values.count}
                                handleChange={handleChange}
                                placeholder={'Текущий баланс'}
                                icon={<InputIcons />}
                            />
                            <Box style={{margin: '20px 0'}}>
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        aria-label="pay"
                                        defaultValue="remotely"
                                        name="pay"
                                        style={{flexDirection: 'row'}}
                                    >
                                        <FormControlLabel control={<Radio classes={{root: classes.radio, checked: classes.checked}}
                                                                          style={{color: '#4B9A2D'}} size={'small'} onChange={(e) => {
                                            setValue('card')
                                            setFieldValue('pay', e.target.value)
                                        }} value="remotely" />} label="Карта" />
                                        <FormControlLabel  control={<Radio  onChange={(e) => {
                                            setValue('executor')
                                            setFieldValue('pay', e.target.value)
                                        }} classes={{root: classes.radio, checked: classes.checked}} style={{color: '#4B9A2D'}} size={'small'}   value="wallet" />} label="Кошелек" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box style={{display: 'flex', justifyContent: 'center'}}>
                                <Button style={{width: '100%'}} onClick={handleSubmit} variant={'contained'}>
                                    Пополнить
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>

        </Box>
      </Modal>
    </div>
  );
}

export default ModalWallet;
