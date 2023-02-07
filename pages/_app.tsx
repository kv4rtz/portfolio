import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'dark')
        }
    }, [])
    
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
