import React from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CardTitle from "../../../../../UI/titles/CardTitle";
import {Box, Button, Typography} from "@mui/material";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import {FieldArray, Formik} from "formik";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import {TrashSvg} from "../../../../../../assets/svg/TrashSvg";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";

const PortfolioEdit = ({editPortfolio, setEditPortfolio}) => {
    const classes = useInfoCardStyles();
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
                            console.log(values, 'values')
                            action.resetForm()
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
                                                <Box>

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