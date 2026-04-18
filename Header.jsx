import React, { useState } from 'react'

export default function Header() { 
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className='header-container'>
                <img className='logo' src="https://itstep.ge/static/images/logo.png" alt="logo" />

                <nav className='links'>
                    <ul className={isOpen ? 'active' : ''}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button className='sign-up'>Sign up</button>

                    <div className='burger' onClick={toggleMenu}>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                </nav>
            </div>

            <nav className={`nav-bar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className='sign-up-bar'>Sign up</button>
            </nav>
        </header>
    )
}