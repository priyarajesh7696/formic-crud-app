import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiServices';
import { useFormik } from 'formik';
import * as Yup from 'yup'
function AddAuthor() {
 
  let formik = useFormik({
    initialValues:{
      name:'',
      birthdate:'',
      biography:''
    },
    validationSchema:Yup.object({
      name:Yup.string().required('author name is required'),
      bithdate:Yup.string().required('birthdate is required'),
      biography:Yup.string().required('biography is required')
    }),

    onSubmit:async (values)=>{
      try {
        let res = await AxiosService.post('/authorrecord',values)
        if(res.status===201)
        {
          navigate('/dashboard')
        }
     } catch (error) {
        console.log(error)
     }
    }
  })
//  console.log(formik.values)


  let navigate = useNavigate()

  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Add Author</h1>
                </div>
        
        <Form onSubmit = {formik.handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" placeholder="name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name ? (<div style={{color:"red"}}>{formik.errors.name}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="date" placeholder="birthdate" id="birthdate" name="birthdate" onChange={formik.handleChange} value={formik.values.birthdate} onBlur={formik.handleBlur}/>
            {formik.touched.birthdate && formik.errors.birthdate ? (<div style={{color:"red"}}>{formik.errors.birthdate}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Biography</Form.Label>
            <Form.Control type="text" placeholder="biography" id="biography" name="biography" onChange={formik.handleChange} value={formik.values.biography} onBlur={formik.handleBlur}/>
            {formik.touched.biography && formik.errors.biography ? (<div style={{color:"red"}}>{formik.errors.biography}</div>) : null}
          </Form.Group>
          
          <Button variant="primary" type='submit'>
            Submit
          </Button>
    </Form>
        </div>
    </div>
  </div>
}

export default AddAuthor