import React from "react";
import "./App.css";
import logo from "./logo.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="start-bg flex flex-col justify-center items-center h-screen">
      {/* Responsive Logo */}
      <img
        src={logo}
        alt="Logo"
        className="fixed top-10 w-20 left-5 sm:left-10 sm:p-2 sm:w-30 sm:h-30 md:left-20 md:w-45 md:h-35 "
      />

      {/* Content */}
      <div className="text-white text-center">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold">
          Plata Forge
        </h1>
        <br />
        <br />
        <p className="text-lg sm:text-base md:text-xl">
          A DEX built for Market Makers
        </p>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-4 text-white text-sm flex items-center justify-center mb-8">
        <h3 className="text-base sm:text-base md:text-base mr-9">
          © 2024 PlataForge. All Rights Reserved.
        </h3>
        <a
          href="https://twitter.com/plataforge"
          className="hover:underline mx-2"
        >
          <FaXTwitter className="inline-block mr-2 text-2xl" />
        </a>
        <a
          href="https://www.github.com/plataforge"
          className="hover:underline mx-2"
        >
          <FaGithub className="inline-block mr-2  text-2xl" />
        </a>
      </footer>
    </div>
  );
}

export default App;
