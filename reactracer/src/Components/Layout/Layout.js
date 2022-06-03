import React from "react";
import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import {
  menuItem,
  sideMenu,
  title,
  container,
  titleIcon,
  menuItemIconMargin,
  flex,
  content,
} from "./styles";

const Layout = ({ children }) => {
  const WebVOWL_URL = "https://service.tib.eu/webvowl/";
  return (
    <Grid container sx={container}>
      <Grid item xs={2}>
        <div style={sideMenu}>
          <div style={title}>
            <AccountBalanceIcon sx={titleIcon} />
            ReactRacer
          </div>
          <div>
            <ListItemButton sx={menuItem}>
              <CollectionsBookmarkIcon sx={menuItemIconMargin} />
              Racer server
            </ListItemButton>
          </div>
          <div onClick={() => window.open(WebVOWL_URL, "_blank")}>
            <ListItemButton sx={menuItem}>
              <LogoutIcon sx={menuItemIconMargin} />
              WebVOWL
            </ListItemButton>
          </div>
          <div style={flex} />
          <div>
            <ListItemButton sx={menuItem}>
              <HelpIcon sx={menuItemIconMargin} />
              Help
            </ListItemButton>
          </div>
        </div>
      </Grid>
      <Grid item xs={10} sx={content}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
