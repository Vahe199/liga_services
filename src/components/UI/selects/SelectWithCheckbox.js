import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {Checkbox, ListItemIcon, ListItemText, Select} from "@mui/material";

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

const SelectWithCheckbox = ({options,setSelectedData, value}) => {
    const classes = useStyles();
    const newSelected = [...value].map(function(elem){
        return elem.executorwork_region;
    })
    const [selected, setSelected] = useState(newSelected);
    const isAllSelected = options.length > 0 && selected.length === options.length;

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedData(value)
        if (value[value.length - 1] === "all") {
            setSelected(selected.length === options.length ? [] : options);
            return;
        }
        setSelected(value);
    };
    console.log(options,"options")
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
                {options?.map((option,i) => (
                    <MenuItem key={i} value={option}>
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
