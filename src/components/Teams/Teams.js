//Displays all teams

import React from 'react';
import Team from './Team/Team';
import './Teams.css'

const teams = (props) => props.teams.map((team) => {
        return <Team
                key={team.id}
                teamImg={team.teamImg}
                name={team.name} 
                transform={team.transform}
                transition={team.transition}
                />
    });
   
export default teams; 