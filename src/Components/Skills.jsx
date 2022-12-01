import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'
import html from "../Images/html.png"
import css from '../Images/css.png'
import javascript from '../Images/javascript.png'
import mongodb from '../Images/mongodb.png'
import express from '../Images/express.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import node from '../Images/node.png'
import typescript from '../Images/typescript.png'
import chakra from '../Images/chakra.png'
import storybook from '../Images/storybook.png'



export default function Skills() {
    return (
        <div className='skills-main-container'>
            <div>
                <h1 className='myskills-header'>My Skills</h1>
            </div>
            <div className='skills-container'>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={html} alt="html5" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={css} alt="css3" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={javascript} alt="JavaScrpit" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={mongodb} alt="mongoDb" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={express} alt="express" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={react} alt="react" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={redux} alt="nodejs" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={typescript} alt="redux" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={node} alt="typescript" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={chakra} alt="chakra" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={express} alt="next.js" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src={storybook} alt="storybook" />
                </motion.div>

            </div>
        </div>
    )
}
