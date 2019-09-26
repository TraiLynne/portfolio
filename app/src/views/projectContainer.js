import React from 'react';
import {
    ProjectCarousel
} from '../components';
import '../styles/project.css';

export default function ProjectView(props){
    return (
        <div id='project-container'>
            <h1>Recent Projects</h1>
            <ProjectCarousel/>
        </div>
    )
}