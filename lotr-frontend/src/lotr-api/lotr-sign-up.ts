import { lotrClient } from ".";
import { User } from "../models/User";

export const lotrSignUp = async (user:User) => {
    
    try{
        console.log(user)
        let response = await lotrClient.post('/register', user) //for the registration endpoint 
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        //insert error
    }
}