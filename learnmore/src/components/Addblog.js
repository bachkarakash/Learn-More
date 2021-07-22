import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';

const Addblog = () => {
  return (
    <div>
      <Grid container>
          <Grid item md={12} sm={12} xs={12}>
              <div className="addBlog">
                  <img className="addImage" src="https://careerkarma.com/blog/wp-content/uploads/2019/08/photo-1454165205744-3b78555e5572.jpg" />
                  <form className="addForm">
                      <div className="formGroup">
                          <label htmlFor="addFile">
                              <i className="uploadIcon fa fa-plus"></i>
                          </label>
                          <input type="file" id="addFile" style={{display: "none"}}/>
                          <input type="text" placeholder="Title" autoFocus={true} className="addInput addTitle"/>
                      </div>
                      <div className="formGroup">
                          <input type="text" placeholder="Course" className="addInput addCourse"/>
                      </div>
                      <div className="formGroup">
                          <textarea type="text" placeholder="Add content" className="addInput addContent">

                          </textarea>
                          
                      </div>
                      <Button variant='contained' color='primary' className="submitBlog">Submit</Button>
                  </form>
              </div>
          </Grid>
      </Grid>
    </div>
  )
}

export default Addblog