import React, { Component } from 'react';
import './aboutme.css';

export default class AboutMe extends Component{

  render(){
    return(
       <div id="about-me">
         <h2 className="title about-me"> About me </h2>
         <div className="flex-container">

            <div className="text"> 
              <h3>OpenClassrooms</h3>
              <p>I am currently studying Front-End Development at OpenClassrooms which is online education platform that provides courses in IT and programming. The path is completed online with the help of a mentor who guides you through the projects. Each project consists of context details and customer requirements.
 In doing the projects I have improved my innovative ability as you have to come up with creative solutions to the requirement of the project.</p>
            </div>
            <div className="text"> 
              <h3>Codecademy</h3>
              <p> Before enrolling the course on OpenClassrooms I had completed  2 courses at Codecademy and 1 course at Udacity. Codecademy is also a platform that offers courses in programming. The first course was "Build Websites from Scracth" where I learned to design and build responsive websites using CSS and HTML. 
The second course was "Build Front-End Web Applications from Scracth" using ReactJS and JavaScript. </p>
            </div>
         </div>

      </div>
    );
  }
}


/*
I am currently studying Front-End Development at OpenClassrooms which is online education platform that provides courses in IT and programming. The path is completed online with the help of a mentor who guides you through the projects. Each project consists of context details and customer requirements.
 In doing the projects I have improved my innovative ability as you have to come up with creative solutions to the requirement of the project. 


Before enrolling the course on OpenClassrooms I had completed  2 courses at Codecademy and 1 course at Udacity. Codecademy is also a platform that offers courses in programming. The first course was "Build Websites from Scracth" where I learned to design and build websites using CSS and HTML. 
The second course was "Build Front-End Web Applications from Scracth" using ReactJS and JavaScript. 
*/