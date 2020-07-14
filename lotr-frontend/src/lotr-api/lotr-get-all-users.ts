import { lotrClient } from "."

export const lotrGetAllUsers = async () => {
    try {
        let response = await lotrClient.get(`/users`)
        return response.data //what exactly is the data in this?
    } catch(e) {
        console.log(e);
        //put in an error        
    }
}