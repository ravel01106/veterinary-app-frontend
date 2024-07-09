import React from "react"
import style from './Navbar.module.css'
import UserDataContext from "../../context/UserDataContext";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate()
    const link = "/login"
    const userDataContext = React.useContext(UserDataContext);

    const returnWelcomeScreen = () => {
        localStorage.removeItem("conectado")
        userDataContext.changeIsLogged(false)
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid px-5">
                <a href="#" className="navbar-brand">
                    <img src={`./iconVeterinary.png`} className={`${style.icon}`} alt="#"></img>
                </a>

                {localStorage.getItem("conectado") ? (
                    <>
                        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                            <div className='navbar-nav text-white'>
                                <Link to={"/Home"} className="nav-link text-white">Main Page</Link>
                                <Link to={"/addDate"} className="nav-link text-white">Add Page</Link>
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