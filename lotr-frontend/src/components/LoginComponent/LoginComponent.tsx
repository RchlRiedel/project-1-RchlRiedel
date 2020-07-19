import React, { FunctionComponent, useState, SyntheticEvent } from "react"
import { lotrLogin } from "../../lotr-api/lotr-login"
import { RouteComponentProps } from "react-router"
import {TextField, Button, makeStyles, Container, CssBaseline, Typography, Grid, withStyles} from "@material-ui/core"
import { Link } from "react-router-dom"
import { green, lime } from "@material-ui/core/colors"
import { toast } from "react-toastify"

interface ILoginProps extends RouteComponentProps{
    changeCurrentUser:(newUser:any)=>void
}

export const LoginComponent:FunctionComponent<ILoginProps> = (props) => {
    const classes = useStyles();

    //we need to keep track of a username and a password... 
    //(user was moved to App.tsx when we added the interface)
    const [username, changeUsername] = useState("") 
    const [password, changePassword] = useState("")

    const updatePassword = (event:any) => { 
        event.preventDefault() 
        changePassword(event.currentTarget.value) 
    }

    const updateUsername = (event:any) => {
        event.preventDefault()
        changeUsername(event.currentTarget.value) 
    }
    
    const loginSubmit = async (e:SyntheticEvent) => { 
        e.preventDefault()
        let res = await lotrLogin(username, password) 
        console.log(res)
        
        if (!res.userId){
            toast.error('Invalid Credentials! Please try again.')
            props.history.push(`/login`) 
        } else {
            props.changeCurrentUser(res) 
            props.history.push(`/user/profile/${res.userId}`) 
        }
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <form autoComplete="off" onSubmit={loginSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={updateUsername}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={updatePassword}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                > Login
                </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Link to= "/home" style={{ textDecoration:"none"}}>
                <CustomButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                > Cancel 
                </CustomButton>
                </Link>
                </Grid>
            </Grid>            
            </form>
        </div>
        </Container>
        )
    }
    
    
const CustomButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(lime[700]),
        backgroundColor: "lime[700]",
        '&:hover': {
          backgroundColor: green[900],
        },
    },
  }))(Button);
  
//styles at the bottom because closer to html return
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: lime[700],
        color: 'white',
        //background color?
        //fontFamily: '',
        fontSize: 16,
    },
    media: {

    }
}));