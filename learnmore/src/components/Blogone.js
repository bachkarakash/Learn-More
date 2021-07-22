import { Grid } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Blogone = () => {

    const params = useParams();
    console.log(params);
    const [blog, setBlog] = useState({})

    useEffect(() => {
        const getBlogDetails = async () => {
            const url = '/content/getContent/' + params.blogId;
            const response = await axios.get(url)
            // console.log(response)
            setBlog(response.data)
        }
        getBlogDetails()
    }, [params])

    const history = useHistory();

    const goBackHandle = () => {
        history.goBack();
    }

    console.log(blog)
    return (
        <>
            <Button className="backButton" variant='contained' color='secondary' onClick={goBackHandle}>Back</Button>
            <Grid container>
                {
                    // blog.map((content) => {
                    // return (
                    
                    <Grid item md={12} sm={12} xs={12}>
                        <div className="blogoneGrid">
                            {/* <img className="blogoneImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" /> */}
                            <div className="blogoneDetails">
                                <div className="blogoneMeta">
                                    <h1 className="blogoneTitle">{blog.title}</h1>
                                    <p className="blogCreateDate">{new Date(blog.createdOn).toDateString()}</p>
                                    <span className="blogDivider"></span>
                                    {/* <span className="blogCourse">Some Course</span> */}
                                    {/* <div className="blogIcon">
                <i className="updateIcon fa fa-edit"></i>
                <i className="deleteIcon fa fa-trash"></i>
                </div> */}

                                </div>
                                {/* <span>Author</span> */}
                                <p className="blogoneContent">
                                    {blog.content}
                                </p>
                            </div>
                        </div>
                    </Grid>
                    // )
                    // })
                }
            </Grid>
        </>
    )
}

export default Blogone