import React from 'react';
import Raid from './Raid.js';

const RaidList = (props) => {

	if(props.raids.length === 0){
		return (<p>Loading...</p>)
	}


	const raids = props.raids.map((raid) => {
			return (
			<li key={raid.id} className="component-item">
				<div className="component">
					<Raid raid={raid} />
				</div>
			</li>
		)
		})

	return (
		<div>
			<a href="/raids/new">Create Raid</a>
			<ul className="component-list">
				{raids}
			</ul>
		</div>

	)
}
 export default RaidList;
