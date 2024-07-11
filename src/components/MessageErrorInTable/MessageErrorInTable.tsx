import { IMessageErrorInTableProps } from "../../interfaces/IMessageErrorInTableProps"

const MessageErrorInTable = ({title}:IMessageErrorInTableProps) => {
  return (
    <div className="card bg-danger">
      <h3 className="card-title text-white">{title}</h3>
    </div>
  )
}

export default MessageErrorInTable