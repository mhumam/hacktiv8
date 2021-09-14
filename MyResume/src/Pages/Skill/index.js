import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faAngular, faNodeJs, faSass, faLess, faWordpress, faGulp, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SkillPage = (props) => {
    document.title = props.title

    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faCss3} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faJsSquare} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faAngular} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faNodeJs} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faSass} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faLess} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faWordpress} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faGulp} /></li>
                    <li className="list-inline-item"><FontAwesomeIcon icon={faNpm} /></li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li">
                            <i className="fas fa-check"></i>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        Cross Browser Testing & Debugging
                    </li>
                    <li>
                        <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        Agile Development & Scrum
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SkillPage;