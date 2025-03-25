import React from "react";
import { Metadata } from "next";
import Detail from "./Detail";

type Book = {
  title: string;
  author: string;
  genre: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  slug: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch book data
async function getBook(slug: string): Promise<Book | null> {
  try {
    const res = await fetch(`${API_URL}/api/books/${slug}`, {
      next: { revalidate: 60 }, // ✅ ISR for better SEO
    });

    if (!res.ok) throw new Error("Failed to fetch book");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// ✅ **Generate dynamic metadata for SEO**
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const book = await getBook(params.slug);
  
  if (!book) {
    return {
      title: "Book Not Found | Book Summary",
      description: "The requested book summary was not found.",
    };
  }

  return {
    title: book.seoTitle || `${book.title} - Summary & Review`,
    description: book.seoDescription || book.summary.substring(0, 160),
    keywords: `${book.title}, ${book.author}, ${book.genre}, book summary, book review, literature`,
    openGraph: {
      title: book.seoTitle || book.title,
      description: book.seoDescription || book.summary.substring(0, 160),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/books/${book.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: book.seoTitle || book.title,
      description: book.seoDescription || book.summary.substring(0, 160),
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Book",
        "name": book.title,
        "author": { "@type": "Person", "name": book.author },
        "genre": book.genre,
        "description": book.seoDescription || book.summary.substring(0, 160),
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/books/${book.slug}`,
      }),
    },
  };
}

// ✅ **Book Page Component**
export default async function BookPage({ params }: { params: { slug: string } }) {
  const book = await getBook(params.slug);

  if (!book) return <div className="text-center text-red-500">Book not found</div>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-4"><strong>Genre:</strong> {book.genre}</p>

      {/* ✅ Use the Client Component to fix hydration error */}
      <Detail summary={book.summary} />
    </main>
  );
}
