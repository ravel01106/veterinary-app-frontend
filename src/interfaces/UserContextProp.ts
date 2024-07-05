import { BooleanFunctionType } from "./BooleanFunctionType";
import { IUser } from "./IUser";

export interface UserContextProp {
    user:IUser,
    isLogged: boolean,
    changeIsLogged: BooleanFunctionType

}