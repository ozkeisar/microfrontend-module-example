import React from 'react';
import './App.css';
import {ModuleProvider} from './../moduleA';
import {eventManager} from './eventManager'
import { ExampleScreen } from './ExampleScreen';

function App() {
  return (
    <div className="App">
    <ModuleProvider eventManager={eventManager}/>
    <ExampleScreen eventManager={eventManager}/>
   </div>
  );
}

export default App;
