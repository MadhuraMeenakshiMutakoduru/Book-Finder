import React from "react";
import "./BookCard.css";


function BookCard({ book, onSelect }) {
  return (
    <div className="book-card" onClick={() => onSelect(book)}>
      {/* Book cover */}
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          loading="lazy"   // ✅ lazy load images for performance
        />
      ) : (
        <img
          src="https://placehold.co/150x200?text=No+Cover"
          alt="No cover available"
          loading="lazy"
        />
      )}

      {/* Book title + author */}
      <div>
        <h3>{book.title}</h3>
        <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
      </div>
    </div>
  );
}

// ✅ memoized BookCard: only re-renders if props change
export default React.memo(BookCard);
