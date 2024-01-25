import React,{useEffect, useState} from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiServices';
function Dashboard() {
    let [book,setBook] = useState([])
    let [author,setAuthor] = useState([])
    
    let navigate = useNavigate()

    let handleBookdelete = async(id)=>{
        try {
            let book = await AxiosService.delete(`/bookrecord/${id}`)
            if(book.status===200)
            {
                getData()
            }
        } catch (error) {
            console.log(error)
        }
    }
    let handleAuthordelete = async(id)=>{
      try {
          let author = await AxiosService.delete(`/authorrecord/${id}`)
          if(author.status===200)
          {
              getData()
          }
      } catch (error) {
          console.log(error)
      }
  }
    const getData = async()=>{
        try {
            let book = await AxiosService.get('/bookrecord')
            let author  = await AxiosService.get('/authorrecord')
            if(book.status===200)
            {
                setBook(book.data)
            }
             if(author.status===200)
            {
                setAuthor(author.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="row p-5 rounded">
                  <h3 className='bg-info'>BOOK DETAILS</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>S.NO</th>
                        <th>Book Title</th>
                        <th>Author Name</th>
                        <th>ISBN-NUMBER</th>
                        <th>PublishDate</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            book.map((e)=>{
                                return <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.author}</td>
                                    <td>{e.ISBN}</td>
                                    <td>{e.publishdate}</td>
                                    <td>
                                        <Button variant='primary' onClick={()=>navigate(`/editbook/${e.id}`)}>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>{handleBookdelete(e.id)}}>Delete</Button>
                                    </td>
                                </tr>
                            })
                       }
                    </tbody>
                </Table>
                </div>
                <div className="row p-5">
                <h3 className='bg-info'>AUTHOR DETAILS</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>S.NO</th>
                        <th>Author Name</th>
                        <th>BithDate</th>
                        <th>Biography</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            author.map((e)=>{
                                return <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.birthdate}</td>
                                    <td>{e.biography}</td>
                                    
                                    <td>
                                        <Button variant='primary' onClick={()=>navigate(`/editauthor/${e.id}`)}>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>{handleAuthordelete(e.id)}}>Delete</Button>
                                    </td>
                                </tr>
                            })
                       }
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Dashboard