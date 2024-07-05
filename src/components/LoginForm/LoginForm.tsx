import React from "react";
import style from "./LoginForm.module.css";


const LoginForm = () => {
    const initUser = {
        username: '',
        password: ''
    };

    const [user, setUser] = React.useState(initUser);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Logueado")

        setUser(initUser)
    }

    return (
        <div className={`${style.mainContainer}`}>
            <div className="card bg-light w-50 p-3">
                <h3 className="card-title">Login Form</h3>
                <div className="card-body text-start">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mx-3">
                            <label className="form-label" id="username">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="username"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                                required/>
                        </div>
                        <div className="mb-3 mx-3">
                            <label className="form-label" id="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                required/>
                        </div>
                        <div className="mx-3">
                            <button 
                            type="submit" 
                            className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginForm