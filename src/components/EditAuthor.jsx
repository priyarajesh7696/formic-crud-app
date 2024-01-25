import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import AxiosService from '../utils/ApiServices';
import { useFormik } from 'formik';
import * as Yup from 'yup'
function EditAuthor() {
  let params = useParams()//this will return a object
  let [initialValues,setValues] = useState({
      name:'',
      birthdate:'',
      biography:''
  })
 
  let navigate = useNavigate()// this will return a function

  let formik= useFormik({
    initialValues:initialValues,
    validationSchema:Yup.object({
      name:Yup.string().required('author name is required'),
      bithdate:Yup.string().required('birthdate is required'),
      biography:Yup.string().required('biography is required')
    }),
    enableReinitialize:true,
    onSubmit:async (values)=>{
      let {id} = params
      values.id = id
      try {
        
        let res = await AxiosService.put(`/authorrecord/${id}`,values)
        if(res.status===200)
        {
          navigate('/dashboard')
        }
     } catch (error) {
        console.log(error)
     }
    }
  })


  const getUserData = async()=>{
    let {id} = params
    try {
      let res = await AxiosService.get( `/authorrecord/${id}`)
      if(res.status===200)
      {
        setValues({
          name:res.data.name,
          birthdate:res.data.birthdate,
          biography:res.data.biography
        })
        // console.log(initialValues)
      }
  } catch (error) {
      console.log(error)
  }
  }
  
  useEffect(()=>{
    getUserData()
  },[])

  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Edit Author</h1>
                </div>
        <Form onSubmit = {formik.handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name ? (<div style={{color:"red"}}>{formik.errors.name}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Birthdate</Form.Label>
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

export default EditAuthor