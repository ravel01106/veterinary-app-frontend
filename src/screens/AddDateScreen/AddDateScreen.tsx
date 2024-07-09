import React from "react"
import style from "./AddScreen.module.css"
import { IDates } from "../../interfaces/IDates"
import  dates from "../../data/dates";
import { useNavigate } from "react-router-dom";

const AddDateScreen = () => {
  const currentDateTime = new Date().toISOString();
  const initNewDate:IDates = {
    Id: "",
    petName: "",
    ownerName: "",
    date: currentDateTime.substring(0,10),
    time: currentDateTime.substring(11,16),
    symptoms: "aaa",
  }
  const [newDate, setNewDate] = React.useState(initNewDate)

  const navigate = useNavigate()

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setNewDate({
      ...newDate, [e.target.name]: e.target.value
    })
  }

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
    navigate("/")
  }

  return (
    <div className={`${style.mainContainer}`}>
      <div className={`card text-light p-3 ${style.FormContainer}`}>
        <h3 className="card-title mb-2">Add date</h3>
        <div className="card-body text-start">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 mt-2">
              <label className="form-label">Pet's name</label>
              <input
              type="text"
              className="form-control"
              id="petName"
              name="petName"
              value={newDate.petName}
              onChange={handleInputChange}
              required/>
            </div>

            <div className="row-md-6 mt-2">
              <label className="form-label">Owner name</label>
              <input
                type="text"
                className="form-control"
                id="ownerName"
                name="ownerName"
                value={newDate.ownerName}
                onChange={handleInputChange}
                required/>
            </div>

            <div className='col-md-6 mt-2'>
              <label className='form-label'>Fecha</label>
              <input
                type='date'
                name='date'
                className='form-control'
                id='date'
                value={newDate.date}
                onChange={handleInputChange}
                required />
            </div>

            <div className='col-md-6 mt-2'>
              <label className='form-label'>Hora</label>
              <input
                type='time'
                className='form-control'
                name='time'
                id='time'
                value={newDate.time}
                onChange={handleInputChange}
                required />
            </div>
            <div className="row-md-6 mt-2">
              <label className="form-label">Symptoms</label>
              <textarea
                className="form-control"
                rows={3}
                id="symptoms"
                name="symptoms"
                value={newDate.symptoms}
                onChange={handleInputChange}
                required/>
            </div>
            <div className='row-md-6 mt-3'>
              <button type='submit' className='btn btn-success'>New date</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddDateScreen