import React, { Suspense } from "react";
import Image from "next/image";

type Book = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  summary: string;
  slug: string;
  coverImage?: string | null; // Added book cover image
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getBooks(): Promise<Book[] | null> {
  try {
    const res = await fetch(`${API_URL}/api/books`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 📌 BookCard component with lazy-loaded image
const BookCard = ({ book }: { book: Book }) => {
  return (
    <a
      key={book._id}
      href={`/${book.genre}/${book.slug}`}
      className="flex flex-col p-4 rounded-lg shadow-md hover:shadow-lg transition bg-custom-gradient text-white"
      // style={{
      //   backgroundImage: "linear-gradient(to left, #ffdbb2, #ffe1b9, #fee7c1, #feedc9, #fff3d2);",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
   >
      {/* 📌 Book Cover Image */}
      <div className="relative w-full h-40 mb-3">
        {book.coverImage ? (
          <Image
            src={book.coverImage}
            alt={book.title}
            layout="fill"
            className="rounded object-cover"
            priority={false}
          />
        ) : (
          <div className="h-40 bg-gray-300 animate-pulse rounded"></div>
        )}
      </div>

      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-200">by {book.author}</p>
      <p className="text-sm text-gray-100 mt-2">{book.summary.slice(0, 100)}...</p>
    </a>
  );
};

async function Dashboard() {
  const books = await getBooks();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Book Summaries</h1>

      {books ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-red-500">Failed to load books. Please try again later.</p>
      )}
    </main>
  );
}

export default Dashboard;
