import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const AboutPage = (props) => {
    document.title = props.title

    return (
        <section className="resume-section">
            <div className="resume-section-content">
                <h1 className="mb-0">Muhamad <span className="text-primary">Humam</span></h1>
                <div className="subheading mb-5">
                    Jalan Sudirman · Jakarta Pusat, CO 80810 · (021) 123-4567 ·
                    <a href="mailto:muhamadhumamm17@gmail.com">muhamadhumamm17@gmail.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://id.linkedin.com/in/muhamadhumam" target="blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a className="social-icon" href="https://github.com/mhumam" target="blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                    <a className="social-icon" href="#!">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="social-icon" href="#!">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
