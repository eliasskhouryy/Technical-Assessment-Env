import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
export default function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
				</Routes>
			</Router>
		</div>
	);
}
