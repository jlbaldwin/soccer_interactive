import React from 'react';

const team = (props) => {
	
	return (
		<div className="team-flex-container">
			<img className="team-img"
				style={props.imgStyles}
				alt="" 
				id={props.name.toLowerCase().replace(/ /g, "")} 
				src={props.teamImg} 
			/>
			{props.name} 
		</div>
		)	
}

export default team;