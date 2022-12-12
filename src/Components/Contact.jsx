import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { FaGithubSquare } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { TbPhoneCall } from 'react-icons/tb'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('saikh-mirsat', 'template_bfddh7r', form.current, '75y0iLRdVXUT5F4oX')
            .then((result) => {
                console.log(result.text);
                toast.success("Your message has been delivered")
            }, (error) => {
                console.log(error.text);
                toast.error("Error")
            });

    };



    return (
        <div className='contact-container'>
            <div className='input-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className='meg-me' >Messege me</h2>
                    <input type="text" name="user_name" placeholder='Name' /><br />
                    <input type="email" name="user_email" placeholder='Email' /><br />
                    <textarea name="message" placeholder='Message' /><br />
                    <input id='submitBTN' type="submit" value="Send message" />
                </form>
                <ToastContainer />
            </div>
            <div className='contact-con-child-2'>
                <div className='cont-con-child-2-con-1' >
                    <div className='resume-btn-div'>
                        <button className='resume-btn'><a style={{ textDecoration: 'none', color: 'white' }} href="https://drive.google.com/uc?export=download&id=1imBTexe0OSVvVlGaFq7dljd8kThFy8Ks">Download My Resume</a></button>
                    </div>

                    {/* <h1 className='contact-me-head'>Contact Me</h1> */}
                    <div className='con-address-container'>
                        <div className='con-logo-container'><MdOutlineMailOutline color='#039de3' />saikh.mirsat.786@gmail.com</div>
                        <div className='con-logo-container'><BsTelephoneOutbound color='#039de3' />7205190819</div>
                        <div className='con-logo-container'><AiOutlineHome color='#039de3' />Puri, 752107, Odisha</div>
                    </div>

                    <div style={{ display: 'flex', gap: "30px", marginTop: "30px", justifyContent: 'center' }}>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="https://www.linkedin.com/in/saikhmirsat/"><AiOutlineLinkedin className='linkedin' size="50px" color='#039de3' /></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="https://github.com/saikhmirsat"><FaGithubSquare className='linkedin' size="50px" color='#039de3' /></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="mailto:saikh.mirsat.786@gmail.com" ><GoMail className='linkedin' size="50px" color='#039de3' /></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="tel:7205190819" ><TbPhoneCall className='linkedin' size="50px" color='#039de3' /></a></motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}
