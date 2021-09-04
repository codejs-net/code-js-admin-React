import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { topAppBarStyles } from "./style";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
  Menu,
  MenuItem
} from "@material-ui/core";

import {
  Menu as MenuIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LocalCafeRoundedIcon from "@material-ui/icons/LocalCafeRounded";
import { AuthContext } from '../../context/AuthContext';

const useStyles = makeStyles(topAppBarStyles);

const TopAppBar = ({ open, handleDrawerOpen ,history}) => {
  const classes = useStyles();
  var [profileMenu, setProfileMenu] = useState(null);

  return (
    <AppBar
      position="absolute"
      // boxShadow={3}
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Application
        </Typography>
        {/* <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <LocalCafeRoundedIcon />
          </Badge>
        </IconButton> */}
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
          <ArrowDropDownIcon/>

        </IconButton>
        <AuthContext.Consumer>
        {
        ({ authorize, onLogin, onLogout }) => (

        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              Code-js
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://code-js.net"
            >
              Code-js.net
            </Typography>
          </div>
          {authorize ?
          <div>
             <MenuItem className={classes.profileMenuItem,classes.headerMenuItem}>
              <AccountIcon className={classes.profileMenuIcon} /> Profile
            </MenuItem>
            <MenuItem className={classes.profileMenuItem,classes.headerMenuItem}>
              <AccountIcon className={classes.profileMenuIcon} /> Tasks
            </MenuItem>
            <MenuItem className={classes.profileMenuItem,classes.headerMenuItem}>
              <AccountIcon className={classes.profileMenuIcon} /> Messages
            </MenuItem>
          </div>
          :""}
          

            {authorize ?
             <div className={classes.profileMenuUser}>
             <Typography
             className={classes.profileMenuLink}
             color="primary"
             onClick={() =>  onLogout()}
           > 
           SignOut
           </Typography>
           </div>
            :
            <div className={classes.profileMenuUser}>
            <Link className={classes.profileMenuLink}  to="/login">SignIn</Link>
            <Link className={classes.profileMenuLink} to="/Register">SignUp</Link>
            </div>
            }
          
        </Menu>
        )
      }
      </AuthContext.Consumer>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
