import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  let nav  = {
    padding:"10px",
    textAlign : 'center',
    fontSize:'25px',
    margin:'20px',

  }
  return (
    <div style={nav} >
    <Link style={{margin:"10px"}} to="/">Home</Link>
    <Link style={{margin:"10px"}} to="/about">About</Link>
    <Link style={{margin:"10px"}} to="/contact">Contact</Link>
    </div>
  )
}
