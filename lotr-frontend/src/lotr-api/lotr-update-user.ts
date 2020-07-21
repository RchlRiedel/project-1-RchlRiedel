import { lotrClient } from ".";
import { User } from "../models/User";

export const lotrUpdateUser = async (user:User) => {
    
    try{
        console.log(user)
        let response = await lotrClient.patch(`/users/update/${user.userId}`, user) //for the update endpoint
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        //insert error
    }
}