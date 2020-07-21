import { lotrClient } from "."

export const lotrLogin = async (username: String, password: String) =>{
    let credentials = {
        username,
        password
    }
    try {
        let response = await lotrClient.post('/login', credentials)
        console.log(response);
        return response.data //user?
    } catch (e) {
        console.log(e)
        throw e
    }
}