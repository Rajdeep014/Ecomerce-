import React from 'react'
import { useState } from 'react'


const SearchBar = () => {
    const [query, setQuery] = useState('')
    const handleSearch=()=>{
        event.preventDefault();
      OnSearch(query)
        

    }
    return (
        <form onSubmit={handleSearch} className="flex items-center bg-white shadow-md p-2 rounded-lg mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>
  
  )
}

export default SearchBar