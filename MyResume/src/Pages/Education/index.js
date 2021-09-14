import React from 'react'

const EducationCard = ({ university, title, fieldOfStudy, Gpa, period }) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">{university}</h3>
                <div className="subheading mb-3">{title}</div>
                <div>{fieldOfStudy}</div>
                <p>GPA: {Gpa}</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">{period}</span></div>
        </div>
    )
}

const Education = (props) => {
    document.title = props.title
    
    const dataList = [
        {
            university: 'Dian Nuswantory University',
            title: 'Bachelor Of Informatics Engineering',
            fieldOfStudy: 'Computer Science - Software Engineering',
            Gpa: '3.49',
            period: 'Oct 2011 - Apr 2015'
        }
    ]
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                {dataList?.map(obj => <EducationCard {...obj} />)}
            </div>
        </section>
    )
}

export default Education
