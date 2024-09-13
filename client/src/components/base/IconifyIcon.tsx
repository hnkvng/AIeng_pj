import { Box, BoxProps } from '@mui/material';
import { Icon, IconProps } from '@iconify/react';

interface IconifyProps extends BoxProps {
  icon: IconProps['icon'];
}

const IconifyIcon = ({ icon, width, height}: IconifyProps) => {
  return <Box component={Icon} icon={icon} width={width} height={height} />;
};

export default IconifyIcon;
