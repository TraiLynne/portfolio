import {
    Symposium,
    CourseCorrect,
    UIProject,
    Jubilee
} from '../assets/img/portfolio';

// Example of Project Data Structure
// {
    //     name: 'S & J Architecture',
    //     link: 'https://trailynne.org/User-Interface-Project/',
    //     blog: 'https://trailynne.org/blog/project/2019/02/06/user_interface_project.html',
    //     img: UIProject,
    //     contributions: [
    //         'HTML',
    //         'CSS',
    //         'LESS',
    //         'GreenSock'
    //     ]
    // },

export const projects = [
    {
        name: 'Symposium',
        link: 'https://symposium3.netlify.com/',
        img: Symposium,
        contributions: [
            'ReactJS',
            'Redux',
            'Admin Page',
            'Site Redesign',
            'Group Project'
        ]
    },
    {
        name: 'Project Course Correct',
        link: 'https://course-correct-landing.netlify.com/',
        img: CourseCorrect,
        contributions: [
            'Back-End API',
            'Express.js',
            'SQLite3'
        ]
    },
    {
        name: 'S & J Architecture',
        link: 'https://trailynne.org/User-Interface-Project/',
        blog: 'https://trailynne.org/blog/project/2019/02/06/user_interface_project.html',
        img: UIProject,
        contributions: [
            'HTML',
            'CSS',
            'LESS',
            'GreenSock',
            'Responsive Design'
        ]
    },
    {
        name: 'Jubilee Austen',
        link: 'https://trailynne.org/jubilee-austen/',
        blog: 'https://trailynne.org/blog/project/2018/06/27/jubilee_austen.html',
        img: Jubilee,
        contributions: [
            'HTML',
            'CSS'
        ]
    },
];