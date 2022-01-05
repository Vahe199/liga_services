import React from 'react';
import {useInfoCardStyles} from "./InfoCard/InfoCardStyles";
import Card from "@mui/material/Card";
import CardTitle from "../../UI/titles/CardTitle";
import {Box, Typography} from "@mui/material";
import CustomImageList from "../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../utils/data/imagedata/ImageData";
import {DownloadSvg} from "../../../assets/svg/DownloadSvg";
import CustomInputAddFile from "../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../UI/CustomButtons/AddButton";
import CustomSelect from "../../UI/selects/CustomSelect";
import {FieldArray, Formik} from "formik";
import CustomInput from "../../UI/customInput/CustomInput";
import RangeDatePicker from "../../UI/datePicker/RangeDatePicker";

const Portfolio = ({editPortfolio, setEditPortfolio}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <CardTitle title={'Портфолио'}
                       condition={editPortfolio}
                       fun={setEditPortfolio} />
            <Typography variant={"h5"}>
                Фотографии
            </Typography>
            <CustomImageList imageData={imageData} />
            {editPortfolio &&
            <CustomInputAddFile
                svg={<AddButton />}
            />}
            <Typography variant={"h5"}>
                Ссылки
            </Typography>
            {!editPortfolio ?
                <Box>
                    <Typography style={{marginBottom: '10px'}} variant={'h6'}>
                        https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
                    </Typography>
                    <Typography variant={'h6'}>
                        https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
                    </Typography>
                </Box>
                 :
                <Box>
                    <Formik
                        initialValues={{
                            link: [
                                {
                                    link: '',
                                },
                            ],
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
                                <FieldArray name={'link'}>
                                    {({push, remove}) => (
                                        <Box>
                                            {values.link.map((l, index) =>
                                                     <CustomInput
                                                                  name={`link[${index}].l`}
                                                                  value={l.link}
                                                                  handleChange={handleChange}
                                                      />
                                            )}
                                            <AddButton fun={() => push({place: '', date: ''})} />
                                        </Box>
                                    )}
                                </FieldArray>
                            </form>
                        )}
                    </Formik>
                </Box>}
        </Card>
    )
}

export default Portfolio;