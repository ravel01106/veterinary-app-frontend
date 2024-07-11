import { IDates } from "./IDates"

export interface IModalInfoProps {
  showInfoModal: boolean,
  handleCloseInfoModal: () => void
  goToUpdateScreen: (id:string) => void
  currentDate: IDates
}