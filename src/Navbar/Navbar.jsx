import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';
// import { Divide as Hamburger } from 'hamburger-react'

import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
// import { motion } from 'framer-motion'

export default function Navbar({ homeHandle, aboutHandle, skillsHandle, projectHandle, contactHandle }) {
    const [isMobile, setIsMobile] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const { themeHandle, theme } = useContext(ThemeContext)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    return (
        <div className={navbar ? "navbar active" : "navbar"} >
            {/* <h1 className='logo'>Logo</h1> */}

            <ul id='nav-li' className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setIsMobile(false)}>
                <li
                    onClick={homeHandle}><h4>Home</h4></li>
                <li
                    className='about-me' onClick={aboutHandle}><h4 style={{ width: '90px' }}>About Me</h4></li>
                <li
                    onClick={skillsHandle}><h4>Skills</h4></li>
                <li
                    onClick={projectHandle}><h4>Projects</h4></li>
                {/* <li onClick={resumeHandle}><h4>Resume</h4></li> */}
                <li
                    className='contact-resume' onClick={contactHandle}><h4 style={{ width: '230px' }}>Contact and Resume</h4></li>

                <li
                    className='themeBtn' style={{ width: '70px' }} onClick={themeHandle}>{theme ? <MdLightMode style={{ color: 'black' }} /> : <MdOutlineLightMode style={{ color: 'yellow' }} />}</li>
            </ul>
            <li className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <FaRegWindowClose className='hamburger' /> : <GiHamburgerMenu className='hamburger' />}
            </li>

        </div>
    )
}
