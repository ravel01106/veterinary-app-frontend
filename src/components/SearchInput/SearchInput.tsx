import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <div className="d-flex flex-row justify-content-center">
            <FaSearch size={36} color="white" />
            <input type="text" className="form-control w-75 ms-3" />
        </div>
    )
}

export default SearchInput