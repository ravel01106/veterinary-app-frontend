import React from "react";
import { IDates } from "./IDates";

export interface IDateFormProps {
  buttonText: string,
  date: IDates,
  setDate: React.Dispatch<React.SetStateAction<IDates>>
  handleSubmit: () => void
}