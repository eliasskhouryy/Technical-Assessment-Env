import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import './create.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Create() {
	const [eventName, setEventName] = useState('');
	const [hostName, setHostName] = useState();
	const [dateFrom, setDateFrom] = useState();
	const [dateTo, setDateTo] = useState('');
	const [location, setLocation] = useState('');
	console.log(location);
	const navigate = useNavigate();

	let today = new Date();
	const minDate = new Date(today.getTime() + 12 * 60 * 60 * 1000).toISOString().slice(0, new Date().toISOString().lastIndexOf(':'));
	const minDate2 = new Date(today.getTime() + 13 * 60 * 60 * 1000).toISOString().slice(0, new Date().toISOString().lastIndexOf(':'));
	const { ref, autocompleteRef } = usePlacesWidget({
		apiKey: process.env.REACT_APP_API_KEY,
		onPlaceSelected: (place) => {
			console.log(place);
		},
	});

	const createEvent = (e) => {
		e.preventDefault();
		navigate(`/event/${eventName}/${hostName}/${location}`);
	};

	return (
		<div className="createContainer">
			<h1>Create a new event</h1>

			<form action="" onSubmit={createEvent}>
				<input type="text" placeholder="Event name" requied onChange={(e) => setEventName(e.target.value)} />
				<input type="text" placeholder="Host name" required onChange={(e) => setHostName(e.target.value)} />
				<h3>Start date & time</h3>
				<input type="datetime-local" id="datePickerId" name="meeting-time" value={minDate} min={minDate} onChange={(e) => setDateFrom(e.target.value)} />
				<h3>End date & time</h3>
				<input type="datetime-local" id="datePickerId" name="meeting-time" value={minDate2} min={minDate2} onChange={(e) => setDateTo(e.target.value)} />
				<input ref={ref} placeholder="Enter your location" onChange={(e) => setLocation(e.target.value)} />
				<input className="customFile" type="file" accept="image/png, image/jpeg" />
				<button>Submit</button>
			</form>
		</div>
	);
}
