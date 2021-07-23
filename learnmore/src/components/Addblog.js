import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { EditorState, convertToRaw } from "draft-js";

const Addblog = () => {

    const [blog, setBlog] = useState({
        title: "", course: "", content: ""
    });

    var key, value;
    const handleChangeInputEvent = (event) => {
        key = event.target.name;
        value = event.target.value;
        console.log(blog)
        setBlog({ ...blog, [key]: value });
    }

    const publishPost = async (event) => {
        event.preventDefault();
        const res = await axios.post("/addContent",
            {
                "userEmail": "bachkarakash@gmail.com",
                "courseName": blog.course,
                "title": blog.title,
                "content": convertToRaw(blog.content)
            }
        );
        console.log(res);
    }
    return (
        <div>
            <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                    <div className="addBlog">
                        {/* <img className="addImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" /> */}
                        <form className="addForm">
                            <div className="formGroup">
                                {/* <label htmlFor="addFile">
                              <i className="uploadIcon fa fa-plus"></i>
                          </label>
                          <input type="file" id="addFile" style={{display: "none"}}/> */}
                                <input type="text" name="title" value={blog.title} onChange={handleChangeInputEvent} placeholder="Title" autoFocus={true} className="addInput addTitle" />
                            </div>
                            <div className="formGroup">
                                <input type="text" name="course" value={blog.course} onChange={handleChangeInputEvent} placeholder="Course" className="addInput addCourse" />
                            </div>
                            <div className="formGroup">
                                <textarea type="text" name="content" value={blog.content} onChange={handleChangeInputEvent} placeholder="Add content" className="addInput addContent">

                                </textarea>

                            </div>
                            <Button variant='contained' color='primary' onClick={publishPost} className="submitBlog">Submit</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Addblog