import React from 'react'
import "./Project.css"
import chargebee from '../Images/chargebee.jpg'
import react from '../Images/react.png'
import html from '../Images/html.png'
import javascript from '../Images/javascript.png'
import css from '../Images/css.png'
import lovoda from '../Images/lovoda.jpg'
import kindmeal from '../Images/kindmeal.jpg'

export default function Project() {
    return (
        <div className='project-main'>
            <h1>My Projects</h1>
            <div className='project-container'>
                <div className='project-img-div'>
                    <img src={chargebee} alt="chargebee" />
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
                            <button><a href="https://dashing-brioche-304dd0.netlify.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <img src={kindmeal} alt="kindmeal" />
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
                            <button><a href="https://jazzy-tarsier-7b0784.netlify.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <img src={lovoda} alt="chargebee" />
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
                            <button><a href="https://lovoda-clone-far-powder-2496.netlify.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
