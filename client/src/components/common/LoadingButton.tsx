import { memo, ReactElement, ReactNode} from "react";
import { ColorMui, ElementProps, SizeMui } from "@core/type"
import LoadingButton from '@mui/lab/LoadingButton';

interface LoadingButtonAppProps {
    name: string,
    color: ColorMui,
    size: SizeMui,
    iconR: ReactNode,
    iconL: ReactNode,
    loading: boolean,
    handleClick: () => void;
}

const LoadingButtonApp : ElementProps<LoadingButtonAppProps> = (
    {
        name,
        color,
        size,
        iconR,
        iconL,
        loading,
        handleClick
    }
) : ReactElement => {
    return (
        <LoadingButton 
            loading= {loading} 
            variant= "contained" 
            color= {color} 
            size= {size}
            startIcon= {iconL}
            endIcon= {iconR}
            onClick={() => handleClick()}
        >
            {name}
        </LoadingButton>
    )
}

export default memo(LoadingButtonApp);