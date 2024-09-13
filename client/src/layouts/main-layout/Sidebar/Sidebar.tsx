import { ReactElement } from 'react';
import { Link, List, Toolbar } from '@mui/material';
import navItems from '@data/nav-items';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import Image from '@components/base/Image';
import logoWithText from '/Logo-with-text.png';
import logo from '@public/aleng.svg';
import { rootPaths } from '@router/paths';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <>
      <Toolbar
        sx={{
          height: 100,
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
      <SimpleBar style={{ maxHeight: '100vh'}}>
        <List
          component="nav"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
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
