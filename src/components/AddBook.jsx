import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiServices';
import { useFormik } from 'formik';
import * as Yup from 'yup'
function AddBook() {

  let formik= useFormik({
    initialValues:{
      title:'',
      author:'',
      ISBN:'',
      publishdate:''
    },
    validationSchema:Yup.object({
      title:Yup.string().required('title is required').max(20,'title can not exceed 20 characters').min(3,'title can not be shorter than 3 leters'),
      author:Yup.string().required('author is required'),
      ISBN:Yup.string().required('ISBN is required'),
      publishdate:Yup.string().required('publishdate is required')
    }),

    onSubmit:async (values)=>{
      try {
        let res = await AxiosService.post('/bookrecord',values)
        if(res.status===201)
        {
          navigate('/dashboard')
        }
     } catch (error) {
        console.log(error)
     }
    }
  })


  let navigate = useNavigate()

  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Add Book</h1>
                </div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}/>
            {formik.touched.title && formik.errors.title ? (<div style={{color:"red"}}>{formik.errors.title}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author name" id="author" name="author" onChange={formik.handleChange} value={formik.values.author} onBlur={formik.handleBlur}/>
            {formik.touched.author && formik.errors.author ? (<div style={{color:"red"}}>{formik.errors.author}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>ISBN</Form.Label>
            <Form.Control type="number" placeholder="ISBN" id="ISBN" name="ISBN" onChange={formik.handleChange} value={formik.values.ISBN} onBlur={formik.handleBlur}/>
            {formik.touched.ISBN && formik.errors.ISBN ? (<div style={{color:"red"}}>{formik.errors.ISBN}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>PUBLISHDATE</Form.Label>
            <Form.Control type="date" placeholder="date" id="date" name="publishdate" onChange={formik.handleChange} value={formik.values.publishdate} onBlur={formik.handleBlur}/>
            {formik.touched.publishdate && formik.errors.publishdate ? (<div style={{color:"red"}}>{formik.errors.publishdate}</div>) : null}
          </Form.Group>
          
          <Button variant="primary" type='submit'>
            Submit
          </Button>
    </Form>
        </div>
    </div>
  </div>
}

export default AddBook