import React from 'react';
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import {FieldArray, Formik} from "formik";
import CategoriesListEdit from "../blocks/CategoriesList";
import CategoriesList from "../blocks/CategoriesList";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import RangeDatePicker from "../../../../../UI/datePicker/RangeDatePicker";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import {TrashSvg} from "../../../../../../assets/svg/TrashSvg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import CustomSelect from "../../../../../UI/selects/CustomSelect";
import {DelBtnSvg} from "../../../../../../assets/svg/Profile/DelBtnSvg";

const ExperienceBlockEdit = ({ setEditExperienceBlock}) => {
    const classes = useInfoCardStyles();


    const saveData = () => {
        setTimeout(() => {
            setEditExperienceBlock(false)
        }, 2000)
    }

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={{
                    categoriesList: [
                        {
                            categories: '',
                            subCategories: '',
                        },
                    ],
                    workPlace: [
                        {
                            place: '',
                            date: [null, null],
                        },
                    ],
                }}
                onSubmit={async (values, action) => {
                    //console.log(values, 'values')
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
                                Специальность и опыт
                            </Typography>

                            <Button type={"submit"}  onClick={saveData}
                                    size={"small"} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                                <FileSVG color={'#808080'}/>
                            </Button>

                        </Box>
                        <CustomDivider />
                        <Box style={{marginBottom: '20px'}}>
                            <FieldArray name={'categoriesList'}>
                                {({push, remove}) => (
                                        <Box>
                                            {values.categoriesList.map((item, index) => (
                                                    <Box>
                                                        <Box style={{marginBottom: '40px'}} className={classes.singleInput}>
                                                            <CustomSelect handleChange={handleChange}
                                                                          name={`categoriesList[${index}].categories`}
                                                                          placeholder={'Выбрать категории'} mt={20}/>
                                                        </Box>
                                                        {item.categories !== '' ? <Box style={{width: '20%'}}
                                                              className={classes.categoriesBackGround}>
                                                            <Typography variant={'h4'}>{item.categories}</Typography>
                                                        </Box> : ''}

                                                        <Box style={{marginBottom: '40px'}} className={classes.singleInput}>
                                                            <CustomSelect handleChange={handleChange}
                                                                          name={`categoriesList[${index}].subCategories`}
                                                                          placeholder={'Выбрать подкатегории'}
                                                                          mt={20}/>
                                                        </Box>
                                                        {item.subCategories !== '' ? <Box style={{width: '20%'}}
                                                                                       className={classes.categoriesBackGround}>
                                                            <Typography variant={'h4'}>{item.subCategories}</Typography>
                                                        </Box> : ''}

                                                        {values.categoriesList.length > index + 1 ? <div onClick={() => remove(index)}>
                                                                <TrashSvg/>
                                                            </div>
                                                            : <AddButton fun={() => push({categories: '', subCategories: ''})}/>}
                                                    </Box>
                                                )
                                            )}
                                        </Box>
                                )}
                            </FieldArray>
                        </Box>
                        {/*<Box>*/}
                        {/*    <FieldArray name={'subCategories'}>*/}
                        {/*        {({push, remove}) => (*/}
                        {/*            <CategoriesList handleChange={(e) => push({item: e.target.value})}*/}
                        {/*                            placeholder={'Выбрать подкатегории'}*/}
                        {/*                            arr={values.subCategories}*/}
                        {/*                            remove={remove}*/}
                        {/*            />*/}
                        {/*        )}*/}
                        {/*    </FieldArray>*/}
                        {/*</Box>*/}
                        <Box>
                            <FieldArray name={'workPlace'}>
                                {({push, remove}) => (
                                    <Box>
                                        {values.workPlace.map((work, index) => {
                                                const fieldName = `workPlace[${index}].date`;

                                                return(
                                                    <Box key={index}>
                                                        <Box style={{marginBottom: '20px'}}>
                                                            <Box style={{display: 'flex', flexWrap: 'wrap'}}>
                                                                <Box className={classes.singleInput}>
                                                                    <CustomInput placeholder={'Место работы'}
                                                                                 name={`workPlace[${index}].place`}
                                                                                 value={work.place}
                                                                                 handleChange={handleChange}
                                                                    />
                                                                </Box>
                                                                <Box style={{width: '350px'}}>
                                                                    <RangeDatePicker
                                                                        value={work.date}
                                                                        fun={(newValue) => setFieldValue(fieldName, newValue)}
                                                                    />

                                                                </Box>
                                                            </Box>
                                                            {values.workPlace.length > index + 1 ?<div onClick={() => remove(index)}>
                                                                    <TrashSvg/>
                                                                </div>
                                                                : <AddButton fun={() => push({place: '', date: [null,null]})}/>}
                                                        </Box>
                                                    </Box>)
                                            }
                                        )}
                                    </Box>
                                )}
                            </FieldArray>
                        </Box>
                    </form>
                )}
            </Formik>

        </Card>
    )
}

export default ExperienceBlockEdit;
