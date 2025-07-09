import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload:Partial<IUser>) =>{
    const {name,email} = payload;
    const user = await User.create({
        name,
        email
    })
    return user
 }
 export const UserService = {
    createUser
 }

 //route matching app.ts ->index.ts -> user.route -> user.contoller -> user.service -> model -> DB