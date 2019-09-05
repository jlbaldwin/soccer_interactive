import React from 'react';

//using es6 () => function syntax
const team = (props) => {
	return (
		<div className="team-flex-container">
			<img 
				alt="" 
				id={props.name.toLowerCase().replace(/ /g, "")} 
				src={props.teamImg} 
			/>
			{props.name} 
		</div>
		)	
}

export default team;