import React from 'react';
import Ship from './Ship.js';


const ShipList = (props) => {

	if(props.ships.length === 0){
		return (<p>Loading...</p>)
	}


	const ships = props.ships.map((ship) => {
			return (
					<li key={ship.id} className="component-item">
						<div className="component">
							<Ship ship={ship} />
						</div>
					</li>
		)
		})

	return (
		<div>
			<a href="/ships/new">Create Ship</a>
			<ul className="component-list">
				{ships}
			</ul>
		</div>
	)
}

export default ShipList;
