import {
    Stack,
    AppBar,
    Toolbar,
    TextField,
    IconButton,
} from '@mui/material';
import IconifyIcon from '@components/base/IconifyIcon';
import { ReactElement, useEffect, useState } from 'react';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import UserDropdown from './UserDropdown';
import { useBreakpoints } from '@providers/Breakpoints.provider';
import Notification from './Notification';
import ModeTheme from './ModeTheme';

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
            <TextField
              variant='outlined'
              fullWidth
              placeholder="Search here..."
              sx={{
                visibility: {xs: showSearchMobile ? 'visible' : 'hidden', sm: 'visible'},
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: 'text.primary',
                        borderWidth: 1,
                    }
                }
              }}
              slotProps={
                {
                    input: {
                        endAdornment: (
                            <IconButton
                                sx={{
                                    padding: 5,
                                    cursor: 'pointer',
                                    borderRadius: 10,
                                    color: 'text.secondary',
                                    height: 40,
                                    ':hover': {
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                                onClick={() => console.log('search')}
                            >
                              <IconifyIcon icon="akar-icons:search" width={13} height={13}/>
                            </IconButton>
                        ),
                        style: {
                            borderRadius: 10,
                        }
                    }
                }
              }
            />
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