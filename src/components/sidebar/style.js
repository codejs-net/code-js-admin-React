import { borderRadius } from "@material-ui/system";
import { drawerWidth } from "./../../themes/default";
export const sidebarStyles = theme => ({
  // root: {
  //  "& .MuiListItemText-primary": {
  //     fontSize:"14px",
  //   },
  // },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    // backgroundColor: `${theme.palette.primary.main} !important`,
    ...theme.mixins.toolbar
  },
  toolbarIconColse: {
    padding: "0 20px",
  },

  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    // backgroundColor: theme.palette.background.default
    background: 'rgb(245,249,255)',
    background: 'linear-gradient(90deg, rgba(245,249,255,1) 4%, rgba(253,253,255,1) 77%)'
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },

  ItemNested: {
    "&:hover": {
     backgroundColor: `${theme.palette.primary.main} !important`,
      color: "white",
    },
    "& .MuiListItemText-primary": {
      fontSize:"14px",
    },
  },
  Item: {
    "&:hover": {
     backgroundColor: `${theme.palette.primary.main} !important`,
      color: "white",
    },
    "& .MuiListItemText-primary": {
      fontSize:"14px",
      fontWeight:"500",
      
    },
  },

  selected: {
    backgroundColor: `${theme.palette.background.selectitem} !important`,
    color: "black",
    // fontWeight:500
  },

  logo:{
    color:"#3f84f2",
    marginRight:"5px",
    fontFamily: 'Playfair'
  },


});
