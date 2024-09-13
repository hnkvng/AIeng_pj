import { useState, ReactElement} from "react";
import { Autocomplete, TextField } from "@mui/material"
import { ElementProps } from "@core/type"

interface ComboBoxProps {
    label?: string,
    width?: number,
    option: {label: string, value: string}[]
    handleChange?: (value: {label: string, value: string} | null) => void;
}

const ComboBox : ElementProps<ComboBoxProps> = (
    {
        label,
        width,
        option,
        handleChange,
        
    }
) : ReactElement => {
    const [value, setValue] = useState<{
        label: string;
        value: string;
    } | null>(null);


    return (
        <Autocomplete
            disablePortal
            options={option}
            onChange={handleChange && ((
                _, 
                newValue: {
                    label: string;
                    value: string;
                } | null
            ) => {
                setValue(newValue);
                handleChange(newValue);
            })}
            sx={{ width }}
            value={value}
            renderInput={(params) => <TextField {...params} label= {label} />}
        />
    )
}

export default ComboBox;