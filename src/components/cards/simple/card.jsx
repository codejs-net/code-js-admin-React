import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardsStyles } from "./style";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(CardsStyles);

export default function SimpleCard({title,content}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2" className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
        
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
