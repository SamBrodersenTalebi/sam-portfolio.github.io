import React, { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component{
  render(){
    let i =0;
    //map over each section
    const sections = ["Home", "About me", "Projects", "Contact"];
    const navLinks = sections.map((section) =>{
      return(
        <a href={"#" + section} key={i++}>{section}</a>
      )
    })
    return(
      <div className="bg-color">
        <div className="container">
          <div className="topnav">
              {navLinks}
          </div>
        </div>
      </div>
    );
  }
}
