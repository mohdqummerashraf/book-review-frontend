"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border mt-10 w-full">
      <div className="container mx-auto px-6 py-8">
        
        {/* 🔹 About & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* ℹ️ About Section */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">📚 BookSummaries</h2>
            <p className="mt-2 text-muted-foreground">
              Discover the essence of books in minutes. Get concise summaries, insights, and key takeaways from your favorite reads.
            </p>
          </div>

          {/* 🔗 Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
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
        <div className="text-center text-sm text-muted-foreground mt-6 border-t border-border pt-4">
          © {new Date().getFullYear()} BookSummaries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
