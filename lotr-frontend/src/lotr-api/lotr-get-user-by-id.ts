import { lotrClient } from "."

export const lotrGetUserById = async (userId:number) =>{ 
    try {
        let response = await lotrClient.get(`/users/${userId}`)
        return response.data
    } catch(e) {
        console.log(e);
        throw e
    }
}