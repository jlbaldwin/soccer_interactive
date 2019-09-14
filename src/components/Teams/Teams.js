import React from 'react';
import Team from './Team/Team';

const teams = (props) => props.teams.map((team) => {
        return <Team
                key={team.id}
                teamImg={team.teamImg}
                name={team.name} 
                transform={team.transform}/>
    });
   
export default teams; 