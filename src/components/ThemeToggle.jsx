import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'
import { cn } from '../lib/utils'

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {


        const storedTheme = localStorage.getItem('theme');
        if (storedTheme=== 'light') {
            setIsDarkMode(false)
            localStorage.setItem('theme', 'light')
            

        }
        else{
            setIsDarkMode(true);
            document.documentElement.classList.add('dark')
        }
       
       // localStorage.getItem('theme') === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false) shotrcut method

    }, [])
    

    const toggleTheme = () => {

        if(isDarkMode){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light') // Save the theme preference
            setIsDarkMode(false)
        }
        else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark') // Save the theme preference
            setIsDarkMode(true)


        }
        

    }

  return (
    <button onClick={toggleTheme} 
    className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}
     > {isDarkMode ? (
        <Sun className='h-6 w-6 text-yellow-300'/> ) : (
        <Moon className='h-6 w-6 text-blue-900'/>
    )} </button>
  )
}

export default ThemeToggle
