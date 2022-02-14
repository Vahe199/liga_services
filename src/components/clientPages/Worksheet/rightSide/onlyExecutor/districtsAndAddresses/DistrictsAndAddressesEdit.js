import React, {useEffect} from "react";
import Card from "@mui/material/Card";
import {FileSVG} from "../../../../../../assets/svg/Profile/FileSVG";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import CustomSelect from "../../../../../UI/selects/CustomSelect";
import CustomInput from "../../../../../UI/customInput/CustomInput";
import SelectWithCheckbox from "../../../../../UI/selects/SelectWithCheckbox";
import {options} from "../../../../../../utils/data/selectWithCheckbox/DataSelectWithCheckbox";
import {FieldArray, Formik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {updateAddressesData} from "../../../../../../store/actions/ProfileDataActions";
import get from "lodash/get";
import pick from "lodash/pick";
import {resetPartReducer} from "../../../../../../store/reducers/ProfileDataReducer";

const DistrictsAndAddressesEdit = ({editAddress, setEditAddress, setOpenToaster}) => {
    const classes = useInfoCardStyles();
    const dispatch = useDispatch()
   const {regions = [],rayons=[]} = useSelector(state => state.header)
   const {profile, successWork, error} = useSelector(state => state.profile)
    const {address ="",region=""} = profile;
   const newArrayRegion = [...regions].map((item)=>({
       key:item.id,
       value:item.region,
       label:item.region
   }))
    const newArrayRayons = [...rayons].map(function(elem){
        return elem.rayon_name;
    })

    useEffect(()=>{
        if(successWork){
            setEditAddress(false)
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

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Formik
                initialValues={{
                    personal_address:[{region:region,address:address}],
                    working_region: get(profile, "executor_working_regions", []).map(
                        (working_regions) =>
                            pick(working_regions, ["executorwork_region"])
                    )
                }}
                onSubmit={async (values, action) => {
                    dispatch(updateAddressesData({region_and_address:[values]}))
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
                                Районы и адреса
                            </Typography>
                            <Button type={"submit"}
                                    // onClick={() => setEditAddress(false)}
                                    size={"small"} style={{cursor: "pointer",minWidth:0, marginLeft:25}}>
                                <FileSVG color={'#808080'}/>
                            </Button>

                        </Box>
                        <CustomDivider />
                        <Typography variant={"h5"}>
                            Регион
                        </Typography>

                        <Box style={{width: '200px', marginBottom: '40px'}}>
                            <CustomSelect
                                name={'personal_address[0].region'}
                                handleChange={(val)=>setFieldValue("personal_address[0].region",val)}
                                arr={newArrayRegion}
                                 value={values.personal_address[0].region}
                            />
                        </Box>

                        <Typography variant={"h5"}>Адреса</Typography>

                        <Box style={{width: '70%'}}>
                            <CustomInput
                                name={'address'}
                                handleChange={(val) =>setFieldValue("personal_address[0].address",val)}
                                value={values.personal_address[0].address}
                            />
                        </Box>

                        <Typography variant={"h5"}>Районы выезда к клиентам</Typography>
                        <Box style={{width: '200px', marginBottom: '40px'}}>
                            <FieldArray name={'working_region'}>
                                {({push}) => (
                            <SelectWithCheckbox options={newArrayRayons}
                                                setSelectedData={(val = [])=> {
                                                   values.working_region = []
                                                    Object.entries(val).forEach((item) => {
                                                        const value = get(item, "[1]", "");
                                                        let data = {"executorwork_region": value}
                                                        push(data)
                                                    });

                                                }}
                            value={values.working_region}/>
                                )}
                            </FieldArray>
                        </Box>
                    </form>
                )}
            </Formik>
        </Card>
    );
};

export default DistrictsAndAddressesEdit;
