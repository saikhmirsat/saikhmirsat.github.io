import React from 'react'
import Navbar from './Navbar/Navbar'
import { useRef } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import './Home.css'
import Landing from './Components/Landing'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Skills from './Components/Skills'


export default function Home() {
    const refHome = useRef(null)
    const refAbout = useRef(null)
    const refSkills = useRef(null)
    const refProjects = useRef(null)
    // const refResume = useRef(null)
    const refContact = useRef(null)

    const homeHandle = () => {
        refHome.current.scrollIntoView({ behavior: "smooth" })
    }
    const aboutHandle = () => {
        refAbout.current.scrollIntoView({ behavior: "smooth" })
    }
    const skillsHandle = () => {
        refSkills.current.scrollIntoView({ behavior: "smooth" })
    }
    const projectHandle = () => {
        refProjects.current.scrollIntoView({ behavior: "smooth" })
    }
    // const resumeHandle = () => {
    //     refResume.current.scrollIntoView({ behavior: "smooth" })
    // }
    const contactHandle = () => {
        refContact.current.scrollIntoView({ behavior: "smooth" })
    }

    const { theme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className='Home' id={!theme && "dark"}>

            <Navbar homeHandle={homeHandle} aboutHandle={aboutHandle} skillsHandle={skillsHandle} projectHandle={projectHandle} contactHandle={contactHandle} />
            {/* <div style={{ height: "75px", position: "sticky" }}></div> */}
            <div ref={refHome} ><Landing /></div>
            <div ref={refAbout} style={{ paddingTop: '80px' }} ><AboutMe /></div>
            <div ref={refSkills} ><Skills /></div>
            {/* <div ref={refProjects} style={{ height: "100vh", border: '3px solid yellow' }}>Projects</div> */}
            <div ref={refContact} ><Contact /></div>
            <div style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid grey' }}>
                <p>Designed & Built by Saikh Mirsat  © 2022 All rights reserved.</p>
            </div>
        </div>
    )
}
