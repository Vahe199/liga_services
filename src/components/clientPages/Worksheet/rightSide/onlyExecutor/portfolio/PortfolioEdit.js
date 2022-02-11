import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import get from "lodash/get";
import pick from "lodash/pick";
import {resetPartReducer} from "../../../../../../store/reducers/ProfileDataReducer";

const PortfolioEdit = ({editPortfolio, setEditPortfolio,setOpenToaster}) => {
    const classes = useInfoCardStyles();
    const dispatch = useDispatch()
    const {profile ={},successWork, error} = useSelector(state => state.profile)
    useEffect(()=>{
        if(successWork){
            setEditPortfolio(false)
            setOpenToaster(true)
            setTimeout(()=>{
                dispatch(resetPartReducer())
            },7000)
        }
        if(error){
            setOpenToaster(true)
            setTimeout(()=>{
                dispatch(resetPartReducer())
            },7000)
        }
    },[successWork, error])
    const initialValues = {
        executor_portfolios: get(profile, "executor_portfolios", [{
            id: "",
            portfoliopic_base: "",
            executor_profile_id: ""
        }]).map(
            (portfolio) =>
                pick(portfolio, ["portfoliopic_base"])
        ),
        executor_portfolio_links: profile?.executor_portfolio_links?.length > 0  ? get(profile, "executor_portfolio_links", [{id:"",executor_profile_id:"",executor_portfolio_links:""}]).map(
            (link) =>
                pick(link, ["portfolio_link"])
        ): [{portfolio_link:""}],
    }
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
                <Box>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={async (values, action) => {
                            console.log(values, 'values')
                            let formData = new FormData();

                            Object.entries(values).forEach((item) => {
                                const key = get(item, "[0]", "");
                                const value = get(item, "[1]", "");
                                formData.append(`${key}[]`,value)
                            });
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
                                    <Button type={"submit"}
                                            // onClick={() => setEditPortfolio(false)}
                                            size={"small"} sx={{minWidth:0,padding:0,marginLeft:5}}>
                                        <FileSVG color={'#808080'}/>
                                    </Button>

                                </Box>
                                <CustomDivider />
                                <Typography variant={"h5"}>
                                    Фотографии
                                </Typography>
                                <FieldArray name={'executor_portfolios'}>
                                    {({push, remove}) => (
                                <CustomImageList imageData={values.executor_portfolios} push={(val) => push({portfoliopic_base: val})} remove={remove}
                                                />

                                    )}
                                </FieldArray>
                                <FieldArray name={'executor_portfolio_links'}>
                                    {({push, remove}) => (
                                        <Box>
                                            {values.executor_portfolio_links?.map((l, index) =>
                                                <Box key={index}>

                                                <CustomInput
                                                    name={`executor_portfolio_links[${index}].portfolio_link`}
                                                    value={l.portfolio_link}
                                                    handleChange={(val)=>setFieldValue(`executor_portfolio_links[${index}].portfolio_link`,val)}
                                                />
                                                    {values.executor_portfolio_links.length > index + 1 ? <div onClick={() => remove(index)}>
                                                            <TrashSvg/>
                                                        </div>
                                                        : <AddButton fun={() => push({portfolio_link:""})}/>}
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
