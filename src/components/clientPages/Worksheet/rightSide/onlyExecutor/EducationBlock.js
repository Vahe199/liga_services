import React, {useState} from "react";
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CardTitle from "../../../../UI/titles/CardTitle";
import {Box, Typography} from "@mui/material";
import FormControl from "@material-ui/core/FormControl";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import CustomInput from "../../../../UI/customInput/CustomInput";
import CustomImageList from "../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../UI/CustomButtons/AddButton";

const EducationBlock = ({editEducationBlock, setEditEducationBlock}) => {
    const classes = useInfoCardStyles();
    const [state, setState] = useState({
        initial: false,
        basic: false,
        average: false,
        higher: false,

    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { initial, basic, average, higher } = state;
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
          <CardTitle title={'Образование и сертификаты'} condition={editEducationBlock}
                fun={setEditEducationBlock}/>
            <Typography variant={"h5"}>
                Образование
            </Typography>
            {!editEducationBlock ? <Typography variant={'h6'}>
                    Высшее
                </Typography> :
                <Box>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox style ={{
                                        color: '#4B9A2D'
                                    }} size="small" checked={initial} onChange={handleChange} name="initial" />
                                }
                                label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Начальное общее</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox style ={{
                                        color: '#4B9A2D'
                                    }} size="small" checked={basic} onChange={handleChange} name="basic" />
                                }
                                label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Основное общее</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox style ={{
                                        color: '#4B9A2D'
                                    }}  size="small" checked={average} onChange={handleChange} name="average" />
                                }
                                label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Среднее общее</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox style ={{
                                        color: '#4B9A2D'
                                    }} size="small" checked={higher} onChange={handleChange} name="higher" />
                                }
                                label={<Typography style={{fontWeight: '500'}} variant={'h4'}>Высшее</Typography>}
                            />
                        </FormGroup>
                    </FormControl>
                </Box>}
            <Typography variant={"h5"}>
                Образовательное учереждение
            </Typography>
            {!editEducationBlock ? <Typography variant={'h6'}>
                    МГУ
                </Typography> :
                <Box className={classes.singleInput}>
                    <CustomInput />
                </Box>}
            <Typography variant={"h5"}>
                Сертификаты
            </Typography>
            <CustomImageList imageData={imageData} />
            {editEducationBlock &&
            <CustomInputAddFile
                svg={<AddButton />}
            />}

        </Card>
    )
}

export default EducationBlock;