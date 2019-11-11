import React, { Component } from 'react';
import './App.css';
import Teams from './components/Teams/Teams';
// import Selection from './components/Selection/Selection';
import Pitch from './components/Pitch/Pitch';
import Controls from './components/Controls/Controls';
import teamData from './data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";


//css transition property passed to team-img in Team.js for animation
var transitionSetting = "transform 1s"

//scale is used to animate team-img horizontally based on points earned
var scale = 15

class App extends Component {
  /*
    Ultimately the state will default to Premier League, 2019 but the state
    will come from a db.
    iterator is used to move through the pointsByWeek[] values for each team.
  */
  constructor() {
    super()
    this.state = {
      teams: teamData,
      league: 'Premier League',
      year: '2019',
      teamCt: 20, 
      orgIterator: 12,
      iterator: 12, 
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
//working with this related to scale
// _scale = () => {
//   let queryArea = document.querySelector(".team-flex-container")
//   if (queryArea) {
//     return queryArea.clientWidth
//   }
// }

/*********************************************************************************
* On page load, setState is called twice, once to set state for images to be left
* aligned, then the images are animated and move right according to the team's
* current point standing in pointsByWeek[]
*********************************************************************************/   
  initialAnimation(){
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

    setTimeout(() => {
      teamData.forEach((element, index) => {
        this.setState(prevState => {
          let teamData = Object.assign({}, prevState.teamData)
          element.transition = transitionSetting
          element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[this.state.iterator] * scale) + "px)"
          return {
            teamData
          }
        })
      });
    }, 100);
  }
  
/*********************************************************************************
* setState is called twice, once to set state for images to be left
* aligned, then the images are animated and move right according to the team's
* current point standing in pointsByWeek[]. The iterator is also reset to the 
* original iterator value.
*********************************************************************************/    
  replayAnimation(){
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

    setTimeout(() => {
      teamData.forEach((element, index) => {
        this.setState(prevState => {
          let teamData = Object.assign({}, prevState.teamData)
          element.transition = transitionSetting
          element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[this.state.orgIterator] * scale) + "px)"
          let iterator = this.state.orgIterator
          return {
            teamData, iterator
          }
        })
      });
    }, 100);
  }

/*********************************************************************************
* Animate images to the prior week standing. Error checking occurs to ensure the 
* iterator cannot be less than zero. If iterator is 0, no animation occurs.  
*********************************************************************************/     
backOneAnimation(){
  if(this.state.iterator > 0){
    teamData.forEach((element, index) => {
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transition = transitionSetting
        element.transform = "translateX(" + 
                            (this.state.teams[index].pointsByWeek[this.state.iterator - 1] * scale) + "px)"
        let iterator = this.state.iterator 
        iterator = this.state.iterator - 1
        return {
          teamData, iterator
        }
      })
    });
  }
}

/*********************************************************************************
* Animate images to the beginning of the season, when all teams have 0 points.  
*********************************************************************************/   
backStartAnimation(){
  teamData.forEach((element, index) => {
    this.setState(prevState => {
      let teamData = Object.assign({}, prevState.teamData)
      element.transition = transitionSetting
      element.transform = "translateX(" + 
                          (this.state.teams[index].pointsByWeek[0] * scale) + "px)"
      let iterator = 0
      return {
        teamData, iterator
      }
    })
  });
}

/*********************************************************************************
* Animate images to the next week standing. Error checking occurs to ensure the 
* iterator cannot be greater than the current number of weeks in the season. 
* If iterator would exceed current number of weeks, no animation occurs.  
*********************************************************************************/   
forwardOneAnimation(){
  if(this.state.iterator < this.state.orgIterator){
    teamData.forEach((element, index) => {
      let iterator = this.state.iterator 
      iterator = this.state.iterator + 1
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transition = transitionSetting
        element.transform = "translateX(" + 
                            (this.state.teams[index].pointsByWeek[iterator] * scale) + "px)"
        return {
          teamData, iterator
        }
      })
    });
  }
}  

/*********************************************************************************
* Animate images to the current week of the season. 
*********************************************************************************/   
forwardEndAnimation(){
  teamData.forEach((element, index) => {
    let iterator = this.state.orgIterator 
    this.setState(prevState => {
      let teamData = Object.assign({}, prevState.teamData)
      element.transition = transitionSetting
      element.transform = "translateX(" + 
                          (this.state.teams[index].pointsByWeek[iterator] * scale) + "px)"
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
        <header>
          <h2>
            <span >
              <FontAwesomeIcon id="soccer-img" icon={faFutbol}/>
              {this.state.league} Standings 
            </span>
            <span id="week-number">
              {this.state.year} - Week {this.state.iterator}
            </span>
          </h2>
          
          {/* <Selection 
            leagueUpdate={this.leagueHandler}
            yearUpdate={this.yearHandler}>
          </Selection> */}
        
          <Controls teams={this.state.teams} 
                  backOne={this.backOneAnimation}
                  backStart={this.backStartAnimation}
                  replay={this.replayAnimation}
                  forwardOne={this.forwardOneAnimation}
                  forwardEnd={this.forwardEndAnimation} />
        </header>
        
        <Pitch teams={this.state.teams} />
      
      </div>
    );
  }
}

export default App;
