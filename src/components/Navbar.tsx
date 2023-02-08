import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/todo" className="font-bold text-white text-xl">
          TodoList
        </a>
        <div>
          <a href="/" className="text-white hover:text-gray-400 mr-4">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-400 mr-4">
            About
          </a>
          <a href="Contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
