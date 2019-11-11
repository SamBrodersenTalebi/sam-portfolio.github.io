import React, { Component } from 'react';
import  "./header.css"

export default class Header extends Component{

  render(){

    return(
      <header className="header">
        <h1>Hi, I'm <span className="name"> Sam Brodersen</span>.</h1>
        <p> I'm a front-end developer currently studying at OpenClassroooms </p>
        <a href="#about-me">About Me</a>
      </header>
    );
  }
}
