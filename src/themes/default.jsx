import { createTheme } from "@material-ui/core/styles";
import {
  teal,
  green,
  red,
  purple,
  orange,
  deepPurple,
} from "@material-ui/core/colors";

const primary = "#536DFE";
const secondary = "#FF5C93";


const theme_default= createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: red.A400,
    },
    indigo:{
      main:'#aa43e6',
    },
    background: {
      default: "#e9f1f2",
      card: "#fefefe",
      menu: "#fafafa",
      gredient:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      tealBg: teal["A400"],
      purpleBg: purple[300],
      orangeBg: orange["A100"],
      deepPurpleBg: deepPurple[300],
      footer:"#fefefe",
      thead:"rgb(196, 220, 252)",
      selectitem:"#d3dbed"
    },
    text: {
      white: "#fff",
      green: green[300],
      red: red["A700"],
    },
  },
});

export default theme_default;

export const drawerWidth = 230;
export const rightDrawerWidth = 300;
