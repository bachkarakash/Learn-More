import React from 'react'
import Blog from './Blog'
import Blogone from './Blogone'
import Addblog from './Addblog';
import BlogLists from './BlogLists';

const Landingpage = () => {
  return (
    <div className="landingPage">
      <BlogLists  course="Data Structures"/>
      {/* <Addblog /> */}
    </div>
  )
}

export default Landingpage