import React from 'react';
import Styles from './TeamRecord.module.scss';

const teamRecord = (props) => {

  return (

    <div className={Styles.TeamRecord}>
      <div>Position: {props.record.position}</div>
      <div>{props.record.team.name}</div>
      <div>Games played: {props.record.playedGames}</div>
      <div>Won: {props.record.won}</div>
      <div>Draw: {props.record.draw}</div>
      <div>Lost: {props.record.lost}</div>
      <div>Points: {props.record.points}</div>
      <div>Goals for: {props.record.goalsFor}</div>
      <div>Goals against: {props.record.goalsAgainst}</div>
      <div>Goal Difference: {props.record.goalDifference}</div>
    </div>

  );
};

export default teamRecord;
