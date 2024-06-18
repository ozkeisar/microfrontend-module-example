import React from 'react';
import './App.css';
import {ModuleProvider} from './../moduleA';
import {eventManager} from './eventManager'
import { ExampleScreen } from './ExampleScreen';

function App() {
  return (
    <div className="App">
      <ModuleProvider eventManager={eventManager} id="module1" />
      <ExampleScreen id="module1" />
      <ModuleProvider eventManager={eventManager} id="module2" />
      <ExampleScreen id="module2" />
   </div>
  );
}

export default App;
