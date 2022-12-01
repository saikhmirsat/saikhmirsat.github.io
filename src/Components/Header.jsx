import React from 'react'
import './Header.css'
import { useState } from 'react';
import Typewriter from 'typewriter-effect';


export default function Header() {
    const [state] = useState({
        title: "Hi,",
        title2: "I'm",
        title3: "Saikh Mirsat"
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
                            strings: ['I love Problem Solving',
                                'I love Coding',
                                'I love Debugging'
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
