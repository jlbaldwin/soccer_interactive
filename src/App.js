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
  state = {
    teams: teamData,
    league: 'Premier League',
    year: '2019',

    //not needed but leaving for refernce. Refactor later.
    showTeams: true
  }

  //method to change state
  //testing only to see how onClick works
  runAnimationHandler = () => {
    console.log("run was clicked");
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
    if(this.state.showTeams){
      teams = <Teams teams={this.state.teams} />;    
    }

    return (
      //must use className because class is reserved in js
      <div className="App">
        
        <h1>Interactive Football Standings</h1>
        
        <Selection 
          leagueUpdate={this.leagueHandler}
          yearUpdate={this.yearHandler}>
        </Selection>
        <br></br>
      
        {/* This is where the listing of teams is rendered */}
        <div>
          <Pitch teams={this.state.teams} 
                 clicked={this.runAnimationHandler} />
        </div>
        <br></br>
        {/* <button onClick={this.runAnimationHandler}>Run</button> */}
      </div>
    );
  }
}

export default App;
