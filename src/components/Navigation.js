import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useLocation, useNavigate} from "react-router";

import {Box} from "./Box";


const drawerWidth = 240;

const navigationItems = [
    {
        label: "Account",
        path: "/account",
        icon: <AccountCircleOutlinedIcon />,
    },
    {
        divider: true,
    },
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardOutlinedIcon />,
    },
    {
        label: "Warranties",
        path: "/warranties",
        icon: <ReceiptLongOutlinedIcon />,
    },
];

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <Box sx={{ display: 'flex' }}>
            <Drawer  sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
                 variant="permanent"
                 anchor="left">
               <List>
                   {navigationItems.map((item, index) => {
                       if (item.divider) {
                           return <Divider key={`divider-${index}`}/>;
                       }
                       return (
                           <ListItem key={item.path} disablePadding>
                                <ListItemButton
                                    selected={location.pathname === item.path}
                                    onClick={() => {navigate(item.path);}}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                           </ListItem>
                       );
                   })}
                </List>
            </Drawer>
        </Box>
    );
}

export { Navigation };