import React from 'react'
import { Route, Router, Switch } from 'react-router-dom';
import Landingpage from '../components/Landingpage';
import Datastructres from '../components/Course';
import Course from '../components/Course';



import Content from '../components/Content';
import Subtopic from '../components/Subtopic';

const AppRoutes = () => {
  return (
    <>
        <Route exact path="/">
          <Landingpage />
        </Route>

        <Route exact path="/home">
          <Landingpage />
        </Route>
        <Route exact path="/:course/:topic/:subtopic" 
        render={props => (
          <Content {...props} title={`Props`} />
        )}/>

        <Route exact path="/:course/:topic" 
        render={props => (
          <Subtopic {...props} title={`Props`} message="from Data Structure" />
        )}/>
          {/* <Content message="from Data Structure" />
        </Route> */}

        <Route path="/datastructures">
          <Course message="Data Structures" pathname="/datastructres"/>
        </Route>

        

        <Route path="/algorithms">
          {/* <Algorithms /> */}
          {/* <ControlledAccordions /> */}
          <Course message="Algorithms" pathname="/algorithms"/>
        </Route>

        <Route path="/systemdesign">
          <Course />
        </Route>
    </>
  )
}

export default AppRoutes