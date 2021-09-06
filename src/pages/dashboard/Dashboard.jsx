import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { HomePageStyles } from "./style";
import BoxCards from "../../components/cards/box/card";
import SimpleCards from "../../components/cards/simple/card";


const useStyles = makeStyles(HomePageStyles);

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      

      <Grid container>
      <BoxCards />
      <Paper className={classes.root} elevation={3}>
        <SimpleCards 
        title="Code-JS React Template With context api Authentication"
        content=""
        />
      </Paper>
      </Grid>

    </>
  );
};

export default DashboardPage;
