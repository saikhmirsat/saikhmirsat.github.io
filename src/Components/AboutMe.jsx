import React from 'react'
import './AboutMe.css'
import Typewriter from 'typewriter-effect';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { motion } from 'framer-motion'



export default function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='about-container'>
                <div id='about-cont-child-1'>
                    <div className='aboutme-des-div'>
                        <h1 >Hi....</h1>
                        <div className='animate-text-conataner'>
                            <h1>I'm Saikh Mirsat & I'm a &nbsp;</h1>
                            <div className='about-animate-text'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: ['Full Stack Developer',
                                            'Coder',
                                            'Problem Solver'
                                        ],
                                    }}
                                />
                            </div>
                        </div>

                        <h2 className='about-des'>A motivated, ambitious full stack web developer with MERN stack
                            expertise.I am Looking to launch a career as a web developer
                        </h2>
                        <div style={{ display: 'flex', gap: "30px", marginTop: "30px", justifyContent: 'center' }}>
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                            ><a href="https://www.linkedin.com/in/saikhmirsat/"><AiOutlineLinkedin className='linkedin' size="50px" color='#02db88' /></a></motion.div>
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                            ><a href="https://github.com/saikhmirsat"><FaGithubSquare className='linkedin' size="50px" color='#02db88' /></a></motion.div>
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                            ><a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><GoMail className='linkedin' size="50px" color='#02db88' /></a></motion.div>
                        </div>
                    </div>
                </div>
                <div id='about-cont-child-2'>
                    <div className='myImage-div'>
                        <img src="https://i.ibb.co/k9679n4/saikhmirsat-blzr-image-png.png" alt="saikhmirsat-blzr-image-png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
