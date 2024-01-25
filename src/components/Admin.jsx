import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
function Admin() {
  return <>
<ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-text mx-3">Library Management System </div>
</a>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <Link to='/dashboard' className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
    </Link>
</li>
<li className="nav-item active">
    <Link to='/add-Book' className="nav-link" href="index.html">
    <i className="fas fa-fw fa-wrench"></i>
        <span>Add Book</span>
    </Link>
</li>
<li className="nav-item active">
    <Link to='/add-author' className="nav-link" href="index.html">
    <i className="fas fa-fw fa-wrench"></i>
        <span>Add Author</span>
    </Link>
</li>


<hr className="sidebar-divider"/>
</ul>
</>
}

export default Admin