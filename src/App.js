import React, { Component } from 'react';
import './App.css';
import Teams from './components/Teams/Teams';
import Selection from './components/Selection/Selection';
import Pitch from './components/Pitch/Pitch';
import teamData from './data';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

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

    //using inline style in an attempt to change it in animation
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

    //this only triggers once per click
    // let start = Date.now();
    // let timer = setInterval(function() {
    //   let timePassed = Date.now() - start

    //   this.handleAnimation()
  
    //   if (timePassed > 2000) clearInterval(timer)

    // })

    for(let i = 0; i < 3; i++){
      console.log("run animation fired")
      this.handleAnimation()
      this.sleep(1000)
    }

  }


  //animate team image tags to move across screen
  handleAnimation () {
    this.setState(prevState => {

    
        let imgStyles = Object.assign({}, prevState.imgStyles)
        imgStyles.left = prevState.imgStyles.left + 50
        return {
          imgStyles
        }

    })

    // for(var i = 0; i < this.state.teamCt; i++){
    //   console.log(this.state.teams[i].pointsByWeek)
      
    // }

    // let start = Date.now();
    // let timer = setInterval(function() {
    //   let timePassed = Date.now() - start;

    //   this.state.teams.teamData.idName.style.left = 4 + 'px';
      

    //   if (timePassed > 2000) clearInterval(timer);

    // });

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
