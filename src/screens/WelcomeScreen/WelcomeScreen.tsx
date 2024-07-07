import React from "react";
import WelcomeCard from "../../components/Welcome/Welcome";
import UserDataContext from "../../context/UserDataContext";

const WelcomeScreen = () => {
  const {isLogged } = React.useContext(UserDataContext);
  return (
    <>
      {isLogged ? (<div>JEJEJE</div>) : (<WelcomeCard />)}
    </>
  )
}

export default WelcomeScreen