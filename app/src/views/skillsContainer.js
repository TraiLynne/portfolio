import React from 'react';
import {
    FrontEndSkills,
    BackEndSkills,
    TechSkills,
    HumanSkills
} from '../components';
import '../styles/skills.css';

export default function SkillView(props){
    return (
        <div id='skills-container'>
            <h1>Key Skills</h1>
            <div id='skills'>
                <FrontEndSkills/>
                <BackEndSkills/>
                <TechSkills/>
                <HumanSkills/>
            </div>
        </div>
    )
}