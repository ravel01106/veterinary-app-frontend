import LoginForm from "../../components/LoginForm/LoginForm"
import style from "./LoginScreen.module.css"

const LoginScreen = () => {
  return (
    <div className={`${style.mainContainer}`}>
      <LoginForm />
    </div>
  )
}

export default LoginScreen