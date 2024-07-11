import React from "react";
import DateService from "../../services/DateService";
import style from "./UpdatedDateScreen.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { IDates } from "../../interfaces/IDates";
import DateForm from "../../components/DateForm/DateForm";

const UpdateDateScreen = () => {
  const { id } = useParams()
  const getDate = ():IDates => {
    if (id){
      const currentDate =  DateService.findDateById(id)
      const dateSplit = currentDate.date.split("/")
      const date = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0]

      console.log(currentDate)
      return {
        Id: currentDate.Id,
        petName: currentDate.petName,
        ownerName: currentDate.ownerName,
        date: date,
        time: currentDate.time,
        symptoms: currentDate.symptoms
      }

    }
    return initNewDate;

  }
  const initNewDate:IDates = {
    Id: "",
    petName: "",
    ownerName: "",
    date: "",
    time: "",
    symptoms: "",
  }
  const [dateUpdated, setDateUpdated] = React.useState(getDate())

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (id){
      DateService.updateDateById(dateUpdated, id)
    }
    navigate("/Home")
  }
  return (
    <div className={`${style.mainContainer}`}>
      <div className={`card text-light p-3 ${style.FormContainer}`}>
        <h3 className="card-title mb-2">Updated date</h3>
        <div className="card-body text-start">
          <DateForm
            date={dateUpdated}
            buttonText="Updated Date"
            handleSubmit={handleSubmit}
            setDate={setDateUpdated} />
        </div>
      </div>
    </div>
  )
}

export default UpdateDateScreen