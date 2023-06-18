import React from 'react'
import Logo from '../assets/SN-logo.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-opacity-10 text-gray-600'>
        <div>
            <img src={Logo} alt="SN Logo" style={{width: '150px'}}/>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>My Programming Work</li>
                <li>My Art & Design Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar