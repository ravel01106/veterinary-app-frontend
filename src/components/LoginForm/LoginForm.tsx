import React from "react";
import style from "./LoginForm.module.css";
import VisbilityContext from "../../context/VisbilityContext";
import UserDataContext from "../../context/UserDataContext";


const LoginForm = () => {
    const { changeVisibilityLoginForm } = React.useContext(VisbilityContext);
    const initUser = {
        username: '',
        password: ''
    };

    const [currentUser, setCurrentUser] = React.useState(initUser);
    const {user} = React.useContext(UserDataContext)

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentUser({
            ...currentUser, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (user.username === currentUser.username && user.password === currentUser.password){
            console.log("Logueado")
            setCurrentUser(initUser)
        }else{
            console.log("No esta logueado")
        }

    }

    return (
        <div className={`${style.mainContainer}`}>
            <div className={`card text-light p-3 ${style.FormContainer}`}>
                <h3 className="card-title mb-4">Login Form</h3>
                <div className="card-body text-start">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mx-3">
                            <label className="form-label" id="username">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="username"
                                name="username"
                                value={currentUser.username}
                                onChange={handleInputChange}
                                required/>
                        </div>
                        <div className="mb-4 mx-3">
                            <label className="form-label" id="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password"
                                value={currentUser.password}
                                onChange={handleInputChange}
                                required/>
                        </div>
                        <div className="mx-3 d-flex flex-row justify-content-between">
                            <button 
                            type="submit" 
                            className="btn btn-outline-light btn-lg px-3"
                            >Submit</button>
                            <button className="btn btn-danger btn-lg px-3" type='button' onClick={() => changeVisibilityLoginForm(false)}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginForm