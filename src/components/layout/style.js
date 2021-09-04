import { width } from "@material-ui/system";

export const layoutStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    // width:"100%"
  },

});
