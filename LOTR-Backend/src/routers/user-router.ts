
import express, { Request, Response, NextFunction } from 'express'
import { authentificationMiddleware } from '../middleware/authentification-middleware'
import { authorizationMiddleware } from '../middleware/authorization-middleware'
import { updateUser } from '../daos/SQL/users-dao'
import { User } from '../models/User'
import { UserIdNumberNeededError } from '../errors/User-Id-Number-Needed-Error'
import { getAllUsersService, getUserByIDService } from '../services/user-service'

export const userRouter = express.Router()

//Use login
userRouter.use(authentificationMiddleware)

//Find Users                                 
userRouter.get("/", authorizationMiddleware(["Admin"], false), async (req:Request, res:Response, next:NextFunction)=>{
    try {
        let allUsers = await getAllUsersService() 
        res.json(allUsers)
    } catch(e){
        next(e)
    }})

//Get user profile information                       I don't think I need anything in this array
//ON SECOND THOUGHT this would be too complicated... maybe later
// userRouter.get("/-profiles", authorizationMiddleware([], true), async (req:Request, res:Response, next:NextFunction)=>{
//     try {
//         let allUserProfiles = await getAllUserProfiles() 
//         res.json(allUserProfiles)
//     } catch(e){
//         next(e)
//     }})
    
//Find user by id
userRouter.get("/:userId",  authorizationMiddleware(["Admin"], true), async (req:Request, res:Response, next:NextFunction)=>{
    let {userId} = req.params
    if(isNaN(+userId)){
        next(new UserIdNumberNeededError)
    } else {
        try {
            let user = await getUserByIDService(+userId)
            res.json(user)
        } catch(e) {
            next(e)
        }
    }
})

//Update user
userRouter.patch("/update", async (req:Request, res: Response, next:NextFunction) => {
    let {userId, username, password, firstName, lastName, email, role, image } = req.body

    if (!userId || isNaN(req.body.userId)){
        next (new UserIdNumberNeededError)
    } else { 
        let updatedUser:User = {
            userId,
            username,
            password,
            firstName,
            lastName,
            email,
            role,
            image
        }
        updatedUser.username = username || undefined
        updatedUser.password = password || undefined
        updatedUser.firstName = firstName || undefined
        updatedUser.lastName = lastName || undefined
        updatedUser.email = email || undefined
        updatedUser.role = role || undefined
        updatedUser.image = image || undefined

        try {
            let updatedUserResults = await updateUser(updatedUser)
            res.json(updatedUserResults)
        } catch (e) {
            next
        }
    }
})