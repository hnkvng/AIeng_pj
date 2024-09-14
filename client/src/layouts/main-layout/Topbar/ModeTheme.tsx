import { ReactElement, useState, memo } from 'react';
import IconifyIcon from '@/components/base/IconifyIcon';
import { useThemeMode } from '@/providers/ThemeMode.provider';
import Switch from '@mui/material/Switch';


const ModeTheme = () : ReactElement => {
    const {toggleTheme, mode} = useThemeMode();

    const [checked, setChecked] = useState<boolean>(mode === 'light' ? false : true);

    return (
        <>
            <Switch
                checked={checked}
                onChange={(event) => {
                    setChecked(event.target.checked);
                    toggleTheme();
                }}
                color='default'
            />
            <IconifyIcon 
                icon={mode === 'light' ? "akar-icons:sun": "heroicons:moon-16-solid"} 
                width={20}
                height={20}
            />
        </>
        
    )
}

export default memo(ModeTheme);