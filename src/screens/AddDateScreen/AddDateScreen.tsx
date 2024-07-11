import React from "react"
import style from "./AddDateScreen.module.css"
import { IDates } from "../../interfaces/IDates"
import { useNavigate } from "react-router-dom";
import DateForm from "../../components/DateForm/DateForm";
import DateService from "../../services/DateService";

const AddDateScreen = () => {
  const currentDateTime = new Date().toISOString();
  const initNewDate:IDates = {
    Id: "",
    petName: "",
    ownerName: "",
    date: currentDateTime.substring(0,10),
    time: currentDateTime.substring(11,16),
    symptoms: "",
  }
  const [newDate, setNewDate] = React.useState(initNewDate)

  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log(currentDateTime.substring(0,10))
    DateService.addNewDate(newDate)
    setNewDate(initNewDate)
    navigate("/Home")
  }

  return (
    <div className={`${style.mainContainer}`}>
      <div className={`card text-light p-3 ${style.FormContainer}`}>
        <h3 className="card-title mb-2">Add date</h3>
        <div className="card-body text-start">
          <DateForm
            date={newDate}
            buttonText="New Date"
            handleSubmit={handleSubmit}
            setDate={setNewDate} />
        </div>
      </div>
    </div>
  )
}

export default AddDateScreen