import React, { useState , useEffect } from "react";
import "./App.css";

// Importing components
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import NavBar from "./components/NavBar";

function App() {
  // State variables
  const [query, setQuery] = useState(""); // search text
  const [results, setResults] = useState([]); // API results
  const [error, setError] = useState(""); // error messages
  const [selectedBook, setSelectedBook] = useState(null); // modal selection
  




  // Function to fetch books from OpenLibrary API
  const searchBooks = async () => {
    if (!query) {
      setError("Please enter a book title");
      setResults([]);
      return;
    }
     

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();

      if (data.docs.length === 0) {
        setError("No books found");
        setResults([]);
      } else {
        setResults(data.docs);
        setError("");
      }
    } catch (err) {
      setError("Network error. Try again!");
      setResults([]);
    }
  };

  return (
    
    <div>
      <NavBar/>
      <div className="App">
      <h1>📚 SEARCH THE BOOK YOU WANT!</h1>

      {/* Search input + button */}
      <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} setError={setError} />

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* List of books */}
      <BookList results={results} onSelectBook={setSelectedBook} />

      {/* Book details modal */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
    </div>
  );
}

export default App;
