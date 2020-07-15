import React, { FunctionComponent } from "react"
import { User } from '../../models/User'
import { makeStyles, Typography, CardContent, Card } from "@material-ui/core"

interface IUserDisplayProps {
    user:User
}
const useStyles = makeStyles({ //customize this more!
  root: {
    margin: "auto",
    minWidth: 275,
    maxWidth:500
  },
  username: {
    variant: "h1",
  },
  userInfo: {
    fontSize: 12,
    color: "textSecondary"
  },
});

export const UserDisplayComponent: FunctionComponent<IUserDisplayProps> = (props) =>{ 
    let classes = useStyles();
    return (
      <Card className={classes.root} >
        <CardContent>
          {/*insert photo media element */}
          <Typography className={classes.username} gutterBottom>
            Username : {props.user.username}
          </Typography>
          <Typography className={classes.userInfo} gutterBottom>
            Password : {props.user.password}
          </Typography>
          <Typography className={classes.userInfo}>
              First Name : {props.user.firstName}
          </Typography>
          <Typography className={classes.userInfo} gutterBottom>
              Last Name : {props.user.lastName}
          </Typography>
          <Typography className={classes.userInfo}>
              Email : {props.user.email}
          </Typography>
        </CardContent>
        {/* <CardActions>
           <Button size="small">Learn More</Button>
          We want this to be the button to press to update profile
        </CardActions> */}
      </Card>
    );
}