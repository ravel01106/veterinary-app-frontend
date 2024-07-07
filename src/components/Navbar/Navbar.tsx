import React from "react"
import style from './Navbar.module.css'
import UserDataContext from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate()
    const link = "/login"
    const userDataContext = React.useContext(UserDataContext);

    const returnWelcomeScreen = () => {
        userDataContext.changeIsLogged(false)
    }

    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid px-5">
                <a href="#" className="navbar-brand">
                    <img src={`./iconVeterinary.png`} className={`${style.icon}`} alt="#"></img>
                </a>

                {userDataContext.isLogged ? (
                    <>
                        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                            <div className='navbar-nav text-white'>
                                <a className='nav-link text-white active' href="#">Main page</a>
                                <a className='nav-link text-white-50' href="#">Add date</a>
                            </div>
                        </div>
                        <div className={`${style.buttonsContainer}`}>
                            <div>
                                <p className="text-light pt-3">Bienvenido: {userDataContext.user.username} </p>
                            </div>
                            <button className='btn btn-outline-light' type='button' onClick={returnWelcomeScreen}>Log out</button>
                        </div>
                    </>

                ) : (
                    <div>
                        <button className='btn btn-outline-light' type='button' onClick={() => navigate(link)}>Log in</button>
                    </div>
                )}

            </div>
        </nav>
    )
}



export default Navbar