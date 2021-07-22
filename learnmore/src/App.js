import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Course from './components/Course';
import Algorithms from './components/Algorithms';
import SystemDesign from './components/Systemdesign';


import Content from './components/Content'
import Subtopic from './components/Subtopic';
import Blogone from './components/Blogone'
import Addblog from './components/Addblog'
import Blog from './components/Blog'


const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <Landingpage />
        </Route>
        {/* <Route exact path="/:course/:topic/:subtopic"
          render={props => (
            <Content {...props} title={`Props`} />
          )} /> */}


        <Route path="/blogs/single/:blogId">
          <Blogone />
        </Route>

        <Route path="/blogs/:courseId">
          <Blog />
        </Route>

        <Route path="/blogs">
          <Blog />
        </Route>

        <Route path="/addBlog">
          <Addblog />
        </Route>

        {/* <Route path="/blogs">
          <Landingpage />
        </Route> */}

        <Route exact path="/:course/:topic"
          render={props => (
            <Subtopic {...props} title={`Props`} message="from Data Structure" />
          )} />


        <Route path="/datastructures">
          <Course message="Data Structures" pathname="/datastructres" />
        </Route>


        <Route path="/algorithms">
          {/* <Algorithms /> */}
          {/* <ControlledAccordions /> */}
          <Course message="Algorithms" pathname="/algorithms" />
        </Route>

        <Route path="/systemdesign">
          <Course message="System Design" />
        </Route>



      </Switch>


    </div>
  )
}

export default App