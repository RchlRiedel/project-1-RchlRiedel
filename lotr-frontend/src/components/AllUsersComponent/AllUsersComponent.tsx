import React, { FunctionComponent, useState, useEffect } from "react"
import { UserDisplayComponent } from '../UserDisplayComponent/UserDisplayComponent'
import { User } from '../../models/User'
import { lotrGetAllUsers } from "../../lotr-api/lotr-get-all-users"

export const AllUsersComponent:FunctionComponent<any> = (props) => {

    //I need to fetch all the user information
    let [allUsers, changeAllUsers] = useState<User[]>([])
    useEffect(()=>{//runs on every single re render

        const getUsers = async ()=>{
                let response = await lotrGetAllUsers()
                changeAllUsers(response)
            // } else { it would be cool if a user could view some info of other users (like their profile with image and email)
            //     let response = await lotrGetAllUserProfiles() //gonna want a new endpoint that gets only some things from users
            //     changeAllUsers(response)
            // }
        }

        if(allUsers.length === 0){
            //get the users (if function hasn't been already called)
            //update the state with those users
            getUsers()
        }
    })

    //map data into components and then put them into the jsx 
    let userDisplays = allUsers.map((user)=>{
        //give the components keys so that react can tell them apart
        return <UserDisplayComponent key={'user-key-' + user.userId} user={user}/>
    })

    return(
        //make this into an grid list or accordian list with pictures!
        <div>
            {userDisplays}
        </div>
    )
}