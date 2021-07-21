import React from 'react'
import { Router, Route, Link, Switch, useParams, useHistory } from 'react-router-dom';

const Content = ({ match, location, message }) => {
  const {
    params: { content }
  } = match;
  const params = useParams();
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  }
  console.log("In COntent");
  
  console.log(params)
  return (
    
    <div>
      <h1>{params.content} {params.content}</h1>
      <button onClick={goBackHandle}>Back</button>
    </div>
  )
}

export default Content