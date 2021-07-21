import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Datastructres from './components/Datastructures';
import Algorithms from './components/Algorithms';
import SystemDesign from './components/Systemdesign';
import Fundamentals from './components/Fundamentals';
import NavbarMaterial from './components/NavBarMaterial';
import Content from './components/Content'
import ControlledAccordions from './components/TestContent'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <NavbarMaterial /> */}
      <Switch>
        <Route exact path="/">
          <Landingpage />
        </Route>

        <Route exact path="/home">
          <Landingpage />
        </Route>

        <Route exact path="/:datastructres/:content" 
        render={props => (
          <Content {...props} title={`Props through render`} message="from Data Structure" />
        )}/>
          {/* <Content message="from Data Structure" />
        </Route> */}

        <Route path="/datastructres">
          <Datastructres message="Data Structures" pathname="/datastructres"/>
        </Route>

        

        <Route path="/algorithms">
          {/* <Algorithms /> */}
          {/* <ControlledAccordions /> */}
          <Datastructres message="Algorithms" pathname="/algorithms"/>
        </Route>

        <Route path="/systemdesign">
          <SystemDesign />
        </Route>

        <Route path="/fundamentals">
          <Fundamentals />
        </Route>
      </Switch>


    </div>
  )
}

export default App