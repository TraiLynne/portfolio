import React from 'react';
import './App.css';
import {
  ProjectView,
  SkillsView
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
    </div>
  );
}

export default App;
