import { ReactNode } from "react"
import styles from '@/styles/NavBar.module.scss'

interface NavBarLogoProps {
    children: ReactNode
}

const NavBarLogo = ({ children }: NavBarLogoProps) => {
    return (
        <div className={styles['header-title']}>
            {children}
            <div className={styles['header-title-description']}>Frontend development</div>
        </div>
    )
}

export default NavBarLogo