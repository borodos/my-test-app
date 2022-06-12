import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";

function App() {
	return (
		<div>
			{/* BrowserRouter - позволяет сделать роутинг в приложении */}
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/map" element={<MapPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
