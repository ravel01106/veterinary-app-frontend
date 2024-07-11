import { FaEye, FaTrashAlt } from "react-icons/fa"
import style from "./TableInfo.module.css"
import { ITableInfoProps } from "../../interfaces/ITableInfoProps"
import dates from "../../data/dates"
import React from "react"
import { Modal, Button } from "react-bootstrap"
import DateService from "../../services/DateService"
import { IDates } from "../../interfaces/IDates"

const TableInfo = ({ currentDates }: ITableInfoProps) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState({} as IDates)

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseInfoModal = () => setShowInfoModal(false);
  const handleShowInfoModal = (date:IDates) => {
    setShowInfoModal(true)
    setCurrentDate(date)
  };
  const handleShowDeleteModal = (date:IDates) => {
    setShowDeleteModal(true)
    setCurrentDate(date)

  };

  const deleteDate = () => {
    DateService.deleteDateById(currentDate.Id)
    setShowDeleteModal(false)

  }

  const goToUpdateScreen = () => {
    console.log("AAAAAAAAAAAAAAA")
  }
  return (
    <>
      <div className="container mt-5">
        {dates.length > 0 ? (
          <div className={`table-responsive ${style.tableScroll}`}>
            {currentDates.length > 0 ? (
              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Pet Name</th>
                    <th scope="col">Owner Name</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentDates.map(date => (
                    <tr className={`${style.field}`}>
                      <th scope="row">{date.Id}</th>
                      <td>{date.petName}</td>
                      <td>{date.ownerName}</td>
                      <td>{date.date + " - " + date.time}</td>
                      <td>
                        <button type="button" className={`btn btn-primary text-light ${style.iconInfo} me-3`} onClick={() => handleShowInfoModal(date)}><FaEye size={24} /></button>
                        <button type="button" className={`btn btn-danger text-light}  ${style.iconDelete}`} onClick={() => handleShowDeleteModal(date)}><FaTrashAlt size={24} /></button>
                      </td>
                    </tr>

                  ))}

                </tbody>
              </table>
            ) : (
              <div className="card bg-danger">
                <h3 className="card-title text-white">No se han encontrado citas</h3>
              </div>
            )}

          </div>
        ) : (<div className="card bg-danger">
          <h3 className="card-title text-white">No se han registrado citas en la base de datos</h3>
        </div>)}
      </div>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">WARNING!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to remove this date?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseDeleteModal}>
            Back
          </Button>
          <Button variant="danger" onClick={deleteDate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showInfoModal} onHide={handleCloseInfoModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"><h3>Information date:</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td><p className="fs-5"><strong className="pe-2">Name Pet:</strong> {currentDate.petName}</p></td>
                <td><p className="fs-5"><strong className="pe-2">Owner Pet Name:</strong> {currentDate.ownerName}</p></td>
              </tr>
              <tr>
                <td><p className="fs-5 "><strong className="pe-2">Date:</strong> {currentDate.date}</p></td>
                <td><p className="fs-5"><strong className="pe-2">Time:</strong> {currentDate.time}</p></td>
              </tr>
              <tr>
                <td colSpan={2}><p className="fs-5 text-break"><strong className="pe-2">Symtoms:</strong> {currentDate.symptoms}</p></td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfoModal}>
            Back
          </Button>
          <Button variant="warning" onClick={goToUpdateScreen}>
            Update Date
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TableInfo