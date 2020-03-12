import React from 'react';

const teamRecord = (props) => {

  return (
    <React.Fragment>
      <h3>{props.record.team.name}</h3>
      <ul>
        <li>Position: {props.record.position}</li>
        <li>Games played: {props.record.playedGames}</li>
        <li>Won: {props.record.won}</li>
        <li>Draw: {props.record.draw}</li>
        <li>Lost: {props.record.lost}</li>
        <li>Points: {props.record.points}</li>
        <li>Goals for: {props.record.goalsFor}</li>
        <li>Goals against: {props.record.goalsAgainst}</li>
        <li>Goal Difference: {props.record.goalDifference}</li>
      </ul>
    </React.Fragment>
  );
};

export default teamRecord;
