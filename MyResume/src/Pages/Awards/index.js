import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const AwardsPage = (props) => {
    document.title = props.title

    return (
        <section className="resume-section" id="awards">
            <div className="resume-section-content">
                <h2 className="mb-5">Awards & Certifications</h2>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        Google Analytics Certified Developer
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        Mobile Web Specialist - Google Certification
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        1
                        <sup>st</sup>
                        Place - University of Colorado Boulder - Emerging Tech Competition 2009
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        1
                        <sup>st</sup>
                        Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        2
                        <sup>nd</sup>
                        Place - University of Colorado Boulder - Emerging Tech Competition 2008
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        1
                        <sup>st</sup>
                        Place - James Buchanan High School - Hackathon 2006
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faTrophy} /></span>
                        3
                        <sup>rd</sup>
                        Place - James Buchanan High School - Hackathon 2005
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AwardsPage;