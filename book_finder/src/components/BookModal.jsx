import React from "react";
import "./BookModal.css";

function BookModal({ book, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Book cover */}
        {book.cover_i && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={book.title}
            className="modal-cover"
          />
        )}

        {/* Book details */}
        <h2>{book.title}</h2>
        <p>
          <strong>Author:</strong>{" "}
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p>
          <strong>First Published:</strong>{" "}
          {book.first_publish_year || "N/A"}
        </p>

        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BookModal;
