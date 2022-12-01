import React from 'react'
import Header from './Header.jsx'
import './Landing.css'

export default function Landing() {
    return (
        <div className='Landing' >
            <div className='Landing-container' >

                <div className='Landing-con-child-1'>
                    <Header />
                </div>
                <div className='Landing-con-child-2'>
                    <div className='animation-container'>
                        <div className='ring'></div>
                        <div className='ring'></div>
                        <div className='ring'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
