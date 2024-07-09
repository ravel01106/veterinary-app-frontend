import { FaSearch } from "react-icons/fa";
import { ISearchInputProps } from "../../interfaces/ISearchInputProps";
import React from "react";

const SearchInput = ({searchDate}:ISearchInputProps) => {
    const [input, setInput] = React.useState("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        searchDate(e.target.value)
    }


    return (
        <div className="d-flex flex-row justify-content-center">
            <FaSearch size={36} color="white" />
            <input type="text" className="form-control w-75 ms-3" value={input} onChange={handleInputChange}/>
        </div>
    )
}

export default SearchInput