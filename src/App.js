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
      orgIterator: 5,
      iterator: 5, //how to set this dynamically?
    }

    this.initialAnimation = this.initialAnimation.bind(this)
    this.backOneAnimation = this.backOneAnimation.bind(this)
    this.backStartAnimation = this.backStartAnimation.bind(this)
    this.replayAnimation = this.replayAnimation.bind(this)
    this.forwardOneAnimation = this.forwardOneAnimation.bind(this)
    this.forwardEndAnimation = this.forwardEndAnimation.bind(this)
  }


  //trigger initial animation 
  componentDidMount() {
    this.initialAnimation()
  }

/************************************************************************/
/************************************************************************/   
  initialAnimation(){
    setTimeout(() => {
      // let pxVal = 0
      teamData.forEach((element, index) => {
        this.setState(prevState => {
          let teamData = Object.assign({}, prevState.teamData)
          element.transition = "transform 0s"
          element.transform = "translateX(0px)"
          return {
            teamData
          }
        })
      });
    }, 0);

    setTimeout(() => {
      teamData.forEach((element, index) => {
        this.setState(prevState => {
          let teamData = Object.assign({}, prevState.teamData)
          element.transition = "transform 1s"
          element.transform = "translateX(" + 
                                (this.state.teams[index].pointsByWeek[this.state.iterator] * 20) + 
                                "px)"
          return {
            teamData
          }
        })
      });
    }, 200);
  }
  
/************************************************************************/
/************************************************************************/   
  replayAnimation(){
    setTimeout(() => {
      // let pxVal = 0
      teamData.forEach((element, index) => {
        this.setState(prevState => {
          let teamData = Object.assign({}, prevState.teamData)
          element.transition = "transform 0s"
          element.transform = "translateX(0px)"
          return {
            teamData
          }
        })
      });
    }, 0);

    setTimeout(() => {
      teamData.forEach((element, index) => {
        this.setState(prevState => {
          let teamData = Object.assign({}, prevState.teamData)
          element.transition = "transform " + 1 + "s"
          element.transform = "translateX(" + 
                                (this.state.teams[index].pointsByWeek[this.state.orgIterator] * 20) + 
                                "px)"
          let iterator = this.state.orgIterator
          return {
            teamData, iterator
          }
        })
      });
    }, 200);
  }

/************************************************************************/
/************************************************************************/   
backOneAnimation(){
  
  if(this.state.iterator > 0){
    teamData.forEach((element, index) => {
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transition = "transform " + 1 + "s"
        element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[this.state.iterator - 1] * 20) + 
                              "px)"
        let iterator = this.state.iterator 
        iterator = this.state.iterator - 1
        return {
          teamData, iterator
        }
      })
    });
  }
}

/************************************************************************/
/************************************************************************/   
backStartAnimation(){
  teamData.forEach((element, index) => {
    this.setState(prevState => {
      let teamData = Object.assign({}, prevState.teamData)
      element.transition = "transform " + 1 + "s"
      element.transform = "translateX(" + 
                            (this.state.teams[index].pointsByWeek[0] * 20) + 
                            "px)"
      let iterator = 0
      return {
        teamData, iterator
      }
    })
  });
}

/************************************************************************/
// SET ERROR CHECKING
/************************************************************************/   
forwardOneAnimation(){
  if(this.state.iterator < this.state.orgIterator){
    teamData.forEach((element, index) => {
      let iterator = this.state.iterator 
      iterator = this.state.iterator + 1
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transition = "transform " + 1 + "s"
        element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[iterator] * 20) + 
                              "px)"
        return {
          teamData, iterator
        }
      })
    });
  }
}  

/************************************************************************/
/************************************************************************/   
forwardEndAnimation(){
  teamData.forEach((element, index) => {
    let iterator = this.state.orgIterator 
    this.setState(prevState => {
      let teamData = Object.assign({}, prevState.teamData)
      element.transition = "transform " + 1 + "s"
      element.transform = "translateX(" + 
                            (this.state.teams[index].pointsByWeek[iterator] * 20) + 
                            "px)"
      return {
        teamData, iterator
      }
    })
  });
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
                 backOne={this.backOneAnimation}
                 backStart={this.backStartAnimation}
                 replay={this.replayAnimation}
                 forwardOne={this.forwardOneAnimation}
                 forwardEnd={this.forwardEndAnimation} 
                />
        </div>
      </div>
    );
  }
}

export default App;
