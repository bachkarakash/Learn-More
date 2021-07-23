import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Router, Route, Link, Switch, useHistory, useLocation, useParams } from 'react-router-dom';
import { blogs } from '../data/Data';
import { Card, Avatar, Col, Typography, Row } from 'antd';
import Icon from '@ant-design/icons';
import Button from '@material-ui/core/Button';

import axios from 'axios';
const BlogLists = (props) => {
    const [blogs, setBlogs] = useState([]);
    const location = useLocation();
    // console.log(location.courseId)
    const params = useParams();
    console.log(params)

    useEffect(() => {
        const fetchBlogs = async () => {

            const url = params.courseId ? "/content/getAll/" + params.courseId : "/content/getAll";
            const response = await axios.get(url)
            console.log(url)
            setBlogs(response.data);
        }
        fetchBlogs()
    }, [params, location])
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
            <Grid container style={{alignItems: 'center', justifyContent: 'center'}}>
                {
                    blogs.map((blog) => {
                        return (
                            <Grid item lg={3} md={3} sm={12} xs={12} style= {{margin: '1%'}}>
                                <div className="card">
                                    <div className="card-header">
                                        {/* <div className="profile">
                                            <span className="letter">A</span>
                                        </div> */}
                                        <div className="card-title-group">
                                            <h5 className="card-title">{blog.title}</h5>
                                            <div className="card-date">{new Date(blog.createdOn).toDateString()}</div>
                                        </div>
                                    </div>
                                    {/* <img className="card-image" src={food} alt="Logo" /> */}
                                    <div className="card-text" style={{ height: 200, overflowY: 'scroll', marginTop: 10 }}>
                                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                    </div>
                                    <div className="card-like-bar">
                                        {/* {props.liked ? (
                                            <img className="card-like-icon" src={heartFill} alt="Logo" />
                                        ) : (
                                            <img className="card-like-icon" src={heartOutline} alt="Logo" />
                                        )} */}
                                        <div className="like-text">
                                            <b>{blog.courseName}</b>
                                        </div>
                                        <Link to={`/blogs/single/${blog.contentId}`}>
                                        <div className="like-text singleBlogLink">
                                            {/* <b>View...</b> */}
                                            <Button className='viewButton' variant='contained' color='secondary'>View</Button>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                </div>
                                {/* <Col>
                                    <Card
                                        hoverable
                                        style={{ width: 370, marginTop: 16 }}
                                        actions={[
                                            <Icon type="setting" key="setting" />,
                                            <Icon type="edit" key="edit" />,
                                            <a href={`/blogs/single/${blog.contentId}`}> <Icon type="ellipsis" key="ellipsis" /></a>,
                                        ]}
                                    >
                                        <Card
                                            avatar={
                                                <Avatar src={blog.image} />
                                            }
                                            title={blog.title}
                                            description="This is the description"
                                        />
                                        <div style={{ height: 150, overflowY: 'scroll', marginTop: 10 }}>
                                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                        </div>
                                    </Card>
                                </Col> */}
                            </Grid>
                        )
                    })
                }


            </Grid>
        </>
    )
}

export default BlogLists