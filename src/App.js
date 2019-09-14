import React, { Component } from 'react';
import './App.css';
import Teams from './components/Teams/Teams';
import Selection from './components/Selection/Selection';
import Pitch from './components/Pitch/Pitch';
import teamData from './data';
import team from './components/Teams/Team/Team';



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
        // height: 30,
        // width: 30,
        // position: "relative",
        // transition: "transform 2s",
        // transform: "translateX(0px)"
      } 
    }
    this.initialAnimation = this.handleAnimation.bind(this)
    this.handleAnimation = this.handleAnimation.bind(this)
    this.replayAnimation = this.replayAnimation.bind(this)
  }


  //trigger initial animation 
  componentDidMount() {
    // let pxVal = 0
    // this.handleAnimation(pxVal)
    this.initialAnimation()
  }

  initialAnimation(){
    teamData.forEach((element, index) => {
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transition = "transform " + 2 + "s"
        console.log(element.transition)
        element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[3] * 20) + 
                              "px)"
        console.log("run sucka " + this.state.teams[index].name +
                    " " + this.state.teams[index].pointsByWeek[3] * 20)
        return {
          teamData
        }
      })
    });
  }
  

  replayAnimation(){
    setTimeout(() => {
    let pxVal = 0
    teamData.forEach((element, index) => {
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transition = "transform " + 0 + "s"
        element.transform = "translateX(" + 
                              (pxVal) + 
                              "px)"
        console.log("run sucka " + this.state.teams[index].name +
                    " " + pxVal)
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
        element.transition = "transform " + 2 + "s"
        element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[3] * 20) + 
                              "px)"
        console.log("run sucka " + this.state.teams[index].name +
                    " " + this.state.teams[index].pointsByWeek[3] * 20)
        return {
          teamData
        }
      })
    });
  }, 200);
  }

  //animate team image tags to move across screen
  handleAnimation () {
  //   teamData.forEach((element, index) => {
  //     this.setState(prevState => {
  //       let imgStyles = Object.assign({}, prevState.imgStyles)
  //       imgStyles.transform = "translateX(" + 
  //                             (this.state.teams[index].pointsByWeek[3] * 20) + 
  //                             "px)"
  //       console.log("run sucka " + this.state.teams[index].name +
  //                   " " + this.state.teams[index].pointsByWeek[3] * 20)
  //       return {
  //         imgStyles
  //       }
  //     })
  //   });
  // }  
    

  //   teamData.forEach((element, index) => {
  //     this.setState(prevState => {
  //       let teamData = Object.assign({}, prevState.teamData)
  //       element.transform = "translateX(" + 
  //                             (pxVal) + 
  //                             "px)"
  //       console.log("run sucka " + this.state.teams[index].name +
  //                   " " + pxVal)
  //       return {
  //         teamData
  //       }
  //     })
  //   });
  // }   
      
    teamData.forEach((element, index) => {
      this.setState(prevState => {
        let teamData = Object.assign({}, prevState.teamData)
        element.transform = "translateX(" + 
                              (this.state.teams[index].pointsByWeek[3] * 20) + 
                              "px)"
        console.log("run sucka " + this.state.teams[index].name +
                    " " + this.state.teams[index].pointsByWeek[3] * 20)
        return {
          teamData
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
                 clicked={this.handleAnimation} 
                 replay={this.replayAnimation}/>
        </div>
      </div>
    );
  }
}

export default App;
