

import React,{ Fragment } from 'react'
import classes from './Header.module.css'

const Footer = () => {
  return (
    <div className={classes.footerDiv}>
        <footer>
            <p>Contact Us!</p>
            <div>Phone: (623)313-5230</div>
            <div>Email: jpowder@letsbuilditbyjp.com</div>
            
            <div style={{textAlign:'center'}}>&copy; 2025 Let's Build It By JP LLC</div>
        </footer>
    </div>
  )
}

export default Footer