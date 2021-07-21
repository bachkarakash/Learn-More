import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import Divider from './Divider';
import { Paper } from '@material-ui/core';
import { Router, Route, Link, Switch, useHistory, useLocation } from 'react-router-dom';

import { Component, Fragment } from 'react';

import { courses, topics, subtopics, contents } from '../data/Data';
import { flexbox } from '@material-ui/system';
import Content from './Content';

var styles = {
    margin: "2%"
}


const getTopics = (course) => {
    var entries = topics.filter(item => {
        return item.course === course
    })
    return entries;
}

const Datastructure = (props) => {

    let history = useHistory();
    
    const location = useLocation();
    function getPath(path) {
        return location.pathname+"/"+path.name;
        
    }
    var entries = getTopics(props.message);
    console.log("content: ");
    
    console.log(location)
    console.log("props", props)
    return (
        <Fragment>
            <Grid container>
                {entries.map(entry => {
                    return (
                        <Grid item md={2} sm={4} xs={12} className="gridItems">
                            
                            <Paper variant='elevation' elevation={3} key={entry.name} id="papers" component={Link} to={
                                {
                                    pathname: getPath(entry),
                                    message: location.message,
                                    course: entry.course,
                                    topic: entry.name
                                }
                            }>
                                <span>{entry.name}</span>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>

        </Fragment>
    );
}

export default Datastructure;

