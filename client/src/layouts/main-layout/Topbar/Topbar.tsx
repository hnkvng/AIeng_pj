import {
    Stack,
    AppBar,
    Toolbar,
    IconButton,
} from '@mui/material';
import IconifyIcon from '@components/base/IconifyIcon';
import { ReactElement, useEffect, useState } from 'react';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import UserDropdown from './UserDropdown';
import { useBreakpoints } from '@providers/Breakpoints.provider';
import Notification from './Notification';
import ModeTheme from './ModeTheme';
import Searchbar from './Searchbar';

const Topbar = ({
    open,
    handleDrawerToggle,
  }: {
    open: boolean;
    handleDrawerToggle: () => void;
  }): ReactElement => {

    const { down } = useBreakpoints();
    const [showSearchMobile, setShowSearchMobile] = useState(false);
  
    const isMobileScreen = down('sm');

    useEffect(() => {
        if(!isMobileScreen) {
            setShowSearchMobile(false);
        }
    },[isMobileScreen])
  
    return (
      <AppBar
        position="fixed"
        sx={{
          left: 0,
          ml: isMobileScreen ? 0 : open ? 60 : 27.5,
          width: isMobileScreen
            ? 1
            : open
            ? `calc(100% - ${drawerOpenWidth}px)`
            : `calc(100% - ${drawerCloseWidth}px)`,
          paddingRight: '0 !important',
        }}
      >
        <Toolbar
          component={Stack}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            bgcolor: 'background.paper',
            height: 110,
          }}
        >
          <Stack direction="row" gap={2} alignItems="center" ml={2.5} flex="1 1 52.5%">
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{
                color: 'text.primary'
              }}
            >
              <IconifyIcon
                icon={open ? 'lucide:sidebar-close' : 'lucide:sidebar-open'}
              />
            </IconButton>
            <IconButton
                color="inherit"
                sx={{
                    visibility: {xs: 'visible', sm: 'hidden'}
                }}
                onClick={() => setShowSearchMobile(!showSearchMobile)}
            >
                <IconifyIcon icon= {showSearchMobile ? 'basil:arrow-left-outline' : "mdi:search" } />
            </IconButton>
            <Searchbar showSearchMobile = {showSearchMobile}/>
          </Stack>
          {!showSearchMobile && <Stack
            direction="row"
            gap={5}
            alignItems="center"
            justifyContent="flex-end"
            mr={3.75}
            flex="1 1 20%"
          >
            <Notification />
            <UserDropdown />
            <ModeTheme/>
          </Stack>}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Topbar;