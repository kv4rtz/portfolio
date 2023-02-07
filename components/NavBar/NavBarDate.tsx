import { memo, useEffect } from "react"
import { useDate } from "@/hooks/use-date"
import styles from '@/styles/NavBar.module.scss'

const NavBarDate = () => {
    const { hours, minutes, seconds, month, year, changeTime } = useDate()

    useEffect(() => {
        const date = new Date()
        changeTime(date)
    }, [changeTime])

    setInterval(() => {
        const date = new Date()
        changeTime(date)
    }, 1000)

    return (
        <time className={styles['header-time']}>
            <div>
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            <div>{month}</div>
            <div>{year}</div>
        </time>
    )
}

export default memo(NavBarDate)