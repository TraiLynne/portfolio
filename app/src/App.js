import React from 'react';
import './App.css';
import {
  ProjectView,
  SkillsView,
  ContactView
} from './views';
import {
  Nav
} from './components';

function App() {
  return (
    <div id='main-container'>
      <Nav/>
      <ProjectView/>
      <SkillsView/>
      <ContactView/>
    </div>
  );
}

export default App;
