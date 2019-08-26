import React from 'react';

const selection = (props) => {
    return (
        <div>
            <select onChange={props.leagueUpdate}>
                <option value="Premier League">Premier League</option>
                <option value="Bundesliga">Bundesliga</option>
            </select>

            <select onChange={props.yearUpdate}>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </div>
    )
}

export default selection;