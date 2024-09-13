import { ReactElement, ReactNode} from "react";
import { InputAdornment, TextField } from "@mui/material";
import { ElementProps, StyleMui } from "@core/type";



interface InputAppProps {
    sx?: StyleMui,
    className?: string,
    label?: string,
    value?: string,
    error?: string,
    iconL?: {
        target: ReactNode,
        position: 'start' | 'end',
    }
    iconR?: {
        target: ReactNode,
        position: 'start' | 'end',
    }
    disabled?: boolean,
    placeholder?: string,
    handleChange?: (value: string) => void,
}

const InputApp : ElementProps<InputAppProps> = (
    {
        sx,
        className,
        label,
        value,
        error,
        iconL,
        iconR,
        disabled,
        placeholder,
        handleChange,
    }
) : ReactElement => {

    return (
        <TextField 
            sx={sx}
            className= {className}
            label= {label}
            error= {error ? true: false}
            value= {value}
            disabled= {disabled}
            placeholder= {placeholder}
            helperText= {error}
            slotProps={{
                input: {
                    startAdornment: iconL && (
                        <InputAdornment position= {iconL.position}>
                          {iconL.target}
                        </InputAdornment>
                    ),
                    endAdornment: iconR && (
                        <InputAdornment position= {iconR.position}>
                          {iconR.target}
                        </InputAdornment>
                    ),
                }
            }}
            onChange={handleChange && ((e) => {
                const target = e.target as HTMLInputElement;
                handleChange(target.value);
            })}
            variant="outlined" 
        />
    )
}

export default InputApp;