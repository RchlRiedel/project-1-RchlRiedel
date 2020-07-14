import React, { FunctionComponent, useState, SyntheticEvent } from "react"
import { lotrLogin } from "../../lotr-api/lotr-login"
import { RouteComponentProps } from "react-router"
import {TextField, Button} from "@material-ui/core"
//import { User } from "../../models/User"

interface ILoginProps extends RouteComponentProps{
    changeCurrentUser:(newUser:any)=>void
}

export const LoginComponent:FunctionComponent<ILoginProps> = (props) => {

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
        props.changeCurrentUser(res) 
        changePassword('') 
        props.history.push(`/profile/${res.userId}`) //send too profile page for user (not working)     
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={loginSubmit}>
                <TextField id="standard-basic" label="Username" value = {username} onChange={updateUsername}/>
                <br/>
                <TextField id="standard-basic" type="password" label="Password" value = {password} onChange={updatePassword}/>
                <br/>
                <Button type="submit" variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}