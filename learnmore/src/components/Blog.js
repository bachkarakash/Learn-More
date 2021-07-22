import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Router, Route, Link, Switch, useHistory, useLocation, useParams } from 'react-router-dom';
import { blogs } from '../data/Data';

import axios from 'axios';
const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  // console.log(location.courseId)
  const params = useParams();
  console.log(params)

  useEffect(() => {
    const fetchBlogs = async () => {
      
      const url = params.courseId ? "/content/getAll/"+params.courseId : "/content/getAll";
      const response = await axios.get(url)
      console.log(url)
      setBlogs(response.data);      
    }
    fetchBlogs()
  }, [params,location])
  // console.log(blogs);
  console.log(location);
  
  const getPath = () => {
    console.log("ingetPath");
    return '/blogs';
  }
  //console.log(props)
  const getBlogs = () => {
    const entries = props.course ? blogs.filter((item) => {

      return item.course === props.course;
    }) : blogs
    return entries
  }
  //console.log(getBlogs());
  return (
    <>
      <Grid container>
        {
          blogs.map((blog) => {
            return (
              <Grid item lg={3} md={3} sm={12} xs={12}>

                <Paper className="blogLink" component={Link} to={`/blogs/single/${blog.contentId}`}>


                  <div className="blogGrid">
                    {/* <img className="blogImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" /> */}
                    <div className="blogDetails">
                      <div>
                        <span className="blogTitle">{blog.title}</span>
                        {/* <span className="blogCourse">Some Course</span> */}
                      </div>
                      <p className="blogContent">
                        {blog.content}
                        Lorem Ipsum is simply dummy text of
                      </p>
                    </div>
                    <div className="blogMeta">
                      <div className="blogCreated">{new Date(blog.createdOn).toDateString()}</div>
                      <div className="blogCategory ms-auto">{blog.courseName}</div>
                    </div>
                  </div>
                </Paper>

              </Grid>
            )
          })
        }


        <Grid item md={3} sm={12} xs={12}>

          <Paper className="blogLink" component={Link} to="/blogs">


            <div className="blogGrid">
              {/* <img className="blogImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" /> */}
              <div className="blogDetails">
                <div>
                  <span className="blogTitle">Some Title</span>
                  {/* <span className="blogCourse">Some Course</span> */}
                </div>
                <p className="blogContent">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
              <div className="blogMeta">
                <div className="blogCreated">created at</div>
                <div className="blogCategory ms-auto">Category</div>
              </div>
            </div>
          </Paper>

        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <div className="blogGrid">
            <img className="blogImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" />
            <div className="blogDetails">
              <div className="blogMeta">
                <span className="blogTitle">Some Title</span>
                {/* <span className="blogCourse">Some Course</span> */}
              </div>
              <p className="blogContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <div className="blogGrid">
            <img className="blogImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" />
            <div className="blogDetails">
              <div className="blogMeta">
                <span className="blogTitle">Some Title</span>
                {/* <span className="blogCourse">Some Course</span> */}
              </div>
              <p className="blogContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <div className="blogGrid">
            <img className="blogImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" />
            <div className="blogDetails">
              <div className="blogMeta">
                <span className="blogTitle">Some Title</span>
                {/* <span className="blogCourse">Some Course</span> */}
              </div>
              <p className="blogContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <div className="blogGrid">
            <img className="blogImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" />
            <div className="blogDetails">
              <div className="blogMeta">
                <span className="blogTitle">Some Title</span>
                {/* <span className="blogCourse">Some Course</span> */}
              </div>
              <p className="blogContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Blog