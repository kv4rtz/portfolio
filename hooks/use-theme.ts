import { useLayoutEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState<string>('dark')

    useLayoutEffect(() => {
        // @ts-ignore
        setTheme(localStorage.getItem('theme'))
        if (theme === 'light') {
            document.body.classList.add('light')
            document.body.setAttribute('data-theme', 'light')
        } else {
            document.body.classList.remove('light')
            document.body.setAttribute('data-theme', 'dark')
        }
    }, [theme])

    const handleClick = () => {
        if (theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        } else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    return { theme, handleClick }
}