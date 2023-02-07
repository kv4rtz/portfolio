import Container from "@/components/Container"
import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import Head from "next/head"
import Skills from "@/components/Skills"

const Home = () => {
    return (
        <>
            <Head>
                <title>kvarcev - frontend development</title>
            </Head>
            <Container>
                <Header/>
            </Container>
            <AboutMe/>
            <Skills/>
        </>
    )
}

export default Home