import React, { FunctionComponent } from 'react';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignUpButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "auto"
  },
  root: { //figure out spacing for this (so it's relative to screen size and centered)
    maxWidth: 600
  }
}));

export const HomeComponent:FunctionComponent<any> = (props) =>{
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        {/* <CardMedia  /> 
        Insert image of middle earth here! (or slideshow?)*/}
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Become part of the expedition to save the world!                 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Join the Fellowship of the Ring, a selective, diverse 
                team working to overthrow the Dark Lord as they travel across 
                the legendary, luscious landscape of Middle-Earth to 
                earn their places in the history books. 
                There’s only an 11% chance of dying!
            </Typography>
        </CardContent>
        <CardActions>
          {/*EDIT THE LINKS IN THE BUTTONS */}
            <SignUpButton variant="contained" color="primary" className={classes.margin}>
            <   Link to= "/sign-up">Sign Up Now!</Link>
            </SignUpButton>
        </CardActions>
    </Card>
  )
}