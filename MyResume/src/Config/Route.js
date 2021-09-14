import React from 'react';

const AboutPage = React.lazy(() => import('../Pages/About'));
const ExperiencePage = React.lazy(() => import('../Pages/Experience'));
const EducationPage = React.lazy(() => import('../Pages/Education'));
const SkillPage = React.lazy(() => import('../Pages/Skill'));
const InterestsPage = React.lazy(() => import('../Pages/Interests'));
const AwardsPage = React.lazy(() => import('../Pages/Awards'));

const title = 'Muhamad Humam';
const Routes = [
    { exact: true, path: '/', name: `Home | ${title}`, component: AboutPage },
    { exact: true, path: '/about-us', name: `About Us | ${title}`, component: AboutPage },
    { exact: true, path: '/experience', name: `Experience | ${title}`, component: ExperiencePage },
    { exact: true, path: '/education', name: `Education | ${title}`, component: EducationPage },
    { exact: true, path: '/skill', name: `Skill | ${title}`, component: SkillPage },
    { exact: true, path: '/interests', name: `Interest | ${title}`, component: InterestsPage },
    { exact: true, path: '/awards', name: `Award | ${title}`, component: AwardsPage }
];

export default Routes