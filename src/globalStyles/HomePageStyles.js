import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    item: {
        cursor: 'pointer',
        '&:hover': {
            textDecorationLine: 'underLine'
        },
    }
});
