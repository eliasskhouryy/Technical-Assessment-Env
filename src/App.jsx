import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Event from './Pages/Event';
export default function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/event/:eventName/:hostName/:location" element={<Event />} />
				</Routes>
			</Router>
		</div>
	);
}
