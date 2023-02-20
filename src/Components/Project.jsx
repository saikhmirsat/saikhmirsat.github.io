import React from 'react'
import "./Project.css"
import chargebee from '../Images/chargebee.jpg'
import chargebee2 from '../Images/chargebee2.jpg'
import chargebee3 from '../Images/chargebee3.jpg'
import chargebee4 from '../Images/chargebee4.jpg'
import chargebee5 from '../Images/chargebee5.jpg'
import react from '../Images/react.png'
import html from '../Images/html.png'
import javascript from '../Images/javascript.png'
import css from '../Images/css.png'
import lovoda from '../Images/lovoda.jpg'
import lovoda2 from '../Images/lovoda2.jpg'
import lovoda3 from '../Images/lovoda3.jpg'
import lovoda4 from '../Images/lovoda4.jpg'
import kindmeal from '../Images/kindmeal.jpg'
import kindmeal2 from '../Images/kindmeal2.jpg'
import kindmeal3 from '../Images/kindmeal3.jpg'
import kindmeal4 from '../Images/kindmeal4.jpg'
import kindmeal5 from '../Images/kindmeal5.jpg'
import finishline1 from '../Images/finishline1.jpg'
import finishline2 from '../Images/finishline2.jpg'
import finishline3 from '../Images/finishline3.jpg'
import finishline4 from '../Images/finishline4.jpg'
import finishline5 from '../Images/finishline5.jpg'

import GithubCalender from './GithubCalender';
import { motion } from 'framer-motion'

export default function Project() {
    return (
        <div className='project-main'>
            <h1>My Projects</h1>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={chargebee} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={chargebee2} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={chargebee3} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={chargebee4} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={chargebee5} alt="chargebee" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Chargebee.com</h1>
                        <p>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
                        <div className='project-logo-con'>
                            <img src={react} alt="react" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/saikhmirsat/chargebee.com/tree/master/synonymous-wall" target="_blank">Github Code</a></button>
                            <button><a href="https://chargebee-com-clone.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={finishline1} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline2} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline3} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline4} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline5} alt="chargebee" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Finishline.com</h1>
                        <p>About We exist at the intersection of ideas — Where performance meets style. Where classic meets technology. Where street meets fashion.</p>
                        <div className='project-logo-con'>
                            <img src={react} alt="react" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                            <img src='https://www.cyclic.sh/images/cyclic-logo.png' alt="cyclic" />
                            <img src="https://skillshack.blob.core.windows.net/uploads/express.webp" alt="" />
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/saikhmirsat/Finishline.com_Clone/tree/main/frontend" target="_blank">Github Code</a></button>
                            <button><a href="https://finishline-com-clone-2zmp.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={kindmeal} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal2} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal3} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal4} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal5} alt="kindmeal" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Kindmeal.com</h1>
                        <p>KindMeal is Malaysia's pioneering meat-free lifestyle platform.</p>
                        <div className='project-logo-con'>
                            <img src={html} alt="html" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/VIC-PAUL/racial-class-2069" target="_blank">Github Code</a></button>
                            <button><a href="https://kindmeal-com-clone.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={lovoda} alt="lovoda" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={lovoda2} alt="lovoda" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={lovoda3} alt="lovoda" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={lovoda4} alt="lovoda" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Lovoda.com</h1>
                        <p>This website is an eCommerce website that sells women's trending jewellery.</p>
                        <div className='project-logo-con'>
                            <img src={html} alt="html" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/saikhmirsat/Lovoda.com" target="_blank">Github Code</a></button>
                            <button><a href="https://lovoda-com-clone.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <h1 className='git-Cal-Head'>GitHub Calendar </h1>
                <GithubCalender />
                <h1 className='git-Cal-Head'>My Statistics</h1>
                <div className='state-con'>
                    <motion.img whileHover={{ scale: 1.1 }}
                        src="https://streak-stats.demolab.com/?user=saikhmirsat&theme=buefy" alt="" />
                    <motion.img whileHover={{ scale: 1.1 }} src="https://github-readme-stats.vercel.app/api?username=saikhmirsat&show_icons=true&theme=algolia&count_private=true" alt="" />
                </div>
            </div>
        </div>
    )
}
