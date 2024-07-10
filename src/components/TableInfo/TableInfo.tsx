import { FaEye, FaTrashAlt } from "react-icons/fa"
import style from "./TableInfo.module.css"
import { ITableInfoProps } from "../../interfaces/ITableInfoProps"
import dates from "../../data/dates"
import React from "react"
import { Modal, Button } from "react-bootstrap"

const TableInfo = ({ currentDates }: ITableInfoProps) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                      <button type="button" className={`btn btn-primary text-light ${style.iconInfo} me-3`}><FaEye size={24} /></button>
                      <button type="button" className={`btn btn-danger text-light}  ${style.iconDelete}`} onClick={handleShow}><FaTrashAlt size={24} /></button>
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
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TableInfo