import { useTheme } from "@/hooks/use-theme"
import styles from '@/styles/NavBar.module.scss'
import { IoMdMoon, IoMdSunny } from "react-icons/io"

const NavBarTheme = () => {
    const { theme, handleClick } = useTheme()

    return (
        <button className={`${styles['header-switcher']} ${theme === 'light' ? styles['on'] : ''}`}
                onClick={handleClick}>
            {theme === 'dark' && <div className={styles['header-icon']}><IoMdMoon/></div>}
            {theme === 'light' &&
                <div className={`${styles['header-icon']} ${styles['header-icon-active']}`}><IoMdSunny/></div>}
        </button>
    )
}

export default NavBarTheme