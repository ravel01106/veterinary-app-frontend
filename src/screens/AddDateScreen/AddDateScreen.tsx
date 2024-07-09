import style from "./AddScreen.module.css"

const AddDateScreen = () => {

  return (
    <div className={`${style.mainContainer}`}>
      <div className={`card text-light p-3 ${style.FormContainer}`}>
        <h3 className="card-title mb-2">Add date</h3>
        <div className="card-body text-start">
          <form className="row">
            <div className="col-12 mt-2">
              <label className="form-label">Pet's name</label>
              <input
              type="text"
              className="form-control"
              id="petName"
              name="petName"
              required/>
            </div>

            <div className="row-md-6 mt-2">
              <label className="form-label">Owner name</label>
              <input
                type="text"
                className="form-control"
                id="ownerName"
                name="ownerName"
                required/>
            </div>

            <div className='col-md-6 mt-2'>
              <label className='form-label'>Fecha</label>
              <input
                type='date'
                name='date'
                className='form-control'
                id='date'
                required />
            </div>

            <div className='col-md-6 mt-2'>
              <label className='form-label'>Hora</label>
              <input
                type='time'
                className='form-control'
                name='time'
                id='time'
                required />
            </div>
            <div className="row-md-6 mt-2">
              <label className="form-label">Symptoms</label>
              <textarea
                className="form-control"
                rows={3}
                id="Symptoms"
                name="Symptoms"
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