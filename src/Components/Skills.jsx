import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'

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
                    <img src="https://cdn.iconscout.com/icon/free/png-256/html5-42-1175210.png" alt="html5" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/css3-2038878-1720091.png" alt="css3" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-3628858-3029998.png" alt="JavaScrpit" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="mongoDb" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png" alt="express" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="react" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png" alt="nodejs" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/redux-3521674-2945118.png" alt="redux" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-3629120-3030260.png" alt="typescript" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67" alt="chakra" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="next.js" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.9, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}>
                    <img src="https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png" alt="storybook" />
                </motion.div>

            </div>
        </div>
    )
}
