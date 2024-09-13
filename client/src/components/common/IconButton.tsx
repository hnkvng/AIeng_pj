import {memo, ReactElement, ReactNode} from 'react';
import { IconButton } from "@mui/material";
import {  
    ElementProps, 
    SizeMui,
    ColorMui 
} from "@core/type";

interface IconButtonAppProps {
    icon: ReactNode,
    size?: SizeMui,
    color?: ColorMui
    disabled?: boolean,
   
}

const IconButtonApp : ElementProps<IconButtonAppProps> = (
    {
        icon,
        color,
        size,
        disabled,
    }
) : ReactElement => {
    return (
        <IconButton 
            color= {color} 
            size= {size}
            disabled = {disabled}
        >
            {icon}
        </IconButton>
    )
}

export default memo(IconButtonApp);