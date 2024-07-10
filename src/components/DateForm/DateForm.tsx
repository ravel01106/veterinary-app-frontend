import React from "react"
import { IDateFormProps } from "../../interfaces/IDateFormProps"


const DateForm = ({date, setDate, handleSubmit, buttonText}:IDateFormProps) => {

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setDate({
      ...date, [e.target.name]: e.target.value
    })
  }
  return (
    <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 mt-2">
              <label className="form-label">Pet's name</label>
              <input
              type="text"
              className="form-control"
              id="petName"
              name="petName"
              value={date.petName}
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
                value={date.ownerName}
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
                value={date.date}
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
                value={date.time}
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
                value={date.symptoms}
                onChange={handleInputChange}
                required/>
            </div>
            <div className='row-md-6 mt-3'>
              <button type='submit' className='btn btn-success'>{buttonText}</button>
            </div>
          </form>
  )
}

export default DateForm