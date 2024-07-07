import React from 'react'
import { CustomProviderProps } from '../interfaces/CustomProviderProps'
import { IUser } from '../interfaces/IUser'
import { UserContextProp } from '../interfaces/UserContextProp'
import UserDataContext from '../context/UserDataContext'

const CustomProvider = ({ children }: CustomProviderProps) => {

    const adminUser: IUser = {
        username: 'admin',
        password: 'admin'
    }

    const [isLogged, setIslogged] = React.useState(false);


    const changeIsLogged = (election: boolean) => {
        setIslogged(election)
    }


    const UserData: UserContextProp = {
        user: adminUser,
        isLogged,
        changeIsLogged
    }

    return (
        <UserDataContext.Provider value={UserData}>
            {children}
        </UserDataContext.Provider>
    )
}

export default CustomProvider