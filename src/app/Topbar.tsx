"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import {
  FaBook,
  FaBrain,
  FaBusinessTime,
  FaHeart,
  FaHistory,
  FaLaptopCode,
  FaLightbulb,
  FaMicroscope,
  FaMoneyBill,
  FaStar,
} from "react-icons/fa";

const categories = [
  { name: "Fiction", icon: <FaBook color="#FF5733" />, link: "/fiction" },
  { name: "Self-Help", icon: <FaBrain color="#FFC300" />, link: "/self-help" },
  { name: "Business", icon: <FaBusinessTime color="#28A745" />, link: "/business" },
  { name: "Romance", icon: <FaHeart color="#DC3545" />, link: "/romance" },
  { name: "History", icon: <FaHistory color="#6C757D" />, link: "/history" },
  { name: "Technology", icon: <FaLaptopCode color="#007BFF" />, link: "/technology" },
  { name: "Psychology", icon: <FaLightbulb color="#FFC107" />, link: "/psychology" },
  { name: "Science", icon: <FaMicroscope color="#17A2B8" />, link: "/science" },
  { name: "Finance", icon: <FaMoneyBill color="#28A745" />, link: "/finance" },
  { name: "Spirituality", icon: <FaStar color="#8E44AD" />, link: "/spirituality" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="bg-background text-foreground shadow-md z-50 w-full">
      {/* 🔹 First Section (Logo, Menu, Search, Theme Toggle) */}
      <div className="flex justify-between items-center p-4">
        {/* 🏠 Home Link */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-primary transition">
          📚 BookSummaries
        </Link>

        {/* 🔍 Search Bar (Hidden on small screens) */}
        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 w-64 bg-muted border border-border rounded-md focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* 🌙 Theme Toggle with Icon */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl focus:outline-none">
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-500" />}
          </button>

          {/* 📌 Mobile Menu Toggle Button */}
          <button className="sm:hidden text-xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔸 Search Bar (Visible Only in Mobile) */}
      <div className={`sm:hidden px-4 ${isOpen ? "block" : "hidden"}`}>
        <input
          type="text"
          placeholder="Search books..."
          className="px-4 py-2 w-full bg-muted border border-border rounded-md focus:ring-2 focus:ring-primary transition"
        />
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      <motion.div
        className={`sm:hidden flex flex-col gap-2 p-4 ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="flex items-center gap-2 text-lg font-medium px-4 py-2 rounded-md hover:bg-accent-hover transition"
          >
            {category.icon}
            {category.name}
          </Link>
        ))}
      </motion.div>

      {/* 🔹 Desktop Categories */}
      <motion.div
        className="hidden sm:flex justify-center gap-3 p-3 overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="flex items-center gap-2 text-lg font-medium px-4 py-2 rounded-md transition hover:bg-accent-hover"
          >
            {/* 🎨 Colored Icon */}
            <motion.span className="text-xl" whileHover={{ rotate: 10 }}>
              {category.icon}
            </motion.span>
            {category.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
