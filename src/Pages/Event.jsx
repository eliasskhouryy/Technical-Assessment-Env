import React from 'react';
import { useParams } from 'react-router-dom';
import './event.scss';
export default function Event() {
	let { eventName, hostName, location } = useParams();

	return (
		<div className="eventContainer">
			<div className="information">
				<h1>{eventName}</h1>
				<p className="hosted">
					Hosted by <strong>{hostName}</strong>{' '}
				</p>
				<div>
					<div>
						<img src="/calander.png" alt="calander" className="icon" />
						<p>
							<strong>18 August 6:00PM</strong> <br /> to <strong>19 August 1:00OPM</strong> UTC +10
						</p>
					</div>
					<div>
						<img src="/location.png" alt="location" className="icon" />
						<p>
							<strong>{location}</strong> <br /> Suburb, State, Postcode
						</p>
					</div>
				</div>
			</div>
			<img src="/birthday-cake.png" alt="cake" />
		</div>
	);
}
