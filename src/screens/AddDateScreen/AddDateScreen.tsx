import React from "react"
import style from "./AddScreen.module.css"
import { IDates } from "../../interfaces/IDates"
import  dates from "../../data/dates";
import { useNavigate } from "react-router-dom";
import DateForm from "../../components/DateForm/DateForm";

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

    dates.push({
      Id: (dates.length + 1).toString(),
      petName: newDate.petName,
      ownerName: newDate.ownerName,
      date: newDate.date,
      time: newDate.time,
      symptoms: newDate.symptoms
    });
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