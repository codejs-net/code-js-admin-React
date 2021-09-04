import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MapIcon from '@material-ui/icons/Map';
import ListAltIcon from "@material-ui/icons/ListAlt";
import * as ROUTES from "./../routes/route";
import WebIcon from '@material-ui/icons/Web';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RoomIcon from '@material-ui/icons/Room';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//  const MENU_LIST = [
//   {
//     name: "Dashboard",
//     icon: <DashboardIcon />,
//     route: ROUTES.DashBoard
//   },
//   {
//     name: "Provinces",
//     icon: <MapIcon />,
//     route: ROUTES.Province
//   },
//   {
//     name: "Search Staff",
//     icon: <PeopleIcon />,
//     route: ROUTES.STAFFS
//   },
//   {
//     name: "Add Staff",
//     icon: <PeopleIcon />,
//     route: ROUTES.STAFFS
//   }
// ];

export const MenuItem = [
  {
    key: "Dashboard",
    label: "DashBoard",
    icon: <DashboardIcon />,
    items: [
      {
        key: "Code-Js",
        label: "Code-Js",
        icon: <WebIcon />,
        route: ROUTES.Dashboard
      }
    ]
  },
  {
    key: "Staff",
    label: "Staff",
    icon: <PeopleIcon />,
    items: [
      { 
        key: "Manage Staff", 
        label: "Manage Staff", 
        icon: <AccountBoxIcon />,
        route: ROUTES.Staff 
      },
      { 
        key: "Add Staff", 
        label: "Add Staff", 
        icon: <AccountBoxIcon />,
        route: ROUTES.StaffAdd 
      }
    ]
  },
  {
    key: "User",
    label: "User",
    icon: <AccountCircleIcon />,
    items: [
      { 
        key: "Manage User", 
        label: "Manage User", 
        icon: <RoomIcon />,
        route: ROUTES.UserAdd 
      }
    ]
  }
];
