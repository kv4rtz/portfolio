import NavBar from "@/components/NavBar/NavBar"
import { ReactNode, useEffect } from "react"
import styles from '@/styles/Layout.module.scss'
import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    return (
        <>
            <NavBar logo={'kvarcev'}/>
            <main className={styles.main}>{children}</main>
            <Image className={'bg-1'} src={'/bgshape.svg'} alt={'bg'} width={600} height={600}/>
            <Image className={'bg-2'} src={'/bgshape.svg'} alt={'bg'} width={600} height={600}/>
        </>
    )
}

export default Layout