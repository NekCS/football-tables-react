import React from 'react';
import TeamRecord from './TeamRecord/TeamRecord';
import Styles from './TeamRecords.module.scss';

const teamRecords = (props) => {

	let standingsHtml = [];
	if (props.standings) {
		standingsHtml = props.standings.map((record, index) => {
			console.log(record);
			return (
				<TeamRecord key={record.team.id} record={record}></TeamRecord>
			)
		});
	}

	return (
		<div id={Styles.TeamRecords}>{standingsHtml}</div>
	);
}

export default teamRecords;