import { IUser } from "./IUser";

export interface UserContextProp {
    user:IUser,
    isLogged: boolean,
    changeIsLogged: (election:boolean) => void

}