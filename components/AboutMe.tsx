import styles from '@/styles/AboutMe.module.scss'
import Container from "@/components/Container"

const AboutMe = () => {
    return (
        <div className={styles['about-wrapper']}>
            <Container>
                <div className={styles['about-container']}>
                    <div className={styles['about-content']}>
                        <h2 className={styles['about-title']} data-aos="fade-right">About me</h2>
                        <p className={styles['about-text']} data-aos="fade-right">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus incidunt iste
                            magnam
                            maiores minus quaerat repudiandae vitae voluptatibus! Deserunt error eum mollitia, nulla
                            tempora
                            veniam! Commodi dicta expedita facere? Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Cupiditate doloribus incidunt iste magnam maiores minus quaerat repudiandae vitae
                            voluptatibus!
                            Deserunt error eum mollitia, nulla tempora
                            veniam! Commodi dicta expedita facere?
                        </p>
                    </div>
                    <svg data-aos="fade-left" width="200" height="200" viewBox="0 0 200 200" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 0L101.459 91.7276L134.202 6.03074L104.2 92.7254L164.279 23.3956L106.435 94.6006L186.603 50L107.893 97.127L198.481 82.6352L108.4 100L198.481 117.365L107.893 102.873L186.603 150L106.435 105.399L164.279 176.604L104.2 107.275L134.202 193.969L101.459 108.272L100 200L98.5414 108.272L65.798 193.969L95.8 107.275L35.7212 176.604L93.5652 105.399L13.3975 150L92.1066 102.873L1.51923 117.365L91.6 100L1.51923 82.6352L92.1066 97.127L13.3975 50L93.5652 94.6006L35.7212 23.3956L95.8 92.7254L65.798 6.03074L98.5414 91.7276L100 0Z"
                            fill="#fff"/>
                    </svg>
                </div>
            </Container>
        </div>
    )
}

export default AboutMe