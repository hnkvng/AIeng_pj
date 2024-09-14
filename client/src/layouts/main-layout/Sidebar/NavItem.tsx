import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import IconifyIcon from '@components/base/IconifyIcon';
import { NavItem as NavItemProps } from '@data/nav-items';
import { useLocation, useNavigate } from 'react-router-dom';

const NavItem = ({ navItem, open }: { navItem: NavItemProps; open: boolean }) => {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  navItem.active = pathname === navItem.path;
  return (
    <ListItem
      disablePadding
      sx={(theme) => ({
        display: 'block',
        px: 5,
        borderRight: !open
          ? navItem.active
            ? `3px solid ${theme.palette.primary.main}`
            : `3px solid transparent`
          : '',
      })}
    >
      <ListItemButton
        onClick={() => navigation(navItem.path)}
        sx={{
          justifyContent: 'center',
          borderRadius: 10,
          opacity: navItem.active ? 1 : 0.5,
          bgcolor: navItem.active? (open ? 'primary.main' : '') : 'background.paper',
          '&:hover': {
            bgcolor:
              navItem.active
                ? open
                  ? 'primary.dark'
                  : 'action.hover'
                : 'action.hover',
          },
          '& .MuiTouchRipple-root': {
            color: navItem.active ? 'primary.main' : 'text.disabled',
          },
        }}
      >
        <ListItemIcon
          sx={{
            width: 20,
            height: 20,
            mr: open ? 'auto' : 0,
            color:
              navItem.active
                ? open
                  ? 'background.default'
                  : 'primary.main'
                : 'text.primary',
          }}
        >
          <IconifyIcon icon={navItem.icon} width={1} height={1} />
        </ListItemIcon>
        <ListItemText
          primary={navItem.title}
          sx={{
            display: open ? 'inline-block' : 'none',
            opacity: open ? 1 : 0,
            color: navItem.active? 'background.default' : '',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
