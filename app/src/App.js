import React from 'react';
import './App.css';
import {
  ProjectView,
  SkillsView,
  ContactView
} from './views';
import {
  Nav,
  Footer
} from './components';

function App() {
  return (
    <div id='main-container'>
      <Nav/>
      <ProjectView/>
      <SkillsView/>
      <ContactView/>
      <Footer/>
    </div>
  );
}

export default App;
