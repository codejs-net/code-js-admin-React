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
    padding: "0px",
    // borderBottom: "2px solid #d6d6d6",
    backgroundColor:theme.palette.background.darkbg,
    color:theme.palette.text.white,
    ...theme.mixins.toolbar
  },
  toolbarIconColse: {
    padding: "0 20px",
    color:theme.palette.text.white,
  },
  IconColse: {
    color:theme.palette.text.white,
  },

  drawerPaper: {
    position: "relative",
    // whiteSpace: "nowrap",
    color:theme.palette.text.white,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.background.darkbg,
    border:"none"
    // background: 'rgb(245,249,255)',
    // background: 'linear-gradient(90deg, rgba(245,249,255,1) 4%, rgba(253,253,255,1) 77%)'
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
     backgroundColor: `${theme.palette.background.deepDarkBg} !important`,
     color:theme.palette.text.white,
    },
    "& .MuiListItemText-primary": {
      fontSize:"14px",
    },
  },
  listItem:{
    color:theme.palette.text.white,
  },
  Item: {
    "&:hover": {
     backgroundColor: `${theme.palette.background.deepDarkBg} !important`,
     color:theme.palette.text.white,
    },
    "& .MuiListItemText-primary": {
      fontSize:"14px",
      fontWeight:"500",
      
    },
  },

  selected: {
    backgroundColor: `${theme.palette.background.selectitem} !important`,
    color:theme.palette.text.white,
    // fontWeight:500
  },

  logo:{
    color:theme.palette.text.white,
    marginRight:"5px",
    fontFamily: 'Playfair'
  },


});
