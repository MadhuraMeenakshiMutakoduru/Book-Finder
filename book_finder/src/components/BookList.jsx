import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

function BookList({ results, onSelectBook }) {
  return (
    <div className="results-container">
      {/* Map through all results */}
      {results.map((book, index) => (
        <BookCard key={index} book={book} onSelect={onSelectBook} />
      ))}
    </div>
  );
}

export default BookList;
