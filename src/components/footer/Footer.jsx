import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FooterStyles } from "./style";
import {Typography,Link,Box} from "@material-ui/core";


const useStyles = makeStyles(FooterStyles);

const Footer = () => {
  const classes = useStyles();

  return (
    <Box pt={4} className={classes.copyright}>
       <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https:Codejs.net">
          Code-Js
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
  </Box>
  );
};

export default Footer;
