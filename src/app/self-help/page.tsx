"use client";

import { useEffect, useState } from "react";

type Book = {
  title: string;
  author: string;
  slug: string;
};

export default function RelatedBooks({ genre }: { genre: string }) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchRelatedBooks() {
      try {
        const res = await fetch(`http://localhost:5000/api/books/genre/${genre}`);
        if (!res.ok) throw new Error("Failed to fetch related books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRelatedBooks();
  }, [genre]);

  return (
    <div>
      <h2>Related Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.slug}>
            <a href={`/book/${book.slug}`}>{book.title} by {book.author}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
