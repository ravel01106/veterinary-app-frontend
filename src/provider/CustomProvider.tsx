import React from 'react'
import { CustomProviderProps } from '../interfaces/CustomProviderProps'
import { IUser } from '../interfaces/IUser'
import { UserContextProp } from '../interfaces/UserContextProp'
import UserDataContext from '../context/UserDataContext'
import { VisibilityContextProp } from '../interfaces/VisibilityContextProp'
import VisbilityContext from '../context/VisbilityContext'

const CustomProvider = ({ children }: CustomProviderProps) => {

    const adminUser: IUser = {
        username: 'admin',
        password: 'admin'
    }

    const [isLogged, setIslogged] = React.useState(false);


    const changeIsLogged = (election: boolean) => {
        setIslogged(election)
    }

    const [visibilityLoginForm, setVisibilityLoginForm] = React.useState(false);

    const changeVisbilityForm = (election: boolean) => {
        setVisibilityLoginForm(election)
    }

    const visibilityData: VisibilityContextProp = {
        visibilityLoginForm,
        changeVisbilityForm
    }

    const UserData: UserContextProp = {
        user: adminUser,
        isLogged,
        changeIsLogged
    }

    return (
        <UserDataContext.Provider value={UserData}>
            <VisbilityContext.Provider value={visibilityData}>
                {children}
            </VisbilityContext.Provider>
        </UserDataContext.Provider>
    )
}

export default CustomProvider