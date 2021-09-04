import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { HomePageStyles } from "./style";
import BoxCards from "../../components/cards/box/card";


const useStyles = makeStyles(HomePageStyles);

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      <BoxCards />
      <Paper className={classes.root} elevation={5}>
      
      </Paper>
      <Paper className={classes.root} elevation={5}>
       
      </Paper>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={8}>
          <Paper elevation={5}>
          
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={5}>
           
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
