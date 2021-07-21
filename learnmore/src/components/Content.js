import React from 'react'
import { Router, Route, Link, Switch, useParams, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { courses, topics, subtopics, contents, courseMapping } from '../data/Data';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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

const Content = ({ match, location, message }) => {
  const {
    params: { content1 }
  } = match;
  const params = useParams();
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  }
  console.log("In COntent");

  const getContent = () => {
    var items = contents.filter(content => {
      return content.course === courseMapping[params.course] && content.topic == params.topic && content.subtopic == params.subtopic
    })
    return items;
  }

  console.log("params:", params)
  console.log(params.course)
  console.log("course mapping", courseMapping[params.course])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const content = getContent();
  console.log("Content", content)

  return (
    <div className={classes.root}>
      {/* <button onClick={goBackHandle}>Back</button> */}
      <Button variant='contained' color='primary' onClick={goBackHandle}>Back</Button>
      <Paper>
        {
          content.map((item) => {
            return (
              <Typography>
                {item.text}
              </Typography>
            )
          })
        }
      </Paper>
    </div>
  );
}

export default Content