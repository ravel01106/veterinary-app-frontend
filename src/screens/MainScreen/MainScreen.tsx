import React from "react"
import UserDataContext from "../../context/UserDataContext"

const MainScreen = () => {
    const userDataContext = React.useContext(UserDataContext)

    React.useEffect(() => {

        if (!userDataContext.isLogged){
            userDataContext.changeIsLogged(true)
        }
        
    }, [])


    return (
        <div>JEJE</div>
    )
}

export default MainScreen