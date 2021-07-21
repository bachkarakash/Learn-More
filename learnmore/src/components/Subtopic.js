import React from 'react'
import { Router, Route, Link, Switch, useParams, useHistory, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { courses, topics, subtopics, contents, courseMapping } from '../data/Data';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
  accordion: {
    marginTop: '2%'
  }
}));

// const Content = ({ match, location, message }) => {
//   const {
//     params: { content }
//   } = match;
//   const params = useParams();
//   const history = useHistory();

//   const goBackHandle = () => {
//     history.goBack();
//   }
//   console.log("In COntent");
  
//   console.log(params)
//   return (
    
//     <div>
//       <h1>{params.content} {params.content}</h1>
//       <button onClick={goBackHandle}>Back</button>
//     </div>
//   )
// }

const Subtopic = ({ match, message }) => {
  const {
    params: { content1 }
  } = match;
  const params = useParams();
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  }
  const location = useLocation();
  function getPath(path) {
    return location.pathname+"/"+path.subtopic;
  }
  console.log("In COntent");

  const getContent = () => {
    var items = contents.filter( content => {
      return content.course === courseMapping[params.course] && content.topic == params.topic
    })
    return items;
  }
  
  console.log(params)
  console.log(params.course)
  console.log("course mapping",courseMapping[params.course])
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const content = getContent();

  return (
    <div className={classes.root}>
      {/* <button onClick={goBackHandle}>Back</button> */}
      <Button variant='contained' color='primary' onClick={goBackHandle}>Back</Button>
      <Grid container>
                {content.map(entry => {
                    return (
                        <Grid item md={2} sm={4} xs={12} className="gridItems">
                            
                            <Paper variant='elevation' elevation={3} key={entry.subtopic} id="papers" component={Link} to={
                                {
                                    pathname: getPath(entry),
                                    message: location.message,
                                    course: entry.course,
                                    topic: entry.name,
                                    subtopic: entry.subtopic
                                }
                            }>
                                <span>{entry.subtopic}</span>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
      {/* <Grid container>
        <Grid item md={6} sm={12} xs={12}>

        
      {
        content.map( (item) => {
          return (
            <Accordion className={classes.accordion} expanded={expanded === item.subtopic} onChange={handleChange(item.subtopic)}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              >
                <Typography className={classes.heading}>{item.subtopic}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.text}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })
      } */}
      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}

        {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default Subtopic