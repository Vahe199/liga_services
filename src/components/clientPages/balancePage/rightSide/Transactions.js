import React from 'react';
import Box from "@mui/material/Box";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {balanceData} from "../../../../utils/data/balance/balanceData";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const Transactions = () => {
    const classes = useOrderAboutStyles();
    return (
        <Card>
            <Typography variant={"h1"}>
                Последние транзакции
            </Typography>
            <CustomDivider />
            <Box>
                {balanceData.map((item, index) =>
                    <div key={index}>
                    <Box className={classes.orderSubBlockSpaceBetween}>
                        <Box>
                            <Typography variant={'h4'}>{item.subject}</Typography>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant={'h5'}>{'2 Ноября'}</Typography>
                                {item.subject !== 'Отклик' &&
                                    <Typography style={{alignItems: 'center'}} variant={'h5'}>
                                        <Box className={classes.greyBall}>

                                        </Box>
                                        описание заказа
                                    </Typography>
                                }
                            </Box>

                        </Box>
                        <Box>
                            <Typography style={{fontWeight: '600', textAlign: 'right'}} variant={'h4'}>
                                {`${item.money} руб.`}
                            </Typography>
                            {item.bank && <Typography variant={'h5'}>Банковская карта</Typography>}
                        </Box>
                    </Box>
                    <CustomDivider />
                    </div>
                )}
                <Typography variant={'h5'}>Более >></Typography>
            </Box>
        </Card>
    )
}

export default Transactions;
