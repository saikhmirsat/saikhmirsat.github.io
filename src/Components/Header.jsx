import React from 'react'
import './Header.css'
import { useState } from 'react';
import Typewriter from 'typewriter-effect';


export default function Header() {
    const [state] = useState({
        title: "Hi,",
        title2: "I'm",
        title3: "Code&Coding"
    })
    return (
        <div className='Header'>
            <div className='Header-intro'>
                <h2>
                    <div className='title'>{state.title}</div>
                    <div className='title2'>{state.title2}</div>
                    <div className='title3'>{state.title3}</div>
                </h2>
                <div className='text'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: ['I am Saikh Mirsat',
                                'I love Coding',
                                'I love Problem Solving'
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
