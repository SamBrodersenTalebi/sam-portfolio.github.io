import React, { Component } from 'react';
import  "./programmingskill.css"

export default class ProgrammingSkill extends Component{
  render(){

    let width = this.props.skills.level;
    let style = {
      width: width
    }

    return(
      <li className="list-skill">
        <h5>{this.props.skills.language} </h5>
        <span className="bar">
          <span style = {style}>
          </span>
        </span>
      </li>
    )
  }
}
