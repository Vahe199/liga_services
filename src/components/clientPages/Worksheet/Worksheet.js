import React, {useEffect, useState} from "react";
import PersonalData from "./rightSide/PersonalData";
import OrderNotifications from "./leftSide/orderNotifications/OrderNotifications";
import ProfileStatus from "./leftSide/ProfileStatus";
import SocialNetworks from "./leftSide/socialNetworks/SocialNetworks";
import ProfileActions from "./leftSide/ProfileActions";
import EditPersonalData from "./rightSide/EditPersonalData";
import CustomerReviews from "./rightSide/CustomerReviews";
import ModalPersonalData from "../../UI/modals/ModalPersonalData";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import DistrictsAndAddresses from "./rightSide/onlyExecutor/districtsAndAddresses/DistrictsAndAddresses";
import Box from "@mui/material/Box";
import ExperienceBlock from "./rightSide/onlyExecutor/ExperienceBlock/ExperienceBlock";
import Portfolio from "./rightSide/onlyExecutor/portfolio/Portfolio";
import EducationBlock from "./rightSide/onlyExecutor/educationBlock/EducationBlock";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ModalLogOut from "../../UI/modals/ModalLogOut";
import {getProfilePageData} from "../../../store/actions/ProfileDataActions";
import Toaster from "../../UI/toaster/Toaster";

const useAncetaStyles = makeStyles({
    root:{
        height:"100%",
        paddingTop: '90px',
        marginBottom: '70px',
        backgroundColor: '#e1e3e5',
        "& .MuiCard-root": {
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            margin: '10px',
        },
    },
})

export const Worksheet = () =>{
    const classes = useAncetaStyles()
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.auth)
    const {user, error, message, successWork} = useSelector(state => state.profile)
    const {executor} = useSelector(state => state.executor)
    const [editPersonallyData, setEditPersonallyData] = useState(false);
    const [editSocialNetwork, setEditSocialNetwork] = useState(false);
    const [notificationsOrder, setNotificationOrders] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const [editExperienceBlock, setEditExperienceBlock] = useState(false);
    const [editPortfolio, setEditPortfolio] = useState(false);
    const [editEducationBlock, setEditEducationBlock] = useState(false);
    const [openLogOutModal, setOpenLogOutModal] = useState(false);
    const [openToaster, setOpenToaster] = useState(false);
    // useEffect(()=>{
    //     dispatch(getProfilePageData())
    // },[])

    return(
        <Box className={classes.root}>
            <Toaster error={error} success={successWork} message={message} open={openToaster} setOpen={setOpenToaster}/>
            <Container maxWidth={'lg'}>
                <ModalLogOut open={openLogOutModal} setOpen={setOpenLogOutModal}/>
                <ModalPersonalData showModal={showModal} setShowModal={setShowModal}/>
            <Grid container>
                <Grid item sm={12} lg={4}>
                    <ProfileStatus profile={user} setShowModal={setShowModal}/>
                    <SocialNetworks profile={user}
                                    openToaster={openToaster}
                                    setOpenToaster={setOpenToaster}
                                    setEditSocialNetwork={setEditSocialNetwork}
                                    editSocialNetwork={editSocialNetwork}/>
                    <OrderNotifications profile={user}
                                        openToaster={openToaster}
                                        setOpenToaster={setOpenToaster}
                                        notificationsOrder={notificationsOrder} setNotificationOrders={setNotificationOrders} />
                    <ProfileActions setOpenLogOutModal={setOpenLogOutModal} />
                </Grid>
                <Grid item sm={12} lg={8}>
                    {editPersonallyData ? <EditPersonalData setEditPersonallyData={setEditPersonallyData}
                        />
                       : <PersonalData setEditPersonallyData={setEditPersonallyData}/>}
                    {status === 'executor' &&
                    <Box>
                        <DistrictsAndAddresses
                            editAddress={editAddress}
                            setEditAddress={setEditAddress}
                        />
                        <ExperienceBlock editExperienceBlock={editExperienceBlock} setEditExperienceBlock={setEditExperienceBlock} />
                        <Portfolio editPortfolio={editPortfolio} setEditPortfolio={setEditPortfolio} />
                        <EducationBlock editEducationBlock={editEducationBlock} setEditEducationBlock={setEditEducationBlock} />
                        <CustomerReviews reviews={executor[0].reitings} />
                    </Box>
                    }
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}
