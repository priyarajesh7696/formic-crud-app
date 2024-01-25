import React,{useState} from 'react'
import Admin from './components/Admin'
import Dashboard from './components/Dashboard'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'

import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddAuthor from './components/AddAuthor'
import EditAuthor from './components/EditAuthor'

function App() {
 
  return <div id="wrapper">
    
    <BrowserRouter>
    <Admin/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
        <Route path='/add-author' element={<AddAuthor/>}/>
        <Route path='/editbook/:id' element={<EditBook/>}/>
        <Route path='/editauthor/:id' element={<EditAuthor/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App