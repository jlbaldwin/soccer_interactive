import React from 'react';

//using es6 () => function syntax
const team = (props) => {
	return (
		<div>
			<p>{props.name} league position: {props.standing}</p>
			<p>{props.children}</p>
		</div>
		)	
}

export default team;