import { width } from "@material-ui/system";

export const layoutStyles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    minHeight: "90vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    minHeight: "95vh",
    display: "flex",
    flexDirection: "column",
    // width:"100%"
  },

});
