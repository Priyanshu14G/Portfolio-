import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import React from 'react'
const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex shrink-0 items-center px-8'>
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGit/>
        <FaInstagram/>
        <FaSquareXTwitter/>
    </div>
  </nav>
}

export default Navbar
