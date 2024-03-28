"use client";
import React, { useState } from "react";
import Link from 'next/link';
export default function Navbar() {

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 bg-transparent backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-2"> 
          <Link href="/">
            <div className="flex items-center">
              <img src="./1.jpg" className="h-8 mr-4" alt="Logo" />
            </div>
          </Link>
          <ul className="flex gap-x-6">
            <li>
              <Link href="/">
                <span className="text-gray-800 hover:text-blue-500 px-4 py-2 block font-semibold">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className="text-gray-800 hover:text-blue-500 px-4 py-2 block font-semibold">My Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-800 hover:text-blue-500 px-4 py-2 block font-semibold">Contact Me</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
