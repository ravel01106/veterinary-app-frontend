import React from "react"
import VisbilityContext from "../../context/VisbilityContext"
import style from './Navbar.module.css'
const Navbar = () => {

    const visibilityContext = React.useContext(VisbilityContext);

    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid px-5">
                <a href="#" className="navbar-brand">
                    <img src={`./iconVeterinary.png`}  className= {`${style.icon}`} alt="#"></img>
                </a>
                <div>
                <button className='btn btn-outline-light' type='button' onClick={() => visibilityContext.changeVisibilityLoginForm(true)}>Log in</button>
                </div>
            </div>
        </nav>
    )
}



export default Navbar