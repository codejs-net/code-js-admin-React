import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MapIcon from '@material-ui/icons/Map';
import ListAltIcon from "@material-ui/icons/ListAlt";
import * as ROUTES from "./../routes/route";

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
        key: "ElectionS",
        label: "ElectionS",
        icon: <DashboardIcon />,
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
        icon: <PeopleIcon />,
        route: ROUTES.Staff 
      },
      { 
        key: "Add Staff", 
        label: "Add Staff", 
        icon: <PeopleIcon />,
        route: ROUTES.StaffAdd 
      }
    ]
  },
  {
    key: "Province",
    label: "Province",
    icon: <MapIcon />,
    items: [
      { 
        key: "Manage Province", 
        label: "Manage Province", 
        icon: <MapIcon />,
        route: ROUTES.Province 
      }
    ]
  }
];
