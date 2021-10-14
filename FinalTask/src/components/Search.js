import React, { useState } from 'react'

const SearchForm = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue)
    }

    return (
        <form className="row g-3" onSubmit={onSubmit}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search ..."
                    onChange={(event) => {
                        setSearchValue(event?.target?.value);
                    }} />
                <button class="btn btn-outline-secondary" type="submit">Search</button>
            </div>
        </form>
    )
}

export default SearchForm
