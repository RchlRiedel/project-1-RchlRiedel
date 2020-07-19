import { lotrClient } from "."

export const lotrLogOut = async () =>{
    try {
        let response = await lotrClient.delete('/logout')
        console.log(response);
        return response.data //should be null?
    } catch (e) {
        console.log(e)
        return ("This is an error")
    }
}