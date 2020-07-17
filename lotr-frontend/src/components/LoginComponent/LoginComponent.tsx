import React, { FunctionComponent, useState, SyntheticEvent } from "react"
import { lotrLogin } from "../../lotr-api/lotr-login"
import { RouteComponentProps } from "react-router"
import {TextField, Button, makeStyles} from "@material-ui/core"

interface ILoginProps extends RouteComponentProps{
    changeCurrentUser:(newUser:any)=>void
}


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
})); //better way of spacing?

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
            props.history.push(`/home`) 
        } else {
            props.changeCurrentUser(res) 
            props.history.push(`/profile/${res.userId}`) 
        }
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={loginSubmit}>
                <TextField id="standard-basic" label="Username" value = {username} onChange={updateUsername} className={classes.margin}/>
                <TextField id="standard-basic" type="password" label="Password" value = {password} onChange={updatePassword} className={classes.margin}/>
                <br/>
                <Button type="submit" variant="contained" color="primary" className={classes.margin}>Login</Button>
            </form>
        </div>
    )
}