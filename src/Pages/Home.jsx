import React from 'react';
import './home.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="homeContainer">
			<div className="leftSide">
				<img src="/landing-page.svg" alt="" />
			</div>
			<div className="rightSide">
				<h1>
					Imagine if <br /> <span className="snapchat">Snapchat</span> <br /> had events.
				</h1>
				<p>Easily host and share events with your friends across any social media</p>
				<div className="button">
					<button onClick={() => navigate('/create')} className="displayNone">
						&#127881; Create my event
					</button>
				</div>
			</div>
			<div className="leftSide2">
				<img src="/landing-page.svg" alt="" />
				<div className="button">
					<button onClick={() => navigate('/create')}>&#127881; Create my event</button>
				</div>
			</div>
		</div>
	);
}
