import React from 'react'
import style from './Welcome.module.css'
import VisbilityContext from '../../context/VisbilityContext'

const WelcomeCard = () => {
    const visibility = React.useContext(VisbilityContext);
    return (
        <div className={`${style.mainContainer}`}>
            <div className={`card ${style.cardContainer} p-5 text-light`}>
                <h1 className="card-title"> Welcome to Veterinary app</h1>
                <p className="card-body">Please, introduce your admin account to continue !!</p>
                <button className='btn btn-outline-light btn-lg' type='button' onClick={() => visibility.changeVisibilityLoginForm(true)}>Log in</button>
            </div>
        </div>
    )
}

export default WelcomeCard