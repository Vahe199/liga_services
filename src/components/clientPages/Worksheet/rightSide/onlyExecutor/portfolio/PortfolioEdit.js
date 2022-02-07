import React from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import {FieldArray, Formik} from "formik";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import {TrashSvg} from "../../../../../../assets/svg/TrashSvg";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {updatePortfolioData} from "../../../../../../store/actions/ProfileDataActions";
import {useDispatch} from "react-redux";

const PortfolioEdit = ({editPortfolio, setEditPortfolio}) => {
    const classes = useInfoCardStyles();
    const dispatch = useDispatch()
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
                <Box>
                    <Formik
                        initialValues={{
                            link: [
                                {
                                    link: '',
                                },
                            ],
                            file: ''
                        }}
                        onSubmit={async (values, action) => {
                            //console.log(values, 'values')
                            dispatch(updatePortfolioData(values))
                            // action.resetForm()
                        }}
                    >
                        {({
                              values,
                              handleChange,
                              handleSubmit,
                              setFieldValue
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    style={{display: 'flex', alignItems: 'flex-start'}}>
                                    <Typography className={classes.title}>
                                        Портфолио
                                    </Typography>
                                    <Button type={"submit"} onClick={() => setEditPortfolio(false)}
                                            size={"small"} sx={{minWidth:0,padding:0,marginLeft:5}}>
                                        <FileSVG color={'#808080'}/>
                                    </Button>

                                </Box>
                                <CustomDivider />
                                <Typography variant={"h5"}>
                                    Фотографии
                                </Typography>
                                <CustomImageList imageData={imageData} />
                                <Box style={{marginBottom: '10px'}}>
                                    <CustomInputAddFile
                                        svg={<AddButton
                                            name={'file'}
                                            value={values.file}
                                            handleChange={handleChange} />}
                                    />
                                </Box>

                                <FieldArray name={'link'}>
                                    {({push, remove}) => (
                                        <Box>
                                            {values.link.map((l, index) =>
                                                <Box key={index}>

                                                <CustomInput
                                                    name={`link[${index}].l`}
                                                    value={l.link}
                                                    handleChange={handleChange}
                                                />
                                                    {values.link.length > index + 1 ? <div onClick={() => remove(index)}>
                                                            <TrashSvg/>
                                                        </div>
                                                        : <AddButton fun={() => push({link: ''})}/>}
                                                </Box>
                                            )}

                                            {/*<AddButton fun={() => push({link: ''})} />*/}
                                        </Box>
                                    )}
                                </FieldArray>
                            </form>
                        )}
                    </Formik>
                </Box>
        </Card>
    )
}

export default PortfolioEdit;
