import React from "react";
import "./SearchBar.css";

function SearchBar({ query, setQuery, onSearch, setError}) {
  // Handle form submit (works for both Enter key & button click)
  const handleSubmit = (e) => {
    e.preventDefault();   //  prevent page reload
   
    if (!query.trim()) {
      setError("Please enter a book title"); // tell App.js to show error
      return;
    }

    setError("");   // clear previous errors
    onSearch();     // trigger search
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      {/* Input box */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="search-input"
      />

      {/* Search button */}
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
