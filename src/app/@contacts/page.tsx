import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <div className="flex gap-8 mb-6">
        <a href="https://www.linkedin.com/in/suzanmansuri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-blue-400 hover:text-blue-600 transition text-5xl drop-shadow" />
        </a>
        <a href="https://github.com/lilblackboot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-gray-200 hover:text-white transition text-5xl drop-shadow" />
        </a>
        <a href="https://x.com/lilblackboot" target="_blank" rel="noopener noreferrer" aria-label="X">
          <FaXTwitter className="text-white hover:text-gray-400 transition text-5xl drop-shadow" />
        </a>
        <a href="mailto:suzanmansuri0000@gmail.com" aria-label="Email">
          <MdEmail className="text-red-400 hover:text-red-600 transition text-5xl drop-shadow" />
        </a>
      </div>
      <p className="text-lg text-gray-300 bg-gray-800 px-4 py-2 rounded-lg shadow">
        suzanmansuri0000@gmail.com
      </p>
    </div>
  )
}

export default Contacts