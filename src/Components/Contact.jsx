import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
            <div className='input-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 style={{ position: 'relative', bottom: '17px' }}>Messege me</h2>
                    {/* <label>Name</label> */}
                    <input type="text" name="user_name" placeholder='Name' /><br />
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder='Email' /><br />
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder='Message' /><br />
                    <input id='submitBTN' type="submit" value="Send message" />
                </form>
                <ToastContainer />
            </div>
            <div style={{ padding: '50px' }}>
                {/* <div style={{ border: "1px solid red" }} >
                    <h1 style={{ textDecoration: 'underline', textUnderlineOffset: '12px' }}>Contact Me</h1>
                    <a href="/Users/saikhmirsat/Desktop/Portfolio/my-portfolio/src/Components/Resume/Saikh_Mirsat_Resume_.pdf" download>Resume</a>
                </div> */}
            </div>
        </div>
    )
}
