'use client'

import React, {Fragment} from 'react'

import classes from './Header.module.css'

const Header = () => {
  return (
    <Fragment>
        <nav className={classes.navbar}>
            <ul className={classes.menubar}>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact Us</li>
                <li style={{float: 'right', padding: '0 .5rem'}}>Let's Build It By JP LLC</li>
            </ul>
            {/* <p style={{textAlign: 'right', padding: '0 0.7rem'}}>Let's Build It By JP LLC</p> */}
        </nav>
    </Fragment>
  )
}

export default Header;