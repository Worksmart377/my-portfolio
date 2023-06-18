import React from 'react'
import Logo from '../assets/SN-logo.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg" data-bs-theme="dark" style={{height: '150px'}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={Logo} alt="SN Logo" style={{width: '150px'}} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <a class="nav-link active" href="#">Home
                    <span class="visually-hidden">(current)</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">My Programming Work</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">My Art & Design Work</a>
                </div>
                </li>
                </ul>
        </div>
    </div>
</nav>
    </div>
    )
}

export default Navbar