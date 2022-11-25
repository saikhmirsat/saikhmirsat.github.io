import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(false)

    const themeHandle = () => {
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, themeHandle }}>
            {children}
        </ThemeContext.Provider>
    )
}
