import React, {useState, useContext} from 'react'
import {searchContext} from '../context/SearchContext'

function SearchBar(){
    const {term, handleSearch} = useContext(searchContext)

    return (
        <form>
            <input type='text' placeholder='Enter a search term here' ref={term}/>
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}

export default SearchBar