import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {DownLoad2Svg} from "../../../../assets/svg/client/DownLoad2Svg";
import Rating from "@mui/material/Rating";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MessengerSvg from "../../../../assets/svg/MessengerSvg";
import Avatar from "@mui/material/Avatar";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {
    createRating,
    finishTask, getCompletedTasks,
    getRespondedTasks,
    rejectExecutor,
    selectExecutor
} from "../../../../store/actions/TaskActions";
import {useMyOrdersStyles} from "../MyOrders";
import {resetPartReducer} from "../../../../store/reducers/TaskReducer";
import BlueButton from "../../../UI/CustomButtons/BlueButton";
import {choosesAvatarData} from "../../../../store/actions/ProfileDataActions";

const CustomOrders = ({order, setShowDetails, status, rejectLoadBtn, setOpenToaster}) => {
    const classes = useMyOrdersStyles();
    const [showReviewField, setShowReviewField] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const dispatch = useDispatch()
    const {loadBtn} = useSelector(state => state.task)
    //for rating value
    const [ratingVal, setRatingVal] = useState(0)
    const [reviewFieldVal, setReviewFieldVal] = useState('')

    const sendReview = async (id) => {
        if(showReviewField){
            console.log(id, 'task_id', reviewFieldVal, 'content', ratingVal, 'rating')
            let formData = new FormData();
            formData.append("task_id", id);
            formData.append("rating", ratingVal);
            formData.append("content", reviewFieldVal);
            await dispatch(createRating(formData))
            setOpenToaster(true)
            //await dispatch(getCompletedTasks())
            setTimeout(() => {
                dispatch(resetPartReducer())
            }, 7000)
        }else{
            setShowReviewField(!showReviewField)
        }


    }

    const chooseExecutor = async (task_id, execuro_id) => {
        //console.log(task_id, 'task_id', execuro_id, 'execuro_id')
        await dispatch(selectExecutor({
            "select_task_executor": [
                {
                    "task_id": task_id,
                    "executor_profile_id": execuro_id
                }
            ]
        }))
        setOpenToaster(true)
        await dispatch(getRespondedTasks())
        setTimeout(() => {
            dispatch(resetPartReducer())
        }, 7000)

    }

    const completedTask = async (task_id) => {
        await dispatch(finishTask({
            "employercomplatetask":[
                {
                    "task_id": task_id
                }
            ]
        }))
        setOpenToaster(true)
        await dispatch(getRespondedTasks())
        setTimeout(() => {
            dispatch(resetPartReducer())
        }, 7000)
    }

    const reject_executor = async (task_id, profile_id) => {
        await dispatch(rejectExecutor({
            "reject_task_executor":[
                {
                    "task_id": task_id,
                    "executor_profile_id": profile_id
                }
            ]


        }))
        setOpenToaster(true)
        setTimeout(() => {
            dispatch(resetPartReducer())
        }, 7000)
    }



    useEffect(() => {
        console.log(order, 'orderRender')
    }, [order, status])

    return (
        <Box>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box>
                    <Typography variant={'h5'}>
                        ?????????? ??? {order?.id} ??????????????????: {order?.category_name}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant={'h6'}>
                        ????????: {moment(order?.created_at).format(`DD MMM (ddd)`)}
                    </Typography>
                </Box>

            </Box>
            <CustomDivider />

            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box className={classes.wrapBox}>
                    <Typography variant={'h4'}>{order?.title}</Typography>
                    <Typography style={{fontSize: '20px'}} color={'#5A7287'}>???? {order.price_from} ??????.</Typography>
                </Box>
                <Box className={classes.wrapBox}>
                    <Typography variant={'h5'}> ?????????? ?????????????? </Typography>
                    <Typography className={classes.wrapRight} variant={'h6'}> {order?.task_location === 'remotely' ? order?.task_location : order?.address} </Typography>
                </Box>
            </Box>

            {status !== 'applied' ? <>
                    <Box>
                        <Box className={classes.orderSubBlockSpaceBetween}>
                            <Box className={classes.wrapBox}>
                                <Typography variant={'h6'}>??????????????????????</Typography>
                                <Typography variant={'h5'}>
                                    {order.executor_name}
                                </Typography>
                            </Box>
                            <Box className={classes.wrapBox}>
                                <Typography style={{marginBottom: '10px'}} className={classes.wrapRight} variant={'h5'}> ?????????????? </Typography>
                                <Box>
                                    <input
                                        color="primary"
                                        type="file"
                                        //value={values.file}
                                        //onChange={handleChange}
                                        id="icon-button-file"
                                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        style={{display: 'none'}}
                                    />
                                    <label style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }} htmlFor="icon-button-file">
                                        <Box style={{paddingRight: '5px'}}>
                                            <DownLoad2Svg/>
                                        </Box>
                                        <Typography variant={'h6'} >??????????????
                                            ????????</Typography>
                                    </label>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.orderSubBlockSpaceBetween}>
                            <Box>
                                {/*{status === 'completed' && <Box style={{width: '50%'}}>*/}
                                {/*    <Typography style={{whiteSpace: 'nowrap'}} variant={'h6'}>?????? ??????????</Typography>*/}
                                {/*    <Typography style={{whiteSpace: 'nowrap'}} variant={'h5'}>?? ????????????????</Typography>*/}
                                {/*</Box>}*/}
                                {status === 'completed' && <Typography variant={'h6'}>??????????</Typography>}
                                {status === 'completed' && <Rating onChange={(e) => setRatingVal(e.target.value)} style={{color: "#FFF066"}} name="half-rating-read" precision={0.5}/>}
                                <Box>
                                    {status === 'completed' && <Box>
                                        {showReviewField && <Box className={classes.boxInput}>
                                            <TextField
                                                variant={"outlined"}
                                                multiline
                                                autoComplete={'off'}
                                                rows={2}
                                                value={reviewFieldVal}
                                                onChange={(e) => setReviewFieldVal(e.target.value)}
                                            />
                                        </Box>}
                                        <Button color="success" onClick={() => sendReview(order?.id)} variant="contained">
                                            ???????????????? ??????????
                                        </Button>
                                        {/*<BlueButton action={() => sendReview(order?.id)}*/}
                                        {/*            backgroundColor={'#4B9A2D'}*/}
                                        {/*            load={loadBtn}*/}
                                        {/*            label={'???????????????? ??????????'} />*/}
                                    </Box>}
                                    {status === 'inProcess' && <Button color="success" onClick={() => completedTask(order?.id)} variant="contained">
                                        ?????????????????? ????????????
                                    </Button>
                                        // <BlueButton action={() => completedTask(order?.id)}
                                        //                                    backgroundColor={'#4B9A2D'}
                                        //                                    load={loadBtn}
                                        //                                    label={'?????????????????? ????????????'}>
                                    //</BlueButton>
                                }

                                </Box>
                            </Box>
                            <Box>
                                <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    {status !== 'completed' && <><IconButton>
                                        <MessengerSvg/>
                                    </IconButton>
                                        <Typography style={{textAlign: 'end', whiteSpace: 'nowrap'}} variant={'h6'}>
                                            ???????????????? ??????????????????????
                                        </Typography>
                                    </>}
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                    <Box style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                        <Typography onClick={() => setShowDetails(order.id)} style={{cursor: 'pointer', paddingLeft: '5px'}} variant={'h6'}>
                            ??????????????????
                        </Typography>
                    </Box>

                    {/*{showInfo && <Box>*/}
                    {/*    <CustomDivider />*/}
                    {/*    <Box style={{}}>*/}
                    {/*        <Typography style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}} variant={'h6'}>*/}
                    {/*            ???????????? ?????????? ?????????? - ?????? ??????????????, ?????????????????? ?????????????????????????? ???????????? ???????????? ?????????????????????????? ????????,*/}
                    {/*            ?????????????? ?????????????????? ???????????? ?? ?????????????????? ???????????????? ???????????????? ???????????????????????? ?????? ?????????????? ?????????? ??????????,*/}
                    {/*            ?????????? ?? ??????????????????!*/}
                    {/*        </Typography>*/}
                    {/*        <Typography style={{cursor: 'pointer'}} variant={'h6'}>*/}
                    {/*            ??????????????????*/}
                    {/*        </Typography>*/}
                    {/*    </Box>*/}
                    {/*</Box>}*/}
                </> :
                <Box>
                    {order?.click_on_task?.map((executor, index) => {
                            const task_starttime = moment(executor.startdate_from).toDate();
                            const task_finishtime = moment(executor.start_date_to).toDate();
                            const start_time = moment(task_starttime).format(`L`)
                            const finish_time = moment(task_finishtime).format(`L`)
                        return (
                            <Box key={index}>
                                <CustomDivider />
                                <Box className={classes.orderSubBlockSpaceBetween}>
                                    <Typography variant={'h6'}>?????????????????????? ??? {index + 1}</Typography>
                                    <Typography variant={'h6'}>{moment(executor.created_at).format(`LT L`)}</Typography>
                                </Box>
                                <Box className={classes.orderSubBlockSpaceBetween}>
                                    <Box style={{display: 'flex'}}>
                                        <Box style={{paddingRight: '5px'}}>
                                            <Avatar />
                                        </Box>
                                        <Box>
                                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                                <Typography style={{paddingRight: '5px'}} variant={'h4'}>{executor?.executor_profile_name}</Typography>
                                                <OnlineSvg />
                                            </Box>
                                            <Box className={classes.orderSubBlockSpaceAround}>
                                                <Rating onChange={(e) => console.log('e')} style={{color: "#FFF066"}} size={'small'} name="half-rating-read" precision={0.5}/>
                                                <Typography variant={'h6'}>(3 ??????????????)</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/*<Box style={{display: 'flex'}}>*/}
                                    {/*    <Typography variant={'h6'}>??????????????????????????:</Typography>*/}
                                    {/*    <Typography style={{paddingLeft: '5px'}} variant={'h4'}>??????????????</Typography>*/}
                                    {/*</Box>*/}
                                </Box>
                                <Box style={{margin: '10px 0'}}>
                                    <Typography style={{whiteSpace: 'pre-wrap'}} variant={'h6'}>{executor.offer_to_employer}</Typography>
                                </Box>
                                <Box style={{display: 'flex', flexWrap: 'wrap', marginBottom: '20px'}}>
                                    <Box style={{paddingRight: '50px'}}>
                                        <Typography variant={'h6'}>???????????????????????? ??????????</Typography>
                                        <Typography variant={'h4'}>???? {start_time} ???? {finish_time}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant={'h6'}>???????????????????????? ????????</Typography>
                                        <Typography variant={'h4'}>???? {executor.service_price_from} ??????. ???? {executor.service_price_to} ??????.</Typography>
                                    </Box>
                                </Box>
                                <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    <Box style={{paddingRight: '50px', display: 'flex', alignItems: 'center'}}>
                                    <span style={{paddingRight: '10px'}}>
                                        {/*<BlueButton*/}
                                        {/*    label={'??????????????'}*/}
                                        {/*    load={loadBtn}*/}
                                        {/*    disabledColor={'#4B9A2D'}*/}
                                        {/*    backgroundColor={'#4B9A2D'}*/}
                                        {/*    action={() => chooseExecutor(executor.task_id, executor.executor_profile_id)} />*/}
                                        <Button
                                                onClick={() => chooseExecutor(executor.task_id, executor.executor_profile_id)}
                                                variant={'contained'}>??????????????</Button>
                                    </span>
                                        {/*<BlueButton*/}
                                        {/*    label={'??????????????????'}*/}
                                        {/*    load={rejectLoadBtn}*/}
                                        {/*    disabledColor={'#E54C51'}*/}
                                        {/*    backgroundColor={'#E54C51'}*/}
                                        {/*    action={() => reject_executor(executor.task_id, executor.executor_profile_id)} />*/}
                                        <Button style={{backgroundColor: '#E54C51'}}
                                                onClick={() => reject_executor(executor.task_id, executor.executor_profile_id)}
                                                variant={'contained'}>??????????????????</Button>
                                    </Box>
                                    <Box>
                                        <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            {status !== 'completed' && <><IconButton>
                                                <MessengerSvg/>
                                            </IconButton>
                                                <Typography style={{textAlign: 'end', whiteSpace: 'nowrap'}} variant={'h6'}>
                                                    ???????????????? ??????????????????????
                                                </Typography>
                                            </>}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                    )}
                </Box>
            }
        </Box>
    )
}

export default CustomOrders