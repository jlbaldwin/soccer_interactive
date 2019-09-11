import React, { Component } from 'react';
import './App.css';
import Teams from './components/Teams/Teams';
import Selection from './components/Selection/Selection';
import Pitch from './components/Pitch/Pitch';
import teamData from './data';


class App extends Component {
  /*setting default state.
    Ultimately the state will default to Premier League, 2019 but the state
    will come from a db.
  */
  constructor() {
    super()
    this.state = {
      teams: teamData,
      league: 'Premier League',
      year: '2019',
      teamCt: 20, //how to set this dynamically?
      iterator: 4, //how to set this dynamically?

      //using inline style in an attempt to change it in handleAnimation()
      imgStyles: {
        height: 30,
        width: 30,
        left: 0,
        position: "relative"
      } 
    }
    this.handleAnimation = this.handleAnimation.bind(this)
    this.runAnimation = this.runAnimation.bind(this)
    this.sleep = this.sleep.bind(this)
  }


  //trigger initial animation 
  componentDidMount() {
    //this.handleAnimation();
  }


  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


  runAnimation() {

    for(let i =0; i < 3; i++){
      this.handleAnimation()
      this.forceUpdate()
      this.sleep(200)
      console.log("runAnimation loop")
    }
}


  //animate team image tags to move across screen
  handleAnimation () {

    // for(let i =0; i < 5; i++){
      this.setState(prevState => {
          let imgStyles = Object.assign({}, prevState.imgStyles)
          imgStyles.left = prevState.imgStyles.left + 30
          return {
            imgStyles
          }
      })
      // this.sleep(200)
      // console.log("handleAnimation loop")
    // }
   }


  /*league and year handler will need to be updated
    Idea here is to have the state default to EPL current year, then user
    can update the league and year. May (or not) want to trigger state change
    when one item (league/year) is selected. May want to have an update
    button next to the selection options, to be clicked after selections.
  */
  leagueHandler = (event) => {
    console.log("leagueHandler changed");
  }

  yearHandler = (event) => {
    console.log("yearHandler changed");
  }


  render() {
    /*This is pulling in all the teams currently in state. Plan is to have
      state updated based on the league/year selection, which will feed 
      this display. 
    */
    let teams = null;
    teams = <Teams teams={this.state.teams} />

    return (
      
      <div className="App">
        
        <h1>Interactive Football Standings</h1>
        
        <Selection 
          leagueUpdate={this.leagueHandler}
          yearUpdate={this.yearHandler}>
        </Selection>
        <br/>
      
        {/* This is where the listing of teams is rendered */}
        <div>
          <Pitch teams={this.state.teams} 
                 imgStyles={this.state.imgStyles}
                 clicked={this.runAnimation} />
        </div>
      </div>
    );
  }
}

export default App;
