import React from 'react';
import {
    FrontEndSkills,
    BackEndSkills,
    TechSkills,
    HumanSkills
} from '../components';

export default function SkillView(props){
    return (
        <div id='skills-container'>
           <FrontEndSkills/>
           <BackEndSkills/>
           <TechSkills/>
           <HumanSkills/>
        </div>
    )
}