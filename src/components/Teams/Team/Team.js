import React from 'react';

const team = (props) => {
	//using inline style in an attempt to change it in animation
	// let imgStyles = {
	// 	height: 30,
	// 	width: 30,
	// 	position: "relative"
  	// }

	return (
		<div className="team-flex-container">
			<img 
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