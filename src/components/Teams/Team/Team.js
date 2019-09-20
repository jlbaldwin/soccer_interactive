//Displays team image to be animated, and team name

import React from 'react';

const team = (props) => {
	return (
		<div className="team-flex-container">
			<img className="team-img"
				style={{transition: props.transition, transform: props.transform}}
				alt="" 
				id={props.name.toLowerCase().replace(/ /g, "")} 
				src={props.teamImg} />
				
			<span className="team-text">
				{props.name} 
			</span>
		</div>
		)	
}

export default team;