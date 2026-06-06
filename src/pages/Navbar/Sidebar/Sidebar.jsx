import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import styles from "./Sidebar.module.scss";

export default function TemporaryDrawer({ open, setOpen }) {

  function handleOnClckMenu(path){
      setOpen(false);
      console.log("Navigate to:", path);
  }
  const menuItems = [
    {
      label: "Home",
      icon: <HomeOutlinedIcon />,
      path: "/home"
    },
    {
      label: "Portfolio",
      icon: <AppsOutlinedIcon />,
      path: "/portfolio"
    },
    {
      label: "Watchlist",
      icon: <BookmarkBorderOutlinedIcon />,
      path: "/watchlist"
    },
    {
      label: "Activity",
      icon: <ReorderOutlinedIcon />,
      path: "/activity"
    },
    {
      label: "Wallet",
      icon: <AccountBalanceWalletOutlinedIcon />,
      path: "/wallet"
    },
    {
      label: "Payment Details",
      icon: <AccountBalanceOutlinedIcon />,
      path: "/payment-details"
    },
    {
      label: "Withdrawal",
      icon: <CreditCardOutlinedIcon />,
      path: "/withdrawal"
    },
    {
      label: "Profile",
      icon: <PersonOutlineOutlinedIcon />,
      path: "/profile"
    },
    {
      label: "Logout",
      icon: <LogoutOutlinedIcon />,
      path: "/logout"
    },
  ];

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        className: styles.drawer,
      }}
    >
      <Box className={styles.sidebar}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>Z</div>
          <h2>
            <span>Bit</span>Minor
          </h2>
        </div>

        {/* Menu */}
        <List className={styles.menuList}>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding className={styles.menuItemLabel} onClick={() => handleOnClckMenu(item.path)}>
              <ListItemButton className={styles.menuItem}>
                <ListItemIcon className={styles.icon}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    className: styles.menuText,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}