import React from 'react'

const ExperienceCard = ({ positions, company, jobDesc, period }) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">{positions}</h3>
                <div className="subheading mb-3">{company}</div>
                <p>{jobDesc}</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">{period}</span></div>
        </div>
    )
}

const Experience = () => {
    const dataList = [
        {
            positions: 'Frontend Engineer',
            company: 'PT. Elevenia Digital Teknologi Sukses (Salim Group)',
            period: 'Oct 2020 - Present',
            jobDesc: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
        },
        {
            positions: 'Software Engineer',
            company: 'PT. Aero System Indonesia (Garuda Indonesia Group)',
            period: 'Agust 2016 - Oct 2020',
            jobDesc: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
        },
        {
            positions: 'Staff IT',
            company: 'PT. Bio Nusantara Teknologi',
            period: 'Feb 2016 - Agust 2016',
            jobDesc: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
        },
        {
            positions: 'Laboratory Assistant',
            company: 'UPT. Universitas Dian Nuswantoro Laboratory',
            period: 'Agust 2014 - Feb 2015',
            jobDesc: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
        }
    ]
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                {dataList?.map(obj => <ExperienceCard {...obj} />)}
            </div>
        </section>
    )
}

export default Experience
