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
import Resume from '../Images/fw19_0481-Saikh-Mirsat.pdf'

export default function Navbar({ homeHandle, aboutHandle, skillsHandle, projectHandle, contactHandle }) {
    const [isMobile, setIsMobile] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const { themeHandle, theme } = useContext(ThemeContext)
    console.log(theme)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    // const handelClick = () => {
    //     window.open("https://drive.google.com/file/d/1HxjdMB0DAuU5IfDJJvbWpfoq5d_0oTfp/view?usp=sharing", "_blank")
    // }

    const handelDownload = () => {
        window.open("https://drive.google.com/file/d/1HxjdMB0DAuU5IfDJJvbWpfoq5d_0oTfp/view?usp=sharing", "_blank")
    }

    return (
        <div className={navbar ? "navbar active" : "navbar"} >
            {/* <h1 className='logo'>Logo</h1> */}

            <ul id='nav-li' className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setIsMobile(false)}>
                <li
                    onClick={homeHandle}><h4>Home</h4></li>
                <li
                    onClick={aboutHandle}><h4>About Me</h4></li>
                <li
                    onClick={skillsHandle}><h4>Skills</h4></li>
                <li
                    onClick={projectHandle}><h4>Projects</h4>
                </li>
                <li onClick={contactHandle}><h4 >Contact</h4></li>
                <li className='nav-resume-btn-con'><a
                    id={theme && "dark"}
                    href={Resume}
                    target="_blank"
                    download={"fw19_0481-Saikh-Mirsat"}
                    _hover={{ TextDecoder: "none" }}
                ><h4
                    download={Resume}
                    onClick={() => handelDownload()}
                >Resume</h4></a></li>


                <li className='themeBtn' onClick={themeHandle}>{theme ? <MdLightMode style={{ color: 'black' }} /> : <MdOutlineLightMode style={{ color: 'yellow' }} />}</li>
            </ul>
            <li className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <FaRegWindowClose className='hamburger' /> : <GiHamburgerMenu className='hamburger' />}
            </li>

        </div>
    )
}