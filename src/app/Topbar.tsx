"use client";
import { motion } from "framer-motion";
import Themetoggle from "./Themetoggle";
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
  { name: "Fiction", icon: <FaBook color="#FF5733" />, link: "/category/fiction" }, // Red-Orange
  { name: "Self-Help", icon: <FaBrain color="#FFC300" />, link: "/category/self-help" }, // Yellow
  { name: "Business", icon: <FaBusinessTime color="#28A745" />, link: "/category/business" }, // Green
  { name: "Romance", icon: <FaHeart color="#DC3545" />, link: "/category/romance" }, // Red
  { name: "History", icon: <FaHistory color="#6C757D" />, link: "/category/history" }, // Gray
  { name: "Technology", icon: <FaLaptopCode color="#007BFF" />, link: "/category/technology" }, // Blue
  { name: "Psychology", icon: <FaLightbulb color="#FFC107" />, link: "/category/psychology" }, // Orange
  { name: "Science", icon: <FaMicroscope color="#17A2B8" />, link: "/category/science" }, // Cyan
  { name: "Finance", icon: <FaMoneyBill color="#28A745" />, link: "/category/finance" }, // Green
  { name: "Spirituality", icon: <FaStar color="#8E44AD" />, link: "/category/spirituality" }, // Purple
];

export default function Navbar() {
  return (
    <div className="bg-background text-foreground shadow-md sticky top-0 z-50 w-full">
      {/* 🔹 First Section (Title, Search, Theme Toggle) */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">📚 BookSummaries</h1>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search books..."
          className="px-4 py-2 w-64 bg-muted border border-border rounded-md focus:ring-2 focus:ring-primary transition"
        />

        {/* 🌙 Theme Toggle */}
        <Themetoggle />
      </div>

      {/* Horizontal Divider */}
      <hr className="border-t border-border" />

      {/* 🔹 Second Section (Categories with Animations) */}
      <motion.div
        className="flex justify-center gap-3 p-3 overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {categories.map((category, index) => (
          <motion.a
            key={index}
            href={category.link}
            className="flex items-center gap-2 text-lg font-medium px-4 py-2 rounded-md transition hover:bg-accent-hover"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            {/* 🎨 Colored Icon */}
            <motion.span
              className="text-xl"
              whileHover={{ rotate: 10 }}
            >
              {category.icon}
            </motion.span>
            {category.name}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
