import React, { Component } from 'react';
import './App.css';
import Teams from './components/Teams/Teams';
import Selection from './components/Selection/Selection';
import Pitch from './components/Pitch/Pitch';
import teamData from './data';

class App extends Component {
  /*setting default state.
    Ultimately the state will default to Premier League, 2019 but the state
    will come from a db. Standing won't apply to state once connected to 
    a db. I'm only including it here to play with the text.
  */
  constructor() {
    super()
    this.state = {
    teams: teamData,
    league: 'Premier League',
    year: '2019',
    teamCt: 20, //how to set this dynamically?
    iterator: 4, //how to set this dynamically?
    }
    this.handleAnimation = this.handleAnimation.bind(this)
  }

  //trigger initial animation 
  componentDidMount() {
    this.handleAnimation();
  }

  //animate team image tags to move across screen
  handleAnimation () {
    console.log("team count: ", this.state.teamCt)
    // for(var i = 0; i < this.state.teamCt; i++){
    //   console.log(this.state.teams[i].pointsByWeek)
      
    // }

    // let start = Date.now();
    // let timer = setInterval(function() {
    //   let timePassed = Date.now() - start;

    //   arsenal.style.left = timePassed / 4 + 'px';
    //   chelsea.style.left = timePassed / 5 + 'px';
      

    //   if (timePassed > 2000) clearInterval(timer);

    // }, 20);

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
                 clicked={this.handleAnimation} />
        </div>
      </div>
    );
  }
}

export default App;
