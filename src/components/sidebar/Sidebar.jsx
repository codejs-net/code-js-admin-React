import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import * as ROUTES from "../../routes/route";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import { MenuItem } from "../../data/menu";
import { sidebarStyles } from "./style";
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Avatar from 'react-avatar';
import Avatar from '@material-ui/core/Avatar';

const Sidebar = ({classes, open, handleDrawerClose }) => {
  const [selectedItem, setSelectedItem] = useState("ElectionS");
  const [subOpen, setSubOpen] = useState({});

  const handleClick = (key) => {
    setSubOpen(
      {[key]:!subOpen[key] || false}
      );
  };

  const handleSelect = (index) => {
    setSelectedItem(index);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
      
    >
      <div className={classes.toolbarIcon}>
        <h2 className={classes.logo} spacing={2}>CodeJS&nbsp;</h2>
        <Avatar size={40}  src="/logo.png"/>
        <div className={classes.toolbarIconColse}>
        <IconButton onClick={handleDrawerClose} className={classes.IconColse}>
          <MenuIcon />
        </IconButton>
        </div>
      </div>
      <Divider />
      {/* ---------------------------------------- */}
      <List>
        {MenuItem.map((item, id) => (
        
          <div key={item.key}>
           <ListItem 
            button
            key={item.key}
            selected={item.key === selectedItem}
            onClick={event => handleClick(item.key)}
            // classes={classes.Item }
            className={classes.Item }
          >
            <ListItemIcon className={classes.listItem }>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label}/>
            {subOpen[item.key] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </ListItem>

            <Collapse in={subOpen[item.key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.items.map((subitem, subid) => (
                  <ListItem 
                  button
                  key={subitem.key}
                  component={Link}
                  to={subitem.route}
                  selected={subitem.key === selectedItem}
                  onClick={event => handleSelect(subitem.key)}
                  classes={{ selected: classes.selected }}
                  className={classes.ItemNested }
                >
                  <ListItemIcon className={classes.listItem }>{subitem.icon}</ListItemIcon>
                  <ListItemText primary={subitem.label}/>
                </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}

      </List>
      {/* ---------------------------------------- */}

    <Divider />
    </Drawer>
  );
};

export default withStyles(sidebarStyles)(Sidebar);
