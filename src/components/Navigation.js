import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

import { Icon } from "../icons/Icon";

import { Box } from "./Box";


const drawerWidth = 240;

const mainNavigationItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <Icon name="dashboard" size="medium" />,
  },
  {
    label: 'Warranties',
    path: '/warranties',
    icon: <Icon name="receipt" size="medium" />,
  },
  {
    label: 'Add Warranty',
    path: '/add_warranty',
    icon: <Icon name="add" size="medium" />,
  },
];

const accountNavigationItems = [
  {
    label: 'Account',
    path: '/account',
    icon: <Icon name="person" size="medium" />,
  },
  {
    label: 'Log Out',
    path: '/log_out',
    icon: <Icon name="logout" size="medium" />,
  },
];

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  function renderNavigationItems(items) {
    return items.map(item => (
      <ListItem key={item.path} disablePadding>
        <ListItemButton
          selected={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        >
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>

          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    ));
  }

  return(
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <List>
          {renderNavigationItems(
            mainNavigationItems,
            location,
            navigate
          )}
        </List>
        <List sx={{ marginTop: 'auto' }}>
          <Divider />
          {renderNavigationItems(
            accountNavigationItems,
            location,
            navigate
          )}
        </List>
      </Drawer>
    </Box>
  );
}

export { Navigation };