import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( ({
    root: {
        //margin: theme.spacing(1),
        width: 200,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: "1px solid #808080",
                borderRadius: '10px',
                //width: '100%',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'gray',
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #808080",
                borderRadius: '10px',
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #808080",
                borderRadius: '10px',
            },
            //focus
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid blue",
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    border: "1px solid #808080",
                    borderRadius: '10px',
                    //width: '100%',
                },
                '&:hover fieldset': {
                    borderColor: 'blue',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #808080",
                    borderRadius: '10px',
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #808080",
                    borderRadius: '10px',
                },
                //focus
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid blue",
                }
            },
        },
    },
    indeterminateColor: {
        color: "#f50057"
    },
    selectAllText: {
        fontWeight: 500
    },
    selectedAll: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    }
}));

const SelectWithCheckbox = () => {
    const options = [
        "Бабушкинский",
        "Измайлово",
        "Замоскворечье",
        "Бабушкинский",
    ];
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const isAllSelected =
        options.length > 0 && selected.length === options.length;

    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === "all") {
            setSelected(selected.length === options.length ? [] : options);
            return;
        }
        setSelected(value);
    };

    return (
        <FormControl className={classes.root}>
            <Select
                multiple
                value={selected}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
            >
                <MenuItem
                    value="all"
                    classes={{
                        root: isAllSelected ? classes.selectedAll : ""
                    }}
                >
                    <ListItemIcon>
                        <Checkbox
                            classes={{ indeterminate: classes.indeterminateColor }}
                            checked={isAllSelected}
                            indeterminate={
                                selected.length > 0 && selected.length < options.length
                            }
                        />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.selectAllText }}
                        primary="Выбрать все"
                    />
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        <ListItemIcon>
                            <Checkbox checked={selected.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectWithCheckbox;