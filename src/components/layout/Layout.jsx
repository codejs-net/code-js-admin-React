import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { layoutStyles } from "./style";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Grid,Container } from "@material-ui/core";

const useStyles = makeStyles(layoutStyles);

const Layout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        
          {/* <Grid container spacing={0}> */}
            <Container  className={classes.container} maxWidth="xl">
              {children}
            </Container>
          {/* </Grid> */}
       
        <Footer/>
      </main>
      
    </div>
  );
};

export default Layout;
