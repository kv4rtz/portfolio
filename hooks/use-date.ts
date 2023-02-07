import { useState } from "react"

export const useDate = () => {
    const [seconds, setSeconds] = useState<number | string>(0)
    const [minutes, setMinutes] = useState<number | string>(0)
    const [hours, setHours] = useState<number | string>(0)
    const [month, setMonth] = useState<string>('')
    const [year, setYear] = useState<number>(0)

    const changeTime = (date: Date) => {
        const h = date.getHours()
        const m = date.getMinutes()
        const s = date.getSeconds()

        h < 10 ? setHours(`0${h}`) : setHours(h)
        m < 10 ? setMinutes(`0${m}`) : setMinutes(m)
        s < 10 ? setSeconds(`0${s}`) : setSeconds(s)

        switch (date.getMonth()) {
            case 0:
                setMonth('January')
                break
            case 1:
                setMonth('February')
                break
            case 2:
                setMonth('March')
                break
            case 3:
                setMonth('April')
                break
            case 4:
                setMonth('May')
                break
            case 5:
                setMonth('June')
                break
            case 6:
                setMonth('July')
                break
            case 7:
                setMonth('August')
                break
            case 8:
                setMonth('September')
                break
            case 9:
                setMonth('October')
                break
            case 10:
                setMonth('November')
                break
            case 11:
                setMonth('December')
                break
        }

        setYear(date.getFullYear())
    }

    return { seconds, minutes, hours, month, year, changeTime }
}