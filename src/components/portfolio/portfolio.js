import React from 'react';
import './portfolio.css';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import CardBox from '../card/card';


export default class Portfolio extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          activeTab: 0,
          openClassroom:[
              {
                  "projectname":"Board Game",
                  "id": "O1",
                  "description": "This project was created using JavaScript classes. I implemented the jQuery library as well.",
                  "image": "../portfolio/images/BoardGame.PNG",
                  "link": "https://github.com/SamBrodersenTalebi/Ravenous"
              },
              {
                "projectname":"Film Festival",
                "id":"O2",
                "description": "Created a static website based on requirements specified in the project. I used Bootstrap to build responsive  website that contained pre-registration page. Created a project brief that outlined a summary of what work needed to be done.",
                "image": "../portfolio/images/Brooklyn.PNG",
                "link": "https://github.com/SamBrodersenTalebi/filmfestival"
              },
              {
                "projectname":"Restaurant Review Site",
                "id":"O3",
                "description": "Currently working on the project. I need to launch a review site using Reactjs and use an external API to fecth restaurant and reviews",
                "image": "",
                "link": "https://github.com/SamBrodersenTalebi/p7"
              }
          ],
          codeCademy: [
              {
                  "projectname": "Jammming",
                  "id":"C1",
                  "description": "Built a React application using the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.",
                  "image":"../portfolio/Jammming.PNG",
                  "link": "https://github.com/SamBrodersenTalebi/JammmingCodecademy"
              },
              {
                "projectname": "Ravenous",
                "id":"C2",
                "description": "Built another React application using the Yelp API to build a website that showed restaurants returned by the API.",
                "image":"../portfolio/Ravenous.PNG",
                "link":"https://github.com/SamBrodersenTalebi/Ravenous"
              }
          ],
          udacity: [
              {
                "projectname": "Pixel Art Marker",
                "id":"U1",
                "description": "Built a single-page web application that allowed users to draw pixel art on a customizable canvas.",
                "image":"../portfolio/images/PixelArt.PNG",
                "link": "https://github.com/SamBrodersenTalebi/PixelArt"
              },
              {
                "projectname": "Rock Paper Scissors",
                "id":"U2",
                "description": "Created a Rock, Paper and Scissors game that allowed users to play against a computer player.",
                "image":"../portfolio/images/Rock.PNG",
                "link": "https://github.com/SamBrodersenTalebi/RockPaperScissors"
              }
          ]
      };
  }

  toggleCategories(){
      //Map over state
      let openClassroom = this.state.openClassroom.map((object)=>{
        let i = 0;
          return(
              < CardBox object = {object} key={i++}/>
          );
      });

      let codeCademy = this.state.codeCademy.map((object)=>{
        let i = 0;
        return(
            < CardBox object = {object} key={i++}/>
        );
    });

    let udacity = this.state.udacity.map((object)=>{
        let i = 0;
        return(
            < CardBox object = {object} key={i++}/>
        );
    });

      if(this.state.activeTab === 0){
          return(
        <div className="projects-grid"> 
            {openClassroom}
        </div>
          )
      } else if(this.state.activeTab === 1){
        return(
            <div className="projects-grid"> 
                {codeCademy}
            </div>
          );
      }else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid"> 
                 {udacity}
            </div>
          );
      }
  }

  render(){
      return(
        <div className="tab">
            <div>
            <h2 className="title">Portfolio</h2>
            </div>
            <div className="category-tabs"> 
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab> OpenClassrooms </Tab>
                    <Tab> Codecademy </Tab>
                    <Tab> Udacity </Tab>
                </Tabs>

                
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div> 
                    </Cell>
                </Grid>
            </div>
        </div>
      );
  }
}
