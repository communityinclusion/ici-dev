/* src/components/search-form.js */
import React, {useState, useRef } from "react"
//import { navigate } from "@reach/router"
import { navigate } from "gatsby"
const SearchForm = ({ initialQuery = "" }) => {
  // Create a piece of state, and initialize it to initialQuery
  // query will hold the current value of the state,
  // and setQuery will let us change it
  const [query, setQuery] = useState(initialQuery)
  const inputEl = useRef(null)
  // On input change use the current value of the input field (e.target.value)
  // to update the state's query value
  const handleChange = e => {
    setQuery(e.target.value)
  }

  // When the form is submitted navigate to /search
  // with a query q paramenter equal to the state's query value
  const handleSubmit = e => {
    e.preventDefault()
    const q = inputEl.current.value
    navigate(`/search?q=${q}`)
  }
  return (
    <div className="k--group ml3">
    <form role="search" className="inline-flex" onSubmit={handleSubmit}>
      <label htmlFor="search-input" style={{ display: "block" }}>
      </label>
      <input
        ref={inputEl}
        className="k--input"
        id="search-input"
        type="search"
        value={query}
        placeholder="search"
        onChange={handleChange}
      />
      <button className="k--button" type="submit">Search</button>
    </form>
    </div>
  )
}
export default SearchForm