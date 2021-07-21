import React from 'react';
import { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useGatsbyNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/gatsby';
import NestedMenu from '@mui-treasury/components/menu/nested';
import { courses, topics, subtopics, content } from  '../../data/Data';


import Grid from '@material-ui/core/Grid';


import Leftpane from './Leftpane';

export default class extends Component {
    
    render() {
        return (
            <Fragment>
                <Grid container>
                    <Grid item md={3} xs={12}>
                        {/* <Paper> */}
                            {/* <Sidebar /> */}
                            <Leftpane />
                        {/* </Paper> */}
                        
                    </Grid>
                    <Grid item md={8} xs={12}>
                        {/* <Paper> */}
                            
                        {/* </Paper> */}
                    </Grid>
                </Grid>
                
            </Fragment>
            

        );
    }
}
