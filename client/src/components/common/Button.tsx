import {memo, ReactElement, ReactNode} from 'react';
import {  
    ElementProps,
    ColorMui, 
    SizeMui
} from '@core/type';
import Button from '@mui/material/Button';

interface ButtonAppProps {
    name: string,
    color?: ColorMui,
    iconR?: ReactNode,
    iconL?: ReactNode,
    size?: SizeMui,
    disabled?: boolean,
    handleClick?: () => void,
}

const ButtonApp : ElementProps<ButtonAppProps> = (
    {
        name,
        color,
        iconR,
        iconL,
        size,
        disabled,
        handleClick,
    }
) : ReactElement => {
    return (
        <Button 
            variant= 'contained'
            size= {size}
            color= {color}
            startIcon= {iconL}
            endIcon= {iconR}
            disabled= {disabled}
            onClick= {handleClick}
        >
            {name}
        </Button>
    )
}

export default memo(ButtonApp);