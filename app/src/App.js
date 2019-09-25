import React from 'react';
import './App.css';
import {
  ProjectView
} from './views';
import {
  Nav
} from './components';

function App() {
  return (
    <div>
      <Nav/>
      <ProjectView/>
    </div>
  );
}

export default App;
