import React from "react";
import VisbilityContext from "../../context/VisbilityContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import WelcomeCard from "../../components/Welcome/Welcome";

const WelcomeScreen = () => {
  const { visibilityLoginForm } = React.useContext(VisbilityContext);
  return (
    <>
      {visibilityLoginForm ? (<LoginForm />) : (<WelcomeCard />)}
    </>
  )
}

export default WelcomeScreen