import React, { Component } from 'react';
import './App.css';
import Team from './Team/Team';
import Selection from './Selection/Selection';

class App extends Component {
  //setting default state
  //ultimately the state will default to Premier League, 2019 but I think
  //the array of teams should come from a db
  state = {
    teams: [
      {name: 'Aston Villa', standing:'2'},
      {name: 'Brighton', standing:'3'},
      {name: 'Chelsea', standing:'1'}
    ],

    league: 'Premier League',
    year: '2019',
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
      Seems like I should be able to iterate through the state array instead
      of listing 20 different Team tags.
    */
    let teams = null;
    if(this.state.showTeams){
      teams = (
        <div>
          <Team 
            name={this.state.teams[0].name} 
            standing={this.state.teams[0].standing} />
          <Team 
            name={this.state.teams[1].name} 
            standing={this.state.teams[1].standing} >Text for second team</Team>
          <Team 
            name={this.state.teams[2].name} 
            standing={this.state.teams[2].standing} />
        </div>
      )    
    }

    return (
      //must use className because class is reserved in js
      <div className="App">
        <h1>Interactive Soccer Standings</h1>
        <Selection 
          leagueUpdate={this.leagueHandler}
          yearUpdate={this.yearHandler}>
        </Selection>

        {/* This is where the listing of teams is rendered */}
        {teams}

        <button onClick={this.runAnimationHandler}>Run</button>
      </div>
    );
  }
}

export default App;
