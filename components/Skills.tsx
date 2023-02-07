import Container from "@/components/Container"
import styles from '@/styles/Skills.module.scss'
import { FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa"

const Skills = () => {
    return (
        <div className={styles['skills-wrapper']}>
            <Container>
                <h2 className={styles['skills-title']} data-aos="fade-right">My skills</h2>
                <div className={styles['skills-blocks']}>
                    <div className={`${styles['skills-block']}`} data-aos="fade-right">
                        <FaHtml5/> <h3>HTML</h3>
                    </div>
                    <div className={`${styles['skills-block']} block-two`} data-aos="fade-right"
                         data-aos-delay="150">
                        <FaSass/> <h3>CSS + SCSS</h3>
                    </div>
                    <div className={`${styles['skills-block']} block-three`} data-aos="fade-right"
                         data-aos-delay="300">
                        <FaJs/> <h3>JavaScript</h3>
                    </div>
                    <div className={`${styles['skills-block']}`} data-aos="fade-right"
                         data-aos-delay="450">
                        <FaReact/> <h3>React + Next.js</h3>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills