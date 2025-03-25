"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border w-full">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-8">

        {/* 🔹 Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full">

          {/* ℹ️ About Section */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">📚 BookSummaries</h2>
            <p className="mt-2 text-muted-foreground">
              Discover the essence of books in minutes. Get concise summaries, insights, and key takeaways from your favorite reads.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div className="flex flex-col space-y-2 mt-6 md:mt-0">
            <Link href="/about" className="hover:underline text-muted-foreground">About Us</Link>
            <Link href="/privacy-policy" className="hover:underline text-muted-foreground">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:underline text-muted-foreground">Sitemap</Link>
          </div>

          {/* 🔗 Social Links */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-accent-hover transition">
              <FaFacebookF className="text-xl text-primary hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-accent-hover transition">
              <FaTwitter className="text-xl text-primary hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-accent-hover transition">
              <FaInstagram className="text-xl text-primary hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-accent-hover transition">
              <FaLinkedinIn className="text-xl text-primary hover:scale-110 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-accent-hover transition">
              <FaGithub className="text-xl text-primary hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* 🔹 Copyright Section */}
        <div className="text-center text-sm text-muted-foreground mt-6 border-t border-border pt-4 w-full">
          © {new Date().getFullYear()} BookSummaries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
