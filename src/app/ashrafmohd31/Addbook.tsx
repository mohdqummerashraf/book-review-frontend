"use client";

import { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

export default function AddBook() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const genres = [
    "fiction",
    "self-help",
    "science",
    "history",
    "romance",
    "technology",
    "business",
    "psychology",
    "finance",
    "spirituality",
  ];

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: genres[0],
    summary: "", // Will store Draft.js content as raw JSON
    seoTitle: "",
    seoDescription: "",
    slug: "",
    image: "", // Store Base64 image
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEditorChange(newState: EditorState) {
    setEditorState(newState);
    const rawContent = JSON.stringify(convertToRaw(newState.getCurrentContent())); // Convert to JSON for backend
    setFormData({ ...formData, summary: rawContent });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFormData({ ...formData, image: base64 });
        setImagePreview(base64);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add book");

      setMessage("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        genre: genres[0],
        summary: "",
        seoTitle: "",
        seoDescription: "",
        slug: "",
        image: "",
      });
      setEditorState(EditorState.createEmpty());
      setImagePreview(null);
    } catch (error) {
      setMessage("Error adding book.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-5 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      {message && <p className="mb-2 text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="p-2 border" required />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="p-2 border" required />

        {/* Genre Dropdown */}
        <select name="genre" value={formData.genre} onChange={handleChange} className="p-2 border">
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Rich Text Editor for Summary */}
        <label className="font-bold">Summary:</label>
        <div className="p-2 border min-h-[150px]">
          <Editor editorState={editorState} onChange={handleEditorChange} />
        </div>

        {/* Image Upload */}
        <label className="font-bold">Book Cover Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="p-2 border" />

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-2">
            <img src={imagePreview} alt="Book Cover Preview" className="w-32 h-32 object-cover border rounded" />
          </div>
        )}

        <input name="seoTitle" value={formData.seoTitle} onChange={handleChange} placeholder="SEO Title" className="p-2 border" required />
        <input name="seoDescription" value={formData.seoDescription} onChange={handleChange} placeholder="SEO Description" className="p-2 border" required />
        <input name="slug" value={formData.slug} onChange={handleChange} placeholder="Slug (URL-friendly name)" className="p-2 border" required />

        <button type="submit" className="p-2 bg-blue-500 text-white" disabled={loading}>
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}
