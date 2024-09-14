import { ReactElement } from 'react';
import { Link, List, Toolbar } from '@mui/material';
import navItems from '@data/nav-items';
import NavItem from './NavItem';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import Image from '@components/base/Image';
import logoWithText from '/Logo-with-text.png';
import logo from '@public/Logo.png';
import { rootPaths } from '@router/paths';
import SimpleBar from 'simplebar-react';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <>
      <Toolbar
        sx={{
          position: 'fixed',
          height: 98,
          zIndex: 1,
          bgcolor: 'background.paper',
          p: 0,
          justifyContent: 'center',
          width: open ? drawerOpenWidth - 1 : drawerCloseWidth - 1,
        }}
      >
        <Link
          href={rootPaths.homeRoot}
          sx={{
            mt: 3,
          }}
        >
          <Image
            src={open ? logoWithText : logo}
            alt={open ? 'logo with text' : 'logo'}
            height={50}
          />
        </Link>
      </Toolbar>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <List
          component="nav"
          sx={{
            mt: 24.5,
            py: 2.5,
            // height: 724,
            justifyContent: 'space-between',
          }}
        >
          {navItems.map((navItem) => (
            <NavItem key={navItem.id} navItem={navItem} open={open} />
          ))}
        </List>
      </SimpleBar>
    </>
  );
};

export default Sidebar;
