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
        content="Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it."
        />
        </Paper>
      </Grid>

    </>
  );
};

export default DashboardPage;
