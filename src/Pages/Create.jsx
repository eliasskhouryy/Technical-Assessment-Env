import React from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';

export default function Create() {
	let today = new Date();
	const minDate = new Date(today.getTime() + 12 * 60 * 60 * 1000).toISOString().slice(0, new Date().toISOString().lastIndexOf(':'));
	const minDate2 = new Date(today.getTime() + 13 * 60 * 60 * 1000).toISOString().slice(0, new Date().toISOString().lastIndexOf(':'));
	const { ref, autocompleteRef } = usePlacesWidget({
		apiKey: process.env.GOOGLE_API_KEY,
		onPlaceSelected: (place) => {
			console.log(place);
		},
	});

	return (
		<div className="createContainer">
			<h1>hello</h1>
			<form action="">
				<input type="text" placeholder="Event name" requied />
				<input type="text" placeholder="Host name" required />
				<input type="datetime-local" id="datePickerId" name="meeting-time" value={minDate} min={minDate} />

				<input type="datetime-local" id="datePickerId" name="meeting-time" value={minDate2} min={minDate2} />

				<input ref={ref} required />
				<input type="file" accept="image/png, image/jpeg" />
			</form>
		</div>
	);
}
