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
  root: { //figure out spacing for this (so it's relative to screen size and centered)
    margin: "auto",
    maxWidth: 600,
    justifyContent: "center"
  },
  submit: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
    color: 'white',
    //background color? for when hovering/submitting?
    //fontFamily: '',
    fontSize: 16,
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
                Become part of an expedition to save the world!                 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Join the Fellowship of the Ring, a selective, diverse 
                team working to overthrow the Dark Lord as they travel across 
                the legendary, luscious landscape of Middle-Earth to 
                earn their places in the history books. 
                There’s only an 11% chance of dying!
            </Typography>
        </CardContent>
        <CardActions className={classes.root}>
          {/*EDIT THE LINKS IN THE BUTTONS */}
            <Link to= "/register" style={{ textDecoration:"none"}}><SignUpButton variant="contained" className={classes.submit}>
              Sign Up Now!
            </SignUpButton></Link>  
             or  <Link to="/login">Login</Link>
        </CardActions>
    </Card>
  )
}