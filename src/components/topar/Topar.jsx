import React from 'react';
import "./Topar.scss";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Ankur.s</a>
          <div className="itemContainer">
            <PersonIcon className='icons'/>
            <span>+91 7348370367</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className='icons'/>
            <span>ankurphysics1234@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
