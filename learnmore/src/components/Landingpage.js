import React from 'react'
import Blog from './Blog'
import Blogone from './Blogone'
import Addblog from './Addblog';

const Landingpage = () => {
  return (
    <div className="landingPage">
      <Blog  course="Data Structures"/>
      {/* <Addblog /> */}
    </div>
  )
}

export default Landingpage