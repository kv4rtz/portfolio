import NavBarLogo from "@/components/NavBar/NavBarLogo"
import NavBarDate from "@/components/NavBar/NavBarDate"
import NavBarTheme from "@/components/NavBar/NavBarTheme"
import Container from "@/components/Container"
import styles from '@/styles/NavBar.module.scss'

interface NavBarProps {
    logo: string
}

const NavBar = ({ logo }: NavBarProps) => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles['header-wrapper']}>
                    <NavBarLogo>{logo}</NavBarLogo>
                    <div className={'flex items-center'}>
                        <NavBarTheme/>
                        <NavBarDate/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default NavBar