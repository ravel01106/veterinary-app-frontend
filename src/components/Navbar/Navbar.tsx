import React from "react"
import VisbilityContext from "../../context/VisbilityContext"
import style from './Navbar.module.css'
import UserDataContext from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate()

    const visibilityContext = React.useContext(VisbilityContext);
    const userDataContext = React.useContext(UserDataContext);

    const returnWelcomeScreen = () => {
        userDataContext.changeIsLogged(false)
        visibilityContext.changeVisibilityLoginForm(false);
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid px-5">
                <a href="#" className="navbar-brand">
                    <img src={`./iconVeterinary.png`} className={`${style.icon}`} alt="#"></img>
                </a>
                {userDataContext.isLogged ? (
                    <div className={`${style.buttonsContainer}`}>
                        <div>
                            <p className="text-light pt-3">Bienvenido: {userDataContext.user.username} </p>
                        </div>
                        <button className='btn btn-outline-light' type='button' onClick={returnWelcomeScreen}>Log out</button>
                    </div>
                ) : (
                    <div>
                        <button className='btn btn-outline-light' type='button' onClick={() => visibilityContext.changeVisibilityLoginForm(true)}>Log in</button>
                    </div>
                )}

            </div>
        </nav>
    )
}



export default Navbar