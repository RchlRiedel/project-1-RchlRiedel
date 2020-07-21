import { lotrClient } from "."

export const lotrGetAllUsers = async () => {
    try {
        let response = await lotrClient.get(`/user-info`)
        return response.data 
    } catch(e) {
        console.log(e);
        throw e
    }
}