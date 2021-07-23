import React, { useState } from 'react'
import { Typography, message } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import QuillEditor from './QuillEditor';
import { useHistory } from 'react-router-dom';
import { positions, Provider } from "react-alert";
import  AlertTemplate from 'react-alert-template-basic'
import { useAlert } from "react-alert";
const Createblog = () => {

    const history = useHistory();
    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])
    // const alert = useAlert();

    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

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

    const options = {
        timeout: 5000,
        position: positions.BOTTOM_CENTER
    };

    const publishPost = async (event) => {
        event.preventDefault();
        const res = await axios.post("/addContent",
            {
                "userEmail": "bachkarakash@gmail.com",
                "courseName": blog.course,
                "title": blog.title,
                "content": content
            }
        );
        console.log(res);
        if(res.status === 200 ) {
            // alert.show("success");
            window.alert("blog added")
            setTimeout( () => {
                history.push("/home")
            }, 2000)
        }
        
    }
    return (
        <div>
            <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                    <div className="addBlog">
                        <input type="text" name="title" value={blog.title} onChange={handleChangeInputEvent} placeholder="Title" autoFocus={true} className="addInput addTitle" />
                        <input type="text" name="course" value={blog.course} onChange={handleChangeInputEvent} placeholder="course" className="addInput addCourse" />
                        <div className="formGroup">
                            <QuillEditor
                                placeholder={"Write your blog here"}
                                onEditorChange={onEditorChange}
                                onFilesChange={onFilesChange}
                            />
                        </div>
                        <form className="createForm">
                            <Button variant='contained' color='primary' onClick={publishPost} className="submitBlog">Submit</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Createblog